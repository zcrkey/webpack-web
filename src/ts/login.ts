import { Utils } from './utils';
import "../assets/scss/base.scss";
import "../assets/scss/key.scss";

window.onload = function () {
  let idLogin = document.getElementById('title')
  if (!!idLogin) {
    let title = "这是一个登陆页面!";
    idLogin.innerHTML = title;
  }

  console.log('系统时间-login:', Utils.getSystemDate());
}