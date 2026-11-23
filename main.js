let myName = "Toch Omot";
let myAge = 20;
let isStudent = true;
let favoriteColors = ["pink", "blue", "purple"];
let todayDate = new Date();

const birthYear = 2006;
const country = "Kenya";

console.log(typeof myName); 
console.log(typeof myAge); 
console.log(typeof isStudent); 
console.log(typeof favoriteColors);
console.log(typeof todayDate); 

let score = 100;
score = 150;
console.log("Updated score:", score);

const PI = 3.14159;

console.log("My name is:", myName);
console.log("I am", myAge, "years old");
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", todayDate);
console.log("I was born in", birthYear, "in", country);

console.log("Welcome to Week 4 - JavaScript Basics!");

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
console.log(count);
count--;
console.log(count);

let firstName = "Toch";
let lastName = "Omot";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Toch"));

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

let myCurrentAge = 20;
let ageInDays = myCurrentAge * 365;
let ageInHours = ageInDays * 24;
let birthYearCalc = 2006;
let yearTurn100 = birthYearCalc + 100;

console.log(`I am ${myCurrentAge} years old`);
console.log(`I am approximately ${ageInDays} days old`);
console.log(`I am approximately ${ageInHours} hours old`);
console.log(`I will turn 100 in year ${yearTurn100}`);

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let parts = fullName.split(" ");
    let initials = parts[0][0] + parts[1][0];
    return initials.toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(greet("Toch"));
console.log(add(10, 5));
console.log(multiply(4, 6));
console.log(divide(10, 2));
console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(20));
console.log(getInitials("Toch Omot"));
console.log(reverseString("Toch"));
console.log(greetDefault());
console.log(greetDefault("Toch Omot"));
console.log(greetDefault("Toch Omot", "Hi"));
console.log(calculateTip(1000));
console.log(calculateTip(1000, 20));

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let loopCount = 0;
while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

const myColors = ["pink", "blue", "purple"];
for (const color of myColors) {
    console.log(color);
}

console.log("--- Numbers 1-100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("--- Even numbers 1-50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- FizzBuzz ---");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("--- Triangle of stars ---");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

function addCalc(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyCalc(a, b) {
    return a * b;
}

function divideCalc(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return addCalc(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiplyCalc(num1, num2);
        case "/":
            return divideCalc(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 3));
console.log(getGrade(85));
console.log(getDayName(3));

const fruits = ["mango", "strawberry", "watermelon"];
const myNumbers = [20, 2006, 5, 10, 15];
const mixed = ["Toch", 20, true, null];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("pineapple");
fruits.unshift("banana");
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits);

const numbers = [1, 2, 3, 4, 5, 20, 2006];

numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

console.log(numbers.includes(3));

const sampleArray = [2, -3, 5, -10, 12, 20, -1];

const doubleAll = sampleArray.map(num => num * 2);
console.log("Doubled:", doubleAll);

const noNegatives = sampleArray.filter(num => num >= 0);
console.log("No negatives:", noNegatives);

const firstGreaterThan10 = sampleArray.find(num => num > 10);
console.log("First > 10:", firstGreaterThan10);

const product = sampleArray.reduce((total, num) => total * num, 1);
console.log("Product:", product);

const favColors = ["pink", "blue", "purple"];
const upperColors = favColors.map(color => color.toUpperCase());
console.log(upperColors);

const colorsWithP = favColors.filter(color => color.includes("p"));
console.log(colorsWithP);

const person = {
    firstName: "Toch",
    lastName: "Omot",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "coding", "music"],
    favoriteColors: ["pink", "blue", "purple"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    },
    birthYear: 2006
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 21;
person.phone = "0704194394";
person.email = "tochomot385@gmail.com";
delete person.isStudent;
console.log(person);

const calculatorObj = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b,
    divide(a, b) {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
    }
};

console.log(calculatorObj.add(5, 3));
console.log(calculatorObj.subtract(10, 4));

const scores = {
    math: 95,
    english: 88,
    science: 92,
    javascript: 90
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

const students = [
    { name: "Toch Omot", age: 20, grade: 88, major: "Software Engineering" },
    { name: "Brian Otieno", age: 22, grade: 72, major: "Math" },
    { name: "Faith Wanjiku", age: 21, grade: 90, major: "Software Engineering" },
    { name: "Kevin Mwangi", age: 23, grade: 85, major: "Physics" },
    { name: "Linda Achieng", age: 20, grade: 95, major: "Software Engineering" }
];

const names = students.map(student => student.name);
console.log(names);

const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

const charlie = students.find(student => student.name.includes("Faith"));
console.log(charlie);

const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average grade:", avgGrade);

const csMajors = students.filter(student => student.major === "Software Engineering");
console.log(csMajors);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);

const myProfile = {
    name: "Toch Omot",
    age: 20,
    country: "Kenya",
    birthYear: 2006,
    greet() {
        return `Hi, I am ${this.name} from ${this.country}`;
    }
};
console.log(myProfile.greet());

const json = '{"name":"Toch","grades":{"math":88,"english":92}}';

const student = JSON.parse(json);
console.log(student.grades.math);

const backToText = JSON.stringify(student, null, 2);
console.log(typeof backToText);

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

let posts;
try {
    posts = JSON.parse(postsJson);
} catch (error) {
    console.log("Invalid JSON:", error.message);
    posts = [];
}

const publishedPosts = posts.filter(post => post.published);
const sortedByLikes = [...publishedPosts].sort((a, b) => b.likes - a.likes);
const postStrings = sortedByLikes.map(post => `${post.title} (${post.likes} likes)`);
const filteredJson = JSON.stringify(sortedByLikes, null, 2);

console.log(publishedPosts);
console.log(sortedByLikes);
console.log(postStrings);
console.log(filteredJson);

const myProfileJson = JSON.stringify({
    name: "Toch Omot",
    age: 20,
    country: "Kenya",
    birthYear: 2006,
    favoriteColors: ["pink", "blue", "purple"]
}, null, 2);
console.log(myProfileJson);

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const values = Object.values(student.grades);
        const sum = values.reduce((total, grade) => total + grade, 0);
        return sum / values.length;
    },

    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .filter(s => s.grades[subject] !== undefined)
            .map(s => s.grades[subject]);
        if (subjectGrades.length === 0) return 0;
        const sum = subjectGrades.reduce((total, grade) => total + grade, 0);
        return sum / subjectGrades.length;
    },

    getTopStudent() {
        if (this.students.length === 0) return null;
        let top = this.students[0];
        let topAvg = this.getStudentAverage(top.name);
        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > topAvg) {
                top = student;
                topAvg = avg;
            }
        }
        return top;
    },

    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student ${name} not found`;
        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);
        let report = `--- Report Card: ${student.name} ---\n`;
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }
        report += `Average: ${avg.toFixed(2)} - Grade ${letter}`;
        return report;
    }
};

gradeTracker.addStudent("Toch Omot", { math: 88, english: 92, science: 85 });
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Toch Omot"));
console.log(gradeTracker.generateReportCard("Alice"));

const trackerJson = JSON.stringify(gradeTracker.students, null, 2);
console.log(trackerJson);

console.log("--- Day 1: FizzBuzz 1-100 ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseWithLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));
console.log(reverseWithLoop("Precious Ndegwa"));

function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function findLargestReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

console.log(findLargest([20, 2006, 5, 88, 92, 12]));
console.log(findLargestReduce([20, 2006, 5, 88, 92, 12]));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["pink", "blue", "pink", "purple", "blue"]));

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Toch Omot"));
console.log(isPalindrome("nurses run"));
