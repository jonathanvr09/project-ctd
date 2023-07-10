-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema 0523TDPRON2C01LAED1021PT_GRUPO7
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema 0523TDPRON2C01LAED1021PT_GRUPO7
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `0523TDPRON2C01LAED1021PT_GRUPO7` ;

-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `url` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 47
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`vehiculo` (
  `id_vehiculo` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(45) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `anio` INT NOT NULL,
  `precio_dia` INT NOT NULL,
  `id_categoria` INT NOT NULL,
  `url_imagen` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_vehiculo`),
  UNIQUE INDEX `placa_UNIQUE` (`placa` ASC) VISIBLE,
  UNIQUE INDEX `id_vehiculo_UNIQUE` (`id_vehiculo` ASC) VISIBLE,
  INDEX `fk_vehiculo_categoria1_idx` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `fk_vehiculo_categoria1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`categoria` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 66
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`estado_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`estado_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`tipo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`tipo_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `id_tipo_usuario` INT NULL DEFAULT NULL,
  `id_estado_usuario` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_usuario_tipousuario1_idx` (`id_tipo_usuario` ASC) VISIBLE,
  INDEX `fk_usuario_estadoUsuario1_idx` (`id_estado_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_estadoUsuario1`
    FOREIGN KEY (`id_estado_usuario`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`estado_usuario` (`id`),
  CONSTRAINT `fk_usuario_tipousuario1`
    FOREIGN KEY (`id_tipo_usuario`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`tipo_usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 51
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`calificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`calificacion` (
  `id_calificacion` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `calificacion` INT NOT NULL,
  PRIMARY KEY (`id_calificacion`),
  INDEX `fk_calificacion_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_calificacion_producto_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_calificacion_producto`
    FOREIGN KEY (`id_producto`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`vehiculo` (`id_vehiculo`),
  CONSTRAINT `fk_calificacion_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`usuario` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`estado_reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`estado_reserva` (
  `id_estado_reserva` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_estado_reserva`),
  UNIQUE INDEX `id_estado_UNIQUE` (`id_estado_reserva` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`medio_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`medio_pago` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `0523TDPRON2C01LAED1021PT_GRUPO7`.`reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `0523TDPRON2C01LAED1021PT_GRUPO7`.`reserva` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `id_usuario` INT NULL DEFAULT NULL,
  `id_vehiculo` INT NULL DEFAULT NULL,
  `id_medio_pago` INT NULL DEFAULT NULL,
  `id_estado_reserva` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_reserva_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_reserva_vehiculo1_idx` (`id_vehiculo` ASC) VISIBLE,
  INDEX `fk_reserva_usuario1_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_reserva_medio_pago_idx` (`id_medio_pago` ASC) VISIBLE,
  INDEX `fk_reserva_estado1_idx` (`id_estado_reserva` ASC) VISIBLE,
  CONSTRAINT `fk_reserva_estado1`
    FOREIGN KEY (`id_estado_reserva`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`estado_reserva` (`id_estado_reserva`),
  CONSTRAINT `fk_reserva_medio_pago`
    FOREIGN KEY (`id_medio_pago`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`medio_pago` (`id`),
  CONSTRAINT `fk_reserva_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`usuario` (`id_usuario`),
  CONSTRAINT `fk_reserva_vehiculo1`
    FOREIGN KEY (`id_vehiculo`)
    REFERENCES `0523TDPRON2C01LAED1021PT_GRUPO7`.`vehiculo` (`id_vehiculo`))
ENGINE = InnoDB
AUTO_INCREMENT = 31
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
