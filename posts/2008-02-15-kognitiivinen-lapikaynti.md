---
layout: post
status: publish
published: true
title: Kognitiivinen läpikäynti
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Lyhyt selvitys siitä mitä on kognitiivinen läpikäynti ja miten se tehdään.
wordpress_id: 23
wordpress_url: http://www.bobs.fi/oiva/2008/02/15/kognitiivinen-lapikaynti/
date: 2008-02-15 00:40:52 +02:00
date_gmt: 2008-02-14 22:40:52 +02:00
categories:
- käytettävyys
- koulu
tags:
- käytettävyys
- kognitiivinen läpikäynti
comments: []
---
<p>Sarjassa "ilman käyttäjää toimivat käytettävyysmenetelmät". Kirjoitin käytettävyyden arvioinnin kurssille lyhyen selvityksen kognitiivisesta läpikäynnistä, jonka liitän suurin piirtein sellaisenaan tähän:</p>
<p>Kognitiivinen läpikäynti on 1990-luvun alussa kehitetty menetelmä käytettävyyden arvioimiseen asiantuntijavoimin. Menetelmä kehitettiin erityisesti opittavuuden testaamista varten.</p>
<p>Läpikäynnin etuna on sen keveys. Sitä voidaan soveltaa hyvin varhaisessa vaiheessa tuotteen kehitysprosessia, eikä se vaadi samanlaisia resursseja kuin käyttäjien kanssa tehtävä käytettävyystestaus. Käytännössä esimerkiksi tuotteen kehittäjät voivat itse suorittaa läpikäyntejä prototyypille ja saada arvokkaita tuloksia. Periaatteessa jo tuotteen käyttöliittymäkuvaus voi riittää läpikäynnin perustaksi, vaikka mitään valmista ei olisi.</p>
<h3><a id="more"></a><a id="more-23"></a>Esivalmistelut</h3>
<p>Läpikäyntiä varten on päätettävä mitä käyttäjän suorittamaa tehtävää aiotaan testata. Tästä tehtävästä kirjataan ylös sen tavoite ja kaikki tarpeelliset vaiheet tuon tavoitteen saavuttamiseksi.</p>
<p><strong>Esimerkki:</strong> tehtävä voisi olla vaikkapa "käyttäjä rekisteröityy nettihuutokaupan jäseneksi". Yksittäiset vaiheet olisivat nyt "käyttäjä klikkaa rekisteröidy-linkkiä", "käyttäjä valitsee haluamansa jäsenyystyypin", "käyttäjä täyttää vaaditut kentät lomakkeessa" ja "käyttäjä klikkaa rekisteröidy-nappia".</p>
<p>Tämän lisäksi ennen läpikäyntiä on hyvä arvioida tuotteen lopullisia käyttäjiä ja näiden ominaisuuksia. Kaikki käyttäjistä tehtävät oletukset tulee myös kirjata muistiin. Testiä varten mietitään myös käyttöskenaario, johon tehtävä liitetään.</p>
<p><strong> Esimerkki:</strong> tyypillinen käyttäjä on 40 -vuotias nainen, joka haluaa ostaa tavaraa nettihuutokaupasta. Hän käyttää tietokonetta paljon töissään ja on tilannut netistä ennenkin tuotteita, jne jne. Käyttäjä löytää tuotteen, jonka haluaa huutaa ja päättää rekisteröityä.</p>
<p>Tehtävä voisi olla myös tuotteen huutaminen nettihuutokaupasta, jolloin tehtävän yksi alitehtävä olisi rekisteröityä palveluun. Kannattaa kuitenkin rajata aihetta pienempiin osiin, sillä pelkän rekisteröitymisenkin arviointi voi olla yllättävän työlästä.</p>
<p>Arvioitavat tehtävät kannattaa valita esimerkiksi niiden yleisyyden perusteella. Tällä varmistetaan peruskäytön sujuvuus, vaikka joissain harvemmin suoritettavissa tehtävissä olisikin pahempia ongelmia. Tehtävätyypit voi valita myös siten, että ne kattavat mahdollisimman monia testattavan tuotteen ominaisuuksista.</p>
<h3>Läpikäynti</h3>
<p>Läpikäynnissä käyttäjän tehtävä jaetaan pienimpiin mahdollisiin osiin, joista jokainen on suoritettava järjestyksessä. Tämän jälkeen asiantuntija käy jokaisen osatehtävän läpi ja arvioi sitä neljän kysymyksen kautta:</p>
<ol>
<li><strong>Yrittääkö käyttäjä päästä oikeaan tavoitteeseen?</strong>
<ul>
<li>ts. ymmärtääkö käyttäjä, että kyseinen vaihe on osa kokonaisuutta?</li>
</ul>
</li>
<li><strong>Huomaako käyttäjä että oikea toiminto on tarjolla?</strong>
<ul>
<li>onko toiminto löydettävissä?</li>
</ul>
</li>
<li><strong>Yhdistääkö käyttäjä toiminnon omaan tavoitteeseensa?</strong></li>
<li><strong>Jos käyttäjä suorittaa oikean toiminnon, huomaako hän tehtävän etenemisen?</strong>
<ul>
<li>eli saako käyttäjä selkeää palautetta toiminnon suorittamisesta.</li>
</ul>
</li>
</ol>
<p>Jokainen kohta voi epäonnistua eri tavoin. Esimerkiksi kohdassa kaksi voi olla että käyttäjä ei huomaa lainkaan oikeaa toimintoa. On myös mahdollista, että käyttöliittymässä on väärä toiminto, joka vaikuttaa paremmalta vaihtoehdolta käyttäjälle. Tämä on usein ongelmana esimerkiksi lomakkeissa, joissa peruuta-nappi näyttää samalta kuin tallenna-nappi.</p>
<p>Läpikäynnin aikana tallennetaan <em>uskottavat</em> vastaukset kysymyksiin jokaisen osatehtävän osalta. Tämän lisäksi tallennetaan asiat, jotka käyttäjän on tiedettävä ennen tehtävää tai opittava sen aikana. Myös esille tulleet muutosehdotukset tallennetaan.</p>
<p><strong>Esimerkki: </strong>osatehtävä, jossa käyttäjä klikkaa rekisteröidy-linkkiä arvioituna kuvitteellisen sivuston avulla:</p>
<ol>
<li>Käyttäjä tietää (kokemuksesta), että hänen on siirryttävä erilliselle rekisteröitymissivulle.</li>
<li>Sivulla on "rekisteröidy"-linkki, mutta se on erittäin pieni ja sijoitettu erikseen muista päälinkeistä
<ul>
<li>Korjausehdotus: siirretään linkki loogiseen paikkaan ja tehdään sivulle useampi rekisteröitymislinkki</li>
</ul>
</li>
<li>Käyttäjä yhdistää tekstin "rekisteröidy" melko hyvin tavoitteeseen, sillä termi on vakiintunut. Voisiko käyttää toista, luonnollisempaa termiä?</li>
<li>Käyttäjän klikattua linkistä hän päätyy sivulle, jonka otsikkona on rekisteröityminen. Palaute on riittävä.</li>
</ol>
<p>Tätä jatketaan kunnes kaikki osatehtävät on käyty läpi. Kognitiivinen läpikäynti on tämän takia joskus melko hidasta ja raskasta puuhaa. Käytetty tarkkuus voi tuntua liialliselta, varsinkin jos jokin osatehtävä on jo todettu käytettäväksi aikaisemmissa testeissä. Tämän takia läpikäynti kannattaa aluksi suunnata kriittisiin tehtäviin, joilla ei ole varaa epäonnistua.</p>
<p><a href="http://en.wikipedia.org/wiki/Cognitive_walkthrough">Wikipedia: Cognitive walkthrough</a></p>
