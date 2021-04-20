<?php

namespace App\Controller;

use App\Entity\AccountClient;
use App\Entity\AccountApp;
use App\Entity\Application;
use App\Entity\Client;
use App\Entity\User;
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
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Psr\Log\LoggerInterface;

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

    private UserPasswordEncoderInterface $passwordEncoder;

    public function __construct(EntityManagerInterface $entityManager, AccountClientRepository $accountClientRepository, ClientRepository $clientRepository, GameRepository $gameRepository, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->entityManager = $entityManager;
        $this->accountClientRepository = $accountClientRepository;
        $this->clientRepository = $clientRepository;
        $this->gameRepository = $gameRepository;
        $this->passwordEncoder = $passwordEncoder;
    }
    /////// Fait ///////
    #[Route('/addemail/{email}/addpassword/{pass}')]
    public function AddProfile($email, $pass)
    {
        $addclient = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy(['email' => $email]);

        $faker = \Faker\Factory::create('fr_FR');
        if (!$addclient) {
            $user = new User();
            $user->setPassword($this->passwordEncoder->encodePassword($user,$pass));
            $user->setEmail($email);
            $user->setRoles(['ROLE_USER']); //changer ca si vous voulez etre admin ROLE_ADMIN
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);

            $game = $this->getDoctrine()
                ->getRepository(Application::class)
                ->findOneBy(['name_app' => 'Exemple']);
            if (!$game) {
                $Nvgame = new Application();
                $Nvgame->setNameApp('Exemple');
                $Nvgame->setPicture($faker->imageUrl());
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($Nvgame);
                $entityManager->flush();

            }
            $gameCreer = $this->getDoctrine()
                ->getRepository(Application::class)
                ->findOneBy(['name_app' => 'Exemple']);

            $CompteInitialisation = new AccountApp();
            $CompteInitialisation->setUsernameAccount('exemple');
            $CompteInitialisation->setPasswordAccount('123');
            $CompteInitialisation->setDescription('exemple of account');
            $CompteInitialisation->setAppId($gameCreer);
            $CompteInitialisation->setAccountId($user);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($CompteInitialisation);
            $entityManager->flush();

            return $this->json(['id' => $user->getId(), 'email' => $user->getEmail(), 'roles'=>$user->getRoles(), 'error' => 0]);
        } else {
            return $this->json(['error' => 1, 'raison' => 'email deja utilisé']);
        }

    }

    #[Route('/session', name: 'api_sessio,')]
    public function receiveSession(LoggerInterface $logger)
    {
        return $this->json($this->getUser()->getUsername());
    }
    #[Route('/profile', name: 'api_profile_id')]
    public function receiveProfile(LoggerInterface $logger)
    {
        $email = $this->getUser()->getUsername();
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy(['email' => $email]);
        return $this->json(['id' => $user->getId(),'email'=>$user->getEmail(), 'roles'=>$user->getRoles(), 'error'=>0]);
    }

    #[Route('/test/read', name: 'api_test_client')]
    public function updateListFull(LoggerInterface $logger)
    {
        $email = $this->getUser()->getUsername();
        //$faker = \Faker\Factory::create('fr_FR');
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy(['email' => $email]);
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountApp::class)
            ->findAccountApp($user->getId());
        return $this->json($accountClient);

    }




    #[Route('/test/createCompte', name: 'api_test_createCompte', methods: ['POST'])]
    public function AjouterCompte(Request $request, LoggerInterface $logger)
    {
        $content = json_decode($request->getContent());
        $email = $this->getUser()->getUsername();
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy(['email' => $email]);
        $game = $this->getDoctrine()
            ->getRepository(Application::class)
            ->find($content->idApp);
        $client = $this->getDoctrine()
            ->getRepository(User::class)
            ->find($user->getId());
        if (!$game) {
            throw $this->createNotFoundException(
                'No product found for id' . $content->idApp
            );
        }
        if (!$client) {
            throw $this->createNotFoundException(
                'No product found for id' . $user->getId()
            );
        }
        $nvCompte = new AccountApp();
        $nvCompte->setUsernameAccount($content->username_account);
        $nvCompte->setPasswordAccount($content->password_account);
        $nvCompte->setDescription($content->description);
        $nvCompte->setAppId($game);
        $nvCompte->setAccountId($client);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($nvCompte);
        $entityManager->flush();
        try {
            $accountNvCompte = $this->getDoctrine()
                ->getRepository(AccountApp::class)
                ->findNvCompte($user->getId(), $content->idApp, $content->username_account);
            return $this->json($accountNvCompte);
        } catch (Exception) {
            return $this->json(['error' => 'error']);
        }


    }
    //////// pas fait ///////

    #[Route('/test/createJeux', name: 'api_test_createJeux')]
    public function AjouterJeux(Request $request)
    {

        $content = json_decode($request->getContent());
        $faker = \Faker\Factory::create('fr_FR');
        $email = $this->getUser()->getUsername();
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy(['email' => $email]);

        if (!$user) {
            throw $this->createNotFoundException(
                'No product found for email' . $email
            );
        }
        $game = $this->getDoctrine()
            ->getRepository(Application::class)
            ->findOneBy(['name_app' => $content->name_app]);

        if (!$game) {
            $Nvgame = new Application();
            $Nvgame->setNameApp($content->name_app);
            $Nvgame->setPicture($faker->imageUrl());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($Nvgame);
            $entityManager->flush();
            //de trop
            $lolgame = $this->getDoctrine()
                ->getRepository(Application::class)
                ->findOneBy(['name_app' => $content->name_app]);
            //de trop
            $nvCompte = new AccountApp();
            $nvCompte->setUsernameAccount($content->username_account);
            $nvCompte->setPasswordAccount($content->password_account);
            $nvCompte->setDescription($content->description);
            $nvCompte->setAppId($lolgame);
            $nvCompte->setAccountId($user);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($nvCompte);
            $entityManager->flush();
            try {
                $accountNvCompte = $this->getDoctrine()
                    ->getRepository(AccountApp::class)
                    ->findNvCompte($user->getId(), $lolgame->getId(), $content->username_account);
                return $this->json($accountNvCompte);
            } catch (Exception) {
                return $this->json(['error' => 'error']);
            }

        } else {
            $nvCompte = new AccountApp();
            $nvCompte->setUsernameAccount($content->username_account);
            $nvCompte->setPasswordAccount($content->password_account);
            $nvCompte->setDescription($content->description);
            $nvCompte->setAppId($game);
            $nvCompte->setAccountId($user);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($nvCompte);
            $entityManager->flush();
            try {
                $accountNvCompte = $this->getDoctrine()
                    ->getRepository(AccountApp::class)
                    ->findNvCompte($user->getId(), $game->getId(), $content->username_account);
                return $this->json($accountNvCompte);
            } catch (Exception) {
                return $this->json(['error' => 'error']);
            }
        }

    }

    #[Route('/del/{idAccount}', name: 'api_del_account')]
    public function delCompte(int $idAccount)
    {
        $accountClient = $this->getDoctrine()
            ->getRepository(AccountApp::class)
            ->find($idAccount);
        $this->entityManager->remove($accountClient);
        $this->entityManager->flush();
        return $this->json('ca marche');
    }


}
