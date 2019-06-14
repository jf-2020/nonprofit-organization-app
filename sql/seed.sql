--create dummy students
INSERT INTO
	students (student_id, first_name, last_name, age, sponsorship, grades_id, money, link_id)
VALUES
	(1, 'Wells', 'Esby', 12, 'partial', null, 51.21, 1),
	(2, 'Kristine', 'Camden', 8, 'full', null, 62.93, 2),
	(3, 'Ansel', 'Brewett', 8, 'full', null, 97.48, 3),
	(4, 'Fanny', 'Sidebottom', 8, 'partial', null, 73.28, 4),
	(5, 'Kiel',' Southcomb', 9, 'partial', null, 57.74, 5),
	(6, 'Bernadette', 'Yacobsohn', 12, 'partial', null, 61.72, 1),
	(7, 'Niels', 'Blabie', 13, 'partial', null, 47.37, 2),
	(8, 'Kaitlin', 'Whifen', 17, 'partial', null, 79.6, 3),
	(9, 'Westbrooke', 'Steabler', 3, 'partial', null, 26.56, 4),
	(10, 'Heall', 'Forstall', 10, 'full', null, 18.27, 5),
	(11, 'Menard', 'Creelman', 2, 'full', null, 83.52, 1),
	(12, 'Cassaundra', 'Sayre', 4, 'full', null, 46.37, 2),
	(13, 'Kora', 'Dovidaitis', 10, 'full', null, 3.12, 3),
	(14, 'Bibby', 'Kiezler', 16, 'full', null, 29.93, 4),
	(15, 'Beverlie', 'Altimas', 3, 'full', null, 99.98, 5),
	(16, 'Kendell', 'Nester', 16, 'partial', null, 14.62, 6),
	(17, 'Hanan', 'Behnecke', 12, 'partial', null, 10.96, 7),
	(18, 'Honoria', 'Iacapucci', 3, 'partial', null, 42.49, 8),
	(19, 'Nestor', 'Daine', 17, 'full', null, 27.49, 9),
	(20, 'Rosene', 'Kenward', 11, 'partial', null, 97.26, 10);

--create dummy sponsors
INSERT INTO sponsors
	(sponsor_id, first_name, last_name, email, phone, money_donated, date_paid, date_deposited, photo, link_id)
VALUES 
	(1, 'Lefty', 'Dulany', 'ldulany0@baidu.com', '839-496-7890', 2.30, '8/19/2018', '4/10/2019', 'http://dummyimage.com/32x32.jpg/cc0000/ffffff', 1),
	(2, 'Charity', 'Sleith', 'csleith1@networksolutions.com', '313-745-9419', 0.52, '7/26/2018', '11/5/2018', 'http://dummyimage.com/32x32.png/5fa2dd/ffffff', 2),
	(3, 'Milli', 'Gervaise', 'mgervaise2@independent.co.uk', '967-776-0008', 2.17, '11/1/2018', '3/21/2019', 'http://dummyimage.com/32x32.jpg/cc0000/ffffff', 3),
	(4, 'Tabbie', 'Densun', 'tdensun3@chicagotribune.com', '168-960-0285', 8.89, '3/6/2019', '8/21/2018', 'http://dummyimage.com/32x32.bmp/dddddd/000000', 4),
	(5, 'Vinny', 'Bassil', 'vbassil4@ihg.com', '853-854-2379', 3.58, '12/17/2018', '6/3/2019', 'http://dummyimage.com/32x32.bmp/5fa2dd/ffffff', 5),
	(6, 'Oralie', 'Chuck', 'ochuck5@prweb.com', '693-803-0646', 6.97, '5/6/2019', '8/25/2018', 'http://dummyimage.com/32x32.bmp/5fa2dd/ffffff', 6), 
	(7, 'Perice', 'Hawkeswood', 'phawkeswood6@1688.com', '823-366-7010', 2.10, '9/16/2018', '8/6/2018', 'http://dummyimage.com/32x32.jpg/cc0000/ffffff', 7),
	(8, 'Jaimie', 'Ferriman', 'jferriman7@salon.com', '410-987-3798', 6.24, '6/30/2018', '3/2/2019', 'http://dummyimage.com/32x32.png/5fa2dd/ffffff', 8), 
	(9, 'Dall', 'Jansey', 'djansey8@exblog.jp', '684-938-2700', 1.26, '4/16/2019', '1/24/2019', 'http://dummyimage.com/32x32.jpg/5fa2dd/ffffff', 9), 
	(10, 'Romeo', 'Dragge', 'rdragge9@dailymail.co.uk', '545-463-2419', 1.52, '10/11/2018', '4/28/2019', 'http://dummyimage.com/32x32.png/ff4444/ffffff', 10);

--create dummy users
INSERT INTO users
	(password, first_name, last_name, email, phone, photo, user_type)
VALUES
	('123', 'Liz', 'Aitken', 'liz_aitken@gmail.com', '555-555-5555', null, null),
	('123', 'Jack', 'Faulk', 'jack_faulk@gmail.com', '123-456-7890', null, null);

--create dummy families
INSERT INTO families
	(family_id, name, size, location, money, church_affiliation)
VALUES 
	(1, 'Colicot', 14, '9459 Schmedeman Street', 929.19, 'regular member'),
	(2, 'Heffernan', 18, '236 Clarendon Terrace', 316.16, 'VBS'),
	(3, 'Everett', 22, '8 Nobel Park', 623.08, 'VBS'),
	(4, 'Bunney', 10, '29 Rieder Street', 657.5, 'regular member'),
	(5, 'Toplin', 20, '9 Kingsford Trail', 500.4, 'regular member'),
	(6, 'Rown', 10, '69180 Fremont Park', 202.55, 'regular member'),
	(7, 'Paal', 8, '0864 Ramsey Court', 261.38, 'VBS'),
	(8, 'Alvarez', 22, '64245 Ronald Regan Alley', 80.6, 'regular member'),
	(9, 'Shipston', 17, '4330 Vernon Circle', 590.43, 'VBS'),
	(10, 'Rief', 13, '8 Acker Point', 631.33, 'regular member');

-- data for links table
INSERT INTO links
	(link_id, stores_id, students_id, families_id, sponsors_id)
VALUES
	(1, 5, 17, 1, 1),
	(2, 3, 15, 2, 2),
	(3, 4, 16, 3, 3),
	(4, 3, 19, 1, 4),
	(5, 3, 18, 2, 1),
	(6, 4, 2, 3, 2),
	(7, 1, 10, 1, 3),
	(8, 4, 4, 1, 4),
	(9, 4, 12, 2, 1),
	(10, 5, 16, 3, 2),
	(11, 5, 14, 4, 3),
	(12, 4, 2, 5, 4),
	(13, 5, 8, 6, 1),
	(14, 3, 11, 4, 2),
	(15, 3, 15, 5, 3),
	(16, 5, 11, 6, 4),
	(17, 1, 15, 7, 1),
	(18, 4, 9, 8, 2),
	(19, 1, 14, 9, 3),
	(20, 5, 15, 7, 4),
	(21, 2, 7, 8, 1),
	(22, 4, 20, 9, 2),
	(23, 4, 2, 10, 3),
	(24, 2, 8, 10, 4),
	(25, 5, 6, 10, 1);