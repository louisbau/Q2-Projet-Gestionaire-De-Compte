<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\CompteJeux;
use App\Entity\Jeux;
use App\Entity\Login;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

        //creer trois compte
        for($i = 1; $i <=3; $i++) {
            $login = new Login();
            $login->setUsername($faker ->userName)
                  ->setPassword($faker ->password)
                  ->setEmail($faker ->freeEmail);
            $manager->persist($login);

        }
        for($i = 1; $i <=5; $i++) {

            $jeux = new Jeux();
            $jeux->setNameJeux($faker->word )
                 ->setPicture($faker ->imageUrl());
            $manager->persist($jeux);

        }
        for($b = 1; $b <=5; $b++) {
            $compteJeux=new CompteJeux();
            $compteJeux
                    -> setPlayerID($login)
                    -> setJeuxID($jeux)
                    ->setUsernameCompte($faker ->userName)
                    ->setPasswordCompte($faker ->password)
                    ->setDescription($faker -> sentence($nbWords = 6, $variableNbWords = true));
            $manager->persist($compteJeux);
        }

        $manager->flush();



    }
}
