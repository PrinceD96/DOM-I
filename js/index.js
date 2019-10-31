const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io"
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//-------------------------------TASK-1-and-2-------------------------------------
//-------------------------------HEADER-------------------------------------------
let navBar = document.querySelector("header nav");
let navItem1 = document.querySelector("header nav a:nth-child(1)");
navItem1.textContent = siteContent["nav"]["nav-item-1"];

let navItem2 = document.querySelector("header nav a:nth-child(2)");
navItem2.textContent = siteContent["nav"]["nav-item-2"];

let navItem3 = document.querySelector("header nav a:nth-child(3)");
navItem3.textContent = siteContent["nav"]["nav-item-3"];

let navItem4 = document.querySelector("header nav a:nth-child(4)");
navItem4.textContent = siteContent["nav"]["nav-item-4"];

let navItem5 = document.querySelector("header nav a:nth-child(5)");
navItem5.textContent = siteContent["nav"]["nav-item-5"];

let navItem6 = document.querySelector("header nav a:nth-child(6)");
navItem6.textContent = siteContent["nav"]["nav-item-6"];

//-------------------------------CTA-------------------------------------------
let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

//-------------------------------MAIN-CONTENT-----------------------------------
//-------------------------------TOP-CONTENT------------------------------------
let featuresH4 = document.querySelector(".top-content .text-content:nth-child(1) h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector(".top-content .text-content:nth-child(1) p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content .text-content:nth-child(2) h4");
aboutH4.textContent = siteContent["main-content"]["features-h4"];

let aboutContent = document.querySelector(".top-content .text-content:nth-child(2) p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

//-------------------------------MIDDLE-IMG--------------------------------------
let midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

//-------------------------------BOTTOM-CONTENT-----------------------------------
let servicesH4 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelector(".bottom-content .text-content:nth-child(1) p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
productH4.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelector(".bottom-content .text-content:nth-child(2) p");
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelector(".bottom-content .text-content:nth-child(3) p");
visionContent.textContent = siteContent["main-content"]["vision-content"];

//-------------------------------CONTACT----------------------------------------
let contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent["contact"]["contact-h4"];

let contactP1 = document.querySelector(".contact p:nth-child(2)");
contactP1.textContent = siteContent["contact"]["address"];

let contactP2 = document.querySelector(".contact p:nth-child(3)");
contactP2.textContent = siteContent["contact"]["phone"];

let contactP3 = document.querySelector(".contact p:nth-child(4)");
contactP3.textContent = siteContent["contact"]["email"];

//-------------------------------FOOTER-----------------------------------------
let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];

//-------------------------------TASK-3-----------------------------------------
let navItems = document.querySelectorAll("header nav a");
navItems.forEach(function(item) {
  item.style.color = "green";
});

let home = document.createElement("a");
home.textContent = "Home";
navBar.prepend(home);
home.style.color = "green";

let join = document.createElement("a");
join.textContent = "Join";
navBar.appendChild(join);
join.style.color = "green";

//-------------------------------STRETCH-GOALS----------------------------------
let h4s = document.querySelectorAll("h4");
h4s.forEach(function(h4) {
  h4.style.color = "green";
});

ctaBtn.style.backgroundColor = "white";
ctaBtn.style.color = "green";

footerContent.style.color = "green";
