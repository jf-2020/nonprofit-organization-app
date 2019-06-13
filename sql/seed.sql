--create dummy students
INSERT INTO
	students (student_id, first_name, last_name, age, sponsorship, grades_id, money, link_id)
VALUES
 (1, 'Wells', 'Esby', 12, 'partial', null, 51.21, null),
 (2, 'Kristine', 'Camden', 8, 'full', null, 62.93, null),
 (3, 'Ansel', 'Brewett', 8, 'full', null, 97.48, null),
 (4, 'Fanny', 'Sidebottom', 8, 'partial', null, 73.28, null),
 (5, 'Kiel',' Southcomb', 9, 'partial', null, 57.74, null),
 (6, 'Bernadette', 'Yacobsohn', 12, 'partial', null, 61.72, null),
 (7, 'Niels', 'Blabie', 13, 'partial', null, 47.37, null),
 (8, 'Kaitlin', 'Whifen', 17, 'partial', null, 79.6, null),
 (9, 'Westbrooke', 'Steabler', 3, 'partial', null, 26.56, null),
 (10, 'Heall', 'Forstall', 10, 'full', null, 18.27, null),
 (11, 'Menard', 'Creelman', 2, 'full', null, 83.52, null),
 (12, 'Cassaundra', 'Sayre', 4, 'full', null, 46.37, null),
 (13, 'Kora', 'Dovidaitis', 10, 'full', null, 3.12, null),
 (14, 'Bibby', 'Kiezler', 16, 'full', null, 29.93, null),
 (15, 'Beverlie', 'Altimas', 3, 'full', null, 99.98, null),
 (16, 'Kendell', 'Nester', 16, 'partial', null, 14.62, null),
 (17, 'Hanan', 'Behnecke', 12, 'partial', null, 10.96, null),
 (18, 'Honoria', 'Iacapucci', 3, 'partial', null, 42.49, null),
 (19, 'Nestor', 'Daine', 17, 'full', null, 27.49, null),
 (20, 'Rosene', 'Kenward', 11, 'partial', null, 97.26, null);

--create dummy sponsors
INSERT INTO sponsors
	(sponsor_id, first_name, last_name, email, phone, 
		money_donated, date_paid, date_deposited, photo, link_id)
VALUES 
	(1, 'Lefty', 'Dulany', 'ldulany0@baidu.com', '839-496-7890', 2.30, '8/19/2018', '4/10/2019', 'http://dummyimage.com/32x32.jpg/cc0000/ffffff', null),
	(2, 'Charity', 'Sleith', 'csleith1@networksolutions.com', '313-745-9419', 0.52, '7/26/2018', '11/5/2018', 'http://dummyimage.com/32x32.png/5fa2dd/ffffff', null),
	(3, 'Milli', 'Gervaise', 'mgervaise2@independent.co.uk', '967-776-0008', 2.17, '11/1/2018', '3/21/2019', 'http://dummyimage.com/32x32.jpg/cc0000/ffffff', null),
	(4, 'Tabbie', 'Densun', 'tdensun3@chicagotribune.com', '168-960-0285', 8.89, '3/6/2019', '8/21/2018', 'http://dummyimage.com/32x32.bmp/dddddd/000000', null),
	(5, 'Vinny', 'Bassil', 'vbassil4@ihg.com', '853-854-2379', 3.58, '12/17/2018', '6/3/2019', 'http://dummyimage.com/32x32.bmp/5fa2dd/ffffff', null),
	(6, 'Oralie', 'Chuck', 'ochuck5@prweb.com', '693-803-0646', 6.97, '5/6/2019', '8/25/2018', 'http://dummyimage.com/32x32.bmp/5fa2dd/ffffff', null), 
	(7, 'Perice', 'Hawkeswood', 'phawkeswood6@1688.com', '823-366-7010', 2.10, '9/16/2018', '8/6/2018', 'http://dummyimage.com/32x32.jpg/cc0000/ffffff', null),
	(8, 'Jaimie', 'Ferriman', 'jferriman7@salon.com', '410-987-3798', 6.24, '6/30/2018', '3/2/2019', 'http://dummyimage.com/32x32.png/5fa2dd/ffffff', null), 
	(9, 'Dall', 'Jansey', 'djansey8@exblog.jp', '684-938-2700', 1.26, '4/16/2019', '1/24/2019', 'http://dummyimage.com/32x32.jpg/5fa2dd/ffffff', null), 
	(10, 'Romeo', 'Dragge', 'rdragge9@dailymail.co.uk', '545-463-2419', 1.52, '10/11/2018', '4/28/2019', 'http://dummyimage.com/32x32.png/ff4444/ffffff', null);

--create dummy users
INSERT INTO users
	(password, first_name, last_name, email, phone, photo, user_type)
VALUES
	('123', 'Liz', 'Aitken', 'liz_aitken@gmail.com', '555-555-5555', null, null),
	('123', 'Jack', 'Faulk', 'jack_faulk@gmail.com', '123-456-7890', null, null)
;