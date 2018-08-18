create database if not exists burgers_db;

use burgers_db;

create table if not exists burgers (
    id int auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean not null,
    primary key (id),
    index (burger_name)
);
