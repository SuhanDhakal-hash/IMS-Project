CREATE DATABASE book_inventory_db;
USE book_inventory_db;

CREATE TABLE Admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    is_admin BOOLEAN
);

 CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);


CREATE TABLE Category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Book (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150),
    category_id INT,
    quantity INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);


CREATE TABLE Payment (
    p_id INT AUTO_INCREMENT PRIMARY KEY,
    p_name VARCHAR(100),
    method VARCHAR(50),
    p_date DATE
);


CREATE TABLE Sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    book_id INT,
    p_id INT,
    quantity INT,
    sale_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (p_id) REFERENCES Payment(p_id)
);

CREATE TABLE Inventory (
    inventory_id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT,
    price DECIMAL(10,2),
    quantity INT,
    FOREIGN KEY (book_id) REFERENCES Book(book_id)
);


CREATE TABLE Supplier (
    sid INT AUTO_INCREMENT PRIMARY KEY,
    sname VARCHAR(100),
    address VARCHAR(150),
    email VARCHAR(100),
    phone VARCHAR(15)
);


CREATE TABLE Purchase (
    purchase_id INT AUTO_INCREMENT PRIMARY KEY,
    sid INT,
    book_id INT,
    quantity INT,
    p_date DATE,
    FOREIGN KEY (sid) REFERENCES Supplier(sid),
    FOREIGN KEY (book_id) REFERENCES Book(book_id)
);



