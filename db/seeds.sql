-- I went pretty intense with the comments here to help me make sense of the db
-- Seed departments
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Refurbished Computers'),
  ('Computer Parts'),
  ('Equipment'),
  ('Software'),
  ('Repairs'),
  ('Educational'),
  ('Executive');

-- Seed roles

-- Executive Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Owner', 100000.00, 1),
  ('Store Manager', 80000.00, 1);

-- Sales Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Manager', 60000.00, 2),
  ('Sales Associate', 40000.00, 2);

-- Refurbished Computers Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Refurbished Computers Manager', 55000.00, 3),
  ('Computer Technician', 45000.00, 3);

-- Computer Parts Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Parts Manager', 50000.00, 4),
  ('Parts Specialist', 40000.00, 4);

-- Equipment Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Equipment Manager', 55000.00, 5),
  ('Equipment Specialist', 45000.00, 5);

-- Software Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Software Manager', 60000.00, 6),
  ('Software Developer', 50000.00, 6);

-- Repairs Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Repairs Manager', 60000.00, 7),
  ('Computer Repair Technician', 45000.00, 7);

-- Educational Department
INSERT INTO role (title, salary, department_id) VALUES
  ('Educational Manager', 55000.00, 8),
  ('Instructor', 40000.00, 8);



-- Seed employees 
-- Executive Department Edited from last to first to fix errors of employees report to manager not yet in database
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('William', 'Johnson', 1, NULL), -- Owner has no manager
  ('Sophia', 'Davis', 2, 1); -- Store Manager reports to Owner
-- Sales Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 3, 2), -- Sales Manager reports to Store Manager (ID 16)
  ('Alice', 'Smith', 4, 3); -- Sales Associate reports to Sales Manager

-- Refurbished Computers Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Bob', 'Johnson', 5, 2), -- Refurbished Manager reports to Store Manager (ID 16)
  ('Eva', 'Williams', 6, 5); -- Computer Technician reports to Refurbished Manager

-- Computer Parts Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Charlie', 'Brown', 7, 2), -- Parts Manager reports to Store Manager (ID 16)
  ('Olivia', 'Davis', 8, 7); -- Parts Specialist also reports to Parts Manager

-- Equipment Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('David', 'Lee', 9, 2), -- Equipment Manager reports to Store Manager (ID 16)
  ('Sophia', 'Miller', 10, 9); -- Equipment Specialist reports to Equipment Manager

-- Software Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Ethan', 'Wilson', 11, 2), -- Software Manager reports to Store Manager (ID 16)
  ('Isabella', 'Moore', 12, 11); -- Software Developer reports to Software Manager

-- Repairs Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Gabriel', 'Taylor', 13, 2), -- Repairs Manager reports to Store Manager (ID 16)
  ('Ava', 'Anderson', 14, 13); -- Computer Repair Technician reports to Repairs Manager

-- Educational Department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Henry', 'Thomas', 15, 2), -- Educational Manager reports to Store Manager (ID 16)
  ('Mia', 'Jackson', 16, 15); -- Instructor reports to Educational Manager


