---
layout: post
status: publish
published: true
title: IE8 k&auml;ytt&auml;m&auml;&auml;n oletusarvoisesti standardia render&ouml;inti&auml;
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
date: '2008-03-04 19:47:17 +0200'
date_gmt: '2008-03-04 17:47:17 +0200'
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
<p>Internet Explorer 8:n yhteydess&auml; <a href="http://www.bobs.fi/oiva/2008/01/24/a-list-apart-beyond-doctype/">on puhuttu</a> erityisist&auml; meta-tageista, joilla nettisivu voisi pyyt&auml;&auml; selainta k&auml;ytt&auml;m&auml;&auml;n tietty&auml; render&ouml;intimoottorin versiota. Nettisivu voisi esimerkiksi sanoa n&auml;ytt&auml;v&auml;ns&auml; parhaalta IE7:lla n&auml;ytettyn&auml;, ja mik&auml; tahansa uudempi IE:n versio n&auml;ytt&auml;&auml; sivun niin kuin se olisi n&auml;ytetty IE7:ll&auml;.</p>
<p>T&auml;m&auml;n ehdotuksen ideana oli est&auml;&auml; sivuja n&auml;kym&auml;st&auml; v&auml;&auml;rin kun uusi selainversio julkaistaan. IE:n uudet versiot yritt&auml;v&auml;t noudattaa yh&auml; paremmin alan standardeja, eli HTML ja CSS -spesifikaatioita. T&auml;m&auml;n takia vanhoille IE:n versioille suunnattuja viritelmi&auml; sis&auml;lt&auml;v&auml;t sivut voivat k&auml;ytt&auml;j&auml;n n&auml;k&ouml;kulmasta menn&auml; rikki.</p>
<p>Alkuper&auml;isen ehdotuksen suurin ongelma oli kuitenkin se, ett&auml; jos sivulta ei olisi l&ouml;ytynyt kyseist&auml; meta-tagia, olisi IE8 k&auml;ytt&auml;nyt oletusarvona IE7:n moottoria. Sivun piirt&auml;minen uudella IE8:n moottorilla olisi siis vaatinut sivun yll&auml;pit&auml;j&auml;lt&auml; erillisi&auml; toimenpiteit&auml;. N&auml;in my&ouml;s t&auml;ydellisesti HTML-standardin mukaiset sivut olisivat olleet tuomittuja piirtym&auml;&auml;n IE7:n osittain ep&auml;standardilla moottorilla.</p>
<p>Nyt Microsoft on kuitenkin kuunnellut kehitt&auml;ji&auml; ja <a href="http://arstechnica.com/news.ars/post/20080303-sanity-prevails-ie8-will-default-to-standard-compliant-mode.html">py&ouml;rt&auml;nyt p&auml;&auml;t&ouml;ksens&auml;</a> (<a href="http://blogs.msdn.com/ie/archive/2008/03/03/microsoft-s-interoperability-principles-and-ie8.aspx">Microsoft</a>). Tulevaisuudessa IE8 k&auml;ytt&auml;&auml; oletusarvoisesti uudempaa, paremmin standardin mukaista moottoria. Sivuston yll&auml;pit&auml;j&auml; voi kuitenkin meta-tagin avulla pyyt&auml;&auml; selainta k&auml;ytt&auml;m&auml;&auml;n vanhempaa moottoria jos pelk&auml;&auml; sivuston menev&auml;n rikki uudella selaimella.</p>
<p>Hyvi&auml; uutisia siis. IE8:n tuleva julkistus pienent&auml;&auml; selainten v&auml;lisi&auml; eroja ja helpottanee web-kehitt&auml;jien el&auml;m&auml;&auml;.</p>
