<?php

namespace App\Repository;

use App\Entity\AccountApp;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AccountApp|null find($id, $lockMode = null, $lockVersion = null)
 * @method AccountApp|null findOneBy(array $criteria, array $orderBy = null)
 * @method AccountApp[]    findAll()
 * @method AccountApp[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AccountAppRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AccountApp::class);
    }

    /**
     * @return AccountApp[] Returns an array of AccountApp objects
     */

    public function findAccountApp(int $client): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT T3.name_app, T2.username_account, T2.password_account, T2.description, T3.id as idApp, T1.id as idUser, T2.id
             FROM App\Entity\User AS T1, App\Entity\AccountApp AS T2, App\Entity\Application as T3
             where T1.id = T2.account_id and T2.app_id = T3.id and T1.id = ?1'
        )->setParameter('1', $client);

        // returns an array of Product objects
        return $query->getResult();
    }
    public function findNvCompte(int $client, int $game, string $username): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT T3.name_app, T2.username_account, T2.password_account, T2.description, T3.id as idApp, T1.id as idUser, T2.id
             FROM App\Entity\User AS T1, App\Entity\AccountApp AS T2, App\Entity\Application as T3
             where T1.id = T2.account_id and T2.app_id = T3.id and T3.id = ?1 and T1.id = ?2 and T2.username_account = ?3'
        )->setParameter('2', $client)
            ->setParameter('1', $game)
            ->setParameter('3', $username);

        // returns an array of Product objects
        return $query->getResult();
    }

    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AccountApp
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
