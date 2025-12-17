function FetchGet(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(res => res.json())
        .then(data => {
            let mainCountry = data[0];
            let neighbourCode = mainCountry.borders[1];

            fetch(`https://restcountries.com/v2/alpha/${neighbourCode}`)
                .then(res => res.json())
                .then(neighbourData => {
                    RenderData([mainCountry, neighbourData]);
                });
        });
}

function RenderData(countries) {
    const container = document.querySelector(".countries");
    container.innerHTML = "";
    container.style.opacity = 1;

    countries.forEach(country => {
        const article = document.createElement("article");
        article.className = "country";

        article.innerHTML = `
            <img class="country-img" src="${country.flag}">
            <div class="country-data">
                <h3 class="country-name">${country.name}</h3>
                <h4 class="country-region">${country.region}</h4>
                <p class="country-row"> ${country.population.toLocaleString()}</p>
                <p class="country-row"> ${country.languages[0].name}</p>
                <p class="country-row"> ${country.currencies[0].name}</p>
            </div>
        `;

        container.append(article);
    });
}

var btn = document.querySelector("#SearchCountry");

document.querySelector("#readData").addEventListener("click", function () {
    FetchGet(btn.value);
});
