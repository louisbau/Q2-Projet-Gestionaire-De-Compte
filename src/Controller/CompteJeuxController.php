<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\ORM\EntityManagerInterface;


class CompteJeuxController extends AbstractController
{
    #[Route('/comptejeux', name: 'compte_jeux')]
    public function createCompteJeux() : Response
    {

    }
}
