const links = document.getElementById("links");
const link_data = [
    {
        href: "https://github.com/",
        img: "./image-assets/github.png",
        title: "Github"
    },
    {
        href: "https://script.google.com/home?hl=ja&pli=1",
        img: "./image-assets/gas.png",
        title: "GAS"
    },
    {
        href: "https://colab.research.google.com/?hl=ja",
        img: "./image-assets/gc.png",
        title: "GC"
    },
    {
        href: "https://pathfinder.w3schools.com/",
        img: "./image-assets/w3.png",
        title: "W3"
    },
    {
        href: "https://www.javatpoint.com/",
        img: "./image-assets/jtp.png",
        title: "JTP"
    },
    {
        href: "https://web.dev/learn?hl=ja",
        img: "./image-assets/wd.png",
        title: "WD"
    },
    {
        href: "https://developers.google.com/?hl=ja",
        img: "./image-assets/gd.png",
        title: "GD"
    },
    {
        href: "https://www.freecodecamp.org/japanese/",
        img: "./image-assets/fcc.png",
        title: "FCC"
    },
];

link_data.forEach(data => {
    createLink(data);
});

function createLink(data) {
    const a = document.createElement("a");
    a.href = data.href;
    a.classList.add("link");

    const img = document.createElement("img");
    img.src = data.img;

    const p = document.createElement("p");
    p.innerText = data.title;

    a.appendChild(img);
    a.appendChild(p);

    links.appendChild(a);
}

const form = document.querySelector("form");
const search = document.getElementById("search");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const is_fill = search.value.trim() !== "";
    if (is_fill) {
            form.action = "//www.google.co.jp/search";
            form.submit();
    }
});

