<?php

namespace App\Entity;

use App\Entity\Client;
use App\Repository\AccountClientRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Game;

/**
 * @ORM\Entity(repositoryClass=AccountClientRepository::class)
 */
class AccountClient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=client::class, inversedBy="account_id")
     * @ORM\JoinColumn(nullable=false)
     */
    private $account_id;

    /**
     * @ORM\ManyToOne(targetEntity=game::class, inversedBy="game_id")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game_id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $username_account;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $password_account;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAccountId(): ?client
    {
        return $this->account_id;
    }

    public function setAccountId(?client $account_id): self
    {
        $this->account_id = $account_id;

        return $this;
    }

    public function getGameId(): ?game
    {
        return $this->game_id;
    }

    public function setGameId(?game $game_id): self
    {
        $this->game_id = $game_id;

        return $this;
    }

    public function getUsernameAccount(): ?string
    {
        return $this->username_account;
    }

    public function setUsernameAccount(string $username_account): self
    {
        $this->username_account = $username_account;

        return $this;
    }

    public function getPasswordAccount(): ?string
    {
        return $this->password_account;
    }

    public function setPasswordAccount(string $password_account): self
    {
        $this->password_account = $password_account;

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

    public function toArray()
    {

        return ['id' => $this-> id, 'usernameaccount'=>$this->username_account, 'passwordaccount'=>$this->password_account, 'description'=>$this->description];
    }

}
