CREATE DATABASE IF NOT EXISTS book_manager_db;

USE book_manager_db;

CREATE TABLE `Users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` text,
    `role` int DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Authors` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `site` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Books` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `rating` int DEFAULT NULL,
    `year` int DEFAULT NULL,
    `genre` varchar(255) DEFAULT NULL,
    `pages` int DEFAULT NULL,
    `thumb` text,
    `has_been_read` int NOT NULL,
    `author_id` int NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `author_id` (`author_id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `Books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `Authors` (`id`),
    CONSTRAINT `Books_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    `Users`
VALUES
    (
        1,
        'Augusto Barbosa',
        'augusto@gmail.com',
        '$2a$12$xNdeOmNZIvG8JcjYDbN8Bu1PGSXfHt9fRkOY/ZQ0kWk/2f3IzCbpK',
        0
    );

INSERT INTO
    `Authors`
VALUES
    (1, 'Dan Brown', 'https://danbrown.com/');

INSERT INTO
    `Books`
VALUES
    (
        1,
        'Código da vinci',
        5,
        2003,
        'romance',
        560,
        'https://m.media-amazon.com/images/I/41aVasi7pML._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        1,
        1,
        1
    );
