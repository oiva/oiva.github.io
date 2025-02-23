---
published: true
status: publish
layout: post
title: "Projekti-ideoita"
language: fi
date: 2025-02-23 20:59:33
date_gmt: 2025-02-23 18:59:33
excerpt: Muutamia projekti-ideoita mitä pyörii päässä
---

Pitkällä vapaalla aivot rupeavat jossain kohtaa tuottamaan projekti-ideoita. Nyt vanhempainvapaalla olen ilmeisesti päässyt siihen pisteeseen, että aivot sulaa ja rupeavat keksimään kaikkea tekemistä.

Aivot ei osaa ottaa huomioon, että päivässä on oikeasti korkeintaan tunti aikaa tehdä mitään, ja sekin menee yleensä väsyneenä *doom scrollatessa*. Mutta sivuutetaan tämä.

Muutamia projekteja mitä haluaisin tehdä:

## Karttavisa

Hesarissa oli jouluna [hauska kaupunkivisa](https://www.hs.fi/suomi/art-2000010825900.html "Testaa, tunnetko suomalaiset kaupungit pelkän kartan avulla"), missä piti tunnistaa kaupunki kartan perusteella. Karttakuvissa näkyi pelkästään vesistöt, tiet ja rautatiet. Tämä oli minusta tosi hauska, koska käymällä eri paikoissa oppii puolivahingossa minkä muotoisia eri kaupungit on, ja nyt siitä oli jotain hyötyä.

Mutta haluaisin tehdä tästä version, missä olisi enemmän kaupunkeja. Pienemmät kaupungit voivat kyllä olla aika vaikeita.

Tässä on ohjelmointia sen verran, että pitäisi skriptillä luoda OpenStreetMapin kartta-aineiston perusteella kartta kustakin kaupungista. (Kokeilin tätä, ja AI:n avulla pääsin melko pitkälle.) Kuvien ympärille pitäisi lisäksi rakentaa joku visailumoottori. Näitäkin saattaa löytyä valmiina.

## Kotiseudun dokumentointi ja kartat

Arvostan miten esimerkiksi Tony Hagerlund on koonnut [Espoon historiaa](https://www.hagerlund.net/fi/espoon-historia) ja [kuvannut itse vuosien ajan Espoota](https://www.hagerlund.net/fi/kuvia). Törmään näihin silloin tällöin kun etsin tietoa Espoosta. Äitini taas on inventoinnut Vantaan rakennusperintöä laajasti ja kirjoittanut aiheesta [kirjankin](https://www.vantaansanomat.fi/paikalliset/5591267).

Tämä on vielä näistä hähmäisin idea, mutta haluaisin tehdä jotain samassa aihepiirissä, joskin **paljon** rajatummin. Esimerkiksi digitaalinen julkaisu omasta kotikadusta tai joistain yksittäisistä lähiseudun paikoista. En jaksa kaivautua historiaan yhtä paljon, mutta paikkojen jatkuvasti muuttuessa tilannekuva vuodelta 2025 voisi jossain kohtaa olla arvokas.

Toisaalta voisin vain fiilistellä karttoja. Tietokone osaa tehdä [vesivärimaalauksen näköisiä karttoja](https://maps.stamen.com/watercolor/#15/60.2367/24.7311), mutta voisi olla hauskalla tavalla tyhmää maalata itse vesiväreillä joku kartta.

## Podcast-listojen julkaisu

Voisin vannoa, että tällainen palvelu oli jo joskus, mutta en löydä mitenkään: ideana olisi  tehdä  nettisivu, jolle voi ladata listam kuuntelemistaan podcasteista (listan saa usein podcast-soittimesta [OPML](https://en.wikipedia.org/wiki/OPML "Outline Processor Markup Language")-muodossa). Nettisivu loisi tästä henkilökohtaisen sivun, mikä listaa podcastit nätisti. Sivua voisi jakaa muille tai upottaa listan kotisivuilleen jonain upotuksena.

## Swift

Applen alustoille koodaaminen on siirtymässä Swift-kielelle ja tekisi mieli kokeilla sitä jossain käytännön projektissa. Nämä ovat prioriteettilistan hännillä, mutta ehkä joskus:

### Paasto-appis

Käytin taannoin pätkäpaastojen seurantaan [Zero](https://apps.apple.com/us/app/zero-fasting-health-tracker/id1168348542)-nimistä appia, mutta siinä on nykyään **todella raskaasti** lisämyyntiä, ja uutuutena kirjautumispakko. Olisi kiva tehdä vaikka vain omaan käyttöön oma, riisuttu versio tästä. Itse appi ei ole kovin monimutkainen: käynnistä ajastin ja hälytä kun se on valmis. Lisäksi jotain kevyttä statistiikkaa aikaisemmista paastoista.

### Checklist-applikaatio

Kotoa lähtiessä jää melkein aina joku asia kotiin: avaimet, puhelin, lompakko, kello... Samoja haasteita on muissakin usein toistuvissa tehtävissä. Yksi apuväline voisi olla tarkistuslista, mistä voisi nopeasti tarkistaa onko kaikki tarvittavat asiat tehty. Listojen pitäisi olla helposti uudelleen&shy;käytettäviä, minkä takia esim. todo-applikaatiot eivät yleensä oikein toimi tähän. Listat voisivat myös olla widgettejä puhelimessa, jolloin ei tarvitsisi avata applikaatiota – iOS:n widgetit sallivat nykyään jotain interaktiotakin.

Tällaisia saattaa olla jo, mutta en nopeasti hakemalla löytänyt sopivaa.

## Lastenlelun laulujen tunnistaminen

<div class="float-image min-300">
<img src="/images/2025/tinylove.webp" width="200" height="200" alt="Tiny Love -lelun mukana tullut musiikkia soittava lintu" />

Molemmat vauvat ovat leikkineet lelukaarella, jossa on mukana musiikkia soittava lintu. Lintu osaa 20 erilaista kappaletta, jotka ovat noin minuutin mittaisia, klassisen musiikin ja ragtime-musiikin MIDI-versioita.

Nämä ensinnäkin soi päässä jatkuvasti, mutta se myös häiritse kun en tiedä mitä kappaleet ovat, vaikka lista on suurin piirtein klassisen musiikin TOP-20. Projektina olisi etsiä kaikki kappaleet ja koota näistä joku lista nettiin. Tämä on hyvin tärkeää.

</div>