use Airnet;

create table Users(
	Email nvarchar(50) primary key,
	Password nvarchar(25),
	Username nvarchar(25),
	MobileNumber bigint,
	UserRole nvarchar(15)
);

SELECT * FROM INFORMATION_SCHEMA.TABLES;

create table Login(
	Email nvarchar(50) primary key ,
	Password nvarchar(25),
);

create table Admin(
	Email nvarchar(50) primary key,
	Password nvarchar(25),
	MobileNumber bigint,
	UserRole nvarchar(15)
);

create table Plans(
	PlanId int primary key,
	PlanType nvarchar(50),
	PlanName nvarchar(50),
	PlanValidity nvarchar(50),
	PlanDetails nvarchar(250),
	PlanPrice nvarchar(10),
 PlanOffers nvarchar(100)
);

create table Addon(
	AddonId int primary key,
	AddonName nvarchar(50),
	AddonPrice int,
	AddonDetails nvarchar(50),
	AddonValidity int
);

create table Recharge(
	RechargeId int primary key,
	Rechargetype nvarchar(50) ,
	Name nvarchar(25),
	Mobile nvarchar(50),
	Email nvarchar(50) ,
	RechargePlan nvarchar(50),
	RechargePrice int
)



Insert into Plans values(
	13121,
	'PostPaid',
	'Great Plan',
	28,
	'1.5GB Daily Data',
	599,
	'Netflix | Hotstar'
);
Insert into Plans values(
	12121,
	'PostPaid',
	'Great Plan',
	28,
	'1.5GB Daily Data',
	599,
	'Netflix | Hotstar'
);
Insert into Plans values(
	12122,
	'PostPaid',
	'Great Plan',
	28,
	'1.5GB Daily Data',
	599,
	'Netflix | Hotstar'
);