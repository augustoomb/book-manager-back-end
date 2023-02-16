CREATE DATABASE IF NOT EXISTS book_manager_db;

USE book_manager_db;

CREATE TABLE `Users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,
    `pass` text,
    `role` int DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 457 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Authors` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `site` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 457 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Books` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(255) DEFAULT NULL,
    `rating` int DEFAULT NULL,
    `year` int DEFAULT NULL,
    `genre` varchar(255) DEFAULT NULL,
    `pages` int DEFAULT NULL,
    `thumb` text,
    `read` int DEFAULT NULL,
    `in_my_list` int DEFAULT NULL,
    `author_id` int DEFAULT NULL,
    `user_id` int DEFAULT NULL,
    PRIMARY KEY (`book_id`),
    KEY `author_id` (`author_id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `Books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `Authors` (`id`),
    CONSTRAINT `Books_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 457 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    `Users`
VALUES
    (
        125,
        'Augusto Barbosa',
        'augustobarbosa1988@gmail.com',
        '$2a$12$xNdeOmNZIvG8JcjYDbN8Bu1PGSXfHt9fRkOY/ZQ0kWk/2f3IzCbpK',
        0
    );

INSERT INTO
    `Authors`
VALUES
    (789, 'Dan Brown', 'https://danbrown.com/');

INSERT INTO
    `Books`
VALUES
    (
        995,
        'Código da vinci',
        5,
        2003,
        'romance',
        560,
        'https://m.media-amazon.com/images/I/41aVasi7pML._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        1,
        1,
        789,
        125
    );



-- CREATE TABLE `Series` (
--     `id` int NOT NULL AUTO_INCREMENT,
--     `name` varchar(255) DEFAULT NULL,
--     `seasons` int DEFAULT NULL,
--     `overview` text,
--     `poster_path` varchar(255) DEFAULT NULL,
--     PRIMARY KEY (`id`)
-- ) ENGINE = InnoDB AUTO_INCREMENT = 457 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- CREATE TABLE `Casts` (
--     `id` int NOT NULL AUTO_INCREMENT,
--     `name` varchar(255) DEFAULT NULL,
--     PRIMARY KEY (`id`)
-- ) ENGINE = InnoDB AUTO_INCREMENT = 199 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- CREATE TABLE `Characters` (
--     `id` int NOT NULL AUTO_INCREMENT,
--     `name` varchar(255) DEFAULT NULL,
--     `serie_id` int DEFAULT NULL,
--     PRIMARY KEY (`id`),
--     KEY `serie_id` (`serie_id`),
--     CONSTRAINT `Characters_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `Series` (`id`)
-- ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- CREATE TABLE `Cast_Characters` (
--     `cast_id` int DEFAULT NULL,
--     `character_id` int DEFAULT NULL,
--     KEY `cast_id` (`cast_id`),
--     KEY `character_id` (`character_id`),
--     CONSTRAINT `Cast_Characters_ibfk_1` FOREIGN KEY (`cast_id`) REFERENCES `Casts` (`id`),
--     CONSTRAINT `Cast_Characters_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `Characters` (`id`)
-- ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO
--     `Series`
-- VALUES
--     (
--         456,
--         'Os Simpsons',
--         34,
--         'Os Simpsons moram na cidade de  Springfield, uma cidade americana como qualquer outra. Homer trabalha como inspetor de segurança em uma usina de  energia nuclear, Marge tenta manter a paz em sua família, Bart é um  travesso garoto de 10 anos, Lisa, de 8 anos, é a inteligente da família que  adora tocar saxofone e é vegetariana e a pequena Maggie conquista todos  enquanto não larga sua chupeta. E a série tem um rico, e muitas vezes  estranho, universo de personagens que também habitam Springfield. Com roteiros inteligentes, humor subversivo e divertidamente  genial, a série faz piadas de si mesma e de todo mundo que aparecer em  seu caminho.',
--         '/eMJYtdMmtiUI2WHYvoR0BmRGq51.jpg'
--     );

-- INSERT INTO
--     `Characters`
-- VALUES
--     (1, 'Homer Simpson', 456);

-- INSERT INTO
--     `Casts`
-- VALUES
--     (198, 'Dan Castellaneta');

-- INSERT INTO
--     `Cast_Characters`
-- VALUES
--     (198, 1);