CREATE DATABASE 'users';

CREATE TABLE `users`.`infousers` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(255) NOT NULL , `email` VARCHAR(30) NOT NULL , `password` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;