<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\AccountApp;
use App\Entity\User;
use App\Entity\Application;
use App\Entity\Extension;


class ExtensionFixture extends Fixture implements DependentFixtureInterface
{
    public function getDependencies(): array
    {
        return [UserFixtures::class];
    }
    public function load(ObjectManager $manager)
    {
        $list = ['6wj5KOqIvQl2fOSIT9UMyE','7FF45kZ9EtPWEPkNcuiesA', '4qdIkiSf9YVVg8r7rvu5pa'];
        $extension = ['Spotify', 'Discord'];
        $faker = \Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++) {
            for ($j = 0; $j < 2; $j++) {
                $nvExtension = new Extension();
                $nvExtension->setExtensionName($extension[0]);
                $nvExtension->setUrl($list[$j]);
                $nvExtension->setPlaylistName($faker->name());
                $refe = 'user'.$i;
                $nvExtension->setUserId($this->getReference($refe));
                $manager->persist($nvExtension);
            }
            for ($j = 0; $j < 2; $j++) {
                $nvExtension = new Extension();
                $nvExtension->setExtensionName($extension[1]);
                $nvExtension->setUrl('677883046359334930');
                $nvExtension->setPlaylistName($faker->name());
                $refe = 'user'.$i;
                $nvExtension->setUserId($this->getReference($refe));
                $manager->persist($nvExtension);
            }
            $manager->flush();
        }


    }

}