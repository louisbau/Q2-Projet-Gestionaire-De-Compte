<?php

namespace App\Controller;

use App\Entity\AccountClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/index', name: 'index')]
    public function index(): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }


    #[Route('/', name: 'login')]
    public function login(): Response
    {
        return $this->render('login/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
    #[Route('/signUp', name: 'sign_up')]
    public function SignUp(): Response
    {
        return $this->render('sign_up/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }


}