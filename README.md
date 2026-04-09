# Koodikerho web-ohjelmoinnin lyhyt oppimäärä

1. Forkkaa projekti omalle käyttäjälle
2. Kloonaa oma forkkisi
3. Tee muutokset
4. Puske muutokset omaan forkkiin (add, commit, push)

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
    - Käytetään Node.js ajoympäristön mukana tulevaa Node Package Manageria, mutta yleisesti ottaen Node.jsässä on paljon muutakin.
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

# Projektin rakenne
 
Nyt kun Vite on alustanut projektin, kansiorakenne näyttää suunnilleen tältä:
 
```
projekti/
├── public/
├── src/
│   ├── App.jsx        ← Tätä tiedostoa muokataan eniten
│   ├── App.css        ← App-komponentin tyylit
│   ├── main.jsx       ← Kytkee Reactin index.html:ään
│   └── index.css      ← Yleiset tyylit
├── index.html         ← Pohja johon React mountataan
├── package.json       ← Projektin riippuvuudet ja skriptit
└── vite.config.js     ← Viten asetukset
```
 
Käynnistä kehityspalvelin komennolla:
 
```bash
npm run dev
```
 
Sivu aukeaa oletuksena osoitteeseen `http://localhost:5173`. Kun muokkaat tiedostoja, muutokset näkyvät selaimessa automaattisesti ilman sivun uudelleenlatausta (Hot Module Replacement).
 
## JSX-perusteet
 
JSX on Reactin tapa kirjoittaa HTML:ää suoraan JavaScript-funktion sisällä. Avaa `src/App.jsx` ja korvaa sen sisältö esimerkiksi tällä:
 
```jsx
function App() {
  return (
    <div>
      <h1>Moi koodikerho!</h1>
      <p>Tämä on mun ensimmäinen React-sivu.</p>
    </div>
  )
}
 
export default App
```
 
JSX:n tärkeimmät säännöt:
- Komponentin `return`-lauseen sisällä kaiken JSX:n pitää olla **yhden elementin sisällä**. Eli ei voi palauttaa kahta rinnakkaista elementtiä (esim. `<h1>` ja `<p>`) ilman että ne on kääritty esimerkiksi `<div>`:iin. Jos et halua ylimääräistä `<div>`:iä, voit käyttää tyhjää fragmenttia `<>...</>`, joka ei luo ylimääräistä elementtiä sivulle.
- HTML:n `class`-attribuutti kirjoitetaan JSX:ssä `className`.
- JavaScript-lausekkeet kirjoitetaan aaltosulkujen sisään: `{muuttuja}`.
 
## CSS:n käyttö
 
Tyylit tuodaan komponenttiin `import`-lauseella. Avaa `src/App.css` ja kokeile esimerkiksi:
 
```css
h1 {
  color: hotpink;
  font-family: monospace;
}
 
p {
  font-size: 1.2rem;
}
```
 
Varmista, että `App.jsx`:n alussa on:
 
```jsx
import './App.css'
```
 
Kun tallennat CSS-tiedoston, muutokset näkyvät selaimessa välittömästi.
 
## Komponentit
 
Komponenttiajattelu on Reactin ydinidea: sivu koostuu periaattesa pienistä, uudelleenkäytettävistä palikoista. Luo uusi tiedosto `src/Kortti.jsx`:
 
```jsx
function Kortti({ nimi, kuvaus }) {
  return (
    <div className="kortti">
      <h2>{nimi}</h2>
      <p>{kuvaus}</p>
    </div>
  )
}
 
export default Kortti
```
 
Nyt voit käyttää komponenttia `App.jsx`:ssä:
 
```jsx
import './App.css'
import Kortti from './Kortti'
 
function App() {
  return (
    <div>
      <h1>Koodikerho</h1>
      <Kortti nimi="Matopeli" kuvaus="Jea jea matopeli jee" />
      <Kortti nimi="Nettisivut" kuvaus="Jea jea nettisivut jee" />
      <Kortti nimi="Isompi projekti" kuvaus="Jea jea isompi projekti jee" />
    </div>
  )
}
 
export default App
```
 
`nimi` ja `kuvaus` ovat **propseja** eli parametreja, joilla komponentille välitetään tietoa. Sama `Kortti`-komponentti piirtää eri sisällön eri propseilla.
 
## Interaktiivisuus: useState
 
Reactissa sivun tila (state) saa käyttöliittymän päivittymään automaattisesti. Tässä klassinen klikkien laskemisen esimerkki:
 
```jsx
import { useState } from 'react'
 
function App() {
  const [laskuri, setLaskuri] = useState(0)
 
  return (
    <div>
      <h1>Klikkauslaskuri</h1>
      <button onClick={() => setLaskuri(laskuri + 1)}>
        Klikkauksia: {laskuri}
      </button>
    </div>
  )
}
 
export default App
```
 
- `useState(0)` luo tilamuuttujan jonka alkuarvo on `0`.
- `setLaskuri` on funktio jolla arvoa päivitetään.
- Kun tila muuttuu, React renderöi komponentin uudelleen automaattisesti.
 
## Tehtävä: tee sivusta omasi
 
Muokkaa projektia vapaasti, esimerkiksi:
 
- Vaihda otsikko ja tekstit omiksi.
- Lisää kuva: `<img src="https://esimerkki.fi/kuva.jpg" alt="Kuvaus" />`.
- Kokeile eri CSS-tyylejä (värit, fontit, taustat).
- Tee oma komponentti ja käytä sitä `App.jsx`:ssä.
- Kokeile `useState`-hookkia jonkin interaktiivisen elementin kanssa.
- Voit myös kokeilla minkälaista frontend koodia tekoäly tuottaa.
 
Kun olet tyytyväinen, pushaa muutokset omaan forkkiisi:
 
```bash
git add .
git commit -m "Oma sivu"
git push
```
 
