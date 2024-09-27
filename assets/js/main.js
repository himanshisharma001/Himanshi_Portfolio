const menu = document.querySelector('.menu-block');
const menuMain = menu.querySelector('.site-menu-main');
const submenuAll = menu.querySelectorAll('.sub-menu');
const goBack = menu.querySelector('.go-back');
const menuTrigger = document.querySelector('.mobile-menu-trigger');
const closeMenu = menu.querySelector('.mobile-menu-close');
const navLinkItemAll = menuMain.querySelectorAll('.nav-link-item');

let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
  return array[array.length - 1];
}
function last2(array) {
  return array[array.length - 2];
}

menuMain.addEventListener('click', e => {
  if (!menu.classList.contains('active')) {
    return;
  }
  if (e.target.closest('.nav-item-has-children')) {
    const hasChildren = e.target.closest('.nav-item-has-children');

    showSubMenu(hasChildren);
  }
});
goBack.addEventListener('click', () => {
  const lastItem = last(subMenuArray);
  const lastItemText = last2(subMenuTextArray);
  subMenuArray.pop();
  subMenuTextArray.pop();
  if (subMenuArray.length >= 0) {
    document.getElementById(lastItem).style.animation =
      'slideRight 0.5s ease forwards';
    menu.querySelector('.current-menu-title').innerHTML = lastItemText;
    setTimeout(() => {
      document.getElementById(lastItem).classList.remove('active');
    }, 300);
  }
  if (subMenuArray.length == 0) {
    menu.querySelector('.mobile-menu-head').classList.remove('active');
  }
});
menuTrigger.addEventListener('click', () => {
  toggleMenu();
});
closeMenu.addEventListener('click', () => {
  toggleMenu();
});

function navLinkItemToggleMenu(navLinkItemAll) {
  for (let i = 0; navLinkItemAll.length > i; i++) {
    if (!navLinkItemAll[i].classList.contains('drop-trigger')) {
      navLinkItemAll[i].addEventListener('click', () => {
        toggleMenu();
      });
    }
  }
}
navLinkItemToggleMenu(navLinkItemAll);

document.querySelector('.menu-overlay').addEventListener('click', () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle('active');
  document.querySelector('.menu-overlay').classList.toggle('active');
}
function showSubMenu(hasChildren) {
  for (let i = 0; submenuAll.length < i; i++) {
    submenuAll[i].classList.remove('active');
  }
  subMenu = hasChildren.querySelector('.sub-menu');
  subMenuArray.push(subMenu.id);
  subMenu.classList.add('active');
  subMenu.style.animation = 'slideLeft 0.5s ease forwards';
  const menuTitle = hasChildren.querySelector('.drop-trigger').textContent;
  subMenuTextArray.push(menuTitle);

  menu.querySelector('.current-menu-title').innerHTML = menuTitle;
  menu.querySelector('.mobile-menu-head').classList.add('active');
}
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains('active')) {
      toggleMenu();
    }
  }
};

//--------------- Scroll to Top ---------------
let scrollButton = document.getElementById('scrollTopButton');
let topdistance = 600;

if (scrollButton) {
  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > topdistance ||
      document.documentElement.scrollTop > topdistance
    ) {
      scrollButton.classList.add('scrolltop-show');
      scrollButton.classList.remove('scrolltop-hide');
    } else {
      scrollButton.classList.add('scrolltop-hide');
      scrollButton.classList.remove('scrolltop-show');
    }
  });

  scrollButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}

//--------------- Scroll On Count Up ---------------
let nums = document.querySelectorAll('.num');
let container = document.querySelector('.counter-wrapper');

let test = false; // when the function doesn't start

window.onscroll = () => {
  if ((window.screenY = container.offsetTop)) {
    if (!test) {
      nums.forEach(e => {
        let start = 0;
        let end = e.dataset.num;

        let count = setInterval(() => {
          start++;
          e.textContent = start;
          if (start == end) {
            clearInterval(count);
          }
        }, 4000 / end);
      });
    }
    test = true;
  }
};

//--------------- Skill Progress bar On Scroll Animation ---------------//

function isScrolledIntoView(elem) {
  const rect = elem.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

const skillsProgressWrapper = document.querySelector(
  '.skills-progress-wrapper'
);

window.addEventListener('scroll', function () {
  if (isScrolledIntoView(skillsProgressWrapper)) {
    const progressAnimatedLine = document.querySelectorAll(
      '.progress-animated-line'
    );
    progressAnimatedLine[0].classList.add('figma');
    progressAnimatedLine[1].classList.add('illustrator');
    progressAnimatedLine[2].classList.add('photoshop');
  }
});

//--------------- TimeLine On Scroll Animation ---------------//
const timelineWrapper = document.querySelector('.timeline-wrapper');

window.addEventListener('scroll', function () {
  if (isScrolledIntoView(timelineWrapper)) {
    const progressAnimatedLine = document.querySelector('.timeline');
    progressAnimatedLine.classList.add('line-movedown');

    const singleExp = document.querySelectorAll('.timeline-item-wrapper');
    singleExp[0].classList.add('single-exprnce-movedown');
    singleExp[1].classList.add('single-exprnce-movedown');
  }
});


// ---------------------------Download CV---------------------------------//
document.getElementById('downloadCvBtn').addEventListener('click', function() {
  // Create an invisible link element
  const link = document.createElement('a');
  
  // Set the path to your CV file (PDF or other format)
  link.href = 'assets/images/Himanshi_Resume.pdf'; 
  
  // Set the download attribute, which will trigger a download
  link.download = 'Himanshi_Resume.pdf';
  
  // Append the link to the document body and click it
  document.body.appendChild(link);
  link.click();
  
  // Remove the link from the DOM after triggering the download
  document.body.removeChild(link);
});