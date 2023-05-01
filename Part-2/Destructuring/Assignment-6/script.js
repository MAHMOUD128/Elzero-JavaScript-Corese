let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


if (chosen === 1) {
  console.log(myFriends[0].title);
  console.log(myFriends[0].age);
  console.log(myFriends[0].available ? "Available" : "Not Available");
  console.log(myFriends[0].skills[1]);
} else if (chosen === 2) {
  console.log(myFriends[1].title);
  console.log(myFriends[1].age);
  console.log(myFriends[1].available ? "Available" : "Not Available");
  console.log(myFriends[1].skills[1]);
} else if (chosen === 3) {
  console.log(myFriends[2].title);
  console.log(myFriends[2].age);
  console.log(myFriends[2].available ? "Available" : "Not Available");
  console.log(myFriends[2].skills[1]);
} else {
  console.log("Invalid value of chosen");
}


// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"