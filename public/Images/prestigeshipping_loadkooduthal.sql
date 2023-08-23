-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 12, 2023 at 12:10 AM
-- Server version: 5.7.42-cll-lve
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prestigeshipping_loadkooduthal`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `role` varchar(250) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `reference` varchar(100) NOT NULL,
  `status` varchar(150) NOT NULL,
  `admin_image` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `role`, `name`, `username`, `password`, `email`, `phone`, `reference`, `status`, `admin_image`, `date`) VALUES
(4, 'admin', 'Prestige Shipping', 'admin', '4d39a8142be4699be6acceb1d983df53', 'info@prestigeshipping.com.sg', '+65 82681080', '', '', '', '2017-02-17');

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE `quote` (
  `id` int(150) NOT NULL,
  `name` varchar(150) NOT NULL DEFAULT '',
  `email` varchar(150) NOT NULL DEFAULT '',
  `service` varchar(150) NOT NULL DEFAULT '',
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(150) NOT NULL,
  `title` varchar(150) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `image` varchar(150) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `title`, `description`, `image`) VALUES
(1, 'Ship Chartering & Shipping Operations', '<p>We have an experienced international network of ship owners, operators and shipbrokers that know the most suitable positions for your cargo and will ensure speedy and timely deployment of the vessels.<br></p>', '1605351037.jpg'),
(2, 'Global Freight Forwarding', '<p align=\"justify\"><span style=\"text-align: left;\">Our freight forwarding services are available in every continent and every country.Â  We have a developed network of independent forwarders in terms of scope and reach and our network is truly global and highly effective.</span></p><p align=\"justify\">We enjoy economies of scale and can afford cost savings to your company through attractive service contracts with the major ocean carriers.</p><p align=\"justify\"><b>Exports & Imports for FCL or LCL</b></p><p align=\"justify\">We provide the best rates and service standards to manage your companyâ€™s exports or imports for Full Container Load (FCL) or Loose Container Load (LCL) shipments.</p><p align=\"justify\"><b>Cross Trade Freight Forwarding</b></p><p align=\"justify\">Our cross trading spans many geographical regions through our developed network.</p><p align=\"justify\">a.Â  Correct switching of shipping documents.</p><p align=\"justify\">b.Â  Cost advantage freight rates</p><p align=\"justify\">c.Â  Service coordination between origin and destination and /or cross trading point with best in class cargo trackingÂ  for our customer</p>', '1605350956.jpg'),
(3, 'Intl Door to Door Indonesia / Malaysia / Vietnam / India', '<p>Our company provides international door to door deliveries to any global destination for documents and cargo.</p><p>a.&nbsp; Competitive pricing and best in class service standards with a single point of contact for assured information flow and cargo tracking.</p><p>b.&nbsp; Available for documents from as light as 0.1kg to cargo as heavy with weightage of a few tonnes.</p><p>c.&nbsp; Truly cost effective business solutions for all your shipment and cargo needs.</p>', '1605351421.jpg'),
(4, 'Customs Clearance Import & Export Permits', '<p style=\"border: 0px; vertical-align: baseline; background: rgb(244, 244, 242); margin-right: 0px; margin-bottom: 20px; margin-left: 0px; padding: 0px; line-height: 2;\" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;\"=\"\"><font color=\"#444444\"><span style=\"font-size: 13px;\">Our company has the capability to meet all your businessâ€™ custom and permit requirements in Singapore. Our experienced operations staff will ensure timeliness, accuracy and diligence for all your business clearance needs. We can help to procure the following permits for your company:</span></font></p><ul><li style=\"border: 0px; vertical-align: baseline; background: rgb(244, 244, 242); margin-right: 0px; margin-bottom: 20px; margin-left: 0px; padding: 0px; line-height: 2;\"><font color=\"#444444\"><span style=\"font-size: 13px;\">Import Container Permit (FCL or LCL)</span></font></li><li style=\"border: 0px; vertical-align: baseline; background: rgb(244, 244, 242); margin-right: 0px; margin-bottom: 20px; margin-left: 0px; padding: 0px; line-height: 2;\"><font color=\"#444444\"><span style=\"font-size: 13px;\">Export Container Permit (FCL or LCL)</span></font></li><li style=\"border: 0px; vertical-align: baseline; background: rgb(244, 244, 242); margin-right: 0px; margin-bottom: 20px; margin-left: 0px; padding: 0px; line-height: 2;\"><font color=\"#444444\"><span style=\"font-size: 13px;\">Tran-shipment Container Permit</span></font></li><li style=\"border: 0px; vertical-align: baseline; background: rgb(244, 244, 242); margin-right: 0px; margin-bottom: 20px; margin-left: 0px; padding: 0px; line-height: 2;\"><font color=\"#444444\"><span style=\"font-size: 13px;\">Dangerous Cargoes in Containers Permit</span></font></li></ul>', '1605351551.jpg'),
(5, 'Moving', '<p>We provide the following&nbsp;</p><p>1. International Moves</p><p>2. Domestic Moving â€“ Packing</p><p>3. Storage</p><div><br></div>', '1605610430.jpg'),
(6, 'Relocation', '<p>1. International Relocation</p><p>2. Destination Services</p><p>3. Storage</p><div><br></div>', '1669280444.png');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(150) NOT NULL,
  `title` varchar(200) NOT NULL DEFAULT '',
  `description` mediumtext NOT NULL,
  `image` varchar(150) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `title`, `description`, `image`) VALUES
(2, 'World Best', '<p>Global Freight Forwarding<br></p>', '1691475288.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `quote`
--
ALTER TABLE `quote`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `quote`
--
ALTER TABLE `quote`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
