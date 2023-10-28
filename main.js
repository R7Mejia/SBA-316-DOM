
const sideBarEl = document.getElementById("sidebar");
const articleEl = document.createElement("div");
articleEl.classList.add("article");
sideBarEl.appendChild(articleEl);

// Create and set the h2 element's text content (using textContent seems to be a better and secured way to do it)
const h2El = document.createElement("h2");
h2El.classList.add("h2clase");
h2El.textContent = "This is the article header";
h2El.style.textAlign = 'center';
h2El.style.whiteSpace = "nowrap";
articleEl.appendChild(h2El);

// Create and set the paragraph's text content
const paraGra = document.createElement("p");
paraGra.textContent =
    "This is the article content: Veritatis eaque ullam, non totam ipsum nihil voluptate incidunt reiciendis accusantium architecto culpa eius doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eos. Veritatis eaque ullam, non totam ipsum nihil voluptate incidunt reiciendis accusantium architecto culpa eius doloribus. Error quasi vero illo ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eos. Veritatis eaque ullam, non totam ipsum nihil voluptate incidunt reiciendis accusantium architecto culpa eius doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.Non, eos.Veritatis eaque ullam, non totam ipsum nihil voluptate incidunt reiciendis accusantium architecto culpa eius doloribus.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.Non, eos.Veritatis eaque ullam, non totam ipsum nihil voluptate incidunt reiciendis accusantium architecto culpa eius doloribus. n\
ffsfggsgfsgffgsfggfdfs";
articleEl.appendChild(paraGra);
/*
// Create an unordered list and add list items
const uL = document.createElement("ul");
uL.classList.add("unordered");
uL.style.display = "block"
articleEl.appendChild(uL);
//li items
const listItem1 = document.createElement("li");
listItem1.textContent = "problem";
uL.appendChild(listItem1);

const listItem2 = document.createElement("li");
listItem2.textContent = "solutions";
uL.appendChild(listItem2);*/


// style the article element
articleEl.style.color = "red";
articleEl.style.background = "white";
articleEl.style.border = "15px yellow solid";
paraGra.style.color = "rgb(100, 23, 312)";

//ineracting with the containers' classes










