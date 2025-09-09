interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [attribute: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  const first: string = firstName.charAt(0);
  return `${first}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));


interface student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface studentConstructor {
  new(firstName: string, lastName: string): student;
}

class StudentClass implements student {
  constructor(public firstName: string, public lastName: string) { }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}