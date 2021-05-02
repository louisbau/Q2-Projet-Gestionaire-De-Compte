<?php

namespace App\Repository;

use App\Entity\Extension;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Extension|null find($id, $lockMode = null, $lockVersion = null)
 * @method Extension|null findOneBy(array $criteria, array $orderBy = null)
 * @method Extension[]    findAll()
 * @method Extension[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExtensionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Extension::class);
    }

    /**
      * @return Extension[] Returns an array of Extension objects
      */


    public function findExtension(int $client): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT T2.extension_name, T2.url, T2.playlist_name, T2.id
             FROM App\Entity\User AS T1, App\Entity\Extension AS T2
             where T1.id = T2.user_id and T1.id = ?1'
        )->setParameter('1', $client);

        // returns an array of Product objects
        return $query->getResult();
    }
}
