<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210401130625 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE account_client (id INT AUTO_INCREMENT NOT NULL, account_id_id INT NOT NULL, game_id_id INT NOT NULL, username_account VARCHAR(50) NOT NULL, password_account VARCHAR(50) NOT NULL, description LONGTEXT DEFAULT NULL, INDEX IDX_E070CA2649CB4726 (account_id_id), INDEX IDX_E070CA264D77E7D8 (game_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE account_client ADD CONSTRAINT FK_E070CA2649CB4726 FOREIGN KEY (account_id_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE account_client ADD CONSTRAINT FK_E070CA264D77E7D8 FOREIGN KEY (game_id_id) REFERENCES game (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE account_client');
    }
}
