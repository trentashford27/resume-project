// define variables
let myName = "Trent";
let title = "Student";
let education = "Oral Roberts University";
let experience = "Action Fire Protection, Kiefer Fire Department, and volunteer Life.Church";
let skills = ["effective communication", "critical thinking", "weightlifting"];
let skillsList = document.createElement("ul");


// Connect variables to the HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("education").textContent = education;
document.getElementById("experience").textContent = experience;

for (let i = 0; i < skills.length; i++) {
 let li = document.createElement("li");
 li.textContent = skills[i];
 skillsList.appendChild(li);
}

document.getElementById("skills").insertBefore(
  skillsList,
  document.querySelector("#skills button")
);

function showFunFact() {
 alert("Fun Fact: I love football and baseball!");
}
