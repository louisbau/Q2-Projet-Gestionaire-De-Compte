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

class ApiLoginController extends AbstractController
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

    #[Route('/email/{email}/password/{pass}')]
    public function check($email, $pass)
    {
        //$Profiles = $this->clientRepository->findOneBy(['email'=>$email, 'password'=>$pass]);
        //$arrayProfiles = [];

        //$arrayProfiles[] = $Profiles->toArrayFull();

        if ($email === "DosSantos.Francoise@voila.fr" and $pass === "ph~sX%3w>O(;") {
            return $this->render('index/index.html.twig');

        }
        else {
            return $this->render('index/index.html.twig');
        }
        //

    }





}
