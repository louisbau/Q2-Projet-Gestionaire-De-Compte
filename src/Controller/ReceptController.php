<?php

namespace App\Controller;

use App\Entity\AccountClient;
use App\Repository\AccountClientRepository;
use App\Repository\ClientRepository;
use App\Repository\GameRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/api/recept', name: 'recept')]
class ReceptController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;
    /**
     * @var AccountClientRepository
     */
    private AccountClientRepository $accountClientRepository;
    /**
     * @var ClientRepository
     */
    private ClientRepository $clientRepository;
    /**
     * @var GameRepository
     */
    private GameRepository $gameRepository;

    public function __construct(EntityManagerInterface $entityManager, AccountClientRepository $accountClientRepository, ClientRepository $clientRepository, GameRepository $gameRepository)
    {

        $this->entityManager = $entityManager;
        $this->accountClientRepository = $accountClientRepository;
        $this->clientRepository = $clientRepository;
        $this->gameRepository = $gameRepository;
    }
    #[Route('/comptejeux')]
    public function receiveAccountGame()
    {
        $comptes = $this->accountClientRepository->findALl();
        $arrayCompte = [];
        foreach ($comptes as $compte){
            $arrayCompte[] = $compte->toArray();
        }
        return $this->json($arrayCompte);
    }

    #[Route('/game')]
    public function receiveGame()
    {
        $games = $this->gameRepository->findALl();
        $arrayGame = [];
        foreach ($games as $game){
            $arrayGame[] = $game->toArray();
        }
        return $this->json($arrayGame);
    }

    #[Route('/login')]
    public function receiveLogin()
    {
        $logins = $this->clientRepository->findAll();
        $arrayLogin = [];

        foreach ($logins as $login){
            $arrayLogin[] = $login->toArray();
        }
        return $this->json($arrayLogin);
    }

    #[Route('/liste/{client}')]
    public function receiveListe(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findJeux($client);
        return $this->json($accountClient);
    }

    #[Route('/test/{client}')]
    public function receivetest(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findtest($client);
        return $this->json($accountClient);
    }

    #[Route('/liste/{client}/{jeux}')]
    public function receiveCompte(int $client, int $jeux)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findCompte($client, $jeux);
        return $this->json($accountClient);
    }
}
