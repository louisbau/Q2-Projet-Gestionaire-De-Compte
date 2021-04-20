<?php

namespace App\Controller;


use App\Entity\AccountApp;
use App\Entity\Application;

use App\Entity\User;

use App\Repository\AccountAppRepository;
use App\Repository\ApplicationRepository;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Psr\Log\LoggerInterface;


#[Route('/admin', name: 'ApiAdmin')]

class ApiAdminController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;
    /**
     * @var ApplicationRepository
     */
    private ApplicationRepository $applicationRepository;
    /**
     * @var UserRepository
     */
    private UserRepository $userRepository;
    /**
     * @var UserPasswordEncoderInterface
     */
    private UserPasswordEncoderInterface $passwordEncoder;
    /**
     * @var AccountAppRepository
     */
    private AccountAppRepository $accountAppRepository;

    public function __construct(EntityManagerInterface $entityManager, ApplicationRepository $applicationRepository, AccountAppRepository $accountAppRepository, UserPasswordEncoderInterface $passwordEncoder, UserRepository $userRepository)
    {
        $this->entityManager = $entityManager;
        $this->applicationRepository = $applicationRepository;
        $this->userRepository = $userRepository;
        $this->accountAppRepository= $accountAppRepository;
        $this->passwordEncoder = $passwordEncoder;
    }
    //renvoie tout les jeux
    #[Route('/listApp', name: 'ApiAdmin_listApp')]
    public function ListApp()
    {
        $apps = $this->applicationRepository->findAll();
        $arrayApp = [];
        foreach ($apps as $app){
            $arrayApp[] = $app->toArray();
        }
        return $this->json($arrayApp);
    }
    //renvoie tout les jeux d'utilisateur
    #[Route('/listApp/user={client}', name: 'ApiAdmin_listApp_user')]
    public function ListAppUser(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountApp::class)
            ->findAppUser($client);
        return $this->json($accountClient);
    }
    //renvoie liste de compte d'un user
    #[Route('/listAccount/user={client}', name: 'ApiAdmin_ListAccountUser')]
    public function ListAccountUser(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountApp::class)
            ->findAccountApp($client);
        return $this->json($accountClient);
    }
    //renvoie tout les user
    #[Route('/listUser', name: 'ApiAdmin_listUser')]
    public function ListUser()
    {
        $users = $this->userRepository->findAll();
        $arrayUser = [];
        foreach ($users as $user){
            $arrayUser[] = $user->toArray();
        }
        return $this->json($arrayUser);
    }
    //renvoie les info d'user
    #[Route('/infoUser/user={client}', name: 'ApiAdmin_infoUser')]
    public function InfoUser(int $client)
    {
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->find($client);
        return $this->json(['id' => $user->getId(), 'email'=>$user->getEmail(), 'roles' =>$user->getRoles()]);
    }
    //renvoie tout les jeux d'utilisateur

    #[Route('/session', name: 'ApiAdmin_Session')]
    public function Session(LoggerInterface $logger)
    {
        return $this->json($this->getUser()->getUsername());
    }

    /////// pas utilisé
    ///
    /*
    #[Route('/liste/{client}', name: 'api_liste_client')]
    public function receiveListe(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findJeux($client);
        return $this->json($accountClient);
    }

    #[Route('/liste/{client}/{jeux}', name: 'api_liste_client_jeux')]
    public function receiveCompte(int $client, int $jeux)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountClient::class)
            ->findCompte($client, $jeux);
        return $this->json($accountClient);
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
        $this->denyAccessUnlessGranted('ROLE_USER'); ////////attt
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
    */

}
