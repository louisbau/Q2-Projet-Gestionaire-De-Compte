<?php

namespace App\Repository;

use App\Entity\AccountClient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AccountClient|null find($id, $lockMode = null, $lockVersion = null)
 * @method AccountClient|null findOneBy(array $criteria, array $orderBy = null)
 * @method AccountClient[]    findAll()
 * @method AccountClient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AccountClientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AccountClient::class);
    }

    /**
     * @return AccountClient[] Returns an array of AccountClient objects
     */

    public function findJeux(int $client): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT Distinct T3.name_game, T3.id
             FROM App\Entity\Client AS T1, App\Entity\AccountClient AS T2, App\Entity\Game as T3
             where T1.id = T2.account_id and T2.game_id = T3.id and T1.id = ?1'
        )->setParameter('1', $client);

        // returns an array of Product objects
        return $query->getResult();
    }


    public function findtest(int $client): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT T3.name_game, T3.id, T2.username_account, T2.password_account, T2.description, T2.id, T3.id as idGame
             FROM App\Entity\Client AS T1, App\Entity\AccountClient AS T2, App\Entity\Game as T3
             where T1.id = T2.account_id and T2.game_id = T3.id and T1.id = ?1'
        )->setParameter('1', $client);

        // returns an array of Product objects
        return $query->getResult();
    }

    public function findCompte(int $client, int $jeux): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT T2.username_account, T2.password_account, T2.description
             FROM App\Entity\Client AS T1, App\Entity\AccountClient AS T2, App\Entity\Game as T3
             where T1.id = T2.account_id and T2.game_id = T3.id and T1.id = ?1 and T3.id = ?2'
        )->setParameter('1', $client)
            ->setParameter('2', $jeux)
        ;

        // returns an array of Product objects
        return $query->getResult();
    }

}
