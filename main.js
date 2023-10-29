const sideBarEl = document.getElementById("sidebar");
const articleEl = document.createElement("div");
articleEl.classList.add("article");
sideBarEl.appendChild(articleEl);

const h2El = document.createElement("h2");
h2El.classList.add("h2clase");
h2El.textContent = "Are you or someone you know struggling from depression, ADHD, anxiety, homelessness, etc?";
articleEl.appendChild(h2El);

const paraGra = document.createElement("p");
paraGra.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. consectetur, adipisicing elit. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. consectetur, adipisicing elit. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. consectetur, adipisicing elit. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. consectetur, adipisicing elit. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis accusantium voluptates impedit repudiandae. Maiores, totam similique eos facere nisi qui. equi, rerum voluptate rem a omnis cum ducimus officia eos blanditiis. ";
articleEl.appendChild(paraGra);


/*
      const uL = document.createElement("ul");
      uL.classList.add("unordered");
      uL.style.display = "block";
      articleEl.appendChild(uL);

      const listItem1 = document.createElement("li");
      listItem1.textContent = "problem";
      uL.appendChild(listItem1);

      const listItem2 = document.createElement("li");
      listItem2.textContent = "solutions";
      uL.appendChild(listItem2);
      */

articleEl.style.color = "#ffebcd";
articleEl.style.background = "#2e2f2e";
articleEl.style.border = "3px gray solid";
paraGra.style.margin = "0 13px"
paraGra.style.color = "white)";
//
const contentData = [
  {
    link: "https://shorturl.at/hCFK4",
    text: "ADHD",
    href: "https://www.cdc.gov/ncbddd/adhd/facts.html",
  },
  {
    link: "https://images.pexels.com/photos/3683079/pexels-photo-3683079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Depression",
    href: "https://www.nimh.nih.gov/health/topics/depression",
  },
  {
    link: "https://images.pexels.com/photos/3656855/pexels-photo-3656855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Anxiety",
    href: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961",
  },
  {
    link: "https://images.pexels.com/photos/8078401/pexels-photo-8078401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Homelessness",
    href: "https://example.com/link3",
  },
];
const allLinks = document.querySelector(".container-one");


// Parent container for the images and links
const imagesContainer = document.createElement("div");
imagesContainer.classList.add("image-container");
imagesContainer.style.justifyContent = "space-between";
imagesContainer.style.display = "flex";
imagesContainer.style.gap = "20px";
allLinks.appendChild(imagesContainer);

const getAllStuff = function () {
  for (let i = 0; i < contentData.length; i++) {
    const link = document.createElement("anchor");
    link.classList.add("anchorTag", "common-style");
    link.href = contentData[i].href;
    link.target = "_blank"; // Optional, opens links in a new tab

    const img = document.createElement("img");
    img.classList.add("imagen");
    img.src = contentData[i].link;

    const span = document.createElement("span");
    span.textContent = contentData[i].text;

      const readMoreButton = document.createElement("button");
      readMoreButton.textContent = "Read More >>";
      readMoreButton.style.alignContent = 'center'
      readMoreButton.classList.add('btn')

    link.appendChild(img);
    //link.appendChild(span);
    link.appendChild(readMoreButton);
    imagesContainer.appendChild(link);
  }
};

getAllStuff();

//
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyR") {
    // 
  }
});