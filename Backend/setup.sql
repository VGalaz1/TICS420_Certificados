CREATE DATABASE login;
USE login;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  career_id INT NOT NULL,
  user_name VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  PRIMARY KEY (user_id)
);

INSERT INTO users (career_id, user_name, password) VALUES
(1, 'pefajardo@alumnos.uai.cl', 'abc123'),
(2, 'marbaeza@alumnos.uai.cl', '123456789');
