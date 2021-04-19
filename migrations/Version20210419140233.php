<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210419140233 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE account_app (id INT AUTO_INCREMENT NOT NULL, account_id_id INT NOT NULL, app_id_id INT NOT NULL, username_account VARCHAR(255) NOT NULL, password_account VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, INDEX IDX_8995299149CB4726 (account_id_id), INDEX IDX_89952991A997139A (app_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE account_app ADD CONSTRAINT FK_8995299149CB4726 FOREIGN KEY (account_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE account_app ADD CONSTRAINT FK_89952991A997139A FOREIGN KEY (app_id_id) REFERENCES application (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE account_app');
    }
}
