# Employee Tracker
![Github License](https://img.shields.io/badge/license-MIT-green)

## Description

This is a command-line application that allows a user to manage a company's employee database. The user can view all departments, roles, and employees, add a department, role, or employee, and update an employee's role. The application uses the Inquirer package to prompt the user with questions and the pg package to connect to a PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this application, clone the repository and run `npm install` to install the dependencies. You will also need to create a change the .env.example file to .env and fill the necessary information in, with the database on mine being named cms_db. 

You can then run the schema.sql and seeds.sql file in the db folder, using `psql -U postgres` to create the database and tables. Finally, run `npm run start` to start the application.

<img width="309" alt="Screenshot 2024-10-22 at 9 07 04 PM" src="https://github.com/user-attachments/assets/74f2c789-b688-4637-b856-8ce87da16af0">

## Usage

The usage of this application is to manage a company's employee database. The user can view all departments, roles, and employees, add a department, role, or employee, and update an employee's role. The user can also view the total utilized budget of a department, which is the combined salaries of all employees in that department.

All of the different aspects of each employee, role, and department all relate to each other in the relational database. The user can view all of the information in a formatted table, which makes it easy to read and understand. When updating or adding information, the user is prompted with questions to gather the necessary information.

A link to a video walkthrough of the application can be found: https://files.fm/u/4szt2jxa6g

<img width="569" alt="Screenshot 2024-10-22 at 9 08 10 PM" src="https://github.com/user-attachments/assets/0b7b82b0-b115-44a2-a760-b420603f4b84">

<img width="426" alt="Screenshot 2024-10-22 at 9 08 28 PM" src="https://github.com/user-attachments/assets/1248d2b6-9456-4ae0-812c-6d3acac36ee1">


## Contributing

Ryan Arnold is the sole contributor to this project.

## Section

The license used is MIT. Here is the link to get detailed information for this license: [MIT](https://mit-license.org/)

## Tests

Here are some screenshots of the application in action from the command line. All examples are from the video walkthrough.

<img width="376" alt="Screenshot 2024-10-22 at 9 08 44 PM" src="https://github.com/user-attachments/assets/3bef05e2-b04d-4e40-ab1b-02cfe576a1fc">

<img width="627" alt="Screenshot 2024-10-22 at 9 08 54 PM" src="https://github.com/user-attachments/assets/0d813190-890f-4894-a2cf-6a8fc728757c">

## Questions

You can also find me on GitHub at [ryannarnoldd](https://www.github.com/ryannarnoldd).

If you have any questions, please contact me at [ryannarnoldd@gmail.com](mailto:ryannarnoldd@gmail.com). 
