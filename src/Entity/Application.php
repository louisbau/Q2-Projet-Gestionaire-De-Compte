<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ApplicationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ApplicationRepository::class)
 */
class Application
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name_app;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $picture;

    /**
     * @ORM\OneToMany(targetEntity=AccountApp::class, mappedBy="app_id", orphanRemoval=true)
     */
    private $accountApps;

    public function __construct()
    {
        $this->accountApps = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameApp(): ?string
    {
        return $this->name_app;
    }

    public function setNameApp(string $name_app): self
    {
        $this->name_app = $name_app;

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
     * @return Collection|AccountApp[]
     */
    public function getAccountApps(): Collection
    {
        return $this->accountApps;
    }

    public function addAccountApp(AccountApp $accountApp): self
    {
        if (!$this->accountApps->contains($accountApp)) {
            $this->accountApps[] = $accountApp;
            $accountApp->setAppId($this);
        }

        return $this;
    }

    public function removeAccountApp(AccountApp $accountApp): self
    {
        if ($this->accountApps->removeElement($accountApp)) {
            // set the owning side to null (unless already changed)
            if ($accountApp->getAppId() === $this) {
                $accountApp->setAppId(null);
            }
        }

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this-> id, 'name_app'=>$this->name_app, 'picture'=>$this->picture];
    }
}
