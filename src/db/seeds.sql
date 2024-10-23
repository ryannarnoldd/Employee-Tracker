INSERT INTO department (name) VALUES
('HR'),
('Finance'),
('Operations'),
('Sales'),
('IT'),
('Support');

INSERT INTO role (title, salary, department_id) VALUES
('Assistant', 51000, 1),
('Accountant', 60000, 2),
('Coordinator', 52500, 3),
('Salesperson', 55000, 4),
('Technician', 62000, 5),
('Support Agent', 47999, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Alice', 'Johnson', 1, NULL),       
('Bob', 'Smith', 2, NULL),          
('Charlie', 'Brown', 4, NULL), 
('Eve', 'Davis', 5, NULL),   

('David', 'Williams', 3, 1), 
('Frank', 'Miller', 6, 1),   
('Grace', 'Lee', 2, 2),      
('Hannah', 'Wilson', 5, 5),   
('Isaac', 'Garcia', 1, 4),     
('Jack', 'Anderson', 3, 4),    
('Karen', 'Thomas', 6, 2),     
('Laura', 'Martinez', 5, 5),    
('Mike', 'Robinson', 4, 1),      

('Nina', 'Scott', 3, 4),      
('Oliver', 'Parker', 2, 2),   
('Paul', 'Adams', 5, 5),        
('Quincy', 'Bennett', 6, 1),       
('Rachel', 'Turner', 1, 4),   
('Sam', 'Carter', 3, 3);