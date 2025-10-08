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
        dedicated: "2015, June, 7",
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
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 20",
        area: 148236,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-main.jpg"
    },
    {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "2009, August, 23",
        area: 60000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-main.jpg"
    }
];

const filter = new URLSearchParams(window.location.search).get('filter');

const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('nav');
const gridContainer = document.querySelector('.grid-container');

const filters = {
    old: (temple) => new Date(temple.dedicated) < new Date('1900-01-01'),
    new: (temple) => new Date(temple.dedicated) >= new Date('2000-01-01'),
    large: (temple) => temple.area >= 90000,
    small: (temple) => temple.area < 10000,
};

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});

temples.filter(filters[filter] ?? (() => true)).forEach((temple) => {
    gridContainer.appendChild(templeCard(temple));
});

function templeCard(temple) {
    const template = document.querySelector('#temple-card-template');
    const card = template.content.cloneNode(true);

    card.querySelector('img').src = temple.imageUrl;
    card.querySelector('img').alt = `${temple.templeName} Temple`;
    card.querySelector('.temple-name').textContent = temple.templeName;
    card.querySelector('.temple-location').textContent = temple.location;
    card.querySelector('.temple-dedicated').textContent = `Dedicated: ${temple.dedicated}`;
    card.querySelector('.temple-area').textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    return card;
}
