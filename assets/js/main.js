// Mobile Menu
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile__menu");
  burger.addEventListener("click", () => {
    if (!burger.classList.contains("active")) {
      burger.classList.add("active");
      slideToggle(mobileMenu);
    } else {
      slideToggle(mobileMenu);
      burger.classList.remove("active");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.99) {
      burger.classList.remove("active");
      mobileMenu.style.display = "none";
    }
  });
}
burgerMenu();

// Slide Animation
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.border = "none";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "grid";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.border = "none";

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.style.removeProperty("border");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
const slideToggle = (target, duration = 300) => {
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

// Accordion
function accordion() {
  const items = document.querySelectorAll(".accordion__item");
  const triggers = document.querySelectorAll(".accordion__trigger");
  const contents = document.querySelectorAll(".accordion__content");
  triggers.forEach((trigger, idx) => {
    if (items[0].classList.contains("active")) {
      contents[0].classList.add("active");
    }
    trigger.addEventListener("click", () => {
      const parent = trigger.parentNode;
      if (!parent.classList.contains("active")) {
        // If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
        items.forEach((item, i) => {
          if (i !== idx && item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });
        // Open the current accordion item
        parent.classList.add("active");
      } else {
        // Close the current accordion item
        parent.classList.remove("active");
      }
    });
  });
}
accordion();
