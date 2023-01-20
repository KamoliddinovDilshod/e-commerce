CREATE DATABASE exam;

\c exam

CREATE TABLE
    organization(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(100),
        professiya VARCHAR(200) NOT NULL,
        fullname VARCHAR(200) NOT NULL,
        phonenumber VARCHAR(20) NOT NULL,
        addnumber VARCHAR(20) NOT NULL
    );

CREATE TABLE
    post(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        image VARCHAR(500) NOT NULL,
        text VARCHAR(5000) NOT NULL
    );

CREATE TABLE
    time(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        fulldate TEXT NOT NULL ,
        hour TEXT NOT NULL ,
        sector VARCHAR(80) NOT NULL,
        species VARCHAR(80) NOT NULL,
        event VARCHAR(10) NOT NULL,
        link VARCHAR(300),
        status VARCHAR(20),
        organization_id BIGINT REFERENCES organization(id),
        post_id BIGINT REFERENCES post(id)
    );

CREATE TABLE
    admin(
        id SERIAL PRIMARY KEY NOT NULL,
        login VARCHAR(20) NOT NULL,
        parol VARCHAR(25) NOT NULL
    );

CREATE TABLE
    informationtechnology(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        value VARCHAR(50) NOT NULL
    );

CREATE TABLE
    design(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        value VARCHAR(50) NOT NULL
    );

CREATE TABLE
    biznes(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        value VARCHAR(50) NOT NULL
    );

CREATE TABLE
    education(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        value VARCHAR(50) NOT NULL
    );

CREATE TABLE
    sector(
        id BIGSERIAL PRIMARY KEY NOT NULL,
        informationtechnology BIGSERIAL REFERENCES informationtechnology(id),
        design BIGSERIAL REFERENCES design(id),
        biznes BIGSERIAL REFERENCES biznes(id),
        education BIGSERIAL REFERENCES education(id)
    );

INSERT INTO informationtechnology(value) VALUES('Web dasturlash');
INSERT INTO informationtechnology(value) VALUES('Mobile dasturlash');
INSERT INTO design(value) VALUES('UI/UX dizayn');
INSERT INTO design(value) VALUES('Grafik dizayn');
INSERT INTO biznes(value) VALUES('Menejment');
INSERT INTO biznes(value) VALUES('Kredit va audit');
INSERT INTO education(value) VALUES('Matematika');
INSERT INTO education(value) VALUES('Fizika');
INSERT INTO admin(login , parol) VALUES('admin' , 'adminsparol');