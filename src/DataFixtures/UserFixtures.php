<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setPassword($this->passwordEncoder->encodePassword($user,'Admin'));
        $user->setEmail('bauchau.louise@gmail.com');
        $user->setRoles(['ROLE_ADMIN']);
        $manager->persist($user);
        $manager->flush();
        $users = new User();
        $users->setPassword($this->passwordEncoder->encodePassword($users,'test'));
        $users->setEmail('bauchau@gmail.com');
        $users->setRoles(['ROLE_USER']);
        $manager->persist($users);
        $manager->flush();
    }
}
