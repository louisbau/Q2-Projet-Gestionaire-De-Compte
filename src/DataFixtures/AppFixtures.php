<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\AccountClient;
use App\Entity\Game;
use App\Entity\Client;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

        //creer trois compte
        for($i = 1; $i <=3; $i++) {
            $client = new Client();
            $client->setUsername($faker ->userName)
                  ->setPassword($faker ->password)
                  ->setEmail($faker ->freeEmail);
            $manager->persist($client);

        }
        for($i = 1; $i <=5; $i++) {

            $game = new Game();
            $game->setNameGame($faker->word )
                 ->setPicture($faker ->imageUrl());
            $manager->persist($game);

        }


        $manager->flush();
    }
}
