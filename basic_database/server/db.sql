drop database if exists todo;

create database if not exists todo;

use todo;

create table task(
    id int primary key auto_increment,
    description varchar(255) not null
);

insert into task (description) values('Test Task');
insert into task (description) values('shopping');
insert into task (description) values('studying');