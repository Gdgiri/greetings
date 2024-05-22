var greeting = document.getElementById("greetings");
var image = document.getElementById("image");
var bg = document.getElementById("body");
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) {

  image.innerHTML = ` <h1>GOOD MORNING</h1>
  <img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FUI1LUP61p3YYM%2Fgiphy.gif&f=1&nofb=1&ipt=ebddaa3212e59fa7755881fd95a5bd38ca77b0e4f31343beedf9ba77812e6f1a&ipo=images" alt="good morning">
  `;
} else if (hrs >= 12 && hrs <= 16) {

  image.innerHTML = ` <h1>GOOD AFTERNOON</h1>
  <img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FxT0Gqz4x4eLd5gDtaU%2Fgiphy.gif&f=1&nofb=1&ipt=14a20a377304aae0326a1f3adf43c301b033f881536de2edd765922ce0db1bbe&ipo=images" alt="good afternoon">
  `;
} else if (hrs >= 16 && hrs <= 20) {
 
  image.innerHTML = `
  <h1>GOOD EVENING</h1>
  <img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2FdP8DxhD9ekk1i%2Fgiphy.gif&f=1&nofb=1&ipt=a9aeab352bf0a7f287a64d414d9718295f44a2a63afe3632a6af40a87ddcb388&ipo=images" alt="good evening" width="800px">
  `;
} else if (hrs >= 20 && hrs <= 24) {
 
  image.innerHTML = `
  <h1>GOOD NIGHT</h1><img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fb87c9897b5c864467537652e56dd4822%2Ftenor.gif%3Fitemid%3D14745168&f=1&nofb=1&ipt=6211779c9e2b2076a2b04557ddae8b62f317489349755a8caa1832aed2847c77&ipo=images" alt="good night">
 `;
}
greeting.innerHTML = "<b>" + greet + "</b>";

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: true });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
