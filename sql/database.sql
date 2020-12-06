drop database IF EXISTS heroku_fb41df5eff76aba; 

create database heroku_fb41df5eff76aba;

use heroku_fb41df5eff76aba;

create table usuarios(
    idusuario int not null AUTO_INCREMENT,
    nombre varchar(50) not null,
    apellidos varchar(60) not null,
    telefono varchar(10) not null,
    domicilio varchar(50) not null,
    tipo varchar(1) not null,
    PRIMARY KEY(idusuario)    
);

create table ventas(
    idventa int not null AUTO_INCREMENT,
    idusuario int not null,
    descripcion text not null,
    montoventa float not null,
    fecha date not null,
    hora time not null,
    PRIMARY KEY (idventa),
    FOREIGN KEY (idusuario) REFERENCES usuarios(idusuario)
);

create table cortecaja(
    idcorte int not null AUTO_INCREMENT,
    idusuario int not null,
    monto float not null,
    fecha date not null,
    hora time not null,
    descripcion text not null,
    PRIMARY KEY (idcorte),
    FOREIGN KEY (idusuario) REFERENCES usuarios(idusuario)
);

create table piezapollo(
    idpieza int not null AUTO_INCREMENT,
    nombre varchar(20) not null,
    precio float not null,
    existencias int not null,
    PRIMARY KEY (idpieza)
);

create table ventapiezapollo(
    idventa int not null,
    idpieza int not null,
    FOREIGN KEY (idventa) REFERENCES ventas(idventa),
    FOREIGN KEY (idpieza) REFERENCES piezapollo(idpieza)
);

create table informes(
    idinforme int not null AUTO_INCREMENT,
    tipo varchar(1) not null,
    descripcion text not null,
    PRIMARY KEY (idinforme)
);

create table infoventas(
    idinfoventa int not null,
    idventa int not null,
    FOREIGN KEY (idinfoventa) REFERENCES informes(idinforme),
    FOREIGN KEY (idventa) REFERENCES ventas(idventa)
);

create table infocorte(
    idinfocorte int not null,
    idcorte int not null,
    FOREIGN KEY (idinfocorte) REFERENCES informes(idinforme),
    FOREIGN KEY (idcorte) REFERENCES cortecaja(idcorte)
);

create table infoinventario(
    idinventario int not null,
    idpieza int not null,
    FOREIGN KEY (idinventario) REFERENCES informes(idinforme),
    FOREIGN KEY (idpieza) REFERENCES piezapollo(idpieza)
);

INSERT INTO usuarios (nombre, apellidos, telefono, domicilio, tipo) VALUES
("Salvador", "Acevedo Bonilla", "3512346545", "Lopez Rayon 34", "C"),
("Juan", "Perez Pradp", "3456546786", "Michoacan 89", "C"),
("Pedro", "Rodriguez Gonzalez", "6578123567", "Javier Mina 32", "A");

INSERT INTO ventas (idusuario, descripcion, montoventa, fecha, hora) VALUES
(1, " 1KG Pierna", 85, "2020-11-17", "09:30:10"),
(1,"1KG ala", 45, "2020-11-17", "09:30:10");

INSERT INTO piezapollo (nombre, precio, existencias) VALUES
("pechuga", 85, 10),
("ala", 45, 20),
("pierna", 75, 20),
("pata", 30, 20);

INSERT INTO cortecaja(idusuario, monto, fecha, hora, descripcion) VALUES
(1, 130, "2020-11-17", "10:00:00", "1KG Pierna $85.00\n 1KG Ala $45.00\n Total: $130.00");

--Piernas, muslos, alas, patas, pechuga, hígados, molleja HOla
--mysql -h localhost -u root -p

--Herokumysql://bb93c626648c28:99618098@us-cdbr-east-02.cleardb.com/heroku_fb41df5eff76aba?reconnect=true
--Usuario: bb93c626648c28
--Contraseña: 99618098 @
---Host: us-cdbr-east-02.cleardb.com/
--Name: heroku_fb41df5eff76aba
--?reconnect=true