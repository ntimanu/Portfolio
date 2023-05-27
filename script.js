const toggleButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("hidden");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    navbarLinks.classList.remove("active");
  })
);

// Popup Window

const projectContent = [
  {
    name: "Tonic",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript", "Ruby", "Bootstrap"],
    live_demo: "https://ntimanu.github.io/Portfolio/",
    source_code: "https://github.com/ntimanu/Portfolio",
  },
  {
    name: "Multi-Post Stories",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio2.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript", "Ruby", "Bootstrap"],
    live_demo: "https://ntimanu.github.io/Portfolio/",
    source_code: "https://github.com/ntimanu/Portfolio",
  },
  {
    name: "Tonic",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio3.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript", "Ruby", "Bootstrap"],
    live_demo: "https://ntimanu.github.io/Portfolio/",
    source_code: "https://github.com/ntimanu/Portfolio",
  },
  {
    name: "Multi-Post Stories",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio4.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript", "Ruby", "Bootstrap"],
    live_demo: "https://ntimanu.github.io/Portfolio/",
    source_code: "https://github.com/ntimanu/Portfolio",
  },
];

// create a dynamic work section

const workContent = document.getElementById("work");
const div = document.createElement("div");
div.className = "work-section";
workContent.appendChild(div);
div.innerHTML = projectContent.reduce(
  (output, project) => `${output}
    
  <div class="cardone card1">
  <div class="cardoneimage">
    <img src="${project.image}" class="image" alt="Tonic Image" />
  </div>
  <div class="card1txt">
    <h2>${project.name}</h2>
    <div class="conpy">
      <p class="canopytxt">${project.title[0]}</p>
      <img src="img/Counter.png" alt="point separetor image" />
      <p class="backtxt">${project.title[1]}</p>
      <img src="img/Counter.png" alt="point separetor image" />
      <p class="yeartxt">2015</p>
    </div>

    <p class="cardtxt">${project.desc}</p>
    <div class="lang">
      <ul>
        <li class="langtxt" id="htmltxt">${project.technology[0]}</li>
        <li class="langtxt" id="csstxt">${project.technology[1]}</li>
        <li class="langtxt" id="javascripttxt">
          ${project.technology[2]}
        </li>
      </ul>
    </div>
    <button class="btntxt cardbutton">See Project</button>
  </div>
</div>
    
          `,
  ""
);

const reverseCard = document.querySelectorAll(".cardone");
reverseCard.forEach((rev, index) => {
  if (index % 2 !== 0) {
    rev.classList.toggle("reversecard");
  }
});

const modal = document.querySelector("#modal");
const popupContainer = document.createElement("div");
popupContainer.className = "popup-container";
const popupImage = document.createElement("img");
popupImage.className = "popup-image";
modal.appendChild(popupContainer);
popupContainer.appendChild(popupImage);
const openButton = document.querySelectorAll(".cardbutton");
openButton.forEach((buttons, i) => {
  buttons.addEventListener("click", () => {
    modal.showModal();
    popupContainer.innerHTML = `
    <section class="cardonejs">
    <div class="header-nav">
      <h2>${projectContent[i].name}</h2>
      <button class="closs-button">&times;</button>
    </div>
    <div class="conpyjs">
      <p class="canopytxt">${projectContent[i].title[0]}</p>
      <img src="img/Counter.png" alt="point separetor image" />
      <p class="backtxt">${projectContent[i].title[1]}</p>
      <img src="img/Counter.png" alt="point separetor image" />
      <p class="yeartxt">${projectContent[i].title[2]}</p>
    </div>

    <div class="cardoneimagejs">
      <img
        src="${projectContent[i].image}"
        class="imagejs"
        alt="Tonic Image"
      />
    </div>
    <div class="thirdjs">
      <p class="cardtxtjs">
        ${projectContent[i].desc}
      </p>
      <div class="right">
        <div class="listjs">
          <ul class="langjs1 lang">
            <li class="langtxt" id="htmltxt">${projectContent[i].technology[0]}</li>
            <li class="langtxt" id="csstxt">${projectContent[i].technology[1]}</li>
            <li class="langtxt" id="javascripttxt">${projectContent[i].technology[2]}</li>
          </ul>
          <ul class="langjs2">
            <li class="langtxt" id="htmltxt">${projectContent[i].technology[3]}</li>
            <li class="langtxt" id="csstxt">${projectContent[i].technology[4]}</li>
          </ul>
        </div>
        <img
          src="img/separatorJs.png"
          class="separetorjs"
          alt="point separetor image"
        />
        <div class="buttonjs">
          <button class="btntxtjs" href="${projectContent[i].live_demo}">See live <img src="img/live.svg" alt="" />
          </button>
          <button class="btntxtjs"href="${projectContent[i].source_code}">See source <img src="img/source.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
  `;
    const closeButton = document.querySelector(".closs-button");
    closeButton.addEventListener("click", () => {
      modal.close();
    });
  });
});

// Contact Form validation

const contactForm = document.getElementById("form-id");
const contactEmail = document.getElementById("email-id");
const contactError = document.getElementById("errormessage");

contactForm.addEventListener("submit", (event) => {
  if (contactEmail.value.toLowerCase() !== contactEmail.value) {
    event.preventDefault();
    contactError.innerText =
      "Please type your email in lowercase. Form not submitted";
  }
});
