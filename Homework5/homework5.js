//Task1
function propsCount(obj) {
    return Object.keys(obj).length;
  }
  
  const obj1 = {
    prop1: "one",
    prop2: "two",
    prop3: "three",
  };
  
  console.log(`Number of properties in the object is ${propsCount(obj1)}`);
  
  //Task2
  const obj2 = {
    prop1: "one",
    prop2: "two",
    prop3: "three",
    prop4: "four",
    prop5: "five",
  };
  
  function showProps(obj) {
    console.log(`Properties of the object: ${Object.keys(obj)}`);
    console.log(`Values of the object's properties: ${Object.values(obj)}`);
  }
  
  showProps(obj2);
  
  //Task3
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      return `${this.name} ${this.surname}`;
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      return `${this.name} ${this.surname} ${middleName}`;
    }
  
    showCourse() {
      return `Current course: ${new Date().getFullYear() - this.year}`;
    }
  }
  
  //Task4
  class Worker {
    #experience = 1.2;
  
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
  
    set experience(experience) {
      this.#experience = experience;
    }
  
    get experience() {
      return this.#experience;
    }
  
    showSalary() {
      return this.dayRate * this.workingDays;
    }
  
    showSalaryWithExperience() {
      return this.#experience * this.showSalary();
    }
  }
  
  function showWorkersSortedBySalaryAsc(...workers) {
    Array.from(workers)
      .sort((w1, w2) =>
        w1.showSalaryWithExperience() > w2.showSalaryWithExperience() ? 1 : -1
      )
      .forEach((w) =>
        console.log(`${w.fullName}: ${w.showSalaryWithExperience()}`)
      );
  }
  
  //Task5
  class GeometricFigure {
    getArea() {
      return 0;
    }
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC) {
      super();
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    getArea() {
      const p = (this.sideA + this.sideB + this.sideC) / 2;
      return Math.sqrt(
        p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
      );
    }
  }
  class Square extends GeometricFigure {
    constructor(sideA, sideB) {
      super();
      this.sideA = sideA;
      this.sideB = sideB;
    }
  
    getArea() {
      return this.sideA * this.sideB;
    }
  }
  class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  function handleFigures(...figures) {
    let totalArea = 0;
    Array.from(figures).forEach((f) => {
      if (f.constructor.prototype instanceof GeometricFigure) {
        console.log(
          `Geometric figure: ${f.constructor.name} - area: ${f.getArea()}`
        );
        totalArea += f.getArea();
      }
    });
    console.log(`toal area: ${totalArea}`);
  }  