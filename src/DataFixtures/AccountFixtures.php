<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\AccountApp;
use App\Entity\User;
use App\Entity\Application;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class AccountFixtures extends Fixture implements DependentFixtureInterface
{

    public function getDependencies(): array
    {
        return [UserFixtures::class, AppFixtures::class];
    }
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++) {
            for ($b = 0; $b < 5; $b++) {
                for ($j = 0; $j < 4; $j++) {
                    $CompteInitialisation = new AccountApp();
                    $CompteInitialisation->setUsernameAccount($faker->userName);
                    $CompteInitialisation->setPasswordAccount($faker->password());
                    $CompteInitialisation->setDescription($faker->sentence($nbWords = 6, $variableNbWords = true));
                    $ref = 'application'.$b;
                    $refe = 'user'.$i;
                    $CompteInitialisation->setAppId($this->getReference($ref));
                    $CompteInitialisation->setAccountId($this->getReference($refe));
                    $manager->persist($CompteInitialisation);
                    $manager->flush();
                }
            }
        }


    }

}
