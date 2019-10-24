
DROP DATABASE IF EXISTS `bbddBancoSebastian`;

CREATE DATABASE IF NOT EXISTS `bbddBancoSebastian`;

USE `bbddBancoSebastian`;

CREATE TABLE IF NOT EXISTS `bbddBancoSebastian`.`saldo` (
  `idsaldo` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(45) NOT NULL,
  `saldo` REAL NOT NULL,
  PRIMARY KEY (`idsaldo`)
)ENGINE = InnoDB;

CREATE TABLE `movimientos` (
  `idmovimientos` int NOT NULL AUTO_INCREMENT,
  `concepto` varchar(45) NOT NULL,
  `cantidad` double NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `idsaldo` int NOT NULL,
  PRIMARY KEY (`idmovimientos`),
  FOREIGN KEY (`idsaldo`) REFERENCES `saldo` (`idsaldo`)
) ENGINE=InnoDB;

insert into saldo values(null,'Sebastian',1000);

insert into movimientos values(null,'ingreso', 1000.50,'mi primer ingreso','1');
insert into movimientos values(null,'Transferencia', -200.10,'mi primera transferencia','1');
insert into movimientos values(null,'Retirada', -100,'mi primera retirada de dinero','1');


SELECT * FROM movimientos;
SELECT * FROM saldo;
