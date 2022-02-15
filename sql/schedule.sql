create database schedule;

use schedule;

create table category
(
    category_id int not null primary key,
    icon varchar (500)
);

create table events
(
	event_id int primary key not null, 
	title varchar(250),
	start_date datetime, 
	end_date datetime, 
	create_date datetime, 
	update_date datetime, 
	publishe_date datetime, 
	description varchar(500),
	email varchar(500),
	website varchar(500), 
	phone varchar(20),
	address varchar (200),
	category_id int,
	location_name varchar (200),
	foreign key (category_id) references category (category_id)
);

create table category_events
(
	event_id int,
	category_id int,
	category_events_id int primary key not null,
	foreign key (category_id) references category (category_id),
	foreign key (event_id) references events (event_id)
);

create table tags
(
	tags_id int primary key not null,
	title varchar (200),
	icon varchar (500)
);

create table events_tags
(
	event_id int,
	events_tags_id int primary key not null,
	tags_id int,
	foreign key (event_id) references events (event_id),
	foreign key (tags_id) references tags (tags_id)
);

show tables ;




