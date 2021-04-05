<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\AccountClient;
use App\Entity\Game;
use App\Entity\Client;
use Faker\Factory;
use Doctrine\ORM\EntityManagerInterface;

class AjoutClientController extends AbstractController
{
    #[Route('/ajoutclient', name: 'ajout_client')]
    public function index() : Response
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
}