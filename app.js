// ------------------ v.1 ------------------

// let myUser = {
//   age: 1986,
//   location: ["Prague", "Brno", "Karlovy Vary", "Liberec", "Ostrava"],
//   isCapital: [true, false, false, false, false],
//   country: "Czech Republic",
//   sport: ["hockey", "football", "basketball", "hobby horse", "darts"],
//   sportIdol: ["Jakub Kovář", "Jiří Němec", "Tomáš Satoranský"],
// };

// let randomIndex = Math.floor(Math.random() * 5);

// console.log(myUser);
// console.log(" \nSelected scenario #" + randomIndex + "\n ");

// let askMe = prompt("Ask me something ...");

// if (askMe === "year?") {
//   console.log("I was born in " + myUser.age + ".");
// } else if (askMe === "location?" && myUser.isCapital[randomIndex] === true) {
//   console.log(
//     "I am living in " +
//       myUser.location[randomIndex] +
//       ". It is a capital of " +
//       myUser.country +
//       "."
//   );
// } else if (askMe === "location?") {
//   console.log("I am living in " + myUser.location[randomIndex] + ".");
// } else if (askMe === "sport?") {
//   if (randomIndex >= 0 && randomIndex <= 2) {
//     console.log("My favorit sport is " + myUser.sport[randomIndex] + ".");
//     console.log("Have you heard about " + myUser.sportIdol[randomIndex] + "?");
//   } else {
//     console.log("My sport is " + myUser.sport[randomIndex] + ".");
//   }
// } else {
//   alert("Correct questions:\n \n -  year?\n -  location?\n -  sport?");
// }

// ------------------ v.2 ------------------

let user = {
  capital: "prague",
  sport: ["hockey", "football", "basketball"],
  sportIdol: ["Jakub Kovář", "Jiří Němec", "Tomáš Satoranský"],
};

let checkCase;
let isEmpty;
let isEmptyMessage = "You didn't type anything.";
let cancelMessage = "- What a pity that you didn't want to share yours ";

console.log(" \n My dialogue. Homework #3. \n ");

// ------------ Age part ------------

let ageAsk = prompt("What year were you born?");

if (ageAsk === null) {
  console.log("1. " + cancelMessage + "age :(");
} else {
  let isAge = ageAsk.length === 4 && Number.isInteger(parseInt(ageAsk));
  isEmpty = ageAsk.trim() == "";

  if (isEmpty != false) {
    console.log("1. " + isEmptyMessage);
  } else if (isAge === true) {
    console.log("1. " + "- What year were you born?");
    console.log("   " + "- I was born in " + ageAsk + ". \n ");
  } else {
    alert("Invalid age format");
    console.log(
      "1. " + "Invalid age format: " + ageAsk + "\n   Please use digits."
    );
  }
}

// ------------ City part ------------

let cityAsk = prompt("What city do you live? (CZ)");

if (cityAsk === null) {
  console.log("2. " + cancelMessage + "city :(");
} else {
  checkCase = cityAsk.toLowerCase();
  isEmpty = checkCase.trim() == "";

  if (isEmpty != true) {
    console.log("2. " + "- What city do you live? (CZ)");
    console.log("   " + "- " + cityAsk);

    if (checkCase === user.capital) {
      console.log(
        "   " + "- You live in the capital of the Czech Republic! \n "
      );
    } else {
      console.log("   " + "- Hm... You are live in " + cityAsk + " city. \n ");
    }
  } else {
    console.log("2. " + isEmptyMessage);
  }
}

// ------------ Sport part ------------

let sportAsk = prompt("What is your favorite sport?");

if (sportAsk === null) {
  console.log("3. " + cancelMessage + "sport :(");
} else {
  checkCase = sportAsk.toLowerCase();
  isEmpty = checkCase.trim() == "";

  let isIdol = "   " + "- Cool! Do you want to be ";
  let myAnswer = "   " + "- My favorite sport is " + sportAsk + "!";

  if (isEmpty != true) {
    console.log("3. " + "- What is your favorite sport?");

    if (checkCase === user.sport[0]) {
      console.log(myAnswer);
      console.log(isIdol + user.sportIdol[0] + "?");
    } else if (checkCase === user.sport[1]) {
      console.log(myAnswer);
      console.log(isIdol + user.sportIdol[1] + "?");
    } else if (checkCase === user.sport[2]) {
      console.log(myAnswer);
      console.log(isIdol + user.sportIdol[2] + "?");
    } else {
      console.log("   " + "- Your favorite sport is " + sportAsk + ".");
    }
  } else {
    console.log("3. " + isEmptyMessage);
  }
}
