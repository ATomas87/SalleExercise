
// async function getCoordinates () {
//     return fetch('https://ipapi.co/json/')
//     .then(response => response.json())
//     //.then(data => coor = {latitude: data["latitude"], longitude: data["longitude"]})
// }

// let coor = await getCoordinates();
// console.log(coor);

const link = `https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=01d9e7b4d713c38aec39e45459f44833&units=metric&lang=ca`

let temps = {
    nom: "",
    main: "",
    descripcio: "",
    icon: "",
    urlIcon: "",
    //Patró imatge:"http://openweathermap.org/img/wn/" + icon +"@2x.png"   
    temperatura: "",
    sensacio: "",
    temp_min: "",
    temp_max: "",
    pressioAt: "",
    humitat: ""
};

//Funcions assíncrones

async function ObtenirTemps() {
    const response = await fetch(link);
    const data = await response.json();
    if (response.status === 200) {
        temps.main = data.weather[0].main;
        temps.descripcio = data.weather[0].description;
        temps.icon = data.weather[0].icon;
        temps.urlIcon = "http://openweathermap.org/img/wn/" + temps.icon + "@2x.png"
        temps.temperatura = data.main.temp;
        temps.sensacio = data.main.feels_like;
        temps.temp_min = data.main.temp_min;
        temps.temp_max = data.main.temp_max;
        temps.pressioAt = data.main.pressure;
        temps.humitat = data.main.humidity;
        temps.nom = data.name;
        return temps
    }
    else {
        console.error("HTTP-Error, càrrega temps: " + response.status);
    }
}

async function MostrarImatge(vdades) {
    const divTemperaturaImatge = document.getElementById("divTemperaturaImatge")
    const response = await fetch(vdades["urlIcon"])

    if (response.status === 200) {
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const iImage = document.createElement('img');
        iImage.src = imageObjectURL;
        iImage.style.display = "inline";
        divTemperaturaImatge.append(iImage);
    }
    else {
        console.error("HTTP-Error, càrrega imatge: " + response.status);
    }
}




// Funcions síncrones

function MostrarTemperaturaImatge(vdades) {
    MostrarImatge(vdades);

    const divTemperaturaImatge = document.getElementById("divTemperaturaImatge")
    const pTemperatura = document.createElement('p');
    pTemperatura.innerText = vdades["temperatura"] + "º";
    pTemperatura.style.fontSize = "3em";
    pTemperatura.display = "inline-flex";
    divTemperaturaImatge.appendChild(pTemperatura);
}


function ObtenirDataAvui() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Gener es 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    return today;
}

function MostrarDataLocalitzacio(vdades) {
    const divDataLocalitat = document.getElementById('divDataLocalitat');

    const pData = document.createElement('p');
    pData.innerText = ObtenirDataAvui();
    divDataLocalitat.appendChild(pData);

    const pLocalitat = document.createElement('p');
    pLocalitat.innerHTML = 'Lloc: ' + vdades["nom"];
    pLocalitat.style.fontSize = "2em"
    divDataLocalitat.appendChild(pLocalitat);
}

function MostrarAltresDades(vdades) {
    const divAltres = document.getElementById('divAltres');

    const pMinMax = document.createElement('p');
    pMinMax.innerText = 'Min: ' + vdades["temp_min"] + 'º / Max: ' + vdades["temp_max"] + 'º';
    divAltres.appendChild(pMinMax);

    const pSensacio = document.createElement('p');
    pSensacio.innerText = 'Temp. Sensació: ' + vdades["sensacio"] + "º";
    divAltres.appendChild(pSensacio);

    const pHumitat = document.createElement('p');
    pHumitat.innerText = 'Humitat: ' + vdades["humitat"] + '%';
    divAltres.appendChild(pHumitat);

    const pPressio = document.createElement('p');
    pPressio.innerText = 'Pressió: ' + vdades["pressioAt"] + ' bar';
    divAltres.appendChild(pPressio);
}

function MostrarBannerTemps(visible) {
    const divContainer = document.getElementById('MeteoDiv');
    if (visible === false) {
        divContainer.style.display = "none"
    } else {
        divContainer.style.display = "grid";
    }
}

/* ------------------------------------------------------------------------------------------------------------ */

function MostrarDadesCarrousel(vdades) {
    const divLocation = document.getElementById('divLocation');
    const pLocation = document.createElement('p');
    pLocation.innerText = 'Lloc: ' + vdades["nom"];
    divLocation.appendChild(pLocation);

    const divTemperatura = document.getElementById('divTemperatura');
    const pTemperatura = document.createElement('p');
    pTemperatura.innerText = 'Temperatura: ' + vdades["temperatura"] + 'º';
    divTemperatura.appendChild(pTemperatura);

    const divTempMin = document.getElementById('divTempMin');
    const pMin = document.createElement('p');
    pMin.innerText = 'Min: ' + vdades["temp_min"] + 'º';
    divTempMin.appendChild(pMin);

    const divTempMax = document.getElementById('divTempMax');
    const pMax = document.createElement('p');
    pMax.innerText = 'Max: ' + vdades["temp_max"] + 'º';
    divTempMax.appendChild(pMax);

    const divHumitat = document.getElementById('divHumitat');
    const pHumitat = document.createElement('p');
    pHumitat.innerText = 'Humitat: ' + vdades["humitat"] + '%';
    divHumitat.appendChild(pHumitat);
}

async function MostrarImatgeCarrousel(vdades) {
    const divImatge = document.getElementById("divImatge")
    const response = await fetch(vdades["urlIcon"])

    if (response.status === 200) {
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const iImage = document.createElement('img');
        iImage.src = imageObjectURL;
        iImage.style.display = "inline";
        divImatge.append(iImage);
    }
    else {
        console.error("HTTP-Error, càrrega imatge: " + response.status);
    }
}

/*  MAIN */

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const dades = await ObtenirTemps();
        if (dades !== null) {
            MostrarBannerTemps(true);
            MostrarDataLocalitzacio(dades);
            MostrarTemperaturaImatge(dades);
            MostrarAltresDades(dades);

            MostrarDadesCarrousel(dades);
            MostrarImatgeCarrousel(dades);
        }
        else {
            MostrarBannerTemps(false);
        }
    } catch (e) {
        console.error('ERROR:' + e);
        MostrarBannerTemps(false);
    }
});

window.onload = function () {
    document.getElementById('close').onclick = function () {
        this.parentNode.parentNode.remove();
        return false;
    };

    document.getElementById('closeCarrousel').onclick = function () {
        this.parentNode.parentNode.remove();
        return false;
    };


};