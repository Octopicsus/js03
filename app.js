let myUser = {
  age: 1986,
  location: ["Prague", "Brno", "Karlovy Vary", "Liberec", "Ostrava"],
  isCapital: [true, false, false, false, false],
  country: "Czech Republic",
  sport: ["hockey", "football", "basketball", "hobby horse", "darts"],
  sportIdol: ["Jakub Kovář", "Jiří Němec", "Tomáš Satoranský"],
};

let randomIndex = Math.floor(Math.random() * 5);

console.log(myUser);
console.log(" \nSelected scenario #" + randomIndex + "\n ");

let askMe = prompt("Ask me something ...");

if (askMe === "year?") {
  console.log("I was born in " + myUser.age + ".");
} else if (askMe === "location?" && myUser.isCapital[randomIndex] === true) {
  console.log(
    "I am living in " +
      myUser.location[randomIndex] +
      ". It is a capital of " +
      myUser.country +
      "."
  );
} else if (askMe === "location?") {
  console.log("I am living in " + myUser.location[randomIndex] + ".");
} else if (askMe === "sport?") {
  if (randomIndex >= 0 && randomIndex <= 2) {
    console.log("My favorit sport is " + myUser.sport[randomIndex] + ".");
    console.log("Have you heard about " + myUser.sportIdol[randomIndex] + "?");
  } else {
    console.log("My sport is " + myUser.sport[randomIndex] + ".");
  }
} else {
  alert("Correct questions:\n \n -  year?\n -  location?\n -  sport?");
}
