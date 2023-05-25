fetch("https://restcountries.com/v3.1/region/europe")
.then(resolve => resolve.json())
.then(data => {
    const leftCol = document.getElementById("left-col");
    const rightCol = document.getElementById("right-col");
    const capitals = data.map(country => country.capital[0]);
    for (let i = 0; i < capitals.length; i++) {
        const capitalDiv = document.createElement("div");
        capitalDiv.textContent = capitals[i];
        if (i % 2 === 0) {
            leftCol.appendChild(capitalDiv);
        } else {
            rightCol.appendChild(capitalDiv);
        }
    }
});