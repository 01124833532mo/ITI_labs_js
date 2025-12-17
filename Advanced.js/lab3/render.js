function FetchGet(country) {
    let URL = `https://restcountries.com/v2/name/${country}`;
    fetch(URL, {
        method: "GET"
    }).then(res => res.json()).then(Data => {
        console.log(Data);
        RenderData(Data);
    })
}

function RenderData(countries) {
    const container = document.querySelector(".countries");
    container.innerHTML = "";
    container.style.opacity = 1;

    countries.forEach(country => {
        const article = document.createElement("article");
        article.className = "country";

        article.innerHTML = `
            <img class="country-img" src="${country.flag}" />
            <div class="country-data">
                <h3 class="country-name">${country.name}</h3>
                <h4 class="country-region">${country.region}</h4>
                <p class="country-row"><span>🧑‍🤝‍🧑</span> ${country.population.toLocaleString()}</p>
                <p class="country-row"><span>🗣</span> ${country.languages[0].name}</p>
                <p class="country-row"><span>💰</span> ${country.currencies[0].name}</p>
            </div>
        `;

        container.append(article);
    });
}

var btn=document.querySelector("#SearchCountry");
document.querySelector("#readData").addEventListener("click", function () {
    FetchGet(btn.value);
})