-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2020 at 03:53 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas_phonebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `biodata`
--

CREATE TABLE `biodata` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phone_num` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `biodata`
--

INSERT INTO `biodata` (`id`, `fullname`, `phone_num`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'orang_1', '0810001', 'seseorang_1@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'orang_3', '0810003', 'seseorang_3@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'orang_4', '0810004', 'seseorang_4@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'orang_5', '0810005', 'seseorang_5@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'orang_6', '0810006', 'seseorang_6@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'orang_7', '0810007', 'seseorang_7@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'orang_8', '0810008', 'seseorang_8@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'orang_9', '0810009', 'seseorang_9@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'orang_10', '0810010', 'seseorang_10@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'orang_11', '0810011', 'seseorang_11@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'orang_12', '0810012', 'seseorang_12@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'orang_13', '0810013', 'seseorang_13@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'manusia_1', '0810001', 'email_manusia1_@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'manusia_2', '0810002', 'email_manusia_2@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'manusia_3', '0810003', 'email_manusia_3@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'manusia_4', '0810004', 'email_manusia_4@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'manusia_5', '0810005', 'email_manusia_5@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'manusia_6', '0810006', 'email_manusia_6@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'manusia_7', '0810007', 'email_manusia_7@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'manusia_8', '0810008', 'email_manusia_8@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'manusia_9', '0810009', 'email_manusia_9@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'manusia_10', '0810010', 'email_manusia_10@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'manusia_11', '0810011', 'email_manusia_11@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'seseorang', '123123', 'mail@gmail.com', '2020-10-07 02:00:04', '2020-10-07 02:00:04'),
(26, 'nomor 26', '12321', 'example@gmail.com', '2020-10-07 10:27:28', '2020-10-07 10:27:28'),
(27, 'baruuu', '123123', 'example@gmail.com', '2020-10-07 10:28:40', '2020-10-07 10:28:40'),
(28, 'baruuu', '123123', 'example@gmail.com', '2020-10-07 10:29:05', '2020-10-07 10:29:05'),
(29, 'baruuu', '123123', 'example@gmail.com', '2020-10-07 10:30:22', '2020-10-07 10:30:22'),
(30, 'asnd yuhu berhasi di edit', 'ansdoa', 'example@gmail.com', '2020-10-07 10:31:01', '2020-10-08 01:42:06'),
(31, 'asnd baru lagi niiii', 'adslanslkdasd', 'example@gmail.com', '2020-10-07 10:31:17', '2020-10-08 01:43:39'),
(32, 'asnd', 'ansdoa', 'example@gmail.com', '2020-10-07 10:32:56', '2020-10-07 10:32:56'),
(43, 'nama lengkap', 'pasti ebrhasil', 'example@gmail.com', '2020-10-07 10:41:00', '2020-10-07 10:41:00'),
(44, 'nama lengkap', 'pasti ebrhasil', 'example@gmail.com', '2020-10-07 10:41:43', '2020-10-07 10:41:43'),
(46, 'udin penyok', '0912309128390', 'udinpenyok@gmail.com', '2020-10-07 13:30:42', '2020-10-07 13:30:42'),
(47, 'manusia_1', '0810001', 'email_manusia1_@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 'manusia_2', '0810002', 'email_manusia_2@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'manusia_3', '0810003', 'email_manusia_3@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 'manusia_4', '0810004', 'email_manusia_4@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 'manusia_5', '0810005', 'email_manusia_5@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 'manusia_6', '0810006', 'email_manusia_6@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 'manusia_7', '0810007', 'email_manusia_7@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 'manusia_8', '0810008', 'email_manusia_8@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 'manusia_9', '0810009', 'email_manusia_9@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 'manusia_10', '0810010', 'email_manusia_10@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 'manusia_11', '0810011', 'email_manusia_11@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 'manusia_1', '0810001', 'email_manusia1_@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 'manusia_2', '0810002', 'email_manusia_2@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 'manusia_3', '0810003', 'email_manusia_3@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 'manusia_4', '0810004', 'email_manusia_4@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 'manusia_5', '0810005', 'email_manusia_5@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 'manusia_6', '0810006', 'email_manusia_6@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 'manusia_7', '0810007', 'email_manusia_7@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 'manusia_8', '0810008', 'email_manusia_8@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 'manusia_9', '0810009', 'email_manusia_9@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 'manusia_10', '0810010', 'email_manusia_10@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 'manusia_11', '0810011', 'email_manusia_11@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 'manusia_1', '0810001', 'email_manusia1_@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, 'manusia_2', '0810002', 'email_manusia_2@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 'manusia_3', '0810003', 'email_manusia_3@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 'manusia_4', '0810004', 'email_manusia_4@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, 'manusia_5', '0810005', 'email_manusia_5@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 'manusia_6', '0810006', 'email_manusia_6@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 'manusia_7', '0810007', 'email_manusia_7@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 'manusia_8', '0810008', 'email_manusia_8@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 'manusia_9', '0810009', 'email_manusia_9@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 'manusia_10', '0810010', 'email_manusia_10@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 'manusia_11', '0810011', 'email_manusia_11@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201006021609-create-biodata.js'),
('20201008002251-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `admin`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@admin.com', '$2b$10$kz6/S2nCkWHscz/N9DdMXu5wl0o/t4VUMnhE2GIhGvvX/te2GYM7q', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biodata`
--
ALTER TABLE `biodata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biodata`
--
ALTER TABLE `biodata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
