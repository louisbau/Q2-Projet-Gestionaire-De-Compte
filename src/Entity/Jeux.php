<?php

namespace App\Entity;

use App\Repository\JeuxRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=JeuxRepository::class)
 */
class Jeux
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $nameJeux;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $picture;

    /**
     * @ORM\OneToMany(targetEntity=CompteJeux::class, mappedBy="JeuxID")
     */
    private $compteJeuxes;

    public function __construct()
    {
        $this->compteJeuxes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameJeux(): ?string
    {
        return $this->nameJeux;
    }

    public function setNameJeux(string $nameJeux): self
    {
        $this->nameJeux = $nameJeux;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

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
            $compteJeux->setJeuxID($this);
        }

        return $this;
    }

    public function removeCompteJeux(CompteJeux $compteJeux): self
    {
        if ($this->compteJeuxes->removeElement($compteJeux)) {
            // set the owning side to null (unless already changed)
            if ($compteJeux->getJeuxID() === $this) {
                $compteJeux->setJeuxID(null);
            }
        }

        return $this;
    }
}
