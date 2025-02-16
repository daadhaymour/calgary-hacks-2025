-- DB creation --

DROP DATABASE IF EXISTS GREENERDB;
CREATE DATABASE GREENERDB;
USE GREENERDB;

-- Parks table
DROP TABLE IF EXISTS CALGARY_PARKS_INFO;
CREATE TABLE CALGARY_PARKS_INFO(
    ParkName VARCHAR(255) NOT NULL,
    Quadrant VARCHAR(255) NOT NULL,
    Task     VARCHAR(255)
);

-- query to insert data into CALGARY_PARKS_INFO
INSERT INTO CALGARY_PARKS_INFO(ParkName, Quadrant, Task) VALUES ('Prairie Winds Park', 'NE', 'Picnic'),
('Nose Hill Park', 'NW', 'Hiking'),
('Fish Creek Park', 'SE', 'Hiking'),
('Edworthy Park', 'SW', 'Picnic');