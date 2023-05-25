const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('hidden');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  toggleButton.classList.remove('active');
  navbarLinks.classList.remove('active');
}));

//Popup Window

const projectContent = [
  {
    name: "Tonix",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio.png",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript"],
    live_demo: "#",
    source_code:
      "#",
  },
  {
    name: "Multi-Post Stories",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio2.png",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript"],
    live_demo: "#",
    source_code:
      "#",
  },
  {
    name: "Tonix",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio3.png",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript"],
    live_demo: "#",
    source_code:
      "#",
  },
  {
    name: "Multi-Post Stories",
    title: ["CANOPY", "Back End Dev", "2015"],
    image: "img/Snapshoot Portfolio4.png",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ["html", "css", "javaScript"],
    live_demo: "#",
    source_code:
      "#",
  },
]
let index = 0;
const item = projectContent[index];
console.log(item.title);


const modalContent = document.querySelectorAll(".cardone");
const modalDiv = document.createElement("div");
modalDiv.className = "modal-section";
modalContent.appendChild(modalDiv);
const modal = document.querySelector(".modal-section");
const viewProjectDetailButton = document.querySelectorAll(".cardbutton");
viewProjectDetailButton.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    console.log("Hello yoooo");
    item.title;
    modalDiv.innerHTML = `
              
    <div class="modalContainer">
        <div class="close-modal-button">
            <h3 class="projecTitle">${item.name}</h3>
              <img src="img/close.svg" alt=""> 
        </div>
        <div class="tframes">
          <h3>${item.title}</h3>
          <ol class="frames-list">
            <li>
              <img src="img/work-img/Counter.png" />
            </li>
            <li> ${item.title[1]}</li> 
            <li>
              <img src="img/work-img/Counter.png" />
            </li>
            <li>${item.title[2]}</li>
          </ol>
        </div>
        <div class="modal-snapshot-portofolio">
          <img src=${item.image} alt="">
        </div>
    <div class="modalProjectdetail">
          <p class="project-text parag-width">
              ${item.desc}
          </p>
        <div>
          <ul class="tag-list">
            <li>${item.technology[0]}</li>
            <li>${item.technology[1]}</li>
            <li>${item.technology[2]}</li>
           </ul>
        <div class="project-detail-button">
          <div class="blocks-buttonWrapper modal-link-button">
            <button class="blocks-button"><a class="live project-detail-link" href="${item.live_demo}">See live</a><img src="img/live.svg" alt="live"></button>
            <button class="blocks-button"><a class="source project-detail-link" href="${item.source_code}">See source</a><img src="img/source.svg" alt="source"></button>
          </div>
        </div>
    </div>
    </div>
   </div>


    `;

    modal.classList.add("openModal");
    const modalCloseButton = document.querySelector(".close-modal-button img");
    modalCloseButton.addEventListener("click", () => {
      modal.classList.remove("openModal");
    });
  });
});