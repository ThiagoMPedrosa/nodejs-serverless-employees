# nodejs-serverless-employees
Created By: Thiago Montejano Pedrosa

## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [Setup](#setup)
* .[API LIVE Settings](#api-live-settings)

## Description
The main goal of this project is to Create, Update and Delete Employee's data through an AWS Lambda with an API that connects to a RDS Data Base.
	
## Technologies
Project is created with:
* NodeJs: 12.x
* Amazon Lambda
* Amazon API Gateway
* Amazon RDS (Managed Relational Database Service)
* Serverless Application Framework
	
## Setup
To run this project, you can download it and configure as you need with your custom AWS settings:
```
* Service
* Provider
* VPC
* Data Base info
```

## DataBase
This is a RDS Data Base built with the following design:

```
* idEmployee (number) - PrimaryKEY
* age (number)
* position (varchar 255) 
* createdAt (timestamp) - AutoFill
```

## API LIVE Settings
The API is diveded in four settings: SELECT, INSERT, UPDATE and DELETE:
Is now up and running in order to able the tests with the current methods bellow.

### SELECT

GET method, without variables:
/getEmployees
LIVE Example: https://uw9bj8se17.execute-api.sa-east-1.amazonaws.com/dev/getEmployees

Using the GET method with this URL, you will find the Data already inserted in this project Data Base in JSON format, for example:

```
{
    "results": [
        {
            "idEmployee": 1,
            "age": 23,
            "name": "Joao
            "position": "Engineer",
            "createdAt": "2021-08-07T12:00:00.000Z"
        }
    ]
}
```

### INSERT

POST method, with three variables:
/{age}/{name}/{position}
LIVE Example: https://uw9bj8se17.execute-api.sa-east-1.amazonaws.com/dev/insertEmployee/{age}/{name}/{position}

```
Parameters:
* AGE (number)
* NAME (varchar)
* POSITION (varchar)
```

Using the POST method with this URL, you will get one of the following messages:

```
* Employee successfully Inserted! + data base details about the insertion
* Error + data base details about the error
```

### UPDATE

POST method, with three variables:
/editEmployee/{empId}/{column}/{value}
LIVE Example: https://uw9bj8se17.execute-api.sa-east-1.amazonaws.com/dev/editEmployee/{empId}/{column}/{value}

```
Parameters:
* EMPID (number)
    employeeID - PRIMARYKEY
* COLUMN (varchar)
    Column name
* VALUE (varchar)
    New value
```

Using the POST method with this URL, you will get one of the following messages:

```
* Employee successfully Updated! + data base details about the insertion
* Error + data base details about the error
```

### DELETE

POST method, with one variable:
/deleteEmployee/{empId}/
LIVE Example: https://uw9bj8se17.execute-api.sa-east-1.amazonaws.com/dev/deleteEmployee/{empId}/

```
Parameters:
* EMPID (number)
    employeeID - PRIMARYKEY
```

Using the POST method with this URL, you will get one of the following messages:

```
* Employee successfully Deleted! + data base details about the insertion
* Error + data base details about the error
```
