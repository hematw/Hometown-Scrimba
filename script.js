let tabHeader = document.querySelector('.tabs-header');
let tabBody = document.querySelector('.tabs-body');
let tabsPane = tabHeader.querySelectorAll('ul li');
let tabBodyContents = tabBody.getElementsByTagName('section');

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener('click', function () {
    tabHeader.getElementsByClassName('active')[0].classList.remove('active');
    tabsPane[i].classList.add('active');
    tabBody.getElementsByClassName('active')[0].classList.remove('active');
    tabBodyContents[i].classList.add('active');
  });
}
