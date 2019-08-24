/***



**/

create database escuelaTecMTTY;
use escuelaTecMTTY;

create table alumnosInscritos
(matricula varchar(30),
nombre varchar(30),
apepat varchar(20),
apemat varchar(30),
fechaNac date,
turno enum('matutino', 'vespertino'),
grupo enum('A', 'B', 'C'),
grado enum('Primero', 'Segundo', 'Tercero'),
anioIngreso date,
estadoA enum('regular', 'irregular')
);

create table datosAlumno();
create table datosAcademicosA();
create table datosFinancierosA();
create table datosPadresA();
create table curriculas();
create table materias();
create table profesores();
create table becas();
create table calificaciones();
create table costosEscuela();
create table pagos();

