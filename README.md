# Opdrachtbeschrijving

## Inleiding
Het fruitmand-bezorgd-bedrijf van Freek en Bernard heeft de pandemie helaas niet overleefd. Daarom hebben ze nu een nieuw idee: ze willen een blogplatform opzetten en rijk worden met affiliate marketing. Tenminste, dat is het plan. Het enige wat ze nodig hebben, is zo'n platform... Of je ze misschien nog één keer wil helpen?

Voor jou natuurlijk geen probleem. Inmiddels heb je geleerd hoe je met routing, state, formulieren, componenten en helper-functies moet werken. Al deze concepten kun je in deze opdracht mooi toepassen, want je wilde nog wat extra oefenen met het opzetten van routingsstructuren en werken met dynamic parameters. Gelukkig hebben Freek en Bernard dit keer wél een designer ingehuurd en een normaal bedrijfslogo laten maken. Alle varianten van dit logo vind je in de `assets`-map!

![logo.png](src/assets/logo-black.png)

## Applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de `node_modules` door het volgende commando in de terminal te runnen:

```shell
npm install
```

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

```shell
npm run dev
```

of gebruik de WebStorm knop (npm run dev). Open http://localhost:5173 om de pagina in de browser te bekijken. Begin met het maken van wijzigingen in `src/App.jsx`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Opdracht 1 - Routing

### Pagina's
De blog-applicatie heeft op dit moment nog geen routing-structuur en ook geen pagina's. Tijd om daar verandering in te brengen! Maak vier pagina-componenten aan met een passende routing-structuur:
* Home pagina
* Nieuwe post pagina (om een nieuwe blog te starten)
* Overzichtspagina (om alle blogs te bekijken)
* Blogpost detail pagina (om informatie over één blog weer te geven)

### Navigatie
Naast het feit dat er content op de pagina's moet komen te staan - hier komen we in opdracht 2 op terug - zul je ook moeten zorgen voor een goed werkende menu-balk met daarin de links naar 'Home', 'Nieuwe post' en 'Alle posts'.

### Dynamic routing
De blogpost detailpagina is alleen te bereiken via een directe link, dus die staat niet in het menu. We willen er echter wel zeker van zijn dat je de dynamic route op de juiste manier hebt geïmplementeerd. Dit kun je testen door de parameter uit de url weer te geven in het bijbehorende pagina-component. Test of dit werkt door het volgende te doen:
* Als je naar `/blogposts/fslkjfksdjf` navigeert, staat er dan _fslkjfksdjf_ op je pagina?
* Als je naar `/blogposts/234` gaat, staat er dan _234_ op de pagina?

## Opdracht 2 - Gebruik van data
Tijd om de pagina's te vullen met content. Gezien dit een blogplatform is, gaan we de content natuurlijk niet _hardcoded_ op de pagina zetten. Binnenkort leer je hoe je die content kunt ophalen van een externe bron, maar voor nu maken we nog even gebruik van een JSON-bestand vol _ready-made_ blogposts. Deze vind je in de map `constants`. Tip: lukt het niet met importeren? Spiek dan even onderaan de pagina.

### Overzichtspagina
Deze pagina moet de totale hoeveelheid posts op het platform weergeven (een nummeriek getal) en een lijst van alle blogs. Deze geef je weer in het volgende format:

```
De Smaken van Italië (Anna de Kok)
12 reacties - 8 keer gedeeld
```

De titels zijn links die de gebruiker doorlinkt naar de detailpagina van deze post.

### Blogpost detail pagina
Om de juiste informatie te laten zien, zul je eerst de corresponderende blogpost uit `data.json` moeten halen. _Tip:_ krijg je telkens `undefined` terug? Spiek dan eens bij de hints.

Wanneer je de juiste gegevens bij de hand hebt, wil je die op de volgende manier op de pagina weergeven:

>
> ### De Smaken van Italië (5 minuten)
> #### Een culinaire reis door Bella Italia
> Geschreven door Anna de kok op 21 september 2023
> 
> Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.
> 
> 12 reacties - 8 keer gedeeld
> 
> Terug naar de overzichtspagina

Onderaan de pagina staat een link die de gebruiker terugstuurt naar de overzichtspagina.

Om de datum van _"2023-09-20T11:45:00Z"_ naar _"21 september 2023"_ te converteren maak je natuurlijk een mooie helperfunctie. Weet je niet meer hoe je datums moet formatteren? Duik dan weer eens in de cursus JavaScript Basics bij het hoofdstuk over methodes en lees je in over het _Date-object_.

## Opdracht 3 - Formulier & Doorlinken
We willen de gebruiker op ten duur in staat zellen om _zelf_ nieuwe blogposts toe te kunnen voegen aan ons platform. Hoewel we nog geen database of externe bron hebben waarin we die kunnen opslaan, kunnen we er wel alvast voor zorgen dat we die informatie kunnen _verzamelen_. Je mag het formulier bouwen op de standaard manier (controlled components met state) of met React Hook Form.

### Formulier bouwen
Bouw een formulier met de volgende velden:
* Titel
* Subtitel
* Auteur
* Bericht
Alle velden moeten verplicht worden ingevuld. De blogpost moet minimaal 300 en maximaal 2000 karakters lang zijn. Als er niet aan deze voorwaarden is voldaan, kan de post niet worden verzonden.

### Data verzamelen
Wanneer de gebruiker op 'verzenden' drukt, worden deze gegevens in de console gelogd. Deze informatie verreik je vervolgens **zelf** met:
* De hoeveelheid `shares` en `comments` (allebei `0`)
* Een `created` property met daarin een [ISO-timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) van het moment dat de gebruiker op de knop heeft drukt
* De `readTime` in minuten. De leestijd bereken je zelf op basis van het aantal ingevulde woorden: een gemiddelde gebruiker leest 100 woorden in 0.3 minuten. Zorg dat je decimalen altijd afrond naar hele getallen. Zei iemand daar... helperfunctie?

Een ingevuld formulier resulteerd in het volgende voorbeeld-resultaat:

```json
  {
    "title": "Wat gebruiker heeft ingevuld",
    "subtitle": "Wat gebruiker heeft ingevuld",
    "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
    "author": "Voornaam achternaam",
    "created": "2023-09-21T09:30:00Z",
    "readTime": 1,
    "comments": 0,
    "shares": 0
  }
```

### Doorlinken

Wanneer de gebruiker alle juiste gegevens heeft ingevuld en we deze informatie in de console hebben gelogd, willen we de gebruiker automatisch doorsturen naar de overzichtspagina. Dat is natuurlijk niet zo gebruiksvriendelijk zonder eerst een succesmelding te tonen, maar daar maken we ons later druk om!

## Hints & Extra houvast
Je kunt het JSON-bestand op de volgende manier importeren en gebruiken:

```jsx
import posts from '../constants/dataX231001zo.json';

function BlogPost() {
  console.log(posts);
  
  return (
    <></>
  );
}
```

Hierbij is het wel belangrijk om op te merken dat de `id`'s van alle blogposts zijn opgeslagen als nummerieke getallen, in tegenstelling tot de dynamic parameter uit de url. Dynamic parameters zijn altijd van type _string_. Wanneer je beide waardes wil vergelijken, zul je één van de twee eerst moeten omzetten naar een _string_ of _number_.

