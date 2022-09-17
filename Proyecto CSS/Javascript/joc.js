/*if (window.location.hash == "#easteregg") {

    console.log("Tiene hash " + window.location.hash)

}*/


var countries = {

    AF: 'Afghanistan',

    AX: 'Aland Islands',

    AL: 'Albania',

    DZ: 'Algeria',

    AS: 'American Samoa',

    AD: 'Andorra',

    AO: 'Angola',

    AI: 'Anguilla',

    AQ: 'Antarctica',

    AG: 'Antigua And Barbuda',

    AR: 'Argentina',

    AM: 'Armenia',

    AW: 'Aruba',

    AU: 'Australia',

    AT: 'Austria',

    AZ: 'Azerbaijan',

    BS: 'Bahamas',

    BH: 'Bahrain',

    BD: 'Bangladesh',

    BB: 'Barbados',

    BY: 'Belarus',

    BE: 'Belgium',

    BZ: 'Belize',

    BJ: 'Benin',

    BM: 'Bermuda',

    BT: 'Bhutan',

    BO: 'Bolivia',

    BA: 'Bosnia And Herzegovina',

    BW: 'Botswana',

    BV: 'Bouvet Island',

    BR: 'Brazil',

    IO: 'British Indian Ocean Territory',

    BN: 'Brunei Darussalam',

    BG: 'Bulgaria',

    BF: 'Burkina Faso',

    BI: 'Burundi',

    KH: 'Cambodia',

    CM: 'Cameroon',

    CA: 'Canada',

    CV: 'Cape Verde',

    KY: 'Cayman Islands',

    CF: 'Central African Republic',

    TD: 'Chad',

    CL: 'Chile',

    CN: 'China',

    CX: 'Christmas Island',

    CC: 'Cocos (Keeling) Islands',

    CO: 'Colombia',

    KM: 'Comoros',

    CG: 'Congo',

    CD: 'Congo, Democratic Republic',

    CK: 'Cook Islands',

    CR: 'Costa Rica',

    CI: 'Cote D\'Ivoire',

    HR: 'Croatia',

    CU: 'Cuba',

    CY: 'Cyprus',

    CZ: 'Czech Republic',

    DK: 'Denmark',


    DJ: 'Djibouti',

    DM: 'Dominica',

    DO: 'Dominican Republic',

    EC: 'Ecuador',

    EG: 'Egypt',

    SV: 'El Salvador',

    GQ: 'Equatorial Guinea',

    ER: 'Eritrea',

    EE: 'Estonia',

    ET: 'Ethiopia',

    FK: 'Falkland Islands (Malvinas)',

    FO: 'Faroe Islands',

    FJ: 'Fiji',

    FI: 'Finland',

    FR: 'France',

    GF: 'French Guiana',

    PF: 'French Polynesia',

    TF: 'French Southern Territories',

    GA: 'Gabon',

    GM: 'Gambia',

    GE: 'Georgia',

    DE: 'Germany',

    GH: 'Ghana',

    GI: 'Gibraltar',

    GR: 'Greece',

    GL: 'Greenland',

    GD: 'Grenada',

    GP: 'Guadeloupe',

    GU: 'Guam',

    GT: 'Guatemala',

    GG: 'Guernsey',

    GN: 'Guinea',

    GW: 'Guinea-Bissau',

    GY: 'Guyana',

    HT: 'Haiti',

    HM: 'Heard Island & Mcdonald Islands',

    VA: 'Holy See (Vatican City State)',

    HN: 'Honduras',

    HK: 'Hong Kong',

    HU: 'Hungary',

    IS: 'Iceland',

    IN: 'India',

    ID: 'Indonesia',

    IR: 'Iran, Islamic Republic Of',

    IQ: 'Iraq',

    IE: 'Ireland',

    IM: 'Isle Of Man',

    IL: 'Israel',

    IT: 'Italy',

    JM: 'Jamaica',

    JP: 'Japan',

    JE: 'Jersey',

    JO: 'Jordan',

    KZ: 'Kazakhstan',

    KE: 'Kenya',

    KI: 'Kiribati',

    KR: 'Korea',

    KW: 'Kuwait',

    KG: 'Kyrgyzstan',

    LA: 'Lao People\'s Democratic Republic',

    LV: 'Latvia',

    LB: 'Lebanon',

    LS: 'Lesotho',

    LR: 'Liberia',

    LY: 'Libyan Arab Jamahiriya',

    LI: 'Liechtenstein',

    LT: 'Lithuania',

    LU: 'Luxembourg',

    MO: 'Macao',

    MK: 'Macedonia',

    MG: 'Madagascar',

    MW: 'Malawi',

    MY: 'Malaysia',

    MV: 'Maldives',

    ML: 'Mali',

    MT: 'Malta',

    MH: 'Marshall Islands',

    MQ: 'Martinique',

    MR: 'Mauritania',

    MU: 'Mauritius',

    YT: 'Mayotte',

    MX: 'Mexico',

    FM: 'Micronesia, Federated States Of',

    MD: 'Moldova',

    MC: 'Monaco',

    MN: 'Mongolia',

    ME: 'Montenegro',

    MS: 'Montserrat',

    MA: 'Morocco',

    MZ: 'Mozambique',

    MM: 'Myanmar',

    NA: 'Namibia',

    NR: 'Nauru',

    NP: 'Nepal',

    NL: 'Netherlands',

    AN: 'Netherlands Antilles',

    NC: 'New Caledonia',

    NZ: 'New Zealand',

    NI: 'Nicaragua',

    NE: 'Niger',

    NG: 'Nigeria',

    NU: 'Niue',

    NF: 'Norfolk Island',

    MP: 'Northern Mariana Islands',

    NO: 'Norway',

    OM: 'Oman',

    PK: 'Pakistan',

    PW: 'Palau',

    PS: 'Palestinian Territory, Occupied',

    PA: 'Panama',

    PG: 'Papua New Guinea',

    PY: 'Paraguay',

    PE: 'Peru',

    PH: 'Philippines',

    PN: 'Pitcairn',

    PL: 'Poland',

    PT: 'Portugal',

    PR: 'Puerto Rico',

    QA: 'Qatar',

    RE: 'Reunion',

    RO: 'Romania',

    RU: 'Russian Federation',

    RW: 'Rwanda',

    BL: 'Saint Barthelemy',

    SH: 'Saint Helena',

    KN: 'Saint Kitts And Nevis',

    LC: 'Saint Lucia',

    MF: 'Saint Martin',

    PM: 'Saint Pierre And Miquelon',

    VC: 'Saint Vincent And Grenadines',

    WS: 'Samoa',

    SM: 'San Marino',

    ST: 'Sao Tome And Principe',

    SA: 'Saudi Arabia',

    SN: 'Senegal',

    RS: 'Serbia',

    SC: 'Seychelles',

    SL: 'Sierra Leone',

    SG: 'Singapore',

    SK: 'Slovakia',

    SI: 'Slovenia',

    SB: 'Solomon Islands',

    SO: 'Somalia',

    ZA: 'South Africa',

    GS: 'South Georgia And Sandwich Isl.',

    ES: 'Spain',

    LK: 'Sri Lanka',

    SD: 'Sudan',

    SR: 'Suriname',

    SJ: 'Svalbard And Jan Mayen',

    SZ: 'Swaziland',

    SE: 'Sweden',

    CH: 'Switzerland',

    SY: 'Syrian Arab Republic',

    TW: 'Taiwan',

    TJ: 'Tajikistan',

    TZ: 'Tanzania',

    TH: 'Thailand',

    TL: 'Timor-Leste',

    TG: 'Togo',

    TK: 'Tokelau',

    TO: 'Tonga',

    TT: 'Trinidad And Tobago',

    TN: 'Tunisia',

    TR: 'Turkey',

    TM: 'Turkmenistan',

    TC: 'Turks And Caicos Islands',

    TV: 'Tuvalu',

    UG: 'Uganda',

    UA: 'Ukraine',

    AE: 'United Arab Emirates',

    GB: 'United Kingdom',

    US: 'United States',

    UM: 'United States Outlying Islands',

    UY: 'Uruguay',

    UZ: 'Uzbekistan',

    VU: 'Vanuatu',

    VE: 'Venezuela',

    VN: 'Viet Nam',

    VG: 'Virgin Islands, British',

    VI: 'Virgin Islands, U.S.',

    WF: 'Wallis And Futuna',

    EH: 'Western Sahara',

    YE: 'Yemen',

    ZM: 'Zambia',

    ZW: 'Zimbabwe'

}


