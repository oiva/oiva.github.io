---
layout: post
status: publish
published: true
title: 'A List Apart: Beyond DOCTYPE'
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: A List Apartin kohua herättänyt ehdotus sivustojen renderöinnistä tietyillä
  selainversioilla
wordpress_id: 17
wordpress_url: http://www.bobs.fi/oiva/2008/01/24/a-list-apart-beyond-doctype/
date: 2008-01-24 10:21:46 +02:00
date_gmt: 2008-01-24 08:21:46 +02:00
tags:
- web-kehitys
old_tags:
- IE7
- IE8
- Microsoft
- standardit
- selainyhteensopivuus
- Internet Explorer
- doctype
comments:
- id: 20
  author: IE8 käyttämään oletusarvoisesti standardia renderöintiä
    &#8212; Oivallisia juttuja
  author_email: ''
  author_url: http://oivaeskola.fi/2008/03/04/ie8-kayttamaan-oletusarvoisesti-standardia-renderointia/
  date: 2008-03-04 19:47:21 +02:00
  date_gmt: 2008-03-04 17:47:21 +02:00
  content: "[...] Explorer 8:n yhteydessä on puhuttu erityisistä meta-tageista,
    joilla nettisivu voisi pyytää selainta käyttämään
    tiettyä [...]"
---
<p>Viikon ehkä puhutuin webbiartikkeli on: <a href="http://alistapart.com/articles/beyonddoctype">Beyond DOCTYPE: Web Standards, Forward Compatibility, and IE8</a>.</p>
<p>Mistä on kyse? Artikkelissa esitetään, että nettisivujen DOCTYPE-merkinnän sijaan alettaisiin käyttää meta-tagia, joka kertoo millä selaimilla sivun on testattu toimivan. Sivusto voisi esimerkiksi ilmoittaa toimivansa vain IE7:lla ja FF3:lla.</p>
<p>Tämän ideanana on se, ettei IE8:n julkaisu enää rikkoisi sivustoja samaan tapaan kuin IE7 rikkoi IE6:lle suunniteltuja sivuja. Selaimelta tämä vaatisi vanhojen renderöintimoottorien säilyttämistä, jotka se ottaisi käyttöön kun sivusto ei tue uusinta selainversiota. Eli IE7:lle suunniteltu sivu näytettäisiin aina IE7:n moottorilla, vaikka selain olisi IE9.</p>
<p>Tervemenoa lukemaan myös <a href="http://alistapart.com/comments/beyonddoctype/">pari sataa kommenttia aiheesta</a>. Monen web-kehittäjän näkemys on, että he tekevät standardinmukaisia sivuja ja selaimen tehtävä on näyttää se oikein, eikä niin että sivut muokattaisiin näkymään oikein tietyllä selaimella. Vaihtoehtoiseksi ratkaisuksi esitetään, että Microsoft nyt vain julkaisisi selaimen joka toimii standardien mukaisesti, eikä olisi lähtökohtaisesti rikki.</p>
