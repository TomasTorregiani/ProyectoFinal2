-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-11-2024 a las 00:21:16
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `flowing`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

DROP TABLE IF EXISTS `actividades`;
CREATE TABLE IF NOT EXISTS `actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clase` varchar(100) NOT NULL,
  `costo` int NOT NULL,
  `sede` varchar(250) NOT NULL,
  `img` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `clase`, `costo`, `sede`, `img`) VALUES
(1, 'Natacion', 30000, 'Ciudad,\r\nHuerto', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfI2LDw4qaH9QClSSZqlunKSTTj9NB-vnaGg&s'),
(2, 'Funcional', 25000, 'Huerto, Rio', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMI6syMrOTowPI6SK0EEIOlGmUkTZjUg_AA&s'),
(3, 'Crossfit', 28000, 'Ciudad, Naval', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFPFiVaTwwE4x2f3dPEwgCKbbcs45FH37YA&s'),
(4, 'Running', 22000, 'Rio', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuypDs7jVXKTeDQx_0QbMfcmuWrdPNQBMGBQ&s');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(300) NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(14, 'Probando ', 'Probando', 'Mostrando Novedades', 'qgg3ooza90klhgb2sifz'),
(13, 'Nueva Novedad', 'Agregue una nueva novedad', 'Logo Flowing', 'ocs4prngbwedi5fwhn0j'),
(15, 'Aumento en el Precio de las Clases de Natación', 'Nuevas tarifas a partir de diciembre', 'Informamos a nuestros alumnos y familias que, debido a ajustes en los costos operativos y de mantenimiento, las tarifas de las clases de natación se verán modificadas a partir del mes de diciembre.\r\n\r\nEste aumento es necesario para garantizar la calidad de las instalaciones y la continuidad de las actividades con el mismo nivel de excelencia que caracteriza a nuestras clases.\r\n\r\nAgradecemos su comprensión y compromiso. Para más información, no duden en comunicarse con la administración.', 'fzmkqpfun0qyowui3mny'),
(17, 'asd', 'asd', 'asd', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `producto` varchar(50) NOT NULL,
  `precio` int NOT NULL,
  `stock` int DEFAULT NULL,
  `img` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `producto`, `precio`, `stock`, `img`) VALUES
(1, 'antiparras', 1500, 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33P5lwfwgWRoCMyF6t0Upgpn46wbvKkY-bg&s'),
(2, 'gorra natacion', 1800, 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbi2ByWJFrC3vC-fM-a49Pk5V0JYiBdp0Hww&s'),
(3, 'malla natacion', 2200, 7, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsyhZLdiEU8haOMeTwUptcJ193ASfXjSfMQ&s');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profes`
--

DROP TABLE IF EXISTS `profes`;
CREATE TABLE IF NOT EXISTS `profes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Mail` varchar(50) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profes`
--

INSERT INTO `profes` (`id`, `Nombre`, `Apellido`, `Mail`, `img`) VALUES
(1, 'Juan', 'Charin', 'juan_cha@gmail.com', 'https://img.pikbest.com/origin/09/22/84/76zpIkbEsTfwR.jpeg!w700wp'),
(2, 'Cecilia', 'Lopez', 'cicelopez@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJ2AZ7rFkcowBCe8lxeiy-GOiVdXqIk1Auw&s'),
(3, 'Lucas', 'Sammartino', 'luquisammartin@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyI80S1tgnWJO1uy3Ba9sVBdSYvkvHf6xhXw&s'),
(4, 'Tomas', 'Torregiani', 'tomitorre91@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QFWI0NVE8btz3b4gSaqvBwLGcB4g6sGaag&s'),
(5, 'Eri', 'Contable', 'erikacon@gmai.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEksiB4oorTGiMPrRJHf-oXLU6_hQIgvJvA&s'),
(6, 'Danila', 'Nose', 'danila@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYyL5XTERMTWhsIlfd09YPET9tc8B0FBynA&s');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Tomas', '68634cb716e2d4439c025b934970fec9'),
(2, 'Felipe', '68634cb716e2d4439c025b934970fec9'),
(3, 'Mateo', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
