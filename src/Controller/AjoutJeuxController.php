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

class AjoutJeuxController extends AbstractController
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
}
