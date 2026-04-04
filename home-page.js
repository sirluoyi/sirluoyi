import { dataArray } from "./data-articles/data-articles.js";
import { categoryBoxArray } from "./data-articles/data-category-box.js";
import { navbarArray } from "./data-articles/data-navbar.js";
import { selectedArticlesArray } from "./data-articles/data-selected-articles.js";
import { footerArray } from "./data-articles/data-footer.js";
import { headerDropArray } from "./data-articles/data-header-drop.js";


const body = document.body;

// EVENT LISTENERS

const hamButtonHeader = body.querySelector('.header-c3');
const hamButtonTop = body.querySelector('.hamburger-button-top');
const overlay = body.querySelector('.overlay');
const catButton = body.querySelector('.cat-button');

// Hamburger Button Header 
hamButtonHeader.addEventListener('click', () => {
  body.querySelectorAll('.js-slide').forEach(item => {
    item.classList.toggle('slide');
  });
});

// Hamburger Button Top
hamButtonTop.addEventListener('click', () => {
  body.querySelectorAll('.js-slide').forEach(item => {
    item.classList.toggle('slide');
  });
});


// Category Drop Down Menu
catButton.addEventListener('click', () => {
  headerCatDrop.classList.toggle('drop');
  overlay.classList.toggle('cat-drop');
  catButton.classList.toggle('drop');
});


// Scroll Event Listener

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header-article');
	 if (window.scrollY > 300){
		header.classList.add('show');
	 } else {
		header.classList.remove('show');
	 }
});

// Search Button Hero
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', (e) => {
	e.stopPropagation();
	searchInput.classList.toggle('appear');
	searchButton.classList.toggle('appear');
	searchInput.focus();
});
searchInput.addEventListener('click', (e) => {
	e.stopPropagation();
});

document.addEventListener('click', (e) => {
	searchInput.classList.remove('appear');
	searchButton.classList.remove('appear');
});


// LATEST ARTICLES HTML GENERATIONS

const featuredArticlesBody = body.querySelector('.js-featured-article-box');

let total = dataArray.length;
let html = ``;

for (let i = total-1; i > total - 4; i--)
{
 const item = dataArray[i];
 const partHtml = `<a href="article-webpages/article.html?id=${item.id}" class="article1"> 
		<div class="article1-box1">
			<img src="image/${item.imageThumb}">
		</div>
		<div class="article1-box2">
			<div class="article-category">${item.category}</div>
			<div class="article-title">${item.heading}</div>
			<div class="article-main"> ${item.articleThumb}</div>
			<div class="article-footer">${item.author}</div>
		</div>
	</a>`
  html += partHtml;
};

featuredArticlesBody.innerHTML = html;


// CATEGORY BOX GENERATION


let categoryBoxHtml = ``;
categoryBoxArray.forEach(item => {

	if (item.title === "All Articles"){
		categoryBoxHtml += `
			<a href="article-webpages/explore-articles-list.html" class="all-articles-box">
				<div class="text-card">${item.title}</div>
			</a>`;
	}

	else {
		categoryBoxHtml += `
			<a href="article-webpages/explore-articles-list.html" class="topic-box">
				<div class="icon">
					<img src="image/${item.image}">
				</div>
				<div class="text-card">${item.title}</div>
			</a>`;
	};


});

const categoryBoxBody = body.querySelector('.js-subtopic-div-1');
categoryBoxBody.innerHTML = categoryBoxHtml;



// NAVIGATION BAR CATEGORY GENERATION


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
			</a>
			`;
			navbarHtml += partHtml2;
		
	});
});

body.querySelector('.js-navbar-category-box').innerHTML = navbarHtml;


// SHLOKA HTML GENERATION

let i = 0;
let shlokaHtml = ``;
for (i=0; i<6; i++) {
const partHtml = `यथा शिखा मयूराणां नागानां मणयो यथा। तद्वद्वेदाङ्गशास्त्राणां गणितं मूर्धनि स्थितम्॥ &nbsp; &nbsp; &nbsp;`;

	shlokaHtml += partHtml;
};

body.querySelector('.ticker-text').innerHTML = shlokaHtml;



// FEATURED ARTICLES GENERATION
let selectedArticlesHtml = ``;
selectedArticlesArray.forEach(item => {

const partHtml = `<div style="display: flex; font-size: 30px;">
	<div style="display: flex; align-items: center; justify-content: center;">
	<div style="background-color: #ebb04127; padding: 4px 30px; margin: 0px 30px; border-radius: 7px; border: 2px solid #bb8c352f; box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1); width: 150px; text-align: center;">${item.category}</div>
	</div>
	<div style="display: flex; flex-direction: column;">
	<div style="padding: 5px 5px;">${item.heading}</div>
	<div style="color: grey; font-size: 20px; padding: 5px 5px;">${item.date}</div>
	</div>
	</div>`;
	selectedArticlesHtml += partHtml;
});
body.querySelector('.js-selected-articles').innerHTML = selectedArticlesHtml;


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
   </div>`
});
body.querySelector('.footer-box-parent').innerHTML = footerHtml;



// HEADER CATEGORY DROPDOWN GENERATION
const headerCatDrop = body.querySelector('.header-category-drop');
let headerDropHtml = ``;
headerDropArray.forEach(item => {

	headerDropHtml += `
	<a class="head-cat-drop-box" href="article-webpages/explore-articles-list.html">${item}</a>
	`;
	
});

headerCatDrop.innerHTML = headerDropHtml;




