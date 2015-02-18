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
date: '2009-10-02 21:14:55 +0300'
date_gmt: '2009-10-02 19:14:55 +0300'
categories:
- web-kehitys
- ty&ouml;
- internet
- Palautetut
- HTML
tags: []
comments: []
---
<div>
<div>
<div>
<div>
<p><a title="Future of Web Apps 2009 London" href="http://events.carsonified.com/fowa/2009/london" target="_blank">FOWA</a>n ensimm&auml;isen p&auml;iv&auml;n yleis&ouml;suosikki oli Operan <a href="http://www.brucelawson.co.uk/" target="_blank">Bruce Lawson</a>, joka k&auml;vi kertomassa mit&auml; uutta <a title="Wikipedia (en): HTML5" href="http://en.wikipedia.org/wiki/HTML5" target="_blank">HTML5</a> tarjoaa.</p>
<p>Brucen sanoin HTML5 on &ldquo;pimpattu HTML4&Prime;. Jotain kertoo se, ett&auml;  HTML5-standardia kutsuttiin aluksi &ldquo;web applications 1.0&Prime;-standardiksi.  Pyrkimyksen&auml; on siis sovittaa HTML vastaamaan nykyp&auml;iv&auml;n web  applikaatioiden asettamiin vaatimuksiin.</p>
<p>Mit&auml; uutta HTML5 tarjoaa?</p>
<h3><canvas></h3>
<a title="Wikipedia (en): Canvas (HTML Element)" href="http://en.wikipedia.org/wiki/Canvas_%28HTML_element%29" target="_blank">Canvas-tagi</a> mahdollistaa grafiikan piirt&auml;misen selaimessa ilman Flash tai SilverLight-plugineita. <a href="http://canvasdemos.com/" target="_blank">Canvasdemos.com</a>:ssa on esimerkkej&auml; siit&auml;, millaisia asioita canvasilla voidaan tehd&auml;.</p>
<p>Tuki canvasille on olemassa Operassa, Firefoxissa, Chromessa ja Safarissa.</p>
<p>T&auml;ll&auml; hetkell&auml; canvasin ongelmana on saavutettavuus. Selaimelle  canvasin sis&auml;lt&ouml; on pelkki&auml; pikseleit&auml;, vaikka se sis&auml;lt&auml;isikin teksti&auml;.  Esimerkiksi ruudunlukijat eiv&auml;t pysty tulkitsemaan mit&auml; selain n&auml;ytt&auml;&auml;.</p>
<h3>HTML5 forms (Web forms 2)</h3>
<p>Lomakkeita k&auml;ytet&auml;&auml;n netiss&auml; paljon. Sovelluskehitt&auml;j&auml;n kannalta  niiden tekeminen on kuitenkin tyls&auml;&auml;. Lomakedatan validointi pit&auml;&auml; usein  tehd&auml; sek&auml; asiakasp&auml;&auml;ss&auml; JavaScriptill&auml; ett&auml; serverip&auml;&auml;ss&auml;.</p>
<p>HTML5 yritt&auml;&auml; helpottaa lomakkeiden tekemist&auml; siirt&auml;m&auml;ll&auml; validoinnin  selaimen teht&auml;v&auml;ksi, K&auml;yt&auml;nn&ouml;ss&auml; kehitt&auml;j&auml; voisi esimerkiksi m&auml;&auml;ritt&auml;&auml;  input-tageille erilaisia tyyppej&auml;, joiden perusteella selain voi  validoida k&auml;ytt&auml;j&auml;n sy&ouml;tt&auml;m&auml;n sis&auml;ll&ouml;n. Brucen demoamia sis&auml;lt&ouml;tyyppeej&auml;  olivat mm. email, url, date ja range.</p>
<p>Esimerkiksi koodi <code><input name="email" type="email" required autofocus /></code> luo tekstikent&auml;n, jonka sis&auml;ll&ouml;n pit&auml;&auml; olla validi s&auml;hk&ouml;postiosoite.  Required parametri kertoo selaimelle ett&auml; kentt&auml; ei saa olla tyhj&auml;.  Autofocus antaa kent&auml;ll&auml; fokuksen sivun lataamisen j&auml;lkeen.</p>
<p>Kun lomake l&auml;hetet&auml;&auml;n, selain tarkistaa kentt&auml;&auml;n sy&ouml;tetyn sis&auml;ll&ouml;n ja  tarvittaessa pys&auml;ytt&auml;&auml; lomakkeen l&auml;hetyksen ja n&auml;ytt&auml;&auml; k&auml;ytt&auml;j&auml;lle  virheilmoituksen. Ep&auml;selv&auml;ksi j&auml;i pystyyk&ouml; virheilmoitusta kustomoimaan,  vai onko se selainkohtainen.</p>
<p>Input-kenttien sis&auml;lt&ouml;&auml; pystyy my&ouml;s rajoittamaan min ja max-parametreilla sek&auml; regexp-lauseilla.</p>
<p>HTML5:n k&auml;ytt&auml;m&auml;t kentt&auml;tyypit ovat osittain taaksep&auml;in  yhteensopivia. Jos selain ei tue kentt&auml;tyyppi&auml;, n&auml;ytet&auml;&auml;n tilalla  tavallinen tekstikentt&auml;.</p>
<p>Toinen vaihtoehto on k&auml;ytt&auml;&auml; <a href="http://modernizr.com/" target="_blank">Modernizr-skripti&auml;</a>, joka osaa haistella selaimen tukemat ominaisuudet ja poistaa sivulta elementit joita selain ei tue.</p>
<h3>Muuta</h3>
<p>Puheessa vilahteli my&ouml;s liuta muita buzz wordeja: geolokaatio  (k&auml;ytt&auml;j&auml;n sijainnin v&auml;litt&auml;minen nettisivulle), local storage (tiedon  tallentaminen k&auml;ytt&auml;j&auml;n koneelle keksej&auml; k&auml;tev&auml;mm&auml;ll&auml; tavalla) ja  video-tagi, jonka avulla voi videon upottaa HTML:n sekaan ilman Flashi&auml;.</p>
<p>Monet ominaisuuksista ovat jo k&auml;ytett&auml;viss&auml; uusimmissa  selainversioissa. Itse standardi valmistuu hitaasti, mutta se ei est&auml;  k&auml;ytt&auml;m&auml;st&auml; HTML5:tt&auml; jo nyt.</p>
<p>Operan miehen&auml; Bruce k&auml;ytti tilaisuuden IE:n mollaamiseen. Internet  Explorerin useamman vuoden p&auml;ivityssykli on kielt&auml;m&auml;tt&auml; melko kankea,  kun muut selaimet pystyv&auml;t reagoimaan standardin kehittymiseen  huomattavasti lyhyemm&auml;ss&auml; ajassa.</p>
<p><em>Fun fact</em>: HTML5-standardia puuhataan k&auml;yt&auml;nn&ouml;ss&auml; #whatwg@freenode irc-kanavalla.</p>
<p></div><br />
</div><br />
</div><br />
</div></p>
