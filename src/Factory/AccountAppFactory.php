<?php

namespace App\Factory;

use App\Entity\AccountApp;
use App\Repository\AccountAppRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static AccountApp|Proxy createOne(array $attributes = [])
 * @method static AccountApp[]|Proxy[] createMany(int $number, $attributes = [])
 * @method static AccountApp|Proxy find($criteria)
 * @method static AccountApp|Proxy findOrCreate(array $attributes)
 * @method static AccountApp|Proxy first(string $sortedField = 'id')
 * @method static AccountApp|Proxy last(string $sortedField = 'id')
 * @method static AccountApp|Proxy random(array $attributes = [])
 * @method static AccountApp|Proxy randomOrCreate(array $attributes = [])
 * @method static AccountApp[]|Proxy[] all()
 * @method static AccountApp[]|Proxy[] findBy(array $attributes)
 * @method static AccountApp[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static AccountApp[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static AccountAppRepository|RepositoryProxy repository()
 * @method AccountApp|Proxy create($attributes = [])
 */
final class AccountAppFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            // TODO add your default values here (https://github.com/zenstruck/foundry#model-factories)
        ];
    }

    protected function initialize(): self
    {
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(AccountApp $accountApp) {})
        ;
    }

    protected static function getClass(): string
    {
        return AccountApp::class;
    }
}
