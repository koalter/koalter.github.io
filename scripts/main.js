let owner = 'Lorenzo Nahuel Cea Ko'; //Here goes the full name of the portfolio owner

let form = document.getElementById('form');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');
let message = document.getElementById('message');

// Fill with owner name
document.getElementById('owner').innerText = owner;
document.getElementById('first-name').innerText = owner.split(' ')[0];

// Event handler for the form
form.addEventListener('submit', e => {
  alert(`Message sent!`);
});

// Event handler for contact button
document.getElementById('btn-contact').addEventListener('click', () => {
  document.getElementById('contact-b').scrollIntoView();
});

// Event handler for hamburger
let main = document.getElementsByTagName('main')[0];
let nav = document.getElementsByTagName('nav')[0];

document.getElementById('hamburger').addEventListener('click', () => {
  nav.style.right = '30%';
});

// Event handler to close navbar
main.addEventListener('click', closeModal);

InitializeWorkSection();
InitializeProjectsSection();

/*
**  Functions
*/
// Close hamburger
function closeModal() {
  nav.style.right = '100%';
}

// Work section
function InitializeWorkSection() {

  let workContainer = document.getElementById('work-container');
  let index = 0;

  for (let i = 0; i < workItems.length; i++) {
    let card = document.createElement('div');
    let icon = document.createElement('i');
    let title = document.createElement('h3');
    let description = document.createElement('p');

    card.style['display'] = 'none';
    card.classList.add('card');
    icon.className = workItems[i].icon;
    title.innerText = workItems[i].title;
    description.innerText = workItems[i].description;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    workContainer.appendChild(card);
  }

  workContainer.children[index].style['display'] = 'initial';

  let leftArrow = document.getElementById('work-left-arrow');
  let rightArrow = document.getElementById('work-right-arrow');

  rightArrow.addEventListener('click', e => {
    e.preventDefault();

    workContainer.children[index].style['display'] = 'none';

    if (index < workContainer.children.length - 1) {
      index++;
    } else {
      index = 0;
    }

    workContainer.children[index].style['display'] = 'initial';
  });
  leftArrow.addEventListener('click', e => {
    e.preventDefault();

    workContainer.children[index].style['display'] = 'none';

    if (index > 0) {
      index--;
    } else {
      index = workContainer.children.length - 1;
    }

    workContainer.children[index].style['display'] = 'initial';
  });
}

// Projects section
function InitializeProjectsSection() {
  
  let projectsContainer = document.getElementById('projects-container');
  let dotContainer = document.getElementById('dot-container');
  let index = 0;

  for (let i = 0; i < projectsItems.length; i++) {
    let card = document.createElement('div');
    let dot = document.createElement('div');
    let thumbnail = document.createElement('img');
    let title = document.createElement('h4');
    let description = document.createElement('p');

    card.classList.add('hidden');
    card.classList.add('card');
    thumbnail.classList.add('thumbnail');
    thumbnail.src = projectsItems[i].icon;
    thumbnail.alt = 'thumbnail';
    title.innerText = projectsItems[i].title;
    description.innerText = projectsItems[i].description;

    card.appendChild(thumbnail);
    card.appendChild(title);
    card.appendChild(description);

    projectsContainer.appendChild(card);
    
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
  }
  projectsContainer.href = projectsItems[index].url;
  projectsContainer.children[index].classList.remove('hidden');
  dotContainer.children[index].classList.add('orange-bg');
  

  let leftArrow = document.getElementById('projects-left-arrow');
  let rightArrow = document.getElementById('projects-right-arrow');

  rightArrow.addEventListener('click', e => {
    e.preventDefault();

    projectsContainer.children[index].classList.add('hidden');
    dotContainer.children[index].classList.remove('orange-bg');

    if (index < projectsContainer.children.length - 1) {
      index++;
    } else {
      index = 0;
    }

    projectsContainer.href = projectsItems[index].url;
    projectsContainer.children[index].classList.remove('hidden');
    dotContainer.children[index].classList.add('orange-bg');
  });
  leftArrow.addEventListener('click', e => {
    e.preventDefault();

    projectsContainer.children[index].classList.add('hidden');
    dotContainer.children[index].classList.remove('orange-bg');

    if (index > 0) {
      index--;
    } else {
      index = projectsContainer.children.length - 1;
    }

    projectsContainer.href = projectsItems[index].url;
    projectsContainer.children[index].classList.remove('hidden');
    dotContainer.children[index].classList.add('orange-bg');
  });
  
  for (let i = 0; i < dotContainer.children.length; i++) {
    //console.log(dotContainer.children[i])
    dotContainer.children[i].addEventListener('click', () => {
      projectsContainer.children[index].classList.add('hidden');
      for (item of dotContainer.children) {
        item.classList.remove('orange-bg');
      }
      index = i;
      projectsContainer.children[index].classList.remove('hidden');
      dotContainer.children[i].classList.add('orange-bg');
    });
  }
}
