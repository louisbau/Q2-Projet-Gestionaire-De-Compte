<?php

namespace App\Factory;

use App\Entity\Application;
use App\Repository\ApplicationRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static Application|Proxy createOne(array $attributes = [])
 * @method static Application[]|Proxy[] createMany(int $number, $attributes = [])
 * @method static Application|Proxy find($criteria)
 * @method static Application|Proxy findOrCreate(array $attributes)
 * @method static Application|Proxy first(string $sortedField = 'id')
 * @method static Application|Proxy last(string $sortedField = 'id')
 * @method static Application|Proxy random(array $attributes = [])
 * @method static Application|Proxy randomOrCreate(array $attributes = [])
 * @method static Application[]|Proxy[] all()
 * @method static Application[]|Proxy[] findBy(array $attributes)
 * @method static Application[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Application[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static ApplicationRepository|RepositoryProxy repository()
 * @method Application|Proxy create($attributes = [])
 */
final class ApplicationFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            'name_app' => self::faker()->unique()->name(),
            'picture' => self::faker()->imageUrl(),
        ];
    }

    protected function initialize(): self
    {
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(Application $application) {})
        ;
    }

    protected static function getClass(): string
    {
        return Application::class;
    }
}
