---
published: true
status: publish
layout: post
title: "Karttojen generointia"
language: fi
date: 2025-02-25 22:31:20
date_gmt: 2025-02-25 20:31:20
excerpt: Testing
eleventyExcludeFromCollections: ['posts']
tags:
- now
---

Liittyen [karttavisa projekti-ideaan](/2025/02/23/projekti-ideoita/), kokeilin muutaman tunnin ajan tehdä tekoälyavusteisesti koodia, mikä piirtäisi tietyn kaupungin kartan. Pääsinkin aika pitkälle:

<img src="/images/2025/maps/helsinki.webp" alt="Helsingin kartta" width="600" height="600" loading="lazy" title="Mikä kaupunki?" />
<img src="/images/2025/maps/turku.webp" alt="Turun kartta" width="600" height="600" loading="lazy" />
<img src="/images/2025/maps/vaasa.webp" alt="Vaasan kartta" width="600" height="600" loading="lazy" />

Koodi on Pythonia, noin 200 riviä, ja tällä hetkellä suhteellisen rumaa. Luonnostelin koodia antamalla [Claudelle](https://claude.ai) ja [ChatGPT](https://chatgpt.com/):lle kuvauksia haluamastani toiminnallisuudesta.

Molemmat osasivat melko hyvin ehdottaa koodia, mikä hakee karttadataa OpenStreetMapista tietylle alueelle ja piirtää sen. Mutta ensimmäiset koodit eivät olleet mitenkään käyttökelpoisia, vaan sitä piti promptailla pitkästi paremmaksi. Lopulta pääsin ChatGPT:n avulla paremmin eteenpäin, tosin Claudesta tuli *juuri* [uusi versio](https://www.anthropic.com/news/claude-3-7-sonnet), minkä pitäisi toimia huomattavasti paremmin ohjelmointitehtävissä.

Vaikein osuus oli renderöidä meri. Molemmat tekoälyt yrittivät ensin piirtää merta OSM:sta ladatun rantaviivan perusteella, mikä ei näköjään oikein ole mahdollista. Tähän vaadittiin vähän Googlea, ja oikea vastaus oli ladata [valmiiksi rendatut merialueet](https://osmdata.openstreetmap.de/data/water-polygons.html) ja piirtää muu aineisto niitten päälle. ChatGPT osasi ottaa tästä koppia ja palastella isosta aineistosta pienemmän ja nopeamman osion.

Silti tekoälyn ansiosta pääsin tosi ripeästi itse pihviin, eli kartan ulkoasun muokkaamiseen. Koodi ei sinänsä tee mitään mitä en ymmärtäisi, mutta pelkkien kirjastojen dokumentaation avulla itse koodaten tässä olisi mennyt kauemmin.