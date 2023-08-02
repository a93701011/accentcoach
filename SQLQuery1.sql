/****** Object:  Database [synapsesqldatabase]    Script Date: 2023/8/2 下午 09:13:30 ******/
CREATE DATABASE [synapsesqldatabase]  (EDITION = 'Standard', SERVICE_OBJECTIVE = 'S0', MAXSIZE = 250 GB) WITH CATALOG_COLLATION = SQL_Latin1_General_CP1_CI_AS, LEDGER = OFF;
GO
ALTER DATABASE [synapsesqldatabase] SET COMPATIBILITY_LEVEL = 150
GO
ALTER DATABASE [synapsesqldatabase] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET ARITHABORT OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [synapsesqldatabase] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [synapsesqldatabase] SET ALLOW_SNAPSHOT_ISOLATION ON 
GO
ALTER DATABASE [synapsesqldatabase] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [synapsesqldatabase] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [synapsesqldatabase] SET  MULTI_USER 
GO
ALTER DATABASE [synapsesqldatabase] SET ENCRYPTION ON
GO
ALTER DATABASE [synapsesqldatabase] SET QUERY_STORE = ON
GO
ALTER DATABASE [synapsesqldatabase] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 100, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
/*** The scripts of database scoped configurations in Azure should be executed inside the target database connection. ***/
GO
-- ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 8;
GO
/****** Object:  Table [dbo].[accentcoach_bookings]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accentcoach_bookings](
	[orderid] [varchar](64) NULL,
	[username] [nvarchar](24) NULL,
	[phone] [varchar](30) NULL,
	[email] [varchar](64) NULL,
	[itemname] [nvarchar](64) NULL,
	[amount] [int] NULL,
	[bookingdate] [datetime] NULL,
	[created_datetime] [datetime] NULL,
	[previous_orderid] [int] NULL,
	[payment_completed_datetime] [datetime] NULL,
	[bookstatus] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[accentcoach_epaycallback]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accentcoach_epaycallback](
	[MerchantTradeNo] [varchar](64) NULL,
	[RtnCode] [int] NULL,
	[RtnMsg] [varchar](200) NULL,
	[TradeAmt] [int] NULL,
	[TradeNo] [varchar](64) NULL,
	[PaymentDate] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[accentcoach_newsletter]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accentcoach_newsletter](
	[email] [varchar](64) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[accentcoach_timesheet]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accentcoach_timesheet](
	[teacherid] [int] NULL,
	[opendatetime] [datetime] NULL,
	[status] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[accentcoach_users]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accentcoach_users](
	[userid] [int] NULL,
	[username] [nvarchar](24) NULL,
	[password] [nvarchar](64) NOT NULL,
	[phone] [varchar](30) NULL,
	[email] [varchar](64) NULL,
	[created_datetime] [datetime] NULL,
	[status] [char](1) NULL,
	[email_verified] [char](1) NULL,
	[phone_verified] [char](1) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOREM_CLICKS_REQUEST]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOREM_CLICKS_REQUEST](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[requestid] [bigint] NOT NULL,
	[address] [varchar](128) NOT NULL,
	[tokenid] [varchar](128) NULL,
	[trait] [varchar](128) NULL,
	[originaltraitvalue] [varchar](128) NULL,
	[requesttraitvalue] [varchar](128) NULL,
	[sig] [varchar](256) NULL,
	[clicks] [varchar](128) NULL,
	[requestaction] [varchar](256) NULL,
	[createddatetime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOREM_CLICKS_REQUEST_20220907]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOREM_CLICKS_REQUEST_20220907](
	[address] [varchar](128) NOT NULL,
	[tokenid] [varchar](128) NULL,
	[trait] [varchar](128) NULL,
	[originaltraitvalue] [varchar](128) NULL,
	[requesttraitvalue] [varchar](128) NULL,
	[sig] [varchar](256) NULL,
	[clicks] [varchar](128) NULL,
	[requestaction] [varchar](256) NULL,
	[createddatetime] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOREM_CLICKS_REQUEST_20221015]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOREM_CLICKS_REQUEST_20221015](
	[address] [varchar](128) NOT NULL,
	[tokenid] [varchar](128) NULL,
	[trait] [varchar](128) NULL,
	[originaltraitvalue] [varchar](128) NULL,
	[requesttraitvalue] [varchar](128) NULL,
	[sig] [varchar](256) NULL,
	[clicks] [varchar](128) NULL,
	[requestaction] [varchar](256) NULL,
	[createddatetime] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOREM_CLICKS_REQUEST_20221209]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOREM_CLICKS_REQUEST_20221209](
	[address] [varchar](128) NOT NULL,
	[tokenid] [varchar](128) NULL,
	[trait] [varchar](128) NULL,
	[originaltraitvalue] [varchar](128) NULL,
	[requesttraitvalue] [varchar](128) NULL,
	[sig] [varchar](256) NULL,
	[clicks] [varchar](128) NULL,
	[requestaction] [varchar](256) NULL,
	[createddatetime] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOREM_CLICKS_REQUEST_20230104]    Script Date: 2023/8/2 下午 09:13:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOREM_CLICKS_REQUEST_20230104](
	[address] [varchar](128) NOT NULL,
	[tokenid] [varchar](128) NULL,
	[trait] [varchar](128) NULL,
	[originaltraitvalue] [varchar](128) NULL,
	[requesttraitvalue] [varchar](128) NULL,
	[sig] [varchar](256) NULL,
	[clicks] [varchar](128) NULL,
	[requestaction] [varchar](256) NULL,
	[createddatetime] [datetime] NULL
) ON [PRIMARY]
GO
