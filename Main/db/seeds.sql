INSERT INTO department (name)
VALUES ("Jedi"),
       ("Jedi"),
       ("Jedi"),
       ("Politian"),
       ("Sith");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", "100k", 002),
       ("Assitant", "80k" 003),
       ("Sales", "60k", 004),
       ("Sales" "60k" 004),
       ("President", "200k", 001);       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Qui Gon", "Jin", 011, 101),
       ("Obi Wan", "Kenobi", 012),
       ("Anakin", "Skywalker", 013),
       ("Padme", "Amadala", 014),
       ("Sheev", "Palpatine" 010, 100);