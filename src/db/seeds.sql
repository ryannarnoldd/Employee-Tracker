
INSERT INTO department (name) VALUES
('HR'),
('Finance'),
('Billing'),
('Sales'),
('Marketing'),
('IT'),
('Support');

INSERT INTO role (title, salary, department_id) VALUES
('CEO', 150000, 1),
('CFO', 140000, 2),
('Manager', 90000, 3),
('Accountant', 70000, 3),
('Sales Representative', 60000, 4),
('Marketing Specialist', 65000, 5),
('IT Specialist', 75000, 6),
('Customer Support', 55000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Alice', 'Johnson', 1, NULL), 
('Bob', 'Smith', 2, 1),       
('Charlie', 'Brown', 3, 2),   
('David', 'Williams', 4, 3),   
('Eve', 'Davis', 5, 3),        
('Frank', 'Miller', 6, 3),     
('Grace', 'Lee', 7, 2),        
('Hannah', 'Wilson', 8, 3);    

