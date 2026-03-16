# Koodikerho web-ohjelmoinnin lyhyt oppimäärä

1. Forkkaa projekti omalle käyttäjälle
2. Kloonaa oma forkkisi
3. Tee muutokset
4. Puske muutokset omaan forkkiin (add, commit, push)
5. Tee uusi pull request

## Asennukset projektille

### Node.js

- [Node.js Installation](https://nodejs.org/en/download)

Muuta ei tarvitse asentaa.

## Projektin pohja

- JavaScript
    - Yleinen web-ohjelmoinnissa käytettävä ohjelmointikieli.
    - Vaikka nimi siihen viittaakin niin ei liity Javaan oikeastaan ollenkaan.
- HTML
    - Määrittelee verkkosivun kontentin ja rakenteen.
    - Yleisesti ottaen aika simppeli, koska ei ole edes varsinaisesti ohjelmointikieli.
- CSS
    - Käytetään muotoilemaan HTML komponentit.
    - Saa verkkosivun näyttämään "nätiltä".
- __Node.js__ (Node Package Manager)
    - Käytetään Node Package Manageria, mutta yleisesti ottaen Node.jsässä on paljon muutakin.
    - Yleisemmin sanottuna npm, vähän niikuin kirjastot Pythonissa tai Javassa.
- __React__
    - Yhdistää JavaScriptin (tai TypeScriptin) ja HTML:n, eli voidaan kirjoittaa samaan tiedostoon JavaScripiä ja HTML:ää.
    - Lähes kaiken nykyaikaisen web-kehityksen pohjana.
- __Vite__
    - Lyhyesti Vitestä: <br>
    Vite (French word for "quick", pronounced /viːt/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: <br>

    A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR). <br>

    A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production. <br>
    - Toimii siis yleisenä avustavana frameworkkina front-end devaamisessa. Käytetään mm. myös web-ohjelmoinnin kurseilla myöhemmin.

## Ohjeet

- Asenna node.js ylhäällä olevasta linkistä.
- Mene kansioon johon forkattu projekti on kloonattu.
- Aja tämä komento kyseissä kansiossa: ```npm create vite@latest```
- Valitse projektille nimi.
- Select a framework: React
- Select a variant: JavaScript + React Compiler
- Install with npm and start now? Yes

Nyt verkkosivut ovat alustettu.