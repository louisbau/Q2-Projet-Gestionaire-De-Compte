<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\AccountClient;
use App\Entity\Game;
use App\Entity\Client;

use Doctrine\ORM\EntityManagerInterface;


class CompteJeuxController extends AbstractController
{
    #[Route('/comptejeux', name: 'compte_jeux')]
    public function index() : Response
    {
        $faker = \Faker\Factory::create('fr_FR');
        $game = new Game();
        $game->setNameGame($faker->word);
        $game->setPicture($faker ->imageUrl());

        $client = new Client();
        $client->setUsername($faker ->userName);
        $client->setPassword($faker ->password);
        $client->setEmail($faker ->freeEmail);

        $accountclient = new AccountClient();
        $accountclient->setUsernameAccount($faker ->userName);
        $accountclient->setPasswordAccount($faker ->password);
        $accountclient->setDescription("zoicjzijcizjicjzc");

        $accountclient->setGameId($game);
        $accountclient->setAccountId($client);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($game);
        $entityManager->persist($client);
        $entityManager->persist($accountclient);
        $entityManager->flush();

        return new Response(
            'Saved new compte with id: '.$accountclient->getId()
            .' and new client with id: '.$client->getId()
            .' and new game with id: '.$game->getId()
        );
    }
}
