const navItems = document.querySelector('.nav-items');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navigationBarClose = document.querySelector('.navbar');
function show() {
  navItems.style.display = 'flex';
  navItems.style.right = '0';
}

function close() {
  navItems.style.right = '100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.item');
navItems.addEventListener('click', () => {
  navItems.style.right = '100%';
});

const projects = [
  {
    id: 1,
    name: 'Weather Metrics App',
    pic: './images/desktop-images/Weather-Demo.gif',
    companyId: 'WEATHER UPDATE',
    work: 'Front End Developer',
    date: 2022,
    description: 'This weather metrics app uses the weather updates from Open Weather API to display weather updates of different capital cities in the continent of Africa.',
    techUse: ['HTML', 'CSS', 'JavaScript', 'React'],
    projectDemo: 'https://my-weather-metrics-app.netlify.app/',
    projectSource: 'https://github.com/Epaltechs/weather-metrics',
  },

  {
    id: 2,
    name: 'Motorbike Booking App',
    pic: './images/desktop-images/motorbike.png',
    companyId: 'BOOKING',
    work: 'Full Stack Developer',
    date: 2022,
    description: 'This application serves as a user interface for the backend API and users can create, delete, as well as add reservations for Motorbikes.',
    techUse: ['HTML', 'CSS', 'PSQL', 'React', 'Rails', 'JS'],
    projectDemo: 'https://motorbike-booking.netlify.app/',
    projectSource: 'https://github.com/Epaltechs/motorbike_booking_frontend',
  },

  {
    id: 3,
    name: 'Budget App',
    pic: './images/desktop-images/budget-sample.png',
    companyId: 'TRANSACTION',
    work: 'Full Stack Developer',
    date: 2022,
    description: 'This Budget App is a mobile web application designed to help users spend money responsibly, as well as on which category. It would help you to be reasonable in making financial decisions.',
    techUse: ['Ruby', 'Rails', 'PSQL', 'Bootstrap'],
    projectDemo: 'https://epal-budget-app.herokuapp.com/',
    projectSource: 'https://github.com/Epaltechs/budget-app',
  },

  {
    id: 4,
    name: 'Bookstore App',
    pic: './images/desktop-images/Bookstore-screenshot.png',
    companyId: 'LIBRARY',
    work: 'Front End Developer',
    date: 2022,
    description: 'This Bookstore is an app that allows you to display a list of books, add a book, or remove a selected book from the list.',
    techUse: ['HTML', 'CSS', 'JS', 'React', 'Bootstrap'],
    projectDemo: 'https://epal-bookstore.netlify.app/',
    projectSource: 'https://github.com/Epaltechs/Bookstore',
  },

  {
    id: 5,
    name: 'Blog App',
    pic: './images/desktop-images/Blog-App.png',
    companyId: 'BLOGGER',
    work: 'Back End Developer',
    date: 2022,
    description: 'This is a blog website that implements the MVC functionality and CRUD. In effect, it has a clear path from the browser to the routes file, and to the Controller action.',
    techUse: ['Ruby', 'Rails', 'PSQL', 'Bootstrap'],
    projectDemo: 'https://epal-blog-app.herokuapp.com/',
    projectSource: 'https://github.com/Epaltechs/blog-app',
  },
];

