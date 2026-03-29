import { dataArray } from "./data-articles/data-articles.js";
import { categoryBoxArray } from "./data-articles/data-category-box.js";



// NAVIGATION BAR TOGGLE 

document.body.querySelector('.js-navbar-button').addEventListener('click', () => {
  document.body.querySelector('.js-navbar-parent').classList.toggle('slide');
})

document.body.querySelector('.navbar-toggle-button').addEventListener('click', () => {
  document.body.querySelector('.js-navbar-parent').classList.toggle('slide');
})


document.body.querySelector('.js-navbar-button').addEventListener('click', () => {
  document.body.querySelector('.overlay').classList.toggle('slide');
})

document.body.querySelector('.navbar-toggle-button').addEventListener('click', () => {
  document.body.querySelector('.overlay').classList.toggle('slide');
})

// FEATURED ARTICLES HTML GENERATIONS

const featuredArticlesBody = document.body.querySelector('.js-featured-article-box');

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
const partHtml = `
			<a href="article-webpages/article.html" class="topic-box">
				<div class="icon">
					<img src="image/${item.image}">
				</div>
				<div class="text-card">${item.title}</div>
			</a>
`
	categoryBoxHtml += partHtml;
});

const categoryBoxBody = document.body.querySelector('.js-subtopic-div-1');
console.log(categoryBoxBody);
categoryBoxBody.innerHTML = categoryBoxHtml;