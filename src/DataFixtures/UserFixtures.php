<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;


class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $listID = [];
        $faker = \Faker\Factory::create('fr_FR');
        $user = new User();
        for ($i = 0; $i < 10; $i++) {
            $user->setPassword($this->passwordEncoder->encodePassword($user,$faker->password()));
            $user->setEmail($faker->email);
            $user->setRoles(['ROLE_USER']);
            array_push($listID, $user);
            if($i === 9) {
                $user->setPassword($this->passwordEncoder->encodePassword($user,'Admin'));
                $user->setEmail('bauchau@gmail.com');
                $user->setRoles(['ROLE_ADMIN']);
                array_push($listID, $user);
            }
            $manager->persist($user);
            $manager->flush();
            $this->addReference('user', (object)$listID);


        }

        $manager->persist($user);
        $manager->flush();
        $this->addReference('user', (object)$listID);
    }
}
