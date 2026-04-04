import { dataArray } from "../data-articles/data-articles.js";
import { footerArray } from "../data-articles/data-footer.js";
import { headerDropArray } from "../data-articles/data-header-drop.js";
import { navbarArray } from "../data-articles/data-navbar.js";



const body = document.body.querySelector('.js-import-articles');

const params = new
URLSearchParams(window.location.search);

const id = params.get("id");
console.log(id);

const item = dataArray.find(item => item.id === id);

const html = `<div style="color: rgba(43, 5, 5, 0.88); font-weight: bold; font-size: 65px; padding: 50px 100px 10px 50px;">${item.heading}</div>
  <div style="font-size: 38px; font-weight: bold; padding-left: 50px; padding-top: 30px; padding-bottom: 20px;">${item.subheading}</div>
  <div style="padding-left: 50px;">
    <div style="height: 18px; width: 350px; background-color: rgb(204, 157, 96); margin-bottom: 60px;"></div>
  </div>
  <!--Article Main-->
  <img src="../image/${item.image}" style="width: 900px; height: 570px; object-fit: cover; display: block; margin: 0 auto;">

  <div class="css-article-main">${item.article}</div>

  <!--Article Footer-->
  <div style="padding: 10px 50px;">
    <div style="width: 100%; height: 6px; background-color: rgba(0, 0, 0, 0.496);"></div>
  </div>
  <div style="display: flex; justify-content: space-around;">
  <p style="font-weight: bold; color: rgba(117, 30, 30, 0.815); margin-top: 8px; display: inline-block; font-size: 30px;">Thanks for visiting our website.</p>
  `;

  body.innerHTML = html;



// FOOTER GENERATION
    
    
    let footerHtml = ``;
    footerArray.forEach(item => {
       let html = ``;
    
       item.list.forEach(item2 => {
        const partHtml = `
        <a class="footer-box-list" href="article-webpages/article.html">${item2}</a>
        `;
    
        html += partHtml;
       });
    
    
       footerHtml += `
       <div>
       <div class="footer-box-header">${item.heading}</div>
       <div class="footer-box-list-parent">${html}</div>
       </div>
       `
    });
    
    document.body.querySelector('.footer-box-parent').innerHTML = footerHtml;



// HAMBURGER BUTTON EVENT LISTENER

document.body.querySelector('.hamburger-button').addEventListener('click', () => {
  document.body.querySelectorAll('.js-art-active').forEach(item => {
    item.classList.toggle('press');
  });
});

// Category Button Click
document.body.querySelector('.art-cat-button').addEventListener('click', () => {
  document.body.querySelectorAll('.js-art-dropdown').forEach(item => {
    item.classList.toggle('art-drop');
  });
});


// NAVIGATION CATEGORY BOX HTML GENERATION

let navbarHtml = ``;
navbarArray.forEach(item => {
  let partHtml = `
    <div class="section-divider">
      <div class="navigation-text">${item.heading}</div>
      <div class="line8"></div>
    </div>`;
  navbarHtml += partHtml;
  item.box.forEach(box => {
      let partHtml2 = `
      <a class="nav-box" href="${box.link}" style="text-decoration: none;">
        ${box.icon}
        <div class="nav-box-title">${box.title}</div>
      </a>`;
      navbarHtml += partHtml2;
  });
});

document.body.querySelector('.art-js-navbar-category-box').innerHTML = navbarHtml;


// HEADER CATEGORY DROPDOWN GENERATION
const headerCatDrop = document.body.querySelector('.header-category-drop');
let headerDropHtml = ``;
headerDropArray.forEach(item => {
	headerDropHtml += `
	<a class="head-cat-drop-box" href="article-webpages/explore-articles-list.html">${item}</a>
	`;	
});
console.log(headerDropHtml);
headerCatDrop.innerHTML = headerDropHtml;


// PROGRESS BAR 
const artProgressBar = document.querySelector('.art-progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = scrollTop/docHeight;
  artProgressBar.style.transform = `scaleX(${progress})`;
});



