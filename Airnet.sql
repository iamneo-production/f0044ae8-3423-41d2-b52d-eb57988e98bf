
-- CREATE DATABASE Airnet;
-- SELECT * FROM sys.databases;  
-- SELECT * FROM INFORMATION_SCHEMA.TABLES;
use Airnet;
select * from Recharge;
-- delete from Recharge where RechargeId=999615;
-- create table Users(
-- 	Email nvarchar(50) primary key,
-- 	Password nvarchar(25),
-- 	Username nvarchar(25),
-- 	MobileNumber bigint,
-- 	UserRole nvarchar(15)
-- );

-- create table Login(
-- 	Email nvarchar(50) primary key ,
-- 	Password nvarchar(25),
-- );

-- create table Admin(
-- 	Email nvarchar(50) primary key,
-- 	Password nvarchar(25),
-- 	MobileNumber bigint,
-- 	UserRole nvarchar(15)
-- );

-- create table Plans(
-- 	PlanId int primary key,
-- 	PlanType nvarchar(50),
-- 	PlanName nvarchar(50),
-- 	PlanValidity nvarchar(50),
-- 	PlanDetails nvarchar(250),
-- 	PlanPrice nvarchar(10),
--  PlanOffers nvarchar(100)
-- );

-- create table Addon(
-- 	AddonId int primary key,
-- 	AddonName nvarchar(50),
-- 	AddonPrice int,
-- 	AddonDetails nvarchar(50),
-- 	AddonValidity int
-- );

-- create table Recharge(
-- 	RechargeId int primary key,
-- 	Rechargetype nvarchar(50) ,
-- 	Name nvarchar(25),
-- 	Mobile nvarchar(50),
-- 	Email nvarchar(50) ,
-- 	RechargePlan nvarchar(50),
-- 	RechargePrice int
-- )

-- Users
-- insert into Users values(
-- 	'test@gmail.com',
-- 	'Test@123',
-- 	'testuser',
-- 	'9876543210',
-- 	'user'
-- );
-- insert into Users values(
-- 	'admin@gmail.com',
-- 	'Admin@123',
-- 	'admin',
-- 	'9876543211',
-- 	'admin'
-- );

-- PLans

-- Insert into Plans values(
-- 	13121,
-- 	'PostPaid',
-- 	'Great Plan',
-- 	28,
-- 	'1.5GB Daily Data',
-- 	599,
-- 	'Netflix | Hotstar'
-- );
-- Insert into Plans values(
-- 	12121,
-- 	'PostPaid',
-- 	'Great Plan',
-- 	28,
-- 	'1.5GB Daily Data',
-- 	599,
-- 	'Netflix | Hotstar'
-- );
-- Insert into Plans values(
-- 	12122,
-- 	'PrePaid',
-- 	'Great Plan',
-- 	28,
-- 	'1.5GB Daily Data',
-- 	599,
-- 	'Netflix | Hotstar'
-- );


--Addons

-- Insert into Addon values(
-- 	12001,
-- 	'Double Cheese',
-- 	'200',
-- 	'50GB Data',28
-- );
-- Insert into Addon values(
-- 	12002,
-- 	'Forever Freak',
-- 	'159',
-- 	'30GB Data', 20
-- );
-- Insert into Addon values(
-- 	12003,
-- 	'New year Damakka',
-- 	'300',
-- 	'100GB Data',62
-- );
-- Insert into Addon values(
-- 	12004,
-- 	'WorkFrom Home',
-- 	'250',
-- 	'50GB Data',25
-- );
-- Insert into Addon values(
-- 	12005,
-- 	'Circket fever',
-- 	'100',
-- 	'20GB Data',
-- 	21
-- );
-- Insert into Addon values(
-- 	12006,
-- 	'Movie maze',
-- 	'50',
-- 	'10GB Data',
-- 	15
-- );