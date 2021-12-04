
// footer의 select-box

const footerBtn = document.querySelector('.toggle_btn');
const btnList = document.querySelector('.btn_list');

footerBtn.addEventListener('click', () => {
  footerBtn.classList.toggle('on');
})
// btnList.addEventListener('click', () => {
//   btnList.classList.toggle('on')
// })