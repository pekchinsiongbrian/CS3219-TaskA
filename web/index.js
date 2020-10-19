let menuOpen = false;
let aboutTabOpen = false;
let curriculumTabOpen = false;
const menuBtn = document.querySelector(".menu-btn");

openMenu = () => {
  menuBtn.classList.add("open");
  document.querySelector(".navbar").style.right = "0";
  menuOpen = true;
};

closeMenu = () => {
  menuBtn.classList.remove("open");
  document.querySelector(".navbar").style.right = "-100vw";
  menuOpen = false;

  document.querySelector(".about-dropdown-content").style.top = "-100vh";
  aboutTabOpen = false;

  document.querySelector(".curriculum-dropdown-content").style.top = "-100vh";
  curriculumTabOpen = false;
};

closeAboutTab = () => {
  document.querySelector(".about-dropdown-content").style.top = "-100vh";
  aboutTabOpen = false;
};

closeCurriculumTab = () => {
  document.querySelector(".curriculum-dropdown-content").style.top = "-100vh";
  curriculumTabOpen = false;
};

// Opens or closes menu if menu sandwich button is clicked
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Opens or closes "About" tab if "About" is clicked on the menu
const about = document.querySelector(".about-dropdown");
about.addEventListener("click", () => {
  if (aboutTabOpen) {
    document.querySelector(".about-dropdown-content").style.top = "-100vh";
    aboutTabOpen = false;
  } else {
    document.querySelector(".about-dropdown-content").style.top = "100px";
    aboutTabOpen = true;

    document.querySelector(".curriculum-dropdown-content").style.top = "-100vh";
    curriculumTabOpen = false;
  }
});

// Opens or closes "Curriculum" tab if "Curriculum" is clicked on the menu
const curriculum = document.querySelector(".curriculum-dropdown");
curriculum.addEventListener("click", () => {
  if (curriculumTabOpen) {
    document.querySelector(".curriculum-dropdown-content").style.top = "-100vh";
    curriculumTabOpen = false;
  } else {
    document.querySelector(".curriculum-dropdown-content").style.top = "100px";
    curriculumTabOpen = true;

    document.querySelector(".about-dropdown-content").style.top = "-100vh";
    aboutTabOpen = false;
  }
});

// If user clicks on main screen, any opened menu or menu tab will be closed, regardless of screen width
document.getElementsByTagName("MAIN")[0].addEventListener("click", () => {
  if (menuOpen) closeMenu();

  if (aboutTabOpen) closeAboutTab();

  if (curriculumTabOpen) closeCurriculumTab();
});

// Checks for screen width changes and closes all menu tabs if the menu changes from sandwich button to horizontal list, vice versa
let screenWidthChecker = window.matchMedia("(max-width: 1000px)");

const closeMenuOnSmallScreen = (screenWidthChecker) => {
  // If media query matches
  if (screenWidthChecker.matches) closeMenu();
};

closeMenuOnSmallScreen(screenWidthChecker);
screenWidthChecker.addListener(closeMenuOnSmallScreen);

// Back to top button
backToTopBtn = document.getElementsByClassName("topBtn")[0];

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
