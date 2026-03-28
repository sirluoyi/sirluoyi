import { dataArray } from "../data-articles/data-articles.js";

const body = document.body.querySelector('.js-data-import');

let html = ``;

	dataArray.forEach(item => {
		
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

  console.log(html);


