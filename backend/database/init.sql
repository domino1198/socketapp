CREATE DATABASE IF NOT EXISTS `socket-app-mysql`;
use `socket-app-mysql`;
CREATE TABLE IF NOT EXISTS `users`
(
    `id`       varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
);