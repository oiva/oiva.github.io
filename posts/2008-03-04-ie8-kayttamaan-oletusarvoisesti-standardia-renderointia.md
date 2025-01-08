---
layout: post
status: publish
published: true
title: IE8 käyttämään oletusarvoisesti standardia renderöintiä
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Internet Explorer 8 renderöi nettisivut oletusarvoisesti uudella moottorilla,
  eikä vanhalla IE7:n moottorilla. Mikä on hyvä.
wordpress_id: 29
wordpress_url: http://www.bobs.fi/oiva/2008/03/04/ie8-kayttamaan-oletusarvoisesti-standardia-renderointia/
date: 2008-03-04 19:47:17 +02:00
date_gmt: 2008-03-04 17:47:17 +02:00
categories:
- web-kehitys
tags:
- css
- IE7
- IE8
- standardit
- Internet Explorer
- HTML
- meta tag
comments: []
---
<p>Internet Explorer 8:n yhteydessä <a href="http://oivaeskola.fi/2008/01/24/a-list-apart-beyond-doctype/">on puhuttu</a> erityisistä meta-tageista, joilla nettisivu voisi pyytää selainta käyttämään tiettyä renderöintimoottorin versiota. Nettisivu voisi esimerkiksi sanoa näyttävänsä parhaalta IE7:lla näytettynä, ja mikä tahansa uudempi IE:n versio näyttää sivun niin kuin se olisi näytetty IE7:llä.</p>
<p>Tämän ehdotuksen ideana oli estää sivuja näkymästä väärin kun uusi selainversio julkaistaan. IE:n uudet versiot yrittävät noudattaa yhä paremmin alan standardeja, eli HTML ja CSS -spesifikaatioita. Tämän takia vanhoille IE:n versioille suunnattuja viritelmiä sisältävät sivut voivat käyttäjän näkökulmasta mennä rikki.</p>
<p>Alkuperäisen ehdotuksen suurin ongelma oli kuitenkin se, että jos sivulta ei olisi löytynyt kyseistä meta-tagia, olisi IE8 käyttänyt oletusarvona IE7:n moottoria. Sivun piirtäminen uudella IE8:n moottorilla olisi siis vaatinut sivun ylläpitäjältä erillisiä toimenpiteitä. Näin myös täydellisesti HTML-standardin mukaiset sivut olisivat olleet tuomittuja piirtymään IE7:n osittain epästandardilla moottorilla.</p>
<p>Nyt Microsoft on kuitenkin kuunnellut kehittäjiä ja <a href="http://arstechnica.com/news.ars/post/20080303-sanity-prevails-ie8-will-default-to-standard-compliant-mode.html">pyörtänyt päätöksensä</a> (<a href="http://blogs.msdn.com/ie/archive/2008/03/03/microsoft-s-interoperability-principles-and-ie8.aspx">Microsoft</a>). Tulevaisuudessa IE8 käyttää oletusarvoisesti uudempaa, paremmin standardin mukaista moottoria. Sivuston ylläpitäjä voi kuitenkin meta-tagin avulla pyytää selainta käyttämään vanhempaa moottoria jos pelkää sivuston menevän rikki uudella selaimella.</p>
<p>Hyviä uutisia siis. IE8:n tuleva julkistus pienentää selainten välisiä eroja ja helpottanee web-kehittäjien elämää.</p>
