import { Utils } from './utils';

console.log('系统时间:', Utils.getSystemDate());

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
    loginBtn.addEventListener('click', () => {
      window.location.href = "register.html";
    });
  }
}
