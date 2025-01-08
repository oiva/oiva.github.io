---
layout: post
status: publish
published: true
title: 'FOWA 2009: Bruce Lawson &ndash; HTML5'
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 708
wordpress_url: http://www.bobs.fi/oiva/?p=708
date: 2009-10-02 21:14:55 +03:00
date_gmt: 2009-10-02 19:14:55 +03:00
categories:
- web-kehitys
- työ
- internet
tags: []
comments: []
excerpt: Miten HTML5 vastaa nykypäivän web applikaatioiden asettamiin vaatimuksiin?
---
<p><a title="Future of Web Apps 2009 London" href="http://events.carsonified.com/fowa/2009/london" target="_blank">FOWA</a>n ensimmäisen päivän yleisösuosikki oli Operan <a href="http://www.brucelawson.co.uk/" target="_blank">Bruce Lawson</a>, joka kävi kertomassa mitä uutta <a title="Wikipedia (en): HTML5" href="http://en.wikipedia.org/wiki/HTML5" target="_blank">HTML5</a> tarjoaa.</p>
<p>Brucen sanoin HTML5 on &ldquo;pimpattu HTML4&Prime;. Jotain kertoo se, että  HTML5-standardia kutsuttiin aluksi &ldquo;web applications 1.0&Prime;-standardiksi.  Pyrkimyksenä on siis sovittaa HTML vastaamaan nykypäivän web  applikaatioiden asettamiin vaatimuksiin.</p>
<p>Mitä uutta HTML5 tarjoaa?</p>
<h3>&lt;canvas&gt;</h3>
<a title="Wikipedia (en): Canvas (HTML Element)" href="http://en.wikipedia.org/wiki/Canvas_%28HTML_element%29" target="_blank">Canvas-tagi</a> mahdollistaa grafiikan piirtämisen selaimessa ilman Flash tai SilverLight-plugineita. <a href="http://canvasdemos.com/" target="_blank">Canvasdemos.com</a>:ssa on esimerkkejä siitä, millaisia asioita canvasilla voidaan tehdä.</p>
<p>Tuki canvasille on olemassa Operassa, Firefoxissa, Chromessa ja Safarissa.</p>
<p>Tällä hetkellä canvasin ongelmana on saavutettavuus. Selaimelle  canvasin sisältö on pelkkiä pikseleitä, vaikka se sisältäisikin tekstiä.  Esimerkiksi ruudunlukijat eivät pysty tulkitsemaan mitä selain näyttää.</p>
<h3>HTML5 forms (Web forms 2)</h3>
<p>Lomakkeita käytetään netissä paljon. Sovelluskehittäjän kannalta  niiden tekeminen on kuitenkin tylsää. Lomakedatan validointi pitää usein  tehdä sekä asiakaspäässä JavaScriptillä että serveripäässä.</p>
<p>HTML5 yrittää helpottaa lomakkeiden tekemistä siirtämällä validoinnin  selaimen tehtäväksi, Käytännössä kehittäjä voisi esimerkiksi määrittää  input-tageille erilaisia tyyppejä, joiden perusteella selain voi  validoida käyttäjän syöttämän sisällön. Brucen demoamia sisältötyyppeejä  olivat mm. email, url, date ja range.</p>

Esimerkiksi koodi `<input name="email" type="email" required autofocus />` luo tekstikentän, jonka sisällön pitää olla validi sähköpostiosoite.  Required parametri kertoo selaimelle että kenttä ei saa olla tyhjä.  Autofocus antaa kentällä fokuksen sivun lataamisen jälkeen.

<p>Kun lomake lähetetään, selain tarkistaa kenttään syötetyn sisällön ja  tarvittaessa pysäyttää lomakkeen lähetyksen ja näyttää käyttäjälle  virheilmoituksen. Epäselväksi jäi pystyykö virheilmoitusta kustomoimaan,  vai onko se selainkohtainen.</p>
<p>Input-kenttien sisältöä pystyy myös rajoittamaan min ja max-parametreilla sekä regexp-lauseilla.</p>
<p>HTML5:n käyttämät kenttätyypit ovat osittain taaksepäin  yhteensopivia. Jos selain ei tue kenttätyyppiä, näytetään tilalla  tavallinen tekstikenttä.</p>
<p>Toinen vaihtoehto on käyttää <a href="http://modernizr.com/" target="_blank">Modernizr-skriptiä</a>, joka osaa haistella selaimen tukemat ominaisuudet ja poistaa sivulta elementit joita selain ei tue.</p>
<h3>Muuta</h3>
<p>Puheessa vilahteli myös liuta muita buzz wordeja: geolokaatio  (käyttäjän sijainnin välittäminen nettisivulle), local storage (tiedon  tallentaminen käyttäjän koneelle keksejä kätevämmällä tavalla) ja  video-tagi, jonka avulla voi videon upottaa HTML:n sekaan ilman Flashiä.</p>
<p>Monet ominaisuuksista ovat jo käytettävissä uusimmissa  selainversioissa. Itse standardi valmistuu hitaasti, mutta se ei estä  käyttämästä HTML5:ttä jo nyt.</p>
<p>Operan miehenä Bruce käytti tilaisuuden IE:n mollaamiseen. Internet  Explorerin useamman vuoden päivityssykli on kieltämättä melko kankea,  kun muut selaimet pystyvät reagoimaan standardin kehittymiseen  huomattavasti lyhyemmässä ajassa.</p>
<p><em>Fun fact</em>: HTML5-standardia puuhataan käytännössä #whatwg@freenode irc-kanavalla.</p>
