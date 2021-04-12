<?php

namespace App\Controller;

use App\Entity\AccountClient;
use App\Entity\Client;
use App\Entity\Game;
use App\Repository\AccountClientRepository;
use App\Repository\ClientRepository;
use App\Repository\GameRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/api', name: 'api')]
class ApiController extends AbstractController
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
    #[Route('/comptejeux', name: 'api_comptejeux')]
    public function receiveAccountGame()
    {
        $comptes = $this->accountClientRepository->findALl();
        $arrayCompte = [];
        foreach ($comptes as $compte){
            $arrayCompte[] = $compte->toArray();
        }
        return $this->json($arrayCompte);
    }


    #[Route('/game', name: 'api_game')]
    public function receiveGame()
    {
        $games = $this->gameRepository->findALl();
        $arrayGame = [];
        foreach ($games as $game){
            $arrayGame[] = $game->toArray();
        }
        return $this->json($arrayGame);
    }

    #[Route('/login',  name: 'api_login')]
    public function receiveLogin()
    {
        $logins = $this->clientRepository->findAll();
        $arrayLogin = [];

        foreach ($logins as $login){
            $arrayLogin[] = $login->toArray();
        }
        return $this->json($arrayLogin);
    }

    #[Route('/profile/{id}',  name: 'api_profile_id')]
    public function receiveProfile(int $id)
    {
        $Profiles = $this->clientRepository->find($id);
        $arrayProfiles = [];
        $arrayProfiles[] = $Profiles->toArrayFull();

        return $this->json($arrayProfiles);
    }

    #[Route('/liste/{client}',  name: 'api_liste_client')]
    public function receiveListe(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findJeux($client);
        return $this->json($accountClient);
    }

    #[Route('/test/read/{client}', name: 'api_test_client')]
    public function receivetest(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findtest($client);
        return $this->json($accountClient);
    }

    #[Route('/test/create', name: 'api_test_create')]
    public function AjouterCompte(Request $request)
    {
        $content = json_decode($request->getContent());
        $game = $this->getDoctrine()
            ->getRepository(Game::class)
            ->find($content->idGame);
        $client = $this->getDoctrine()
            ->getRepository(Client::class)
            ->find($content->idClient);
        if (!$game) {
            throw $this->createNotFoundException(
                'No product found for id'.$content->idGame
            );
        }
        if (!$client) {
            throw $this->createNotFoundException(
                'No product found for id'.$content->idClient
            );
        }

        $nvCompte = New AccountClient();
        $nvCompte->setUsernameAccount($content->username_account);
        $nvCompte->setPasswordAccount($content->password_account);
        $nvCompte->setDescription($content->description);
        $nvCompte->setGameId($game);
        $nvCompte->setAccountId($client);
        $entityManager=$this->getDoctrine()->getManager();
        $entityManager->persist($nvCompte);
        $entityManager->flush();
        try {
            $accountNvCompte = $this->getDoctrine()
                ->getRepository(AccountClient::class)
                ->findNvCompte($content->idClient, $content->idGame,$content->username_account);
            return $this->json($accountNvCompte);
        } catch (Exception) {
            return $this->json(['error'=>'error']);
        }



    }

    #[Route('/liste/{client}/{jeux}', name: 'api_liste_client_jeux')]
    public function receiveCompte(int $client, int $jeux)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findCompte($client, $jeux);
        return $this->json($accountClient);
    }



}
