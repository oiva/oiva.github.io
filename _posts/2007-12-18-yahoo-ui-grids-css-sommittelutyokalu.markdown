---
layout: post
status: publish
published: true
title: Yahoo UI Grids CSS - sommitteluty&ouml;kalu
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
date: '2007-12-18 23:47:28 +0200'
date_gmt: '2007-12-18 21:47:28 +0200'
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
  author_url: http://www.bobs.fi/oiva/2008/04/13/paulan-korusivut/
  date: '2008-04-13 02:14:31 +0300'
  date_gmt: '2008-04-12 23:14:31 +0300'
  content: "[...] Fonts auttaa fonttikokojen yhten&auml;ist&auml;misess&auml; eri
    selaimien v&auml;lill&auml;. Grids CSS:&auml;&auml; olen sivunnut aikaisemmin.
    [...]"
---
<p>Monet webbisivut noudattavat pohjimmiltaan samaa rakennetta. Ylh&auml;&auml;ll&auml; on otsake, sis&auml;lt&ouml; on jaettu sarakkeisiin ja alhaalla saattaa olla alatunniste. Tuleva <a href="http://www.alistapart.com/articles/previewofhtml5">HTML5-standardi</a> ottaa t&auml;m&auml;n huomioon ja tarjoaa mm. erilliset <em>header, nav, article</em> ja <em>aside</em>-tagit. N&auml;iden avulla sivun <em>sis&auml;ll&ouml;n</em> voi jaotella loogisesti.</p>
<p>Asiaan l&ouml;yh&auml;sti liittyen, <a href="http://www.alistapart.com/articles/css3multicolumn/">CSS3</a> tarjoaa tulevaisuudessa my&ouml;s oman ratkaisunsa siihen, miten teksti voidaan jakaa sarakkeisiin:</p>
<pre><code>DIV {<br />
    column-count: 2;<br />
    column-width: 12em;<br />
    column-gap: 1em;<br />
}</code></pre>
<p>T&auml;m&auml; m&auml;&auml;rittely esimerkiksi jakaisi DIV-elementin kahteen 12em leve&auml;&auml;n sarakkeeseen, joiden v&auml;liin j&auml;&auml; 1em:n rako. (Lis&auml;&auml; aiheesta W3C:n luonnostelmassa: <a href="http://www.w3.org/TR/css3-multicol/">CSS3 multi-column layout</a>). Standardeja ty&ouml;st&auml;v&auml; W3C on kuitenkin tunnettu hitaudestaan, joten molempia uudistuksia saadaan odottaa viel&auml;.</p>
<h3>Yahoo UI Grids CSS</h3>
<p><a href="http://developer.yahoo.com/yui/grids/">Grids CSS</a> on osa laajempaa <a href="http://developer.yahoo.com/yui/">Yahoon k&auml;ytt&ouml;liittym&auml;kirjastoa</a>. Se on k&auml;yt&auml;nn&ouml;ss&auml; yksitt&auml;inen CSS-tiedosto, jonka avulla voidaan helposti toteuttaa erilaisia layoutteja. Grids tarjoaa eri levyisi&auml; <em>templateja</em>, jotka on sovitettu yleisimpiin monitorien resoluutioihin. Leveyden ja sivun jaottelun voi toki my&ouml;s p&auml;&auml;tt&auml;&auml; itse. Sivua pystyy jakamaan sarakkeisiin yksinkertaisilla elementeill&auml;, joiden leveydet on m&auml;&auml;ritelty suhteellisesti, esimerkiksi 1/3 - 2/3.<br />
<a id="more"></a><a id="more-8"></a></p>
<p>Nopea esimerkki:</p>
<pre><code>&lt;body&gt;
  &lt;div id="doc"&gt;
    &lt;div id="hd"&gt;&lt;!-- header --&gt;&lt;/div&gt;

    &lt;div id="bd"&gt;&lt;!-- body --&gt;
        &lt;div id="yui-main"&gt;
            &lt;div class="yui-b"&gt;
                &lt;div class="yui-g"&gt;
                    &lt;div class="yui-u first"&gt;&lt;/div&gt;
                    &lt;div class="yui-u"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div id="ft"&gt;&lt;/div&gt; &lt;!-- footer --&gt;
  &lt;/div&gt;
