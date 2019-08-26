/***



**/

create database escuelaTecMTTY;
use escuelaTecMTTY;

create table datosAspirante(
folioAspirante int,
nombre varchar(30),
apepat varchar(20),
apemat varchar(30),
email varchar(30),
direccion varchar(40),
gradoIngreso enum('Primero', 'Segundo', 'Tercero'),
PRIMARY KEY (folioAspirante)
);

create table datosAcademicosA(
folioAspirante int,
curp longblob,
actaNacimiento longblob,
comprobanteDom longblob,
certificadoPrimaria longblob,
certificadoSecundaria longblob,
foto longblob,
FOREIGN KEY (folioAspirante) references datosAspirante(folioAspirante)
);

create table datosFinancierosA(
folioAspirante int,
montoIngresoM float (10),
direccion varchar(40),
cantidadHerm int,
cantidadPCasa int,
padreTutor varchar(30),
FOREIGN KEY (folioAspirante) references datosAspirante(datosAspirante),
FOREIGN KEY (direccion) references datosAspirante(direccion)
);

create table alumnosInscritos(
matriculaAlumno varchar(30),
nombre varchar(30),
apepat varchar(20),
apemat varchar(30),
fechaNac date,
genero enum ('Masculino', 'Femenino'),
turno enum('matutino', 'vespertino'),
grupo enum('A', 'B', 'C'),
grado enum('Primero', 'Segundo', 'Tercero'),
anioIngreso date,
estadoA enum('regular', 'irregular'),
promedio float(10) NULL
);

create table datosPadresA(
    matriculaAlumno varchar(30),
    nombrePadre varchar(30),
    apepatPadre varchar(20),
    apematPadre varchar(30),
    parentesco varchar(20),
    celular varchar (10),
    direccion varchar(40),
    FOREIGN KEY (matriculaAlumno) references alumnosInscritos(matriculaAlumno)
);


create table curriculas(
  folioCurricula int,
  idMateria int (10),
  grado enum('Primero', 'Segundo', 'Tercero'),
    FOREIGN KEY (idMateria) references materias(idMateria),
    PRIMARY KEY(folioCurricula),
    FOREIGN KEY (grado) references alumnosInscrito(grado)

);

CREATE TABLE profesores(
noCuenta varchar (10),
nombre varchar(30),
apepat varchar(20),
apemat varchar (20),
genero varchar (15),
mpioProcedencia varchar (20),
tipo varchar (10),
PRIMARY KEY (noCuenta));

CREATE TABLE materias(
nombre varchar (20),
idMateria int (10),
turno varchar (10),
cantAlumnos int (10),
creditos int (10),
noCuentaProfesor varchar (10),
PRIMARY KEY (idMateria),
FOREIGN KEY (noCuentaProfesor) references profesores(noCuenta));

create table becas(
    tipoBeca enum ('100%', '75%', '50%', '25%', 'Ninguna')
    matriculaAlumno varchar(30),
    FOREIGN KEY (matriculaAlumno) references alumnosInscritos(matriculaAlumno);
);

CREATE TABLE calificaciones(
folio int (10),
fecha date,
cal1P float (10),
cal2P float (10),
ordinario float (10),
estado varchar (10),
idMateria int (10),
noCuentaProfesor varchar (10),
noCuentaAlumno varchar (10),
PRIMARY KEY (folio),
FOREIGN KEY (idMateria) references materias(idMateria),
FOREIGN KEY (noCuentaProfesor) references profesores(noCuenta),
FOREIGN KEY (noCuentaAlumno) references alumnos(noCuenta));

create table costosEscuela(
  costoInscripcion float(10),
  costoMensualidad float(10)  
);
create table pagos(
    folioPago int,
    tipoPago enum('Inscripcion', 'Mensualidad'),
    monto float(10),
    fechaPago datetime,
    matriculaAlumno varchar(30),
    tipoBeca enum ('100%', '75%', '50%', '25%', 'Ninguna')
    FOREIGN KEY (matriculaAlumno) references alumnosInscritos(matriculaAlumno),
    FOREIGN KEY (tipoBeca) references becas(tipoBeca);
);

