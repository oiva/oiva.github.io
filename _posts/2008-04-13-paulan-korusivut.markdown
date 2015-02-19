---
layout: post
status: publish
published: true
title: Paulan korusivut
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: 'Käytin Paulan korusivujen toteuttamiseen useita erilaisia tekniikoita. Kerron
  miten seuraavia tekniikoita voi hyödyntää: Smarty, Yahoo UI, jQuery, mod_rewrite
  ja smart image resizer.'
wordpress_id: 43
wordpress_url: http://www.bobs.fi/oiva/?p=43
date: '2008-04-13 02:14:11 +0300'
date_gmt: '2008-04-12 23:14:11 +0300'
categories:
- web-kehitys
- PHP
tags:
- css
- HTML
- smart image resizer
- yahoo ui
- paulan korusivut
- paula
- mod_rewrite
- smarty
- jquery
comments: []
---
<p>Viime viikolla ty&ouml;skentelin p&auml;&auml;asiassa <a href="http://www.paulaminni.fi">Paulan korusivujen</a> uudistamisen parissa. Alkuper&auml;inen sivu oli melko askeettinen ja nopeasti tehty:</p>
<p><a href='{{ site.baseurl }}/images/2008/04/screenshot.jpg'><img src="{{ site.baseurl }}/images/2008/04/screenshot-300x199.jpg" alt="Paulan korusivu - vanha versio" title="Paulan korusivu - vanha versio" width="300" height="199" class="alignleft size-medium wp-image-44" /></a></p>
<p>Uuden sivun suunnittelussa l&auml;ht&ouml;kohtina oli:</p>
<ul>
<li>Korujen saaminen paremmin esille</li>
<li>Myyt&auml;vien korujen erottaminen myydyist&auml;</li>
<li>Navigaation parantaminen</li>
</ul>
<p>Vanhan sivun ulkoasussa oli paljon toivomisen varaa. Uudessa p&auml;&auml;dyin lopulta hyvin pelkistettyyn layouttiin, jossa itse korut ovat p&auml;&auml;osassa. Kokeilin aluksi asettaa nelj&auml; korua vierekk&auml;in samalle riville, mutta v&auml;hensin m&auml;&auml;r&auml;n lopulta kolmeen, jotta yksitt&auml;isiin koruihin olisi helpompi keskitty&auml;.</p>
<p><a href='{{ site.baseurl }}/images/2008/04/screenshot2.jpg'><img src="{{ site.baseurl }}/images/2008/04/screenshot2-300x199.jpg" alt="Paulan korusivu - uusi layout" title="Paulan korusivu" width="300" height="199" class="alignnone size-medium wp-image-45" /></a></p>
<p>Navigaatiosta tuli samalla kaksitasoinen, jossa korut on jaoteltu ensin myyt&auml;viin ja myytyihin (galleria) ja t&auml;m&auml;n lis&auml;ksi eri korutyyppeihin (kaulakorut, korvakorut ja rannekorut). Navigaatiota voisi viel&auml; parantaa, en ole aivan varma n&auml;kyyk&ouml; valittu sivu tarpeeksi selke&auml;sti. Navigaatiota voisi helpottaa k&auml;ytt&auml;m&auml;ll&auml; esimerkiksi <a href="http://en.wikipedia.org/wiki/Breadcrumb_(navigation)">bread crumbeja</a>.<br />
<a id="more"></a><a id="more-43"></a></p>
<h3>K&auml;ytetyt tekniikat</h3>
<p>Sivuston koodaamisessa k&auml;ytin seuraavia tekniikoita ja valmiita palikoita. Jokaisesta voisi melkein kirjoittaa oman blogipostin, mutta kerron t&auml;ss&auml; lyhyesti mit&auml; eri palikat tekev&auml;t ja miss&auml; roolissa ne toimivat Paulan korusivulla.</p>
<h4><a href="http://www.smarty.net/">Smarty template engine</a></h4>
<p>Smarty on PHP-paketti, jolla koodi ja ulkoasu voidaan erottaa toisistaan helposti. Koodin puolella kaikki dynaamisesti ker&auml;tt&auml;v&auml; tieto tallennetaan muuttujiin. Sivun n&auml;ytt&auml;miseen k&auml;ytet&auml;&auml;n t&auml;m&auml;n j&auml;lkeen omaa template-tiedostoa, jossa on s&auml;&auml;nn&ouml;t muuttujien sis&auml;lt&auml;m&auml;n tiedon esitt&auml;miselle. </p>
<p>Esimerkiksi navigaation piirt&auml;minen hoituu suurein piirtein seuraavanlaisella rakenteella: (olen rakentanut Smartyn p&auml;&auml;lle oman "sivu"-luokan, joka piilottaa muuttujien rekister&ouml;innin ja sivun piirtokutsun.)</p>
<pre>
index.php:
<code>
$navigaatio = array("1"=>array("href"=>"index.php", name="Myynniss&auml;"),
                           ...
$sivu->assign("navigaatio", $navigaatio);
$sivu->display("index.tpl");
</code>
index.tpl:
<code>
&lt;ul id="navigaatio"&gt;
  {foreach from=$navigaatio item=navi}
    &lt;li&gt;&lt;a href="{$navi.href}"&gt;{$navi.name}&lt;/a&gt;&lt;/li&gt;
  {/foreach}
&lt;/ul&gt;
</code></pre>
<p>Kaikki sivuston sivut k&auml;ytt&auml;v&auml;t jotakin templatea. T&auml;ll&auml; tavoin sivuille yhteiset rakenteet on saatu siivottua yhteen templateen ja vain sivujen sis&auml;ll&ouml;t eroavat toisistaan.</p>
<h4>Yahoo UI: <a href="http://developer.yahoo.com/yui/reset/">Reset</a>, <a href="http://developer.yahoo.com/yui/fonts/">Fonts</a>, <a href="http://developer.yahoo.com/yui/grids/">Grids</a> ja <a href="http://developer.yahoo.com/yui/base/">Base</a></h4>
<p>Lyhyesti kerrottuna Reset poistaa kaikki HTML-elementtien valmiit muotoilut, jotka saattavat erota eri selaimissa. T&auml;m&auml;n j&auml;lkeen kaikki selaimet n&auml;ytt&auml;v&auml;t peruselementit kuten tekstikappaleet ja listat periaatteessa samalla tavalla.</p>
<p>Resetin j&auml;lkeen kaikkien elementtien <em>marginit</em> ja <em>paddingit</em> ovat nollassa, mik&auml; ei yleens&auml; ole haluttu lopputulos. N&auml;it&auml; ei onneksi tarvitse muuttaa k&auml;sin, vaan apuun tulee Base-CSS, joka m&auml;&auml;rittelee tietyt yleisimm&auml;t perusmuotoilut, kuten esimerkiksi listojen sisennykset.</p>
<p>Fonts auttaa fonttikokojen yhten&auml;ist&auml;misess&auml; eri selaimien v&auml;lill&auml;. Grids CSS:&auml;&auml; olen <a href="http://www.bobs.fi/oiva/2007/12/18/yahoo-ui-grids-css-sommittelutyokalu/">sivunnut aikaisemmin</a>.</p>
<h4><a href="http://jquery.com/">jQuery</a></h4>
<p>jQuery on JavaScript-kirjasto, joka on tarkoitettu helpottamaan JavaScriptin yhdist&auml;mist&auml; HTML:&auml;&auml;n. Perinteisesti HTML-sivun eri elementteihin on JavaScriptiss&auml; viitattu k&auml;ytt&auml;m&auml;ll&auml; <em><a href="http://jacksleight.com/blog/2008/01/14/getelementsby/">getElementBy*</a></em>-funktioita. jQueryss&auml; voi sen sijaan k&auml;ytt&auml;&auml; paljon yksinkertaisempaa koodia eri elementtien hakemiseen. Kirjastossa on paljon erilaisia funktioita animaatioihin ja ajax-juttuihin, joihin en ole viel&auml; tutustunut kunnolla.</p>
<p>Paulan korusivulla jQuery&auml; k&auml;ytet&auml;&auml;n varjostuksen lis&auml;&auml;miseksi kuville. Kuvat on t&auml;ss&auml; m&auml;&auml;ritelty kattamaan .kuvat-divien sis&auml;ll&auml; olevat <img>-tagit.</p>
<pre><code>$(document).ready(function(){
  $('.kuva img').shadow({
    offset: 5,
    opacity: 0.11
  });
});</code></pre>
<p>Kannattaa huomata, ett&auml; shadow-funktio vaatii toimiakseen jQuery-peruspaketin lis&auml;ksi my&ouml;s <em><a href="http://dev.jquery.com/view/trunk/plugins/dimensions/jquery.dimensions.js">jquery.dimensions.js</a></em> ja <em><a href="http://dev.jquery.com/view/trunk/fx/fx.shadow.js">fx.shadow.js</a></em> -tiedostot.</p>
<p>Varjotukset eiv&auml;t valitettavasti toimi aivan t&auml;ydellisesti. Varjot menev&auml;t IE6:lla rikki ja j&auml;&auml;v&auml;t joskus n&auml;kym&auml;tt&auml; uudemmillakin selaimilla.</p>
<h4><a href="http://wettone.com/code/clean-urls">mod_rewrite</a></h4>
<p>Sivuston k&auml;ytt&auml;m&auml;t URLit on siivottu k&auml;ytt&auml;en apachen mod_rewrite-s&auml;&auml;nt&ouml;j&auml;. Esimerkki:</p>
<pre><code>RewriteEngine On
RewriteRule ^([a-z\-]+)/([0-9]+)$ index.php?kategoria=$1&sivu=$2</code></pre>
<p>Kyseinen s&auml;&auml;nt&ouml; muuttaisi esimerkiksi URLin</p>
<pre>http://www.paulaminni.fi/korvakorut/1</pre>
<p>muotoon</p>
<pre>http://www.paulaminni.fi/index.php?kategoria=korvakorut&sivu=1</pre>
<p>T&auml;m&auml;n avulla k&auml;ytt&auml;jille n&auml;kyy siistimm&auml;t URLit. Sivuston URLit voidaan my&ouml;s s&auml;ilytt&auml;&auml; samana, vaikka sivuston tekniikka muuttuisi muuten. Edell&auml; olevassa esimerkiss&auml; index.php voidaan nimet&auml; uudestaan tai parametrien nimet vaihtaa ilman ett&auml; k&auml;ytt&auml;j&auml;t tai hakukoneet huomaavat eroa.</p>
<h4><a href="http://shiftingpixel.com/2008/03/03/smart-image-resizer/">Smart Image Resizer</a></h4>
<p>Etusivulla ja galleriassa n&auml;kyv&auml;t pikkukuvat on kaikki tehty k&auml;ytt&auml;en Smart Image Resizer -PHP-skripti&auml;. Skriptille annetaan kuvan osoite ja haluttu koko, johon kuvat muutetaan. Paulan korusivulla kuvien URLit ovat esimerkiksi:</p>
<pre><code>&lt;img src="/paula/image.php/Kaulakorut/_DSC0060.jpg?width=200&amp;height=200&amp;cropratio=1:1&amp;image=/paula/kategoriat/Kaulakorut/_DSC0060.jpg" alt="" /&gt;</code></pre>
<p>Pahaksi onneksi skripti k&auml;ytt&auml;&auml; <em>imageconvolution()</em>-funktiota, jota ei l&ouml;ydy PHP:n valmiiksi k&auml;&auml;nnetyist&auml; GD-kirjastoista. Netist&auml; l&ouml;ytyy kuitenkin <a href="http://mgccl.com/2007/03/02/simple-replication-of-imageconvolution-function">PHP:lla kirjoitettu imageconvolution-funktio</a>, joka ajaa saman asian, mutta on eritt&auml;in hidas. Sivuston kuvat eiv&auml;t onneksi muutu kovin usein ja valmiiksi pienennetyt kuvat tallennetaan palvelimelle, eik&auml; niit&auml; tarvitse laskea uudestaan.</p>
<h3>Yhteenveto</h3>
<p>Paljon siis mahtuu yksinkertaisenkin sivuston toteutukseen. Osaa tekniikoista (jQuery, mod_rewrite, smart image resizer) kyll&auml; k&auml;ytin l&auml;hinn&auml; sen takia, ett&auml; halusin tiet&auml;&auml; miten ne toimivat. </p>
<p>Paulan korusivu ei ole miss&auml;&auml;n nimess&auml; valmis, jatkan pienimuotoisia parannust&ouml;it&auml; muiden t&ouml;iden ohessa. Seuraavaksi listalla olisi mm. RSS-sy&ouml;tteen tekeminen uusista koruista. Kommentteja ja parannusehdotuksia saa my&ouml;s laittaa. :)</p>
