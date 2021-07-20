let yearspan = document.querySelector("#current-year");
const currentdate = new Date();
const currentyear = currentdate.getFullYear();
yearspan.innerHTML = currentyear;