---
layout: post
status: publish
published: true
title: Pari kätevää bookmarklettia
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Readability ja SuperGenPass ovat hyviä esimerkkejä kätevistä bookmarkleteista.
  Readability auttaa etsimään tekstisisällön ja piilottaa muut sivun elementit. SuperGenPass
  taas auttaa käyttämään eri salasanoja eri sivustoille.
wordpress_id: 551
wordpress_url: http://www.bobs.fi/oiva/?p=551
date: 2009-03-03 23:33:30 +02:00
date_gmt: 2009-03-03 20:33:30 +02:00
categories:
- ipod
- web-palvelut
- internet
tags:
- JavaScript
- ipod
- bookmarklet
- readability
- supergenpass
- skripti
- salasana
comments: []
---
<p>Mikä on bookmarklet suomeksi? En tiedä. Mutta erittäin käteviä ne ovat silti. Kyseessä on pieni javascript-ohjelma, jonka voi tallentaa selaimeen suosikiksi / kirjanmerkiksi. Kirjanmerkin klikkaaminen suorittaa javascriptin, joka yleensä muokkaa jollakin tapaa kulloinkin avoinna olevaa sivua. Otetaan esimerkki:</p>
<h3>Readability</h3>
<p><a href="http://lab.arc90.com/2009/03/readability.php">Readability</a> on skripti, joka etsii sivulta <em>varsinaisen tekstisisällön</em>, muokkaa sen paremmin luettavaksi, ja piilottaa kaikki muut elementit sivulta. Lukija pystyy keskittymään tekstiin ilman, että sivuston muut visuaaliset elementit häiritsisevät lukemista.</p>
<p>Readabilityssä on valittavana neljä erilaista fonttia, neljä tekstinkokoa ja neljä palstanleveyttä. Ainoa miinus on se, ettei tekstimoodista pääse takaisin sivulle ilman sivun uudelleenlataamista.</p>
<h3>SuperGenPass</h3>
<p><a href="http://supergenpass.com/">SuperGenPass</a> on ovela tapa käyttää eri salasanoja eri sivustoilla. Käyttäjän tarvitsee muistaa vain yksi pääsalasana. SuperGenPass generoi käyttäjän salasanasta ja sivuston domain-nimestä monimutkaisen ja pitkän salasanan.</p>
<p>Salasanan muodostaminen on yksisuuntainen prosessi, eli lopputuloksesta ei voi päätellä käyttäjän pääsalasanaa. (Paitsi kokeilemalla yleisimpiä salasanoja ja katsomalla tuleeko niistä sama lopputulos - älä käytä yleisiä salasanoja, kuten "salasana", "123456" jne.)</p>
<p><img class="alignleft size-full wp-image-552" title="supergenpass" src="{{ site.baseurl }}/images/2009/03/supergenpass.png" alt="supergenpass" width="208" height="257" />Pääsalasanan syöttämisen jälkeen voi tuplaklikata mitä tahansa salasanakenttää, ja SuperGenPass liittää uuden salasanan siihen.</p>
<p>SuperGenPass toimii yleisimmissä selaimissa, tosin uusimpaan Safariin en saanut sitä asennettua, enkä sitä myötä myöskään iPodiin.</p>
<p>Skriptin ongelmana voi pitää sitä, ettei käyttäjä tiedä omia salasanojaan. Vieraille koneille on siis pakko tallentaa bookmarklet, jotta pääsee kirjautumaan mihinkään. SuperGenPassia ei tietenkään ole pakko käyttää kaikilla sivustoilla, jos haluaa olla varma, että pääsee kirjautumaan tiettyyn palveluun myös vieraalta koneelta.</p>
<p>Hyöty on kuitenkin huomattava. Käyttämällä eri salasanaa eri sivustoilla pitää muut käyttjätunnuksensa turvassa, vaikka yksi tunnuksista murrettaisiin tai varastettaisiin.</p>
