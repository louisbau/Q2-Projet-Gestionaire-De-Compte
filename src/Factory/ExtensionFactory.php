<?php

namespace App\Factory;

use App\Entity\Extension;
use App\Repository\ExtensionRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static Extension|Proxy createOne(array $attributes = [])
 * @method static Extension[]|Proxy[] createMany(int $number, $attributes = [])
 * @method static Extension|Proxy find($criteria)
 * @method static Extension|Proxy findOrCreate(array $attributes)
 * @method static Extension|Proxy first(string $sortedField = 'id')
 * @method static Extension|Proxy last(string $sortedField = 'id')
 * @method static Extension|Proxy random(array $attributes = [])
 * @method static Extension|Proxy randomOrCreate(array $attributes = [])
 * @method static Extension[]|Proxy[] all()
 * @method static Extension[]|Proxy[] findBy(array $attributes)
 * @method static Extension[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Extension[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static ExtensionRepository|RepositoryProxy repository()
 * @method Extension|Proxy create($attributes = [])
 */
final class ExtensionFactory extends ModelFactory
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
            // ->afterInstantiate(function(Extension $extension) {})
        ;
    }

    protected static function getClass(): string
    {
        return Extension::class;
    }
}
