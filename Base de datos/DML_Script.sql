-- Insertar en tabla USUARIOS
USE INCOMEL;

INSERT INTO USUARIO(nombre, email, fecha_nacimiento, password) 
VALUES 
    ('Raul Fernandez', "raulf@gmail.com", '1990-10-5', '1234abc'), 
    ('Carlos Orantes', "carlosorantes77@gmail.com", '1993-09-15', '1234abc');

    
select * froM USUARIO;


-- Insertar en tabla EMPLEADOS

INSERT INTO EMPLEADO(dpi, nombre_completo, cantidad_de_hijos, salario_base, USUARIO_id) 
VALUES('2349576560101', 'Maria dolores España', 5, 5200.20, 1);
SELECT * FROM EMPLEADO;