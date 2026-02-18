// Current Year and Last Modified Footer Logic
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger Menu Logic (Mobile)
const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Temple Data Array (7 Original + 3 Added)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 8",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- 3 Added Temples ---
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-France-Temple02.jpg"  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52513,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-main.jpeg"
  }
];

// Function to Create Temple Cards
function createTempleCard(templeList) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Clear existing content

    templeList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Temple Name
        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        // Info Container
        const info = document.createElement("div");
        info.classList.add("card-content");
        info.innerHTML = `
            <span>Location:</span> ${temple.location}<br>
            <span>Dedicated:</span> ${temple.dedicated}<br>
            <span>Size:</span> ${temple.area} sq ft
        `;

        // Image with Lazy Loading
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName}`;
        img.loading = "lazy";
        img.width = "400";
        img.height = "250";

        card.appendChild(name);
        card.appendChild(info);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// Initial Load
createTempleCard(temples);

// --- EVENT LISTENERS FOR FILTERS ---

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const headerTitle = document.querySelector("main h2");

// Home (All)
homeLink.addEventListener("click", () => {
    headerTitle.textContent = "Home";
    createTempleCard(temples);
});

// Old (Built before 1900)
oldLink.addEventListener("click", () => {
    headerTitle.textContent = "Old Temples";
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    createTempleCard(oldTemples);
});

// New (Built after 2000)
newLink.addEventListener("click", () => {
    headerTitle.textContent = "New Temples";
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    createTempleCard(newTemples);
});

// Large (Area > 90,000)
largeLink.addEventListener("click", () => {
    headerTitle.textContent = "Large Temples";
    const largeTemples = temples.filter(t => t.area > 90000);
    createTempleCard(largeTemples);
});

// Small (Area < 10,000)
smallLink.addEventListener("click", () => {
    headerTitle.textContent = "Small Temples";
    const smallTemples = temples.filter(t => t.area < 10000);
    createTempleCard(smallTemples);
});