const faqItemsBtns = document.querySelectorAll(".faq__item-head");

faqItemsBtns.forEach((item) => {
  item.addEventListener("click", () => {
    let container = item.nextElementSibling;

    if (item.classList.contains("is-open")) {
      item.classList.remove("is-open");
      container.style.maxHeight = 0;
    } else {
      item.classList.add("is-open");
      container.style.maxHeight = container.scrollHeight + "px";
    }
  });
});

const modal = document.querySelector("[data-modal]");

const modalCloseBtn = document.querySelectorAll("[data-modal-close]");

const modalOpenBtn = document.querySelectorAll("[data-modal-open]");

modalOpenBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.add("is-open");
  });
});

modalCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });
});

let counters = document.querySelectorAll(".number");

counters.forEach((item) => {
  let numberTop = item.getBoundingClientRect().top;
  let start = +item.dataset.min;
  let end = +item.dataset.max;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight) {
      this.removeEventListener("scroll", onScroll);
      var interval = setInterval(function () {
        item.innerHTML = ++start;
        item.classList.add('is-visible')
        if (start == end) {
          clearInterval(interval);
        }
      }, 5);
    }
  });
});

window.scrollTo(0, 1);