function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function getRandomCountryCode() {
    var keys = Object.keys(countries);
    return keys[keys.length * Math.random() << 0]
    //return keys[keys.length - random(0,19)]
}

function getSegonRandomCountryCode() {
    var keys = Object.keys(countries);
    return keys[keys.length - random(0, 20)]
}

function getTercerRandomCountryCode() {
    var keys = Object.keys(countries);
    return keys[keys.length - random(21, 40)]
}


function getQuartRandomCountryCode() {
    var keys = Object.keys(countries);
    return keys[keys.length - random(41, 60)]
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


let queryForCountry = JSON.stringify({
    query: `{
       country(code: "${getRandomCountryCode()}"){
           name
           capital
       }
   }`
})
let queryForSegonCountry = JSON.stringify({

    query: `{

       country(code: "${getSegonRandomCountryCode()}"){
           name
           capital
           emoji
           emojiU
           currency
           languages {
               code
              name
           }
       }
   }`

})

let queryForTercerCountry = JSON.stringify({

    query: `{

       country(code: "${getTercerRandomCountryCode()}"){

           name

           capital

           emoji

           emojiU

           currency

           languages {

               code

               name

           }

       }

   }`

})

let queryForQuartCountry = JSON.stringify({

    query: `{

       country(code: "${getQuartRandomCountryCode()}"){

           name

           capital

           emoji

           emojiU

           currency

           languages {

               code

               name

           }

       }

   }`

})


async function getCountryInfo(query) {
    const response = await fetch("https://countries.trevorblades.com/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: query
    })
    let result = await response.json()
    return result
}


