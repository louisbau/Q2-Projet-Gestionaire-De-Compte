<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Factory\ApplicationFactory;
use App\Factory\UserFactory;
use App\Factory\AccountAppFactory;
use App\Entity\AccountApp;
use App\Entity\User;
use App\Entity\Application;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class AppFixtures extends Fixture
{

    private UserPasswordEncoderInterface $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public function load(ObjectManager $manager)
    {

        $faker = \Faker\Factory::create('fr_FR');
        $list = ["Fortnite", "Rocket League", "League Of Legend", "MW2", "Minecraft", "Discord", "Facebook", "FIFA 2021", "Mario Kart", "Instagram"];
        $listApp = [];
        for ($i = 0; $i < 10; $i++) {
            $Nvgame = new Application();
            $Nvgame->setNameApp($list[$i]);
            $Nvgame->setPicture($faker->imageUrl());
            array_push($listApp, $Nvgame);
            $manager->persist($Nvgame);
            $manager->flush();
            $ref = 'application'.$i;
            $this->addReference($ref, $Nvgame);
        }
        /*
        ApplicationFactory::new()->createMany(10);;
        $manager->flush();
        UserFactory::new()->createMany(10);;
        $manager->flush();
        */

    }
}
