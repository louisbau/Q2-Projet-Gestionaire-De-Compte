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







}
