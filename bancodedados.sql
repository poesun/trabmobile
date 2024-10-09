CREATE TABLE usuarios_localizacao (
    email VARCHAR(50) PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    lat DECIMAL(9,6),
    longitude DECIMAL(9,6),
    tempo TIMESTAMP DEFAULT NULL
);
