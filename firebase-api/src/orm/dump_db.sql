CREATE TABLE `clients` (
  `id` varchar(255) PRIMARY KEY,
  `lastname` varchar(255),
  `firstname` varchar(255),
  `email_address` varchar(255),
  `address` varchar(255),
  `postcode` varchar(255),
  `country_iso_code` varchar(3) DEFAULT "FRA",
  `created_at` datetime NOT NULL DEFAULT (now())
);

CREATE TABLE `banking_informations` (
  `id` varchar(255) PRIMARY KEY,
  `client_id` varchar(255),
  `card_number` varchar(255),
  `cryptogram` varchar(255),
  `expires_at` varchar(255),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE `bills` (
  `id` varchar(255) PRIMARY KEY,
  `total_price` int,
  `is_paid` boolean DEFAULT 0,
  `paid_at` datetime,
  `client_id` varchar(255),
  `emitted_at` datetime NOT NULL DEFAULT (now()),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE `products` (
  `id` varchar(255) PRIMARY KEY,
  `brand` varchar(255),
  `model` varchar(255),
  `photo` varchar(255),
  `unit_price` int,
  `is_available` boolean,
  `stock` int
);

CREATE TABLE `bills_products` (
  `bill_id` varchar(255),
  `product_id` varchar(255),
  `quantity` int,
  FOREIGN KEY (bill_id) REFERENCES bills(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- ALTER TABLE `banking_information` ADD FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

-- ALTER TABLE `bills` ADD FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

-- ALTER TABLE `bills_products` ADD FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`);

-- ALTER TABLE `bills_products` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
