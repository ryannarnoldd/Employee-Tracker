INSERT INTO department (id, name) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'Billing'),
(4, 'Sales'),
(5, 'Marketing'),
(6, 'IT'),
(7, 'Support');

INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'CEO', 150000, 1),
(2, 'CFO', 140000, 2),
(3, 'Manager', 90000, 3),
(4, 'Accountant', 70000, 3),
(5, 'Sales Representative', 60000, 4),
(6, 'Marketing Specialist', 65000, 5),
(7, 'IT Specialist', 75000, 6),
(8, 'Customer Support Representative', 55000, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Alice', 'Johnson', 1, NULL), -- CEO
(2, 'Bob', 'Smith', 2, 1),        -- CFO reporting to Alice
(3, 'Charlie', 'Brown', 3, 2),    -- Manager reporting to Bob
(4, 'David', 'Williams', 4, 3),   -- Accountant reporting to Charlie
(5, 'Eve', 'Davis', 5, 3),        -- Sales Rep reporting to Charlie
(6, 'Frank', 'Miller', 6, 3),     -- Marketing Specialist reporting to Charlie
(7, 'Grace', 'Lee', 7, 2),        -- IT Specialist reporting to Bob
(8, 'Hannah', 'Wilson', 8, 3);    -- Customer Support Rep reporting to Charlie