const MostrarJoc = async function () {

    let PaisPrincipal
    let SegonPais
    let TercerPais
    let QuartPais


    do {
        PaisPrincipal = await getCountryInfo(queryForCountry);
    } while (PaisPrincipal.data.country.capital == null);


    do {
        SegonPais = await getCountryInfo(queryForSegonCountry);
    } while (SegonPais.data.country.capital == null);


    do {
        TercerPais = await getCountryInfo(queryForTercerCountry);
    } while (TercerPais.data.country.capital == null);


    do {
        QuartPais = await getCountryInfo(queryForQuartCountry);
    } while (QuartPais.data.country.capital == null);


    const divPaisos = document.getElementById("divPaisos")


    const pPregunta = document.createElement('p');
    pPregunta.innerText = "Which is the capital of " + PaisPrincipal.data.country.name + "?";
    pPregunta.style.fontSize = "2rem";
    pPregunta.style.paddingTop = "2em";
    pPregunta.style.color="black";
    pPregunta.display = "inline-flex";
    divPaisos.appendChild(pPregunta);


    const btPrincipal = document.createElement('input');
    btPrincipal.type = "button";
    btPrincipal.id = "btPrincipal";
    btPrincipal.value = PaisPrincipal.data.country.capital;
    btPrincipal.className="answerButton"
    btPrincipal.style.fontSize = "1em";
    btPrincipal.style.marginRight = "3em";
    btPrincipal.style.marginLeft = "1em";
    btPrincipal.style.cursor = "pointer";
    btPrincipal.display = "inline-flex";
    //btPrincipal.style.backgroundColor = "red";


    const btSegonPais = document.createElement('input');
    btSegonPais.type = "button";
    btSegonPais.id = "btSegon";
    btSegonPais.value = SegonPais.data.country.capital;
    btSegonPais.className="answerButton"
    btSegonPais.style.fontSize = "1em";
    btSegonPais.style.marginRight = "3em";
    btSegonPais.style.cursor = "pointer";
    btSegonPais.display = "inline-flex";


    const btTercerPais = document.createElement('input');
    btTercerPais.type = "button";
    btTercerPais.id = "btTercer";
    btTercerPais.value = TercerPais.data.country.capital;
    btTercerPais.className="answerButton"
    btTercerPais.style.fontSize = "1em";
    btTercerPais.style.marginRight = "3em";
    btTercerPais.style.cursor = "pointer";
    btTercerPais.display = "inline-flex";


    const btQuartPais = document.createElement('input');
    btQuartPais.type = "button";
    btQuartPais.id = "btQuart";
    btQuartPais.value = QuartPais.data.country.capital;
    btQuartPais.className="answerButton"
    btQuartPais.style.fontSize = "1em";
    btQuartPais.style.marginRight = "3em";
    btQuartPais.style.cursor = "pointer";
    btQuartPais.display = "inline-flex";


    //Aleatorietat en la presentació.

    let opcio = Math.floor(Math.random() * 4) + 1;

    switch (opcio) {

        case 1:
            divPaisos.appendChild(btPrincipal);
            divPaisos.appendChild(btSegonPais);
            divPaisos.appendChild(btTercerPais);
            divPaisos.appendChild(btQuartPais);
            break;

        case 2:
            divPaisos.appendChild(btSegonPais);
            divPaisos.appendChild(btPrincipal);
            divPaisos.appendChild(btTercerPais);
            divPaisos.appendChild(btQuartPais);
            break;

        case 3:
            divPaisos.appendChild(btSegonPais);
            divPaisos.appendChild(btTercerPais);
            divPaisos.appendChild(btPrincipal);
            divPaisos.appendChild(btQuartPais);
            break;

        case 4:
            divPaisos.appendChild(btSegonPais);
            divPaisos.appendChild(btTercerPais);
            divPaisos.appendChild(btQuartPais);
            divPaisos.appendChild(btPrincipal);
            break;

        default:
            divPaisos.appendChild(btQuartPais);
            divPaisos.appendChild(btPrincipal);
            divPaisos.appendChild(btSegonPais);
            divPaisos.appendChild(btTercerPais);
            break;

    }

    //console.log(opcio);
}



MostrarJoc();
