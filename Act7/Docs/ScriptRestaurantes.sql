-- crear la base de datos "restaurantes" si no existe
create database if not exists restaurantes;

-- usar la base de datos "restaurantes"
use restaurantes;

-- creación de las tablas
create table locales (
    local_id int auto_increment primary key,
    nombre varchar(255) not null,
    direccion varchar(255) not null,
    telefono varchar(20),
    responsable varchar(100),
    abierto boolean
);

create table mesas (
    mesa_id int auto_increment primary key,
    local_id int,
    numero_mesa int not null,
    numero_comensales int,
    ocupada boolean,
    fecha_ocupacion date,
    foreign key (local_id) references locales (local_id)
);

create table clientes (
    cliente_id int auto_increment primary key,
    mesa_id int,
    nombre varchar(100) not null,
    telefono varchar(20),
    email varchar(255),
    foreign key (mesa_id) references mesas (mesa_id)
);

create table favoritos (
    favorito_id int auto_increment primary key,
    cliente_id int,
    local_id int,
    foreign key (cliente_id) references clientes (cliente_id),
    foreign key (local_id) references locales (local_id)
);

-- insertar datos de ejemplo en la tabla "locales"
insert into locales (nombre, direccion, telefono, responsable, abierto)
values
    ('bistró parisino', 'rue de la gastronomie 123', '123-456-7890', 'jean-luc dubois', true),
    ('casa de tapas flamencas', 'calle del flamenco 42', '987-654-3210', 'isabella rodriguez', false),
    ('fusión oriental zen', 'avenida del bambú 567', '555-777-9999', 'li wei', true),
    ('parrillada argentina', 'calle del asado 8', '333-444-1111', 'carlos rodriguez', true),
    ('gastroalquimia', 'calle de las especias 77', '321-765-0987', 'isidoro sánchez', true),
    ('la trattoria romantica', 'via dell''amore 12', '001-234-5678', 'bianca verdi', true),
    ('sabor tropicaribe', 'playa paraíso 543', '987-123-4567', 'carlos pérez', true);

-- insertar datos de ejemplo en la tabla "mesas"
insert into mesas (numero_mesa, numero_comensales, ocupada, fecha_ocupacion, local_id)
values
    (1, 4, true, '2023-09-16 19:30:00', 1),
    (2, 2, false, null, 1),
    (1, 6, true, '2023-09-17 20:15:00', 2),
    (2, 4, true, '2023-09-24 20:15:00', 2),
    (1, 2, true, '2023-09-18 19:45:00', 3),
    (2, 4, false, null, 3),
    (1, 6, true, '2023-09-19 20:00:00', 4),
    (2, 4, true, '2023-09-19 20:00:00', 4),
    (3, 2, true, '2023-09-19 20:00:00', 5),
    (4, 6, true, '2023-09-20 20:30:00', 5),
    (3, 4, true, '2023-09-21 19:15:00', 6),
    (4, 2, false, null, 6),
    (3, 4, true, '2023-09-22 19:45:00', 7),
    (4, 8, true, '2023-09-23 19:00:00', 7);

-- insertar datos de ejemplo en la tabla "cliente"
insert into clientes (nombre, telefono, email, mesa_id)
values
    ('sophie martin', '111-222-3333', 'sophie.m@example.com', 1),
    ('javier lópez', '444-555-6666', 'javier.lopez@example.com', 3),
    ('elena rossi', '777-888-9999', 'elena.rossi@example.com', 5),
    ('nico smith', '123-456-7890', 'nico.smith@example.com', 7),
    ('lena schmidt', '555-444-3333', 'lena.schmidt@example.com', 3),
    ('rafael garcía', '876-345-6789', 'rafael.garcia@example.com', 4),
    ('sofia patel', '999-888-7777', 'sofia.patel@example.com', 8),
    ('miguel rodrigues', '111-234-5678', 'miguel.rodrigues@example.com', 9);

-- insertar datos de ejemplo en la tabla "favoritos"
insert into favoritos (cliente_id, local_id)
values
    (1, 1),
    (1, 3),
    (2, 2),
    (3, 4),
    (4, 5),
    (2, 3),
    (3, 7),
    (5, 6);

-- consultas
-- todas las mesas ocupadas de un local en concreto, incluyendo los clientes
select
m.mesa_id,
l.nombre as "restaurante",
m.numero_mesa as "número de mesa",
m.numero_comensales as "número de comensales",
if (m.ocupada = 1, "ocupada", "no ocupada") as "estado",
c.nombre as "cliente",
c.telefono as "teléfono",
c.email as "email",
m.fecha_ocupacion as "fecha de ocupación"

from mesas m
inner join clientes c on m.mesa_id = c.mesa_id
inner join locales l on l.local_id = m.local_id 
where m.local_id = 1;

-- todos los locales marcados como favorito por un cliente, incluyendo la información del local y del cliente
select
l.nombre as "nombre del local",
l.direccion as "dirección",
l.telefono as "telefono del local",
l.responsable as "responsable",
if(l.abierto = 1, "abierto", "cerrado") as "estado",
c.nombre as "cliente",
c.telefono as "telefono del cliente",
c.email as "email del cliente"
from locales l
inner join favoritos f on l.local_id = f.local_id
inner join clientes c on f.cliente_id = c.cliente_id
;
