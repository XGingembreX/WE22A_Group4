/*CREATE Database user_register;*/

/*Use user_register;*/

Create TABLE Members(
 id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  Userpassword VARCHAR(50),
  birth_date DATE NOT NULL
  );