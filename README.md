# abdnplanxaipintura.com

Web estàtica d'A BDN Planxa i Pintura, S.L. Publicada amb GitHub Pages (branca `main`, carpeta arrel).

```
index.html          pàgina única amb rutes #: inici, serveis, treballs, contacte, avis-legal, privacitat, cookies
                    (les ressenyes són una secció de l'inici: #inici--ressenyes; l'antic #ressenyes hi redirigeix)
css/styles.css      estils (tokens + components ab- + composició)
js/main.js          idioma CA/ES, menú, rutes, formulari Web3Forms, mapa amb consentiment, carrusel de ressenyes
img/                fotografies
favicon.ico/.svg    favicon «ABdn»; apple-touch-icon.png, icon-192/512.png i site.webmanifest per a mòbils
CNAME               domini personalitzat
```

Formulari: substituir `WEB3FORMS_ACCESS_KEY` a `index.html` per la clau de Web3Forms (correu info@abdnplanxaipintura.com).
Ressenyes: el recompte (101) és a `index.html` i a `js/main.js` (`rev.basedOn`, `rating.count`); actualitza'l quan canviï.
