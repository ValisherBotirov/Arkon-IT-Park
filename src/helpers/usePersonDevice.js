let user = "";
let userAgent = navigator.userAgent;

if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
  user = "iPhone";
} else user = "android";
console.log(userAgent);

export default user;
