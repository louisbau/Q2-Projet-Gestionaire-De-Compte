<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ClientRepository::class)
 */
class Client
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
     * @ORM\Column(type="string", length=50)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\OneToMany(targetEntity=AccountClient::class, mappedBy="account_id")
     */
    private $account_id;

    public function __construct()
    {
        $this->account_id = new ArrayCollection();
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
     * @return Collection|AccountClient[]
     */
    public function getAccountId(): Collection
    {
        return $this->account_id;
    }

    public function addAccountId(AccountClient $accountId): self
    {
        if (!$this->account_id->contains($accountId)) {
            $this->account_id[] = $accountId;
            $accountId->setAccountId($this);
        }

        return $this;
    }

    public function removeAccountId(AccountClient $accountId): self
    {
        if ($this->account_id->removeElement($accountId)) {
            // set the owning side to null (unless already changed)
            if ($accountId->getAccountId() === $this) {
                $accountId->setAccountId(null);
            }
        }

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this-> id, 'username'=>$this->username];
    }

    public function toArrayFull()
    {
        return ['id' => $this-> id, 'username'=>$this->username,'email'=>$this->email];
    }
}

