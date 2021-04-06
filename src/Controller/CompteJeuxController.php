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


class CompteJeuxController extends AbstractController
{
    #[Route('/comptejeux/{idgame}/{idclient}', name: 'compte_jeux')]
    public function index(int $idgame, int $idclient) : Response
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
