const navItems = document.querySelector('.nav-items');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navItems.style.display = 'flex';
    navItems.style.right = '0';
}

function close() {
    navItems.style.right = '100%';
}

document.querySelectorAll('.item');
navItems.addEventListener('click', () => {
    navItems.style.right = '100%';
})

const projects = {
    id1: {
        
        name: 'Tonic',
        pic: 'images/section-work/snapshoot4.png',
        companyId: 'CANOPY',
        work: 'Back End Dev',
        date: 2015,
        description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        techUse: ['html', 'css', 'javaScript'],
        projectDemo: 'https://mstanley-me.github.io/mobileSkeleton/',
        projectSource: 'https://github.com/mstanley-me/mobileSkeleton',
    },

    id2: {
        
        name: 'Multi-Post Stories',
        pic: 'images/section-work/snapshoot3.png',
        companyId: 'FACEBOOK',
        work: 'Full Stack Dev',
        date: 2015,
        description:
            'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming <br> their friends.',
        techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
        projectDemo: 'https://mstanley-me.github.io/mobileSkeleton/',
        projectSource: 'https://github.com/mstanley-me/mobileSkeleton',
    },

    id3: {
       
        name: 'Facebook 360',
        pic: 'images/section-work/snapshoot.png',
        companyId: 'FACEBOOK',
        work: 'Full Stack Dev',
        date: 2015,
        description:
            'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
        projectDemo: 'https://mstanley-me.github.io/mobileSkeleton/',
        projectSource: 'https://github.com/mstanley-me/mobileSkeleton',
    },
    id4: {
        
        name: 'Uber Navigation',
        pic: 'images/section-work/snapshoot1.png',
        companyId: 'Uber',
        work: 'Lead Developer',
        date: 2015,
        description:
            'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
        projectDemo: 'https://mstanley-me.github.io/mobileSkeleton/',
        projectSource: 'https://github.com/mstanley-me/mobileSkeleton',
    },
};


const nameID = document.getElementById('name');
const imgSrc = document.getElementsByClassName('work-pic');
const companyIdentity = document.getElementById('companyID');
const work_title = document.getElementById('workType');
const documentDate = document.getElementById('date');
const description = document.getElementById('descriptionTxt');
const technology = document.getElementById('techUse');
const btnDemoProjectLink = document.querySelector('.btnDemo');
const btnSourceProjectLink = document.querySelector('.btnSource');
const btn_1 = document.querySelector('#firstBtn');
const btn_2 = document.querySelector('#secondBtn');
const btn_3 = document.querySelector('#thirdBtn');
const btn_4 = document.querySelector('#lastBtn');
const windowPopup = document.querySelector('.winUp');
const openPopupWindow = document.querySelector('.openPopup', );
const closePopupWindow = document.querySelector('.closePopup');
const navigationBarClose = document.querySelector('.navbar');




closePopupWindow.addEventListener('click', () => {
    windowPopup.style.display = 'none';
    navigationBarClose.style.display = 'flex';
});

btn_1.addEventListener('click', () => {
    windowPopup.style.display = 'flex';
    navigationBarClose.style.display = 'none';
});
btn_2.addEventListener('click', () => {
    windowPopup.style.display = 'flex';
    navigationBarClose.style.display = 'none';
});
btn_3.addEventListener('click', () => {
    windowPopup.style.display = 'flex';
    navigationBarClose.style.display = 'none';
});
btn_4.addEventListener('click', () => {
    windowPopup.style.display = 'flex';
    navigationBarClose.style.display = 'none';
});

openWindows = function () {
    popup.classList.remove('hidden');
}

changeWindowPopup = function (order) {
    technology.innerHTML = '';

    const projectContent = projects[`projectContent${order}`];
    nameID.innerHTML = projectContent.name;
    imgSrc.src = projectContent.pic;
    companyIdentity.innerHTML = projectContent.companyId;
    work_title.innerHTML = projectContent.work;
    documentDate.innerHTML = projectContent.date;
    description.innerHTML = projectContent.description;
    const techLength = projectContent.techUse.length;

    for (let i = 0; i < techLength; i += 1) {
        const element = document.createElement('li');
        element.innerHTML = `${projectContent.techUse[i]}`;
        techUse.appendChild(element);
    }
    btnDemoProjectLink.action = projectContent.btnDemoProjectLink;
    btnSourceProjectLink.action = projectContent.btnSourceProjectLink;

    openWindows();

    for (let i = 0; i < projects.length; i += 1) {
        document.querySelector('popup').innerHTML = `
       
        <div class="container windowPopup popup">
                <div class="pop-header">
                    <h4 class="h-4">${projectContent[i].companyId}</h4>
                    <span class="closePopup"><i class="fa fa-times"></i></span>
                    <ul class="pop-description-element">
                        <li class="element" id="companyID">${projectContent[i].companyIdentity}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="workType">${projectContent[i].work_title}Back End Dev</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="date">${projectContent[i].documentDate}2015</li>
                    </ul>
                </div>
                <img id="imgID" class="work-pic" src="${projectContent[i].imgSrc}" alt="landing page view" />
                <img id="imgID" class="work-pic pop-img" src="${projectContent[i].imgSrc}" alt="nature image" />
                <div class="pop-element">
                    <p class="description-text" id="descriptionTxt">
                        ${projectContent[i].description}
                    </p>
                    <p class="description-tex" id="descriptionTxt">
                        ${projectContent[i].description}
                    </p>
                    <div class="pop-items">
                        <ul class="languages" id="languages-1">
                            <li class="lang" id="techUse">${projectContent[i].techUse}html</li>
                            <li class="lang1" id="techUse">${projectContent[i].techUse}css</li>
                            <li class="lang2" id="techUse">${projectContent[i].techUse}javaScript</li>  
                        </ul>
                        <div class="bottom-bar"></div>
                        <div class="navigation-links">
                            <form action="${projectContent[i].projectDemo}" class="btn btnSource">
                                <input class = "btn" type="submit" value="See live" /><i class="fab fa-external-link-alt"></i>
                            </form>
                            <form action="${projectContent[i].projectSource}" class="btn btnDemo">
                                <input class = "btn" type="submit" value="See Source"> <i class="fab fa-github"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  `;
    }
}

function changeWindowPopup() {
    popup.classList.add('hidden');
}

btn_1.addEventListener('click', () => {
    openWindows();
    changeWindowPopup(1);
});

btn_2.addEventListener('click', () => {
    openWindows();
    changeWindowPopup(2);
});

btn_3.addEventListener('click', () => {
    openWindows();
    changeWindowPopup(3);
});

btn_4.addEventListener('click', () => {
    openWindows();
    changeWindowPopup(4);
});

const formValidation = document.querySelector('#input-contact-box');
const emailInputValidation = document.querySelector('#email');
const entryTextMessage = document.querySelector('#input-message');

formValidation.addEventListener('submit', (event) => {
    const strEmailInput = emailInputValidation.value;
    if (/[A-Z]/.test(strEmailInput)) {
        entryTextMessage.innerHTML = '*Your email address is not correct, email must be contain only lowercase character';
        entryTextMessage.style.fontSize = '16px';
        entryTextMessage.style.fontStyle = 'italic';
        entryTextMessage.style.color = 'white';

        event.preventDefault();

    }
});

