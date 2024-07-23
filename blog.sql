-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2024 at 09:59 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `address`, `email`, `image`, `name`, `phone`, `status`, `title`) VALUES
('0fb33a2e-3764-4375-af90-21f63de1fc3e', 'Maharashtra', 'Kunal@gmail.com', 'http://localhost:8080/contacts/image/0fb33a2e-3764-4375-af90-21f63de1fc3e.jpg', 'Kunal Kadam', '8960102995', 'Available', 'Softer'),
('1e22bc80-1b3a-444d-997e-b4b6c3d3c295', 'Dagadi chawl', 'PhoneRakh@kajrareNaina.com', 'http://localhost:8080/contacts/image/1e22bc80-1b3a-444d-997e-b4b6c3d3c295.jpg', 'Baburao Apte', '66666666', 'Available', 'Mechanic'),
('31d40706-9640-4711-9e34-76283f4c7121', 'Satara', 'shubhu@i2it.in', 'http://localhost:8080/contacts/image/31d40706-9640-4711-9e34-76283f4c7121.jpg', 'Shubham Patil', '899898989', 'Available', 'Wireman'),
('524d7fbf-6f70-488e-ba12-aaa3557fab1e', 'adfadfasf', 'chhaya26@gmail.com', 'http://localhost:8080/contacts/image/524d7fbf-6f70-488e-ba12-aaa3557fab1e.jpg', 'Shubhagi', '8999825028', 'Available', 'shubachhaya'),
('5fffd201-6930-4d87-a90a-51d94b879624', 'Dubai', 'Raju420@herapheri.in', 'http://localhost:8080/contacts/image/5fffd201-6930-4d87-a90a-51d94b879624.jpg', 'Raju', '4204204204', 'Unavailable', 'Entrepreneur'),
('690823ab-acdf-47b5-8941-f2109b4dbea9', 'Haryana', 'Selmon@boi.com', 'http://localhost:8080/contacts/image/690823ab-acdf-47b5-8941-f2109b4dbea9.jpg', 'Salman Khan', '2323232323', 'Available', 'Animal Rescuer'),
('8401b7cc-964a-4c4b-96e3-66d5532f9dbd', 'Maharashtra', 'adityajadhav@gmail.com', 'http://localhost:8080/contacts/image/8401b7cc-964a-4c4b-96e3-66d5532f9dbd.jpg', 'Aditya Anant Jadhav', '08999825028', 'Available', 'Coder'),
('fa23af83-8f8a-44a8-b3a9-518227652be3', 'Sangli', 'PeaceKeeper@gmail.com', 'http://localhost:8080/contacts/image/fa23af83-8f8a-44a8-b3a9-518227652be3.jpg', 'Kabir Singh', '8888888888', 'Unavailable', 'Feminism supporter');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
