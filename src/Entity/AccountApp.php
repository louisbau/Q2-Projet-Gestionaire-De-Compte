<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AccountAppRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=AccountAppRepository::class)
 */
class AccountApp
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="accountApps")
     * @ORM\JoinColumn(nullable=false)
     */
    private $account_id;

    /**
     * @ORM\ManyToOne(targetEntity=Application::class, inversedBy="accountApps")
     * @ORM\JoinColumn(nullable=false)
     */
    private $app_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username_account;

    /**
     * @ORM\Column(type="string", length=255)
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

    public function getAccountId(): ?User
    {
        return $this->account_id;
    }

    public function setAccountId(?User $account_id): self
    {
        $this->account_id = $account_id;

        return $this;
    }

    public function getAppId(): ?Application
    {
        return $this->app_id;
    }

    public function setAppId(?Application $app_id): self
    {
        $this->app_id = $app_id;

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
}
