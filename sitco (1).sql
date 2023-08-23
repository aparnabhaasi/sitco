-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2023 at 06:11 AM
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
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `description`) VALUES
(1, '', 'asdfghjkl;sadsdgrbgvg\r\nsedghhjk\r\nasjkhj\r\nasdfghjk\r\nasdfghj');

-- --------------------------------------------------------

--
-- Table structure for table `about_client`
--

CREATE TABLE `about_client` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_client`
--

INSERT INTO `about_client` (`id`, `title`, `image`) VALUES
(1, 'Sitco', 'ac1.jpg'),
(2, 'Sitco', 'img12.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `about_gallery`
--

CREATE TABLE `about_gallery` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_gallery`
--

INSERT INTO `about_gallery` (`id`, `title`, `image`) VALUES
(19, 'Construction', 'jeffrey-blum-7-gaPkhIgqs-unsplash.jpg'),
(20, 'Construction', 'b.jpg'),
(21, 'Construction', 'c.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `about_project`
--

CREATE TABLE `about_project` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_project`
--

INSERT INTO `about_project` (`id`, `title`, `image`) VALUES
(17, 'Construction', 'a.jpg'),
(18, 'Construction', 'b.jpg'),
(19, 'Construction', 'c.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(150) NOT NULL,
  `role` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` int(11) NOT NULL,
  `admin_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `role`, `name`, `username`, `password`, `email`, `phone`, `admin_image`) VALUES
(1, 'Admin', 'Admin', 'aparnabhaasi@gmail.com', 'admin', 'admin@gmail.com', 884876767, '');

-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE `career` (
  `c_id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `location` varchar(250) NOT NULL,
  `experience` varchar(250) NOT NULL,
  `salary` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`c_id`, `title`, `location`, `experience`, `salary`, `description`) VALUES
(2, 'Architect', 'Kochi', '0-1', '18000', 'Passionate architect');

-- --------------------------------------------------------

--
-- Table structure for table `job_apply`
--

CREATE TABLE `job_apply` (
  `apply_id` int(150) NOT NULL,
  `c_id` int(150) NOT NULL,
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

INSERT INTO `job_apply` (`apply_id`, `c_id`, `fname`, `lname`, `email`, `mobile`, `position`, `start_date`, `status`, `exp`, `resume`, `date`) VALUES
(1, 2, 'Asha', 'John', 'ash@gmail.com', 884807676, 'Architect', '2023-12-12', 'Unemployed', '0', 'a.jpg', '2023-08-21 10:33:40'),
(2, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(3, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(4, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(5, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-23', 'asdf', 'asd', 'asdf', '2023-08-16 18:30:00'),
(6, 0, 'AS', 'asdf', 'siya@gmail.com', 2147483647, 'asd', '2023-08-10', 'asdf', 'asd', 'des.png', '2023-08-18 05:50:07'),
(7, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-24', 'asdf', 'asd', 'prestigeshipping_loadkooduthal.sql', '2023-08-18 05:52:37'),
(8, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-08', 'asdf', 'asd', 'des.png', '2023-08-18 08:50:06'),
(9, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-08', 'asdf', 'asd', 'des.png', '2023-08-18 08:50:08'),
(10, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-22', 'asdf', 'asd', 'job_apply.sql', '2023-08-18 08:50:53'),
(11, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-22', 'asdf', 'asd', 'job_apply.sql', '2023-08-18 08:50:55'),
(12, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-16', 'asdf', 'asd', 'job_apply.sql', '2023-08-18 08:51:53'),
(13, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-16', 'asdf', 'asd', 'job_apply.sql', '2023-08-18 08:51:54'),
(14, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-16', 'asdf', 'asd', 'job_apply.sql', '2023-08-18 08:51:54'),
(15, 0, 'Arsha', 'asdf', 'aparnabhaasi@gmail.com', 2147483647, 'asd', '2023-08-16', 'asdf', 'asd', 'job_apply.sql', '2023-08-18 08:51:55'),
(16, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:37'),
(17, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:38'),
(18, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:38'),
(19, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:38'),
(20, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:47'),
(21, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:47'),
(22, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:18:47'),
(23, 0, '', '', '', 0, '', '0000-00-00', '', '', 'favicon.png', '2023-08-21 05:19:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_client`
--
ALTER TABLE `about_client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_gallery`
--
ALTER TABLE `about_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_project`
--
ALTER TABLE `about_project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `job_apply`
--
ALTER TABLE `job_apply`
  ADD PRIMARY KEY (`apply_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_client`
--
ALTER TABLE `about_client`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `about_gallery`
--
ALTER TABLE `about_gallery`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `about_project`
--
ALTER TABLE `about_project`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `career`
--
ALTER TABLE `career`
  MODIFY `c_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `job_apply`
--
ALTER TABLE `job_apply`
  MODIFY `apply_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
