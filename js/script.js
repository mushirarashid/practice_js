let addClass = document.getElementById("fruits-container");
addClass.classList.add("lishi_pink");

// section add
let main_container = document.getElementById("main_container");
let newSection = document.createElement("section");
let h1 = document.createElement("h1");
h1.innerText = "Food I Like";
newSection.appendChild(h1);

main_container.appendChild(newSection);

let ul = document.createElement("ul");
newSection.appendChild(ul);

let li = document.createElement("li");
li.innerText = "polow";
ul.appendChild(li);

let li2 = document.createElement("li");
li2.innerText = "chicken";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerText = "salad";
ul.appendChild(li3);

// add section in new way

let sectionDress = document.createElement("section");

sectionDress.innerHTML = `
<h1>My Dress I like </h1>
<ul>
<li>Sharee</li>
<li>Borkha</li>
<li>Niquab</li>
</ul>
`;
main_container.appendChild(sectionDress);

// fev place

let placeSection = document.createElement("section");

placeSection.innerHTML = `
<h1> My Fev Place</h1>
<ul>
<li>Cox's bazar</li>
<li>Sajuck</li>
<li>Kuakata</li>
</ul>
`;
main_container.appendChild(placeSection);

// add style
let sections = document.querySelectorAll("section");
console.log(sections);
for (var section of sections) {
  console.log(section);
  section.style.textAlign = "center";
  section.style.border = "2px solid skyblue";
  section.style.margin = "5px";
}
