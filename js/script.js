let archives = [
  {name: "March 2014", url: ""},
  {name: "February 2014", url: ""},
  {name: "January 2014", url: ""},
  {name: "December 2013", url: ""},
  {name: "November 2013", url: ""},
  {name: "October 2013", url: ""},
  {name: "September 2013", url: ""},
  {name: "August 2013", url: ""},
  {name: "July 2013", url: ""},
  {name: "June 2013", url: ""},
  {name: "May 2013", url: ""},
  {name: "April 2013", url: ""}
];

const body = document.body;
const archivesDiv = body.querySelector(".blogs-section aside .archives");

const addArchives = () => {
  const ul = document.createElement("ul");
  archivesDiv.append(ul);
  for(let i = 0; i < archives.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#FIXME");
    a.setAttribute("title", archives[i].name);
    a.innerText = archives[i].name;

    li.append(a);
    ul.append(li);
  }
}

addArchives();

const ulNavigation = body.querySelector("nav ul");
const hamburger = body.querySelector("nav .hamburger");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    ulNavigation.classList.remove("show");
    
  } else {
    hamburger.classList.add("open");
    ulNavigation.classList.add("show");
  }
});