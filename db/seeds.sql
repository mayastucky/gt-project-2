--GOES TO CHRISTINAS WORKBENCH FOR JAWSDB--> hard code for subject/specialities drop down in order to populate dropdown menu during register
INSERT INTO Specialities (name, SubjectId) VALUES ("Reading", 1), ("Writing", 1), ("Algebra", 2,), ("Geometry", 2), ("Elementary", 2), ("Biology", 3), ("Chemistry", 3), ("Astronomy", 3),("American History", 4), ("Political Science", 4), ("Elementary", 4), ("Physical Education", 5), ("Art", 5), ("Music",5),("Performing Arts",5);


INSERT INTO Subjects (name) VALUES ("Language Arts"), ("Math"), ("Science"), ("Social Studies"), ("Other");

INSERT INTO Educators (first_name, last_name, email, password, bio, SpecialityId) VALUES ("Lisa", "Boyet", "lboyet@gmail", "password2", "Hi, I am a teacher.", 1);

--How do we do grade level?

--If I need to re-created the DB in workbench-->
-- INSERT INTO Subjects (name, createdAt, updatedAt) VALUES ("Language Arts", now(), now()), ("Math", now(), now()), ("Science", now(), now()), ("Social Studies", now(), now()), ("Other", now(), now());

-- INSERT INTO Specialities (name, SubjectId, createdAt, updatedAt) VALUES ("Reading", 1, now(), now()), ("Writing", 1, now(), now()), ("Algebra", 2, now(), now()), ("Geometry", 2, now(), now()), ("Elementary", 2, now(), now()), ("Biology", 3, now(), now()), ("Chemistry", 3, now(), now()), ("Astronomy", 3, now(), now()),("American History", 4, now(), now()), ("Political Science", 4, now(), now()), ("Elementary", 4, now(), now()), ("Physical Education", 5, now(), now()), ("Art", 5, now(), now()), ("Music",5, now(), now()),("Performing Arts",5, now(), now());

INSERT INTO Educators (first_name, last_name, email, password, bio, createdAt, updatedAt, SpecialityId) VALUES ("Ashley", "Hill", "ahill@gmail.com", "password", "I've always wanted to be a teacher ever since I was a little girl. I'm love teaching Art.", now(), now(), 28);
INSERT INTO Educators (first_name, last_name, email, password, bio, createdAt, updatedAt, SpecialityId) VALUES ("Tiffany", "Baker", "tbake@gmail.com", "password", "Art is an expression of who are. I'm love teaching Art.", now(), now(), 28);