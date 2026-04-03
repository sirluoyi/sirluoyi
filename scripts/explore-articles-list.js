import { dataArray } from "../data-articles/data-articles.js";
import { footerArray } from "../data-articles/data-footer.js";
import { navbarArray } from "../data-articles/data-navbar.js";
import { headerDropArray } from "../data-articles/data-header-drop.js";

const body = document.body.querySelector('.js-data-import');

let html = ``;
	dataArray.slice().reverse().forEach(item => {
		
		let itemHtml = `
			<a href="article.html?id=${item.id}" class="article1">
      <div class="article1-box1">
        <img src="../image/${item.imageThumb}">
      </div>
      <div class="article1-box2">
        <div class="article-category">${item.category}</div>
        <div class="article-title">${item.headingThumb}</div>
        <div class="article-main">${item.articleThumb}</div>
        <div class="article-footer">${item.author}</div>
      </div>
    </a>
		`;
		html += itemHtml;
	});
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

// Category Button Click
document.body.querySelector('.art-cat-button').addEventListener('click', () => {
  document.body.querySelectorAll('.js-art-dropdown').forEach(item => {
    item.classList.toggle('art-drop');
  });
});

// HEADER CATEGORY DROPDOWN GENERATION
const headerCatDrop = document.body.querySelector('.header-category-drop');
let headerDropHtml = ``;
headerDropArray.forEach(item => {
  headerDropHtml += `
  <a class="head-cat-drop-box" href="article-webpages/explore-articles-list.html">${item}</a>
  `;	
});
headerCatDrop.innerHTML = headerDropHtml;