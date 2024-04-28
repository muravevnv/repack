
const faqItemsBtns = document.querySelectorAll('.faq__item-head');

faqItemsBtns.forEach((item) => {
  item.addEventListener('click', () => {
    let container = item.nextElementSibling;
    
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
      container.style.maxHeight = 0;
    } else {
      item.classList.add('is-open');
      container.style.maxHeight = container.scrollHeight + 'px';
    }
  })
})


const modal = document.querySelector('[data-modal]');

const modalCloseBtn = document.querySelectorAll('[data-modal-close]');

const modalOpenBtn = document.querySelectorAll('[data-modal-open]');

modalOpenBtn.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('is-open');
  })
})

modalCloseBtn.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.remove('is-open');
  })
})
