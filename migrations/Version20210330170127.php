<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210330170127 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE compte_jeux (id INT AUTO_INCREMENT NOT NULL, player_id_id INT NOT NULL, jeux_id_id INT NOT NULL, username_compte VARCHAR(30) NOT NULL, password_compte VARCHAR(30) NOT NULL, description VARCHAR(255) DEFAULT NULL, INDEX IDX_6F6DB191C036E511 (player_id_id), INDEX IDX_6F6DB1914C32EAF4 (jeux_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE compte_jeux ADD CONSTRAINT FK_6F6DB191C036E511 FOREIGN KEY (player_id_id) REFERENCES login (id)');
        $this->addSql('ALTER TABLE compte_jeux ADD CONSTRAINT FK_6F6DB1914C32EAF4 FOREIGN KEY (jeux_id_id) REFERENCES jeux (id)');
        $this->addSql('ALTER TABLE jeux MODIFY idGame INT NOT NULL');
        $this->addSql('ALTER TABLE jeux DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE jeux CHANGE idgame id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE jeux ADD PRIMARY KEY (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE compte_jeux');
        $this->addSql('ALTER TABLE jeux MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE jeux DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE jeux CHANGE id idGame INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE jeux ADD PRIMARY KEY (idGame)');
    }
}
