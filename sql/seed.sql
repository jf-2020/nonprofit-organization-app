--create some students
INSERT INTO students (student_id,first_name,last_name,age,sponsorship,grades_id,money,link_id)
VALUES
(1,'Wells','Esby',12,'partial',null,51.21,null),
(2,'Kristine','Camden',8,'full',null,62.93,null),
(3,'Ansel','Brewett',8,'full',null,97.48,null),
(4,'Fanny','Sidebottom',8,'partial',null,73.28,null),
(5,'Kiel','Southcomb',9,'partial',null,57.74,null),
(6,'Bernadette','Yacobsohn',12,'partial',null,61.72,null),
(7,'Niels','Blabie',13,'partial',null,47.37,null),
(8,'Kaitlin','Whifen',17,'partial',null,79.6,null),
(9,'Westbrooke','Steabler',3,'partial',null,26.56,null),
(10,'Heall','Forstall',10,'full',null,18.27,null),
(11,'Menard','Creelman',2,'full',null,83.52,null),
(12,'Cassaundra','Sayre',4,'full',null,46.37,null),
(13,'Kora','Dovidaitis',10,'full',null,3.12,null),
(14,'Bibby','Kiezler',16,'full',null,29.93,null),
(15,'Beverlie','Altimas',3,'full',null,99.98,null),
(16,'Kendell','Nester',16,'partial',null,14.62,null),
(17,'Hanan','Behnecke',12,'partial',null,10.96,null),
(18,'Honoria','Iacapucci',3,'partial',null,42.49,null),
(19,'Nestor','Daine',17,'full',null,27.49,null),
(20,'Rosene','Kenward',11,'partial',null,97.26,null);

--create some users
INSERT INTO users
	(password, first_name, last_name, email, phone, photo, user_type)
VALUES
	('123', 'Liz', 'Aitken', 'liz_aitken@gmail.com', '555-555-5555', null, null),
	('123', 'Jack', 'Faulk', 'jack_faulk@gmail.com', '123-456-7890', null, null)
;

