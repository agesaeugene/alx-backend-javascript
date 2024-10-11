// Task5 - Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
};


// Task6 -Creating functions specific to employees
const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
};

const executeWork = (employee: Director | Teacher): string => {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
};

//task7 - String literal types

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  return `Teaching ${todayClass}`;
};

// Task5 result:
/*console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director */

// Task6 result:
/*console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks*/

// Task7 result:
/*console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History */
