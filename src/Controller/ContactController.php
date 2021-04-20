<?php

namespace App\Controller;


use App\Form\ContactType;
use App\Repository\AccountAppRepository;
use App\Repository\ApplicationRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ContactController extends AbstractController
{

    private $userRepository;
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;
    /**
     * @var ApplicationRepository
     */
    private ApplicationRepository $applicationRepository;
    /**
     * @var AccountAppRepository
     */
    private AccountAppRepository $accountAppRepository;
    /**
     * @var UserPasswordEncoderInterface
     */
    private UserPasswordEncoderInterface $passwordEncoder;

    public function __construct(EntityManagerInterface $entityManager, ApplicationRepository $applicationRepository, AccountAppRepository $accountAppRepository, UserPasswordEncoderInterface $passwordEncoder, UserRepository $userRepository)
    {
        $this->entityManager = $entityManager;
        $this->applicationRepository = $applicationRepository;
        $this->userRepository = $userRepository;
        $this->accountAppRepository= $accountAppRepository;
        $this->passwordEncoder = $passwordEncoder;
    }

    #[Route('/contact', name: 'contact')]
    public function index(): Response
    {
        $users = $this->userRepository->findAll();
        $arrayUser = [];
        foreach ($users as $user){
            $arrayUser[] = $user->toArray();
        }

        return $this->render('contact/index.html.twig', [
            'user' => $arrayUser,
        ]);
    }
}
