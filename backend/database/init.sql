CREATE DATABASE IF NOT EXISTS `socket-app-mysql`;
use `socket-app-mysql`;
CREATE TABLE IF NOT EXISTS `users`
(
    `id`        varchar(255) NOT NULL,
    `username`  varchar(255) NOT NULL,
    `password`  varchar(255) NOT NULL,
    `firstName` varchar(255) NOT NULL,
    `lastName`  varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `chats`
(
    `id`     varchar(255) NOT NULL,
    `users`  varchar(3000) NOT NULL,
    `name`   varchar(255) NOT NULL
);