
const sideBarEl = document.getElementById("sidebar");
const articleEl = document.createElement("div");
articleEl.classList.add("article");
sideBarEl.appendChild(articleEl);//append the div to the sidebar
//
const h2El = document.createElement("h2");
h2El.classList.add('h2clase')
articleEl.appendChild(h2El);

//setting paragraph
const paraGra = document.createElement('p')
articleEl.appendChild(paraGra);

//setting lists
const uL = document.createElement('ul');
articleEl.appendChild(uL);
const lI = document.createElement('li');
uL.appendChild(lI);
// Create a regular expression to remove the HTML tags
const tagRegex = /<[^>]*>/g;

// Remove the HTML tags from the string
const sanitizedContent = `
<ul>
<li>problem</li>
<li>solutions</li>
</ul>
`.replace(tagRegex, '');

// Set the textContent property to the sanitized content
uL.textContent = sanitizedContent;


// Add some HTML content & style to the article element
articleEl.style.color = "red";
articleEl.style.background = "white";
paraGra.style.color = "rgb(100, 23, 312)";
articleEl.style.border = "15px yellow solid";


h2El.innerHTML = `
<h2>This is the article header</h2>`;
//
paraGra.innerHTML = `
 <p>- This is the article content </p>
<p>- Veritatis eaque ullam, 
non totam ipsum nihil voluptate incidunt reiciendis accusantium 
architecto culpa eius doloribus. </p>
<p>- Lorem ipsum dolor sit amet consectetur adipisicing elit.
Non, eos. Veritatis eaque ullam, 
non totam ipsum nihil voluptate incidunt reiciendis accusantium 
architecto culpa eius doloribus. 
Error quasi vero illo ullam?</p>`;


//Creating a list of items
uL.textContent = `
<ul>
<li>problem</li>
<li>solutions</li>
</ul>
`;



// document.appendChild(''),
// document.createTextNode("******")