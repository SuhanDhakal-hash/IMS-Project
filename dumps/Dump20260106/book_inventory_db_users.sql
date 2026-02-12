-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: book_inventory_db
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(2,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(3,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(4,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(5,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(6,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(7,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(8,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(9,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(10,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(11,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(12,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(13,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(14,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(15,'Suhan Dhakal','suhandhakal65@gmail.com','123456'),(16,'test','test@test.com','test'),(17,'kakarot','kakarot@kakarot.com','$2y$10$fm743v2mGEQRWhLOdJKt6.VNLb4Fk8pUucMqQ2Rpcwesyaa1CDp/y'),(18,'user','user@user.com','$2y$10$MwUiSsiboiyX5qInsSQA/OMOAABKSoRgQr34CEp2J4l75u0Cxav52'),(19,'aman','aman@aman.com','$2y$10$u2FWrOBv5yKqvzC/vE9vtunBO8ch1a6eCkDVrvk.H.VwB8CSb17KC'),(20,'Suhan Dhakal','suhan@test.com','$2y$10$X7/aTYeRbnNu9PqnrF7hvOAx9wnNX4xd/XzMHCd5qsJlRgxVW8kxm'),(21,'binod','binod@1.com','$2y$10$nbAFyCwLw.QhBVq8Lo4AnOCSH7vZupoGalET4W3.Ayh/CcRCA/MUq'),(22,'bishnu','bishnu1@bishnu.com','$2y$10$t7Qs4BL0znqtbKYDrSdP8Ohr9bWgERExNi1gshmUXRSuOOUoTEeDG');
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

-- Dump completed on 2026-01-06  8:29:05
