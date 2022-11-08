CREATE DATABASE  IF NOT EXISTS `y4xhe4o8w0311ozz` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `y4xhe4o8w0311ozz`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: y4xhe4o8w0311ozz
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20220914044215-role.js'),('20220914044228-type.js'),('20220914044243-brand.js'),('20220914044338-category.js'),('20220914044420-product.js'),('20220914044446-user.js'),('20220914044502-domicilio.js'),('20220914044600-shopping-cart.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'EVGA','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'Western Digital','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'Kingston','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'AMD','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'HyperX','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'Logitech','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'Cooler Master','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'hardware','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'audioVideo','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'mouseTeclado','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicilios`
--

DROP TABLE IF EXISTS `domicilios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domicilios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `localidad` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `domicilios_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicilios`
--

LOCK TABLES `domicilios` WRITE;
/*!40000 ALTER TABLE `domicilios` DISABLE KEYS */;
INSERT INTO `domicilios` VALUES (2,'Administrador','De Ninetech',1,5,'2022-09-14 05:50:50','2022-09-14 05:50:50'),(3,'Lujan','Av Flandes',200,6,'2022-09-15 05:14:11','2022-09-15 05:14:11');
/*!40000 ALTER TABLE `domicilios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `enOferta` int(11) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `type_id` (`type_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'PLACA DE VIDEO EVGA GTX 1660 SUPER SC ULTRA 6GB',75000,1,20,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','gtx 1660.jpg',1,2,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE',8000,1,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','disco hdd.jpg',1,5,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'DISCO SOLIDO SSD 240GB KINGSTON A400 SATA III',6000,1,20,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','disco ssd.jpg',1,6,3,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4',38000,0,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','cpu ryzen.jpg',1,1,4,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'TECLADO MECANICO HYPERX ALLOY FPS PRO',13000,0,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','teclado hyperx.jpg',3,8,5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'AURICULAR HYPERX CLOUD ALPHA',17000,0,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','auriculares hyperx.jpg',2,8,5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'AURICULAR INALAMBRICO LOGITECH G G733',27000,0,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','auriculares logitech.jpg',2,8,6,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'MOUSE COOLER MASTER MM711',6000,NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','mouse cooler master.jpg',3,8,7,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(9,'FUENTE COOLER MASTER 850W V2 80+ GOLD FULL MODULAR',35000,NULL,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lorem et nisl ornare hendrerit ac vel odio. Maecenas condimentum viverra urna, eu bibendum leo blandit eget. Sed fringilla lobortis diam, malesuada tempus mauris placerat a. Ut dignissim arcu dui, ut tempor magna elementum ac. Sed vehicula justo sapien, sit amet cursus nulla tincidunt vel. Vivamus eleifend lacus id nunc iaculis, mollis tempor eros varius. Vivamus consectetur vulputate tincidunt. Phasellus ligula urna, tristique a suscipit in, lobortis vitae erat. Nulla at tellus elit.','fuente cooler master.jpg',1,3,7,'0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'admin','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'cpu','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'gpu','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'fuente','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'ram','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'hdd','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'ssd','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'motherboard','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'periferico','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profilePic` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Usuario','Administrador','admin@ninetech.com','$2a$10$VgjjeT4SCJKe.f5f5pT5FOMquBFnjH55semD8jleg53g3s1f5A54.','default.jpg','$2a$10$ddrmY6n0T11wEg56qzbnDOL/XeHk.t4YSfZNQj1rPQXOsYkWeYjIa',2,'2022-09-14 05:50:50','2022-09-14 05:50:50'),(6,'Santiago','Mitidiero','santimiti10@gmail.com','$2a$10$ANmIktA3aAvqXRP8EexXNOgEsn1ZrSX6TcvhJWt42OkAghYkfRCH6','default.jpg','$2a$10$wTDtE41MGHf/pMnAMgnLvOudRNkXJt5UG85Nvu4ulgURPseXuNE0m',2,'2022-09-15 05:14:11','2022-09-15 05:14:11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-02 22:39:30
