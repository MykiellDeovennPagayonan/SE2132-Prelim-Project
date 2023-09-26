class Classroom {
  constructor(roomNumber, capacity, teacher, students, airConditioned, hasTelevision) {
    this.roomNumber = roomNumber;
    this.capacity = capacity;
    this.teacher = teacher;
    this.students = students;
    this.airConditioned = airConditioned;
    this.hasTelevision = hasTelevision;
  }
}

Classroom.prototype.clone = function () {
  let clonedClassroom = new Classroom(
    this.roomNumber,
    this.capacity,
    {...this.teacher},
    [...this.students],
    this.airConditioned,
    this.hasTelevision
  );
  return clonedClassroom;
};

let classroom = new Classroom(
  101,
  34,
  {
    firstName: "Junem",
    lastName: "Repollo",
    subject: "Software Component Design",
  },
  [
    {
      firstName: "Matthew",
      lastName: "Ledesma",
      age: 22,
    },
    {
      firstName: "Mykiell",
      lastName: "Pagayonan",
      age: 20,
    },
    {
      firstName: "Chad",
      lastName: "Andrada",
      age: 21,
    },
    {
      firstName: "John Patrick",
      lastName: "Pineda",
      age: 21,
    },
    {
      firstName: "Ian Clyde",
      lastName: "Tejada",
      age: 19,
    },
  ],
  true,
  true
);

let modernClassroom = classroom.clone();
let anotherClassroom = classroom.clone()

modernClassroom.roomNumber = 102;
modernClassroom.teacher.subject = "Software Development III";

anotherClassroom.roomNumber = 205
anotherClassroom.teacher.subject = "Machine Learning"

console.log(classroom);
console.log(modernClassroom);
console.log(anotherClassroom);

// Pros - Can create countless identical copies efficiently

const clonedClassrooms = [];
for (let i = 0; i < 1000; i++) {
  clonedClassrooms.push(classroom.clone());
}

console.log(clonedClassrooms)

// this is more efficient than classes when in the way you create several objects with the same attributes

let classroomClone = new Classroom(
  101,
  34,
  {
    firstName: "Junem",
    lastName: "Repollo",
    subject: "Software Component Design",
  },
  [
    {
      firstName: "Matthew",
      lastName: "Ledesma",
      age: 22,
    },
    {
      firstName: "Mykiell",
      lastName: "Pagayonan",
      age: 20,
    },
    {
      firstName: "Chad",
      lastName: "Andrada",
      age: 21,
    },
    {
      firstName: "John Patrick",
      lastName: "Pineda",
      age: 21,
    },
    {
      firstName: "Ian Clyde",
      lastName: "Tejada",
      age: 19,
    },
  ],
  true,
  true
);


// Cons - Shared References; not everything is deeply cloned that is why there was a need to use

// {...this.teacher} and [...this.students]