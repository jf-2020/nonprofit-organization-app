CREATE TABLE users (
    user_id         SERIAL             PRIMARY KEY    ,
    password        VARCHAR(100)                ,
    first_name         VARCHAR(50)                    ,
    last_name         VARCHAR(50)                    ,
    email             VARCHAR(200)                ,
    phone             VARCHAR(200)                ,
    photo             VARCHAR(500)                ,
    user_type         VARCHAR(30)
);

CREATE TABLE families (
    family_id                 SERIAL             PRIMARY KEY    ,
    name                     VARCHAR(50)                    ,
    size                     INT                            ,
    location                 VARCHAR(250)                ,
    church_affiliation         VARCHAR(100)
);

CREATE TABLE stores (
    store_id     SERIAL             PRIMARY KEY    ,
    name         VARCHAR(100)                ,
    location     VARCHAR(250)
);

CREATE TABLE schools (
    school_id     INT             PRIMARY KEY    ,
    name         VARCHAR(250)                ,
    address     VARCHAR(250)
);

CREATE TABLE grades (
    grade_id     SERIAL             PRIMARY KEY                        ,
    level         VARCHAR(30)                                        ,
    school_id     INT             REFERENCES schools (school_id)
);

CREATE TABLE sponsors (
    sponsor_id             SERIAL             PRIMARY KEY                            ,
    first_name             VARCHAR(255)                                        ,
    last_name             VARCHAR(255)                                        ,
    email                 VARCHAR(500)                                        ,
    phone                 VARCHAR(50)                                            ,
    money_donated         DECIMAL(8,2)                                        ,
    date_paid             VARCHAR(20)                                            ,
    date_deposited         VARCHAR(20)                                            ,
    photo                 VARCHAR(200)                                        ,
    link_id                INT
);

CREATE TABLE students (
    student_id         SERIAL             PRIMARY KEY                            ,
    first_name         VARCHAR(50)                                            ,
    last_name         VARCHAR(50)                                            ,
    age             INT                                                    ,                
    sponsorship     VARCHAR(30)                                            ,
    grades_id         INT                                                    ,
    money             DECIMAL(8,2)                                          ,
    student_photo     VARCHAR(200)                                      
);

CREATE TABLE supplies (
    supply_id         SERIAL             PRIMARY KEY                         ,
    supply_name     VARCHAR(100)                                     ,
    unit_cost        NUMERIC(8,2)                                     ,
    quantity         INT                                                 ,
    student_id         INT                REFERENCES students (student_id) ,
    store_id         INT                REFERENCES stores (store_id)      ,
    grade_id         INT                REFERENCES grades (grade_id)
);

CREATE TABLE links (
    link_id         SERIAL                PRIMARY KEY                            ,
    stores_id       INT                                                     ,
    students_id     INT                    REFERENCES students (student_id)    ,
    families_id     INT                    REFERENCES families (family_id)        ,
    sponsors_id        INT                    REFERENCES sponsors (sponsor_id)
);

CREATE TABLE todo (
    todo_id         SERIAL              PRIMARY KEY            ,
    todo_text       VARCHAR(500)                                ,
    due_date        VARCHAR(20)                                 ,
    date_completed  VARCHAR(20)                                 ,
    people_assigned VARCHAR(250)                                
);