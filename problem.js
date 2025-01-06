// 1. Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const persons = [
  {
    name: "Sabbir",
    age: 24,
    gender: "male",
  },
  {
    name: "Jiinat",
    age: 21,
    gender: "female",
  },
  {
    name: "Sumaiya",
    age: 13,
    gender: "female",
  },
];
const filterFemaleNames = (persons) => {
  if (Array.isArray(persons)) {
    const filterFemale = persons?.filter(
      (person) => person.gender === "female"
    );
    const femaleNames = filterFemale?.map((female) => female?.name);
    return femaleNames;
  } else {
    return "Invalid parameter";
  }
};

const femaleNames = filterFemaleNames(persons);
// console.log(femaleNames);

// 2. Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "Green Mile",
    author: "Sabbir",
    year: 2010,
  },
  {
    title: "Terminal",
    author: "Jiinat",
    year: 2015,
  },
  {
    title: "The Shawshank Redemption",
    author: "Love & War",
    year: 2015,
  },
];

const getOnlyBookTitles = (books) => {
  if (Array.isArray(books)) {
    return books?.map((book) => book?.title);
  } else {
    return "Invalid parameter";
  }
};

const bookTitles = getOnlyBookTitles(books);
// console.log(bookTitles);

// 3. Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const makeSquare = (number) => {
  if (typeof number === "number") {
    return number * number;
  } else {
    return "Invalid Parameter";
  }
};

const makeDouble = (number) => {
  if (typeof number === "number") {
    return number + number;
  } else {
    return "Invalid Parameter";
  }
};
const increaseByFive = (number) => {
  if (typeof number === "number") {
    return number + 5;
  } else {
    return "Invalid Parameter";
  }
};
const composeSquareDoubleIncreaseFive = (number) => {
  if (typeof number === "number") {
    const square = makeSquare(number);
    const double = makeDouble(square);
    const addFive = increaseByFive(double);
    return addFive;
  } else {
    return "Invalid Parameter";
  }
};

const result = composeSquareDoubleIncreaseFive(2);
// console.log(result);

// 4. Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2022 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "BMW", model: "X5", year: 2023 },
  { make: "Audi", model: "A4", year: 2020 },
];

const sortCarByYear = (cars) => {
  if (Array.isArray(cars)) {
    return cars.sort((a, b) => a.year - b.year);
  } else {
    return "Invalid Parameter";
  }
};

const sortedCar = sortCarByYear(cars);
// console.log(sortedCar);

// 5. Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const personList = [
  {
    name: "Sabbir",
    age: 24,
    gender: "male",
  },
  {
    name: "Jiinat",
    age: 21,
    gender: "female",
  },
  {
    name: "Sumaiya",
    age: 13,
    gender: "female",
  },
];

const findByNameAndUpdate = (persons, name, updateAge) => {
  if (
    typeof name === "string" &&
    Array.isArray(persons) &&
    typeof updateAge === "number"
  ) {
    const searchByName = persons.find((person) => person.name === name);

    if (searchByName) {
      searchByName.age = updateAge;
      return persons;
    } else {
      return "Could not find the user";
    }
  } else {
    return "Invalid Parameter";
  }
};

const findAndUpdateName = findByNameAndUpdate(personList, "Sumaiya", 17);
// console.log(findAndUpdateName);
// 6. Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// 7.  Task: Leap Year Checker

// Write a function that determines whether a given year is a leap year.

// Example: Happy New Year

// 8. Task: Unique Values

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// 09. Task: Advanced Sorting

// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

// 10. Task: Functional Programming - Reduce

// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
