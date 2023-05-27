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

//Popup Window

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
// let index = 0;
// const item = projectContent[index];

const modal = document.querySelector("#modal");
const popupContainer = document.createElement("div");
popupContainer.className = "popup-container";
const popupImage = document.createElement("img");
popupImage.className = "popup-image";
modal.appendChild(popupContainer);
popupContainer.appendChild(popupImage);
const openButton = document.querySelectorAll(".cardbutton");
openButton.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    modal.showModal();
    popupContainer.innerHTML = `
    <section class="cardonejs">
    <div class="header-nav">
      <h2>${projectContent[index].name}</h2>
      <button class="closs-button">&times;</button>
    </div>
    <div class="conpyjs">
      <p class="canopytxt">${projectContent[index].title[0]}</p>
      <img src="img/Counter.png" alt="point separetor image" />
      <p class="backtxt">${projectContent[index].title[1]}</p>
      <img src="img/Counter.png" alt="point separetor image" />
      <p class="yeartxt">${projectContent[index].title[2]}</p>
    </div>

    <div class="cardoneimagejs">
      <img
        src="${projectContent[index].image}"
        class="imagejs"
        alt="Tonic Image"
      />
    </div>
    <div class="thirdjs">
      <p class="cardtxtjs">
        ${projectContent[index].desc}
      </p>
      <div class="right">
        <div class="listjs">
          <ul class="langjs1 lang">
            <li class="langtxt" id="htmltxt">${projectContent[index].technology[0]}</li>
            <li class="langtxt" id="csstxt">${projectContent[index].technology[1]}</li>
            <li class="langtxt" id="javascripttxt">${projectContent[index].technology[2]}</li>
          </ul>
          <ul class="langjs2">
            <li class="langtxt" id="htmltxt">${projectContent[index].technology[3]}</li>
            <li class="langtxt" id="csstxt">${projectContent[index].technology[4]}</li>
          </ul>
        </div>
        <img
          src="img/separatorJs.png"
          class="separetorjs"
          alt="point separetor image"
        />
        <div class="buttonjs">
          <button class="btntxtjs" href="${projectContent[index].live_demo}">See live <img src="img/live.svg" alt="" />
          </button>
          <button class="btntxtjs"href="${projectContent[index].source_code}">See source <img src="img/source.svg" alt="" />
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

// const modal = document.querySelector("#modal");
// const closeButton = document.querySelector(".closs-button");
// const openButton = document.querySelector(".open-model");
// openButton.addEventListener('click', () => {
//   modal.showModal();
// })
