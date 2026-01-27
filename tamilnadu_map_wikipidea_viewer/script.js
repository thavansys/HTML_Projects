const iframe = document.querySelector(".iframe1");

function load(url) {
    iframe.src = url;
}

document.querySelector(".chennai")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Chennai_district"));

document.querySelector(".kanchipuram")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Kanchipuram_district"));

document.querySelector(".tiruvallur")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Tiruvallur_district"));

document.querySelector(".vellore")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Vellore_district"));

document.querySelector(".salem")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Salem_district"));

document.querySelector(".madurai")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Madurai_district"));

document.querySelector(".tirunelveli")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Tirunelveli_district"));

document.querySelector(".coimbatore")
    .addEventListener("click", () =>
        load("https://en.wikipedia.org/wiki/Coimbatore_district"));
