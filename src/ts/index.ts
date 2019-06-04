import { Utils } from './utils';
import "../assets/scss/base.scss";
import "../assets/css/key.css";
import "../assets/scss/index.scss";
import "../assets/fonts/font-awesome.min.css"

// TODO:公共css未提取

console.log('系统时间-index:', Utils.getSystemDate());

/**
 * 用户登录
 */
export function onLogin() {
  console.log("用户登录");
}

/**
 * 用户注册
 */
export function onRegister() {
  console.log("用户注册");
}

window.onload = function () {
  // 登录跳转
  let loginBtn = document.getElementById('login');
  if (!!loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = "login.html";
    });
  }

  // 注册跳转
  let registerBtn = document.getElementById('register');
  if (!!registerBtn) {
    registerBtn.addEventListener('click', () => {
      window.location.href = "register.html";
    });
  }
}
