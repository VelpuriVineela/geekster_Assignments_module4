const BTN = document.getElementById("btn");
const BIRTHDATE = document.getElementById("birthday");
const YEARS = document.getElementById("years");
const MONTHS = document.getElementById("months");
const DAYS = document.getElementById("days");
const ERROR = document.getElementById("error");
const RESULTBOX = document.getElementById("result-box");
const RESULTINNER = document.getElementsByClassName("result-inner");
console.log(Array.from(RESULTINNER));

const isLeapYear = (year, months) => {
  months[1] = year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) ? 29 : 28;
};

BTN.addEventListener("click", (e) => {
  RESULTBOX.style.display = "flex";
  ERROR.classList.remove("error");
  ERROR.innerText = "";

  let currDate = new Date();
  let currDay = currDate.getDate();
  let currMonth = currDate.getMonth() + 1; //because month 0 to 11 so we need 1 to 12
  let currYear = currDate.getFullYear();

  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  isLeapYear(currYear, months); //called function for leap year (feb)

  // let birthYear = +birthDate.value.slice(0, 4);
  let birthYear = new Date(BIRTHDATE.value).getFullYear();
  // let birthMonth = +birthDate.value.slice(5, 7);
  let birthMonth = new Date(BIRTHDATE.value).getMonth() + 1;
  // let birthDay = +birthDate.value.slice(8);
  let birthDay = new Date(BIRTHDATE.value).getDate();

  let yearDiff = currYear - birthYear;
  let monthDiff = currMonth - birthMonth;
  let dayDiff = currDay - birthDay;

  if (
    yearDiff < 0 ||
    (yearDiff == 0 && monthDiff < 0) ||
    (yearDiff == 0 && monthDiff == 0 && dayDiff < 0) ||
    !yearDiff ||
    !monthDiff ||
    !dayDiff
  ) {
    ERROR.classList.add("error");
    ERROR.innerText = "*Please enter a valid birthdate";
    RESULTBOX.style.display = "none";
    BIRTHDATE.value = "";
    YEARS.innerText = "-";
    MONTHS.innerText = "-";
    DAYS.innerText = "-";
    return;
  }

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  if (dayDiff < 0) {
    monthDiff--;
    let days = months[currMonth - 2];
    dayDiff += days;
    if (monthDiff < 0) {
      monthDiff = 11;
      yearDiff--;
    }
  }

  YEARS.innerText = yearDiff;
  MONTHS.innerText = monthDiff;
  DAYS.innerText = dayDiff;

  Array.from(RESULTINNER).forEach((elm) => {
    elm.classList.add("shadowStyle");
  });
  // RESULTBOX.classList.add("shadowStyle");
});