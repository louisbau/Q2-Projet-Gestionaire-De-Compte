<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Game;
use App\Entity\Client;
use App\Entity\AccountClient;
use Faker\Factory;

class FakerController extends AbstractController
{
    #[Route('/ajoutjeux', name: 'ajout_jeux')]
    public function ajoutJeux(): Response
    {
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to the action: createProduct(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();
        $faker = \Faker\Factory::create('fr_FR');
        $game = new Game();
        $game->setNameGame($faker->word);
        $game->setPicture($faker ->imageUrl());


        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($game);


        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new product with id '.$game->getId());
    }
    #[Route('/ajoutclient', name: 'ajout_client')]
    public function ajoutClient() : Response
    {
        $faker = \Faker\Factory::create('fr_FR');
        $client = new Client();
        $client->setUsername($faker ->userName);
        $client->setPassword($faker ->password);
        $client->setEmail($faker ->freeEmail);
        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($client);
        $entityManager->flush();

        return new Response(
            ' and new client with id: '.$client->getId()
        );
    }
    #[Route('/comptejeux/{idgame}/{idclient}', name: 'compte_jeux')]
    public function ajoutCompteJeux(int $idgame, int $idclient) : Response
    {
        $game = $this->getDoctrine()
            ->getRepository(Game::class)
            ->find($idgame);
        $client = $this->getDoctrine()
            ->getRepository(Client::class)
            ->find($idclient);

        if (!$game) {
            throw $this->createNotFoundException(
                'No product found for id '.$idgame
            );
        }
        if (!$client) {
            throw $this->createNotFoundException(
                'No product found for id '.$idclient
            );
        }
        $faker = \Faker\Factory::create('fr_FR');
        $accountclient = new AccountClient();
        $accountclient->setUsernameAccount($faker->userName);
        $accountclient->setPasswordAccount($faker->password);
        $accountclient->setDescription("zoicjzijcizjicjzc");
        $accountclient->setGameId($game);
        $accountclient->setAccountId($client);
        $entityManager=$this->getDoctrine()->getManager();

        $entityManager->persist($accountclient);
        $entityManager->flush();
        return new Response(
            'username: '.$accountclient->getUsernameAccount()
            .' password : '.$accountclient->getPasswordAccount()
            .' description : '.$accountclient->getDescription()
        );
    }
}
