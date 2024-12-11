let myUser = {
  age: 1986,
  location: "Prague",
  isCapital: true,
  country: "Czech Republic",
  sportIndex: parseInt(prompt("Select a scenario from 0 to 4")),
  sport: ["hockey", "football", "basketball", "hobby horse", "darts"],
  sportIdol: ["Jakub Kovář", "Jiří Němec", "Tomáš Satoranský"],
};

console.log(myUser);

let askMe = prompt("Ask me something ...");

if (askMe === "year?") {
  console.log("I was born in " + myUser.age + ".");
} else if (askMe === "location?" && myUser.isCapital === true) {
  console.log(
    "I am living in " +
      myUser.location +
      ". It is a capital of " +
      myUser.country +
      "."
  );
} else if (askMe === "location?") {
  console.log("I am living in " + myUser.location + ".");
} else if (askMe === "sport?") {
  if (myUser.sportIndex >= 0 && myUser.sportIndex <= 2) {
    console.log("My favorit sport is " + myUser.sport[myUser.sportIndex] + ".");
    console.log("Have you heard about " + myUser.sportIdol[myUser.sportIndex]);
  } else {
    console.log("My favorit sport is " + myUser.sport[myUser.sportIndex] + ".");
  }
} else {
  alert("Correct questions:\n \n -  year?\n -  location?\n -  sport?");
}