const mainContainer = document.getElementById('workscontainer');
const popup = document.getElementById('popup');
const windowPopup = document.querySelector('.winUp');
function popupFunc(id) {
  if (id === null) return;
  let oneCard = projects.filter((el) => el.id === id);
  oneCard = oneCard.shift();
  const popupContent = ` <div class="container windowPopup popup">
                <div class="pop-header">
                    <h4 class="h-4">${oneCard.name}</h4>
                    <span class="closePopup" onclick="closePopupFunc()"><i class="fa fa-times"></i></span>
                    <ul class="pop-description-element">
                        <li class="element" id="companyID">${oneCard.companyId}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="workType">${oneCard.work}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="date">${oneCard.date}</li>
                    </ul>
                </div>
                <img class="work-pic" src=${oneCard.pic} alt="landing page view" />
                <img class="work-pic pop-img" src=${oneCard.pic} alt="nature image" />
                <div class="pop-element">
                    <p class="description-text">
                        ${oneCard.description}
                    </p>
                    <div class="pop-items">
                        <ul class="languages">
                          ${oneCard.techUse.map((el) => `<li class="lang">${el}</li>`).join('')}
                        </ul>
                        <div class="bottom-bar"></div>
                        <div class="navigation-links">
                            <form action=${oneCard.projectDemo} class="btnSource">
                                <span class="popup-link-icon">
                                  <input  type="submit" value="See live" />
                                <img src="./images/Icon-Export.png" alt="See live">
                                </span>
                            </form>
                            <form action=${oneCard.projectSource} class="btnSource">
                                <span class="popup-link-icon">
                                  <input  type="submit" value="See Source" />
                                <img src="./images/Icon-GitHub.png" alt="See source">
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
  document.body.style.overflow = 'hidden';
  popup.innerHTML = popupContent;
}
function closePopupFunc(status) {
  if (status === null) return;
  windowPopup.style.display = 'none';
  navigationBarClose.style.display = 'flex';
  document.body.style.overflow = 'scroll';
}
function worksContainer() {
  const element = projects.map((val, index) => {
    const cards = index % 2 === 0 ? `<div class="container">
  <img class="work-pic" src=${val.pic} alt="nature image" />
  <img class="work-pic" src=${val.pic} alt="landing page view" />
  <div class="work-description">
      <h4>${val.name}</h4>
      <ul class="description-element">
          <li>${val.companyId}</li>
          <li class="element">
              <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.work}</li>
          <li class="element">
              <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.date}</li>
      </ul>
      <p class="description-text">${val.description}</p>
      <ul class="languages">
       ${val.techUse.map((el) => `<li class="lang">${el}</li>`).join('')}
      </ul><br>

      <button class="btn openPopup" id="firstBtn" type="submit" onclick="popupFunc(${val.id})">See Project</button>
  </div>
</div>`
      : `            <div class="container">
                <img class="work-pic" src=${val.pic} alt="multi-post stories image" />
                <div class="work-description">
                    <h4>${val.name}</h4>
                    <ul class="description-element">
                        <li>${val.companyId}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element">${val.work}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element">${val.date}</li>
                    </ul>
                    <p class="description-text">${val.description}</p>
                    <ul class="languages">
                        ${val.techUse.map((el) => `<li class="lang">${el}</li>`).join('')}
                    </ul><br>
                    <button class="btn openPopup" id="secondBtn" onclick="popupFunc(${val.id})" type="submit">See
                        Project</button>
                </div>
                <img class="work-pic-1" src=${val.pic} alt="professional art printing image" />
            </div>`;
    return cards;
  });
  return element;
}

window.addEventListener('load', () => {
  mainContainer.innerHTML = worksContainer();
  return mainContainer;
});

popupFunc(null);
closePopupFunc(null);

const formValidation = document.querySelector('#inputcontactbox');
const emailInputValidation = document.querySelector('#email');

const entryTextMessage = document.querySelector('#msg');
const entryTexUserName = document.querySelector('#username');

function storeData(value) {
  localStorage.setItem('Userdata', JSON.stringify(value));
}

function getData() {
  const retrieveData = localStorage.getItem('Userdata');
  const newData = JSON.parse(retrieveData);
  emailInputValidation.value = newData.strEmailInput;
  entryTextMessage.value = newData.strTextmessage;
  entryTexUserName.value = newData.strTextUserName;
}

window.addEventListener('load', () => {
  getData();
});

formValidation.addEventListener('submit', (event) => {
  const strEmailInput = emailInputValidation.value;
  const strTextmessage = entryTextMessage.value;
  const strTextUserName = entryTexUserName.value;

  storeData({ strEmailInput, strTextmessage, strTextUserName });

  if (/[A-Z]/.test(strEmailInput)) {
    entryTextMessage.innerHTML = 'Your form is not sent because the email address is not correct; Email must contain only lowercase character.';
    entryTextMessage.style.fontSize = '16px';
    entryTextMessage.style.fontStyle = 'italic';
    entryTextMessage.style.color = 'yellow';

    event.preventDefault();
  }
});
