-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2023 at 10:49 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sitco`
--

-- --------------------------------------------------------

--
-- Table structure for table `job_apply`
--

CREATE TABLE `job_apply` (
  `id` int(150) NOT NULL,
  `fname` varchar(250) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mobile` int(150) NOT NULL,
  `position` varchar(250) NOT NULL,
  `start_date` date NOT NULL,
  `status` varchar(250) NOT NULL,
  `exp` varchar(250) NOT NULL,
  `resume` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_apply`
--

INSERT INTO `job_apply` (`id`, `fname`, `lname`, `email`, `mobile`, `position`, `start_date`, `status`, `exp`, `resume`, `date`) VALUES
(1, 'as', 'asd', 'asd', 0, 'asd', '0000-00-00', 'asd', 'asd', 'asd', '0000-00-00 00:00:00'),
(2, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(3, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(4, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(5, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(6, 'AS', 'asdf', 'siya@gmail.com', 2147483647, 'asd', '2023-08-10', 'asdf', 'asd', 'des.png', '2023-08-18 05:50:07'),
(7, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-24', 'asdf', 'asd', 'prestigeshipping_loadkooduthal.sql', '2023-08-18 05:52:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job_apply`
--
ALTER TABLE `job_apply`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `job_apply`
--
ALTER TABLE `job_apply`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
