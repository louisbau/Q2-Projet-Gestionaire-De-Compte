<?php

namespace App\Entity;

use App\Repository\CompteJeuxRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CompteJeuxRepository::class)
 */
class CompteJeux
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Login::class, inversedBy="compteJeuxes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $playerID;

    /**
     * @ORM\ManyToOne(targetEntity=Jeux::class, inversedBy="compteJeuxes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $JeuxID;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $usernameCompte;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $passwordCompte;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayerID(): ?Login
    {
        return $this->playerID;
    }

    public function setPlayerID(?Login $playerID): self
    {
        $this->playerID = $playerID;

        return $this;
    }

    public function getJeuxID(): ?Jeux
    {
        return $this->JeuxID;
    }

    public function setJeuxID(?Jeux $JeuxID): self
    {
        $this->JeuxID = $JeuxID;

        return $this;
    }

    public function getUsernameCompte(): ?string
    {
        return $this->usernameCompte;
    }

    public function setUsernameCompte(string $usernameCompte): self
    {
        $this->usernameCompte = $usernameCompte;

        return $this;
    }

    public function getPasswordCompte(): ?string
    {
        return $this->passwordCompte;
    }

    public function setPasswordCompte(string $passwordCompte): self
    {
        $this->passwordCompte = $passwordCompte;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
