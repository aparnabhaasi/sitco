-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2023 at 09:56 AM
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
  `qualification` varchar(250) NOT NULL,
  `salary` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`c_id`, `title`, `location`, `experience`, `qualification`, `salary`, `description`) VALUES
(7, 'Jr Architect', 'Kochi', '0-1', 'B.tech', '20000', 'work under the direct supervision of an Architect or Lead Designer, helping to prepare designs, complete construction documents, write up building plans, and assist in the presentation of materials');

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
  `mobile` varchar(150) NOT NULL,
  `position` varchar(250) NOT NULL,
  `start_date` date NOT NULL,
  `status` varchar(250) NOT NULL,
  `exp` varchar(250) NOT NULL,
  `resume` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `qualification` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_apply`
--

INSERT INTO `job_apply` (`apply_id`, `c_id`, `fname`, `lname`, `email`, `mobile`, `position`, `start_date`, `status`, `exp`, `resume`, `date`, `qualification`) VALUES
(30, 7, 'Ashna', 's', 'aparnabhaasi@gmail.com', '08848076776', 'Btech', '1996-06-10', 'Unemployed', '0', 'pdf1.pdf', '2023-08-22 10:30:45', '');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(150) NOT NULL,
  `image` text NOT NULL,
  `name` varchar(250) NOT NULL,
  `designation` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `image`, `name`, `designation`, `description`) VALUES
(3, 'a.jpg', 'John Smith', 'Sr Architect', 'Designing innovative and sustainable solutions.'),
(4, 'b.jpg', 'Asha ', 'Project manager', 'Overseeing project execution and ensuring seamless coordination.'),
(5, 'c.jpg', 'Mr. Smith', 'Jr Architect', 'Designing innovative and sustainable solutions.'),
(6, 'd.jpg', 'Ash S ', 'Project manager', 'Overseeing project execution and ensuring seamless coordination.');

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
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `c_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `job_apply`
--
ALTER TABLE `job_apply`
  MODIFY `apply_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
