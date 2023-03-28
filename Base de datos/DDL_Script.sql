CREATE DATABASE IF NOT EXISTS INCOMEL;

USE INCOMEL;

CREATE TABLE USUARIO(
	`id` int NOT NULL AUTO_INCREMENT,
	`nombre` varchar(50) NOT NULL,
    `email` varchar(100) NOT NULL UNIQUE,
    `fecha_nacimiento` DATE NOT NULL,
    `password` varchar(50) NOT NULL,
    `fecha_creacion` DATETIME NOT NULL DEFAULT NOW(),
    `reset_password_code` varchar(100)  DEFAULT null,
    PRIMARY KEY (id)
);


CREATE TABLE EMPLEADO(
	`id` INT NOT NULL AUTO_INCREMENT,
	`dpi` VARCHAR(15) NOT NULL UNIQUE,
	`nombre_completo` VARCHAR(150) NOT NULL,
	`cantidad_de_hijos` TINYINT UNSIGNED NOT NULL,
	`salario_base` FLOAT NOT NULL,
	`bono_decreto` FLOAT NOT NULL DEFAULT 250.00,
	`deleted` boolean NOT NULL DEFAULT false,
	`fecha_creacion` DATETIME NOT NULL DEFAULT NOW(),
    `USUARIO_id` INT NOT NULL,
	PRIMARY KEY (`id`),
  CONSTRAINT `fk_EMPLEADO_USUARIO` FOREIGN KEY (`USUARIO_id`) REFERENCES USUARIO(id)
);

DELIMITER //
CREATE PROCEDURE DeleteEmpleado(In dpi varchar(15))
BEGIN 
    update EMPLEADO 
    set deleted = true 
    where EMPLEADO.dpi = dpi;
END//
DELIMITER ;
