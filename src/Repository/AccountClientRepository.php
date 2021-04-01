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

    // /**
    //  * @return AccountClient[] Returns an array of AccountClient objects
    //  */
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
    public function findOneBySomeField($value): ?AccountClient
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
