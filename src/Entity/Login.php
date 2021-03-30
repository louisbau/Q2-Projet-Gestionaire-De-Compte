<?php

namespace App\Entity;

use App\Repository\LoginRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LoginRepository::class)
 */
class Login
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\OneToMany(targetEntity=CompteJeux::class, mappedBy="playerID")
     */
    private $compteJeuxes;


    public function __construct()
    {
        $this->playerId = new ArrayCollection();
        $this->compteJeuxes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection|CompteJeux[]
     */
    public function getCompteJeuxes(): Collection
    {
        return $this->compteJeuxes;
    }

    public function addCompteJeux(CompteJeux $compteJeux): self
    {
        if (!$this->compteJeuxes->contains($compteJeux)) {
            $this->compteJeuxes[] = $compteJeux;
            $compteJeux->setPlayerID($this);
        }

        return $this;
    }

    public function removeCompteJeux(CompteJeux $compteJeux): self
    {
        if ($this->compteJeuxes->removeElement($compteJeux)) {
            // set the owning side to null (unless already changed)
            if ($compteJeux->getPlayerID() === $this) {
                $compteJeux->setPlayerID(null);
            }
        }

        return $this;
    }
}