--create some families
insert into families (family_id, name, size, location, money, church_affiliation) values (1, 'Colicot', 14, '9459 Schmedeman Street', 929.19, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (2, 'Heffernan', 18, '236 Clarendon Terrace', 316.16, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (3, 'Everett', 22, '8 Nobel Park', 623.08, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (4, 'Bunney', 10, '29 Rieder Street', 657.5, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (5, 'Toplin', 20, '9 Kingsford Trail', 500.4, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (6, 'Rown', 10, '69180 Fremont Park', 202.55, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (7, 'Paal', 8, '0864 Ramsey Court', 261.38, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (8, 'Alvarez', 22, '64245 Ronald Regan Alley', 80.6, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (9, 'Shipston', 17, '4330 Vernon Circle', 590.43, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (10, 'Rief', 13, '8 Acker Point', 631.33, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (11, 'Kitchiner', 23, '20 Granby Trail', 403.81, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (12, 'Brash', 9, '06 Toban Place', 703.04, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (13, 'Turvey', 24, '2 Union Alley', 399.35, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (14, 'Dury', 8, '466 Anhalt Point', 359.44, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (15, 'Espinola', 11, '4137 Clyde Gallagher Hill', 891.31, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (16, 'Livzey', 18, '19865 Ryan Road', 842.55, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (17, 'Tring', 10, '0 Badeau Street', 23.03, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (18, 'Tyrie', 20, '65 Upham Point', 614.47, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (19, 'Saben', 6, '98218 Lakewood Point', 440.82, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (20, 'Pessold', 9, '7119 Huxley Terrace', 723.78, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (21, 'McKinstry', 13, '686 Ryan Center', 425.09, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (22, 'McCormick', 1, '69777 Jay Road', 975.94, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (23, 'Collard', 16, '975 Jana Lane', 982.69, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (24, 'Keeney', 25, '4587 Valley Edge Pass', 499.08, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (25, 'Gotling', 18, '818 Meadow Vale Terrace', 123.12, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (26, 'Saurin', 9, '05201 Sunbrook Alley', 276.1, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (27, 'Sherme', 13, '17899 Debra Crossing', 232.05, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (28, 'Phillimore', 13, '50734 Schmedeman Circle', 734.21, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (29, 'Wilsone', 21, '26 Kenwood Plaza', 298.54, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (30, 'Dusting', 17, '4 Mifflin Street', 869.98, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (31, 'Meric', 4, '68273 Clove Avenue', 48.51, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (32, 'Vigar', 13, '62615 Veith Place', 785.78, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (33, 'Skillington', 22, '32602 Mcguire Circle', 857.37, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (34, 'Hoyland', 4, '2227 Wayridge Street', 63.22, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (35, 'Winger', 21, '395 Kim Road', 527.91, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (36, 'Rennard', 8, '0067 Holmberg Pass', 982.18, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (37, 'Normanville', 5, '02789 Twin Pines Plaza', 191.18, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (38, 'Hanning', 8, '1237 Thierer Way', 170.87, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (39, 'Gane', 23, '082 Loftsgordon Alley', 847.58, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (40, 'Normanvill', 7, '2863 Meadow Vale Hill', 766.07, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (41, 'Remnant', 3, '552 Goodland Street', 586.72, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (42, 'Binne', 16, '403 Bluestem Junction', 873.58, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (43, 'Hancell', 18, '53779 Longview Avenue', 468.98, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (44, 'Cartin', 15, '273 Victoria Alley', 640.93, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (45, 'Hatherill', 4, '6 Judy Hill', 666.02, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (46, 'Pooke', 16, '868 Hoard Point', 866.84, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (47, 'Rubinfeld', 9, '0 Eagle Crest Center', 205.08, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (48, 'Drinkel', 11, '302 Monterey Center', 38.39, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (49, 'Cope', 18, '4157 Dunning Place', 604.56, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (50, 'Sherwell', 18, '56 Merchant Street', 497.45, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (51, 'Bilovsky', 14, '3548 Columbus Park', 659.16, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (52, 'Brugemann', 11, '6 Jenna Crossing', 820.26, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (53, 'Kerbler', 23, '6 Namekagon Park', 934.32, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (54, 'Mawman', 10, '8 American Center', 405.22, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (55, 'Cotte', 4, '899 Coolidge Street', 619.76, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (56, 'Dimock', 23, '626 Delaware Court', 261.4, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (57, 'Sedgmond', 20, '12826 Ridgeway Avenue', 462.22, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (58, 'Mayhou', 25, '9 Fulton Terrace', 837.85, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (59, 'Nazer', 4, '484 La Follette Alley', 203.32, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (60, 'Paddy', 21, '8 1st Terrace', 721.78, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (61, 'Golde', 12, '2 Summit Street', 995.1, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (62, 'Luc', 9, '24 Johnson Street', 300.5, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (63, 'Tockell', 5, '2332 Sherman Center', 705.84, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (64, 'Rickhuss', 14, '4 Kipling Parkway', 935.92, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (65, 'Bemlott', 3, '9465 Sunfield Park', 56.88, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (66, 'Adess', 5, '0 Sommers Park', 834.11, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (67, 'Urian', 4, '49 Ridgeway Court', 180.44, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (68, 'Willavize', 21, '04708 Loomis Crossing', 463.02, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (69, 'Micklewicz', 11, '736 Tony Drive', 459.07, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (70, 'Conen', 5, '81324 Kingsford Trail', 758.23, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (71, 'Thynne', 5, '2 Hansons Park', 416.94, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (72, 'Wetheril', 18, '85 Bonner Court', 599.89, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (73, 'Keeltagh', 9, '4 Stang Park', 489.81, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (74, 'Le Grove', 23, '0310 Marcy Trail', 877.26, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (75, 'Portingale', 17, '0794 Red Cloud Lane', 809.48, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (76, 'Gamlyn', 25, '7153 Maple Court', 550.0, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (77, 'Barraclough', 4, '1066 School Drive', 324.34, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (78, 'Coult', 18, '54 Vidon Plaza', 874.94, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (79, 'McCloud', 12, '1 Almo Avenue', 675.33, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (80, 'Mailes', 25, '48 Miller Junction', 621.21, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (81, 'Chance', 12, '8743 Weeping Birch Parkway', 10.81, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (82, 'Driver', 10, '58 Summit Circle', 382.2, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (83, 'Goldstein', 11, '6 Superior Terrace', 422.99, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (84, 'McGillivrie', 14, '77 Debra Hill', 633.78, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (85, 'Cattermole', 12, '98 Straubel Court', 912.92, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (86, 'Erickson', 13, '27679 Ridge Oak Way', 726.67, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (87, 'Payler', 18, '3799 Holy Cross Way', 106.9, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (88, 'Churchouse', 17, '98 Evergreen Circle', 633.69, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (89, 'Daw', 23, '7665 Arizona Circle', 620.62, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (90, 'Jordan', 23, '72327 Eastlawn Lane', 995.18, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (91, 'McIlhone', 5, '25978 Memorial Circle', 701.75, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (92, 'Lorenzo', 8, '8 Waywood Hill', 448.93, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (93, 'Cherrington', 9, '2 Myrtle Terrace', 796.32, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (94, 'Paton', 1, '47 Portage Court', 393.32, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (95, 'Marchment', 12, '98365 Debs Place', 296.45, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (96, 'Purver', 22, '81 Stoughton Hill', 807.47, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (97, 'Toolan', 24, '41340 Old Gate Crossing', 985.76, 'VBS');
insert into families (family_id, name, size, location, money, church_affiliation) values (98, 'Lewisham', 1, '66472 Dunning Road', 827.41, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (99, 'Hedingham', 8, '063 Browning Alley', 325.64, 'regular member');
insert into families (family_id, name, size, location, money, church_affiliation) values (100, 'MacCleod', 20, '56168 Express Point', 471.78, 'regular member');