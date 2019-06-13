CREATE TABLE users (
	user_id 		SERIAL 			PRIMARY KEY	,
	password		VARCHAR(100)				,
	first_name 		VARCHAR(50)					,
	last_name 		VARCHAR(50)					,
	email 			VARCHAR(200)				,
	phone 			VARCHAR(200)				,
	photo 			VARCHAR(500)				,
	user_type 		INT
);

CREATE TABLE families (
	family_id 				SERIAL 			PRIMARY KEY	,
	name 					VARCHAR(50)					,
	size 					INT							,
	location 				VARCHAR(250)				,
	money 					DECIMAL(8,2)				,
	church_affiliation 		VARCHAR(100)
);

CREATE TABLE stores (
	store_id 	SERIAL 			PRIMARY KEY	,
	name 		VARCHAR(100)				,
	location 	VARCHAR(250)
);

CREATE TABLE schools (
	school_id 	INT 			PRIMARY KEY	,
	name 		VARCHAR(250)				,
	address 	VARCHAR(250)
);

CREATE TABLE items (
	item_list_id	SERIAL	PRIMARY KEY
);

CREATE TABLE grades (
	grade_id 	SERIAL 			PRIMARY KEY						,
	level 		VARCHAR(30)										,
	items_id 	INT 			REFERENCES items (item_list_id)	,
	school_id 	INT 			REFERENCES schools (school_id)
);

CREATE TABLE links (
    link_id         SERIAL             PRIMARY KEY  ,
    stores_id       INT                             ,
    students_id     INT                             ,
    families_id     INT
);

CREATE TABLE sponsors (
	sponsor_id 			SERIAL 			PRIMARY KEY							,
	first_name 			VARCHAR(255)										,
	last_name 			VARCHAR(255)										,
	email 				VARCHAR(500)										,
	phone 				VARCHAR(50)											,
	money_donated 		DECIMAL(8,2)										,
	date_paid 			DATE												,
	date_deposited 		DATE												,
	photo 				VARCHAR(200)										,
	link_id				INT				REFERENCES links (link_id)
);

CREATE TABLE students (
	student_id 		SERIAL 			PRIMARY KEY							,
	first_name 		VARCHAR(50)											,
	last_name 		VARCHAR(50)											,
	age 			INT													,				
	sponsorship 	VARCHAR(30)											,
	grades_id 		INT													,
	money 			DECIMAL(8,2)										,
	link_id 		INT 			REFERENCES links (link_id)
);

CREATE TABLE supplies (
	supply_id 		SERIAL 			PRIMARY KEY						,
	product_name 	VARCHAR(100)									,
	price 			DECIMAL(8,2)									,
	quantity 		INT												,
	link_id 		INT 			REFERENCES links (link_id)
);