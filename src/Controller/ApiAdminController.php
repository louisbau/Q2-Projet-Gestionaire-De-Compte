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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
    #[Route('/list/app', name: 'ApiAdmin_listApp')]
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
    #[Route('/list/app/id={client}', name: 'ApiAdmin_listApp_user')]
    public function ListAppUser(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountApp::class)
            ->findAppUser($client);
        return $this->json($accountClient);
    }
    //renvoie liste de compte d'un user
    #[Route('/list/account/id={client}', name: 'ApiAdmin_ListAccountUser')]
    public function ListAccountUser(int $client)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountApp::class)
            ->findAccountApp($client);
        return $this->json($accountClient);
    }
    //renvoie tout les user
    #[Route('/list/user', name: 'ApiAdmin_listUser')]
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
    #[Route('/info/user/id={client}', name: 'ApiAdmin_infoUser')]
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


}
