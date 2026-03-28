import { dataArray } from "../data-articles/data-articles.js";

const body = document.body.querySelector('.js-import-articles');

const params = new
URLSearchParams(window.location.search);

const id = params.get("id");
console.log(id);

const item = dataArray.find(item => item.id === id);

const html = `<div style="color: black; font-weight: bold; font-size: 90px; padding: 50px 100px 10px 50px;">${item.heading}</div>
  <div style="font-size: 55px; font-weight: bold; padding-left: 50px; padding-top: 30px; padding-bottom: 20px;">${item.subheading}</div>
  <div style="padding-left: 50px;">
    <div style="height: 30px; width: 350px; background-color: rgb(204, 157, 96); margin-bottom: 60px;"></div>
  </div>
  <!--Article Main-->

  <img src="../image/${item.image}" style="width: 700px; height: 370px; object-fit: cover; display: block; margin: 0 auto;">
  <div style="margin: 70px 50px 20px 50px; font-size: 42px;">${item.article}</div>

  <!--Article Footer-->
  <div style="padding: 10px 50px;">
    <div style="width: 100%; height: 6px; background-color: rgba(0, 0, 0, 0.496);"></div>
  </div>
  <div style="display: flex; justify-content: space-around;">
  <p style="font-weight: bold; color: rgba(117, 30, 30, 0.815); margin-top: 8px; display: inline-block; font-size: 30px;">Thanks for visiting our website.</p>`;


  body.innerHTML = html;
