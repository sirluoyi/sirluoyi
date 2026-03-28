import { dataArray } from "./data-articles/data-articles.js";



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

const featuredArticlesBody = document.body.querySelector('.js-featured-article-box');

let total = 0;
dataArray.forEach(item => {
  total++;
});

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
  console.log(partHtml);
  html += partHtml;
  console.log(html);
};



featuredArticlesBody.innerHTML = html;


