<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game
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
    private $name_game;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $picture;

    /**
     * @ORM\OneToMany(targetEntity=AccountClient::class, mappedBy="game_id")
     */
    private $game_id;

    public function __construct()
    {
        $this->game_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameGame(): ?string
    {
        return $this->name_game;
    }

    public function setNameGame(string $name_game): self
    {
        $this->name_game = $name_game;

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
     * @return Collection|AccountClient[]
     */
    public function getGameId(): Collection
    {
        return $this->game_id;
    }

    public function addGameId(AccountClient $gameId): self
    {
        if (!$this->game_id->contains($gameId)) {
            $this->game_id[] = $gameId;
            $gameId->setGameId($this);
        }

        return $this;
    }

    public function removeGameId(AccountClient $gameId): self
    {
        if ($this->game_id->removeElement($gameId)) {
            // set the owning side to null (unless already changed)
            if ($gameId->getGameId() === $this) {
                $gameId->setGameId(null);
            }
        }

        return $this;
    }
}