&lt;/body&gt;</code></pre>

<p>Yll&auml;oleva m&auml;&auml;rittely tuottaa <a href="{{ site.baseurl }}/images/2007/12/test.html" title="Yahoo UI Grid testisivu">t&auml;llaisen rakenteen</a>. My&ouml;nnett&auml;k&ouml;&ouml;n ett&auml; sis&auml;kk&auml;iset <code>yui-main, yui-b, yui-g</code> -m&auml;&auml;rittelyt n&auml;ytt&auml;v&auml;t aluksi v&auml;h&auml;n pelottavilta. Rakenne on kuitenkin selke&auml;:</p>
<ul>
<li><code>yui-main</code>: kertoo ett&auml; t&auml;m&auml;n sis&auml;ll&auml; olevat <code>yui-b</code> elementit nousevat sivulla ylimm&auml;ksi. T&auml;m&auml; ansiosta elementtien visuaalinen j&auml;rjestys ei riipu l&auml;hdekoodissa olevasta j&auml;rjestyksest&auml;.</li>
<li><code>yui-b</code>: B niin kuin "Block". Jakaa sivua vaakasuunnassa.</li>
<li><code>yui-g</code>: <strong>g</strong>rid, jakaa elementin pystysuunnassa kahtia. Puoliskoiden leveyksi&auml; voidaan hallita erikois-grideill&auml;, esimerkiksi <code>yui-gd</code> jakaa osat suhteessa 1/3 - 2/3, <code>yui-ge</code> suhteessa 3/4 - 1/4 jne.</li>
<li><code>yui-u</code>: perimm&auml;inen yksikk&ouml;, jonka sis&auml;lle sijoitetaan varsinainen sis&auml;lt&ouml;.</li>
</ul><br />
<p>Koska leveydet ovat suhteellisia, voidaan yksitt&auml;inen yui-u -elementti aina korvata grid-elementill&auml; (yui-g) ja jakaa se viel&auml; pienempiin osiin. Jos rakenne ei tunnu heti aukeavan, tarjoaa Yahoo <a href="http://developer.yahoo.com/yui/grids/builder/">Grid Builderin</a>, jonka avulla rakennetta voi suunnitella visuaalisesti.</p>
<h3>Hy&ouml;dyt</h3>
<p>Mit&auml; hy&ouml;ty&auml; Grids CSS:n k&auml;yt&ouml;st&auml; on verrattuna itse m&auml;&auml;riteltyyn sivurakenteeseen? T&auml;rkein on mielest&auml;ni suunnittelun nopeus. Normaalin sivun prototyypin voi koostaa helposti koskematta itse css-tiedostoon. Toinen on yhteensopivuus. Yhdistettyn&auml; Yahoon <a href="http://developer.yahoo.com/yui/reset/">Reset CSS</a>:n kanssa saatu lopputulos n&auml;ytt&auml;&auml; kaikilla selaimilla samalta, ilman kikkailua ja selainkohtaisia CSS-s&auml;&auml;nt&ouml;j&auml;. (Yahoo hoitaa kikkailun puolestasi).</p>
<p>Kokeile t&auml;t&auml; kun seuraavan kerran suunnittelet uutta layouttia. Yahoo UI Libraryyn kuuluu my&ouml;s monia muita hy&ouml;dyllisi&auml; palikoita, eesimerkiksi javascript-kalentereita ja AJAX-wrappereita. N&auml;ist&auml; ehk&auml; lis&auml;&auml; my&ouml;hemmin.</p>
<p>PS. Levit&auml;n CSS-suunnittelun sanomaa osittain siksi, ett&auml; t&ouml;iss&auml; tekem&auml;ni Grids-layout oli er&auml;&auml;n&auml; p&auml;iv&auml;n&auml; muutettu <a href="http://en.wikipedia.org/wiki/Tableless_web_design">taulukko-layoutiksi</a>, joka mm. meni Firefoxilla rikki :) . Tekemist&auml; riitt&auml;&auml;...</p>
