---
layout: post
status: publish
published: true
title: Yahoo UI Grids CSS - sommittelutyökalu
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Esimerkki Yahoo UI:n Grids CSS -työkalun käyttämisestä sivurakenteen määrittelyssä.
wordpress_id: 8
wordpress_url: http://www.bobs.fi/oiva/2007/12/18/yahoo-ui-grids-css-sommittelutyokalu/
date: 2007-12-18 23:47:28 +02:00
date_gmt: 2007-12-18 21:47:28 +02:00
categories:
- web-kehitys
tags:
- css
- yahoo
- layout
- yahoo ui
- grids
comments:
- id: 40
  author: Paulan korusivut &#8212; Oivallisia juttuja
  author_email: ''
  author_url: http://oivaeskola.fi/2008/04/13/paulan-korusivut/
  date: 2008-04-13 02:14:31 +03:00
  date_gmt: 2008-04-12 23:14:31 +03:00
  content: "[...] Fonts auttaa fonttikokojen yhtenäistämisessä eri
    selaimien välillä. Grids CSS:ää olen sivunnut aikaisemmin.
    [...]"
---
<p>Monet webbisivut noudattavat pohjimmiltaan samaa rakennetta. Ylhäällä on otsake, sisältö on jaettu sarakkeisiin ja alhaalla saattaa olla alatunniste. Tuleva <a href="http://www.alistapart.com/articles/previewofhtml5">HTML5-standardi</a> ottaa tämän huomioon ja tarjoaa mm. erilliset <em>header, nav, article</em> ja <em>aside</em>-tagit. Näiden avulla sivun <em>sisällön</em> voi jaotella loogisesti.</p>
<p>Asiaan löyhästi liittyen, <a href="http://www.alistapart.com/articles/css3multicolumn/">CSS3</a> tarjoaa tulevaisuudessa myös oman ratkaisunsa siihen, miten teksti voidaan jakaa sarakkeisiin:</p>
``` css
DIV {
    column-count: 2;
    column-width: 12em;
    column-gap: 1em;
}
```
<p>Tämä määrittely esimerkiksi jakaisi DIV-elementin kahteen 12em leveään sarakkeeseen, joiden väliin jää 1em:n rako. (Lisää aiheesta W3C:n luonnostelmassa: <a href="http://www.w3.org/TR/css3-multicol/">CSS3 multi-column layout</a>). Standardeja työstävä W3C on kuitenkin tunnettu hitaudestaan, joten molempia uudistuksia saadaan odottaa vielä.</p>
<h3>Yahoo UI Grids CSS</h3>
<p><a href="http://developer.yahoo.com/yui/grids/">Grids CSS</a> on osa laajempaa <a href="http://developer.yahoo.com/yui/">Yahoon käyttöliittymäkirjastoa</a>. Se on käytännössä yksittäinen CSS-tiedosto, jonka avulla voidaan helposti toteuttaa erilaisia layoutteja. Grids tarjoaa eri levyisiä <em>templateja</em>, jotka on sovitettu yleisimpiin monitorien resoluutioihin. Leveyden ja sivun jaottelun voi toki myös päättää itse. Sivua pystyy jakamaan sarakkeisiin yksinkertaisilla elementeillä, joiden leveydet on määritelty suhteellisesti, esimerkiksi 1/3 - 2/3.<br />
<a id="more"></a><a id="more-8"></a></p>
<p>Nopea esimerkki:</p>
``` html
<body>
  <div id="doc">
    <div id="hd"><!-- header --></div>
    <div id="bd"><!-- body -->
      <div id="yui-main">
        <div class="yui-b">
          <div class="yui-g">
            <div class="yui-u first"></div>
            <div class="yui-u"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="ft"></div> <!-- footer -->
  </div>
</body>
```

<p>Ylläoleva määrittely tuottaa <a href="{{ site.baseurl }}/images/2007/12/test.html" title="Yahoo UI Grid testisivu">tällaisen rakenteen</a>. Myönnettäköön että sisäkkäiset <code>yui-main, yui-b, yui-g</code> -määrittelyt näyttävät aluksi vähän pelottavilta. Rakenne on kuitenkin selkeä:</p>
<ul>
<li><code>yui-main</code>: kertoo että tämän sisällä olevat <code>yui-b</code> elementit nousevat sivulla ylimmäksi. Tämä ansiosta elementtien visuaalinen järjestys ei riipu lähdekoodissa olevasta järjestyksestä.</li>
<li><code>yui-b</code>: B niin kuin "Block". Jakaa sivua vaakasuunnassa.</li>
<li><code>yui-g</code>: <strong>g</strong>rid, jakaa elementin pystysuunnassa kahtia. Puoliskoiden leveyksiä voidaan hallita erikois-grideillä, esimerkiksi <code>yui-gd</code> jakaa osat suhteessa 1/3 - 2/3, <code>yui-ge</code> suhteessa 3/4 - 1/4 jne.</li>
<li><code>yui-u</code>: perimmäinen yksikkö, jonka sisälle sijoitetaan varsinainen sisältö.</li>
</ul>
<p>Koska leveydet ovat suhteellisia, voidaan yksittäinen yui-u -elementti aina korvata grid-elementillä (yui-g) ja jakaa se vielä pienempiin osiin. Jos rakenne ei tunnu heti aukeavan, tarjoaa Yahoo <a href="http://developer.yahoo.com/yui/grids/builder/">Grid Builderin</a>, jonka avulla rakennetta voi suunnitella visuaalisesti.</p>
<h3>Hyödyt</h3>
<p>Mitä hyötyä Grids CSS:n käytöstä on verrattuna itse määriteltyyn sivurakenteeseen? Tärkein on mielestäni suunnittelun nopeus. Normaalin sivun prototyypin voi koostaa helposti koskematta itse css-tiedostoon. Toinen on yhteensopivuus. Yhdistettynä Yahoon <a href="http://developer.yahoo.com/yui/reset/">Reset CSS</a>:n kanssa saatu lopputulos näyttää kaikilla selaimilla samalta, ilman kikkailua ja selainkohtaisia CSS-sääntöjä. (Yahoo hoitaa kikkailun puolestasi).</p>
<p>Kokeile tätä kun seuraavan kerran suunnittelet uutta layouttia. Yahoo UI Libraryyn kuuluu myös monia muita hyödyllisiä palikoita, eesimerkiksi javascript-kalentereita ja AJAX-wrappereita. Näistä ehkä lisää myöhemmin.</p>
<p>PS. Levitän CSS-suunnittelun sanomaa osittain siksi, että töissä tekemäni Grids-layout oli eräänä päivänä muutettu <a href="http://en.wikipedia.org/wiki/Tableless_web_design">taulukko-layoutiksi</a>, joka mm. meni Firefoxilla rikki :) . Tekemistä riittää...</p>
