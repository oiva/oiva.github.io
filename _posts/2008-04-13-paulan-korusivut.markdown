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
<p>Viime viikolla työskentelin pääasiassa <a href="http://www.paulaminni.fi">Paulan korusivujen</a> uudistamisen parissa. Alkuperäinen sivu oli melko askeettinen ja nopeasti tehty:</p>
<p><a href='{{ site.baseurl }}/images/2008/04/screenshot.jpg'><img src="{{ site.baseurl }}/images/2008/04/screenshot-300x199.jpg" alt="Paulan korusivu - vanha versio" title="Paulan korusivu - vanha versio" width="300" height="199" class="alignleft size-medium wp-image-44" /></a></p>
<p>Uuden sivun suunnittelussa lähtökohtina oli:</p>
<ul>
<li>Korujen saaminen paremmin esille</li>
<li>Myytävien korujen erottaminen myydyistä</li>
<li>Navigaation parantaminen</li>
</ul>
<p>Vanhan sivun ulkoasussa oli paljon toivomisen varaa. Uudessa päädyin lopulta hyvin pelkistettyyn layouttiin, jossa itse korut ovat pääosassa. Kokeilin aluksi asettaa neljä korua vierekkäin samalle riville, mutta vähensin määrän lopulta kolmeen, jotta yksittäisiin koruihin olisi helpompi keskittyä.</p>
<p><a href='{{ site.baseurl }}/images/2008/04/screenshot2.jpg'><img src="{{ site.baseurl }}/images/2008/04/screenshot2-300x199.jpg" alt="Paulan korusivu - uusi layout" title="Paulan korusivu" width="300" height="199" class="alignnone size-medium wp-image-45" /></a></p>
<p>Navigaatiosta tuli samalla kaksitasoinen, jossa korut on jaoteltu ensin myytäviin ja myytyihin (galleria) ja tämän lisäksi eri korutyyppeihin (kaulakorut, korvakorut ja rannekorut). Navigaatiota voisi vielä parantaa, en ole aivan varma näkyykö valittu sivu tarpeeksi selkeästi. Navigaatiota voisi helpottaa käyttämällä esimerkiksi <a href="http://en.wikipedia.org/wiki/Breadcrumb_(navigation)">bread crumbeja</a>.<br />
<a id="more"></a><a id="more-43"></a></p>
<h3>Käytetyt tekniikat</h3>
<p>Sivuston koodaamisessa käytin seuraavia tekniikoita ja valmiita palikoita. Jokaisesta voisi melkein kirjoittaa oman blogipostin, mutta kerron tässä lyhyesti mitä eri palikat tekevät ja missä roolissa ne toimivat Paulan korusivulla.</p>
<h4><a href="http://www.smarty.net/">Smarty template engine</a></h4>
<p>Smarty on PHP-paketti, jolla koodi ja ulkoasu voidaan erottaa toisistaan helposti. Koodin puolella kaikki dynaamisesti kerättävä tieto tallennetaan muuttujiin. Sivun näyttämiseen käytetään tämän jälkeen omaa template-tiedostoa, jossa on säännöt muuttujien sisältämän tiedon esittämiselle. </p>
<p>Esimerkiksi navigaation piirtäminen hoituu suurein piirtein seuraavanlaisella rakenteella: (olen rakentanut Smartyn päälle oman "sivu"-luokan, joka piilottaa muuttujien rekisteröinnin ja sivun piirtokutsun.)</p>
<h5>index.php:</h5>
{% highlight php startinline %}
$navigaatio = array("1"=>array("href"=>"index.php", name="Myynnissä"),
                           ...
$sivu->assign("navigaatio", $navigaatio);
$sivu->display("index.tpl");
{% endhighlight %}
<h5>index.tpl:</h5>
{% highlight smarty %}
<ul id="navigaatio">
  {foreach from=$navigaatio item=navi}
    <li><a href="{$navi.href}">{$navi.name}</a></li>
  {/foreach}
</ul>
{% endhighlight %}
<p>Kaikki sivuston sivut käyttävät jotakin templatea. Tällä tavoin sivuille yhteiset rakenteet on saatu siivottua yhteen templateen ja vain sivujen sisällöt eroavat toisistaan.</p>
<h4>Yahoo UI: <a href="http://developer.yahoo.com/yui/reset/">Reset</a>, <a href="http://developer.yahoo.com/yui/fonts/">Fonts</a>, <a href="http://developer.yahoo.com/yui/grids/">Grids</a> ja <a href="http://developer.yahoo.com/yui/base/">Base</a></h4>
<p>Lyhyesti kerrottuna Reset poistaa kaikki HTML-elementtien valmiit muotoilut, jotka saattavat erota eri selaimissa. Tämän jälkeen kaikki selaimet näyttävät peruselementit kuten tekstikappaleet ja listat periaatteessa samalla tavalla.</p>
<p>Resetin jälkeen kaikkien elementtien <em>marginit</em> ja <em>paddingit</em> ovat nollassa, mikä ei yleensä ole haluttu lopputulos. Näitä ei onneksi tarvitse muuttaa käsin, vaan apuun tulee Base-CSS, joka määrittelee tietyt yleisimmät perusmuotoilut, kuten esimerkiksi listojen sisennykset.</p>
<p>Fonts auttaa fonttikokojen yhtenäistämisessä eri selaimien välillä. Grids CSS:ää olen <a href="http://oivaeskola.fi/2007/12/18/yahoo-ui-grids-css-sommittelutyokalu/">sivunnut aikaisemmin</a>.</p>
<h4><a href="http://jquery.com/">jQuery</a></h4>
<p>jQuery on JavaScript-kirjasto, joka on tarkoitettu helpottamaan JavaScriptin yhdistämistä HTML:ään. Perinteisesti HTML-sivun eri elementteihin on JavaScriptissä viitattu käyttämällä <em><a href="http://jacksleight.com/blog/2008/01/14/getelementsby/">getElementBy*</a></em>-funktioita. jQueryssä voi sen sijaan käyttää paljon yksinkertaisempaa koodia eri elementtien hakemiseen. Kirjastossa on paljon erilaisia funktioita animaatioihin ja ajax-juttuihin, joihin en ole vielä tutustunut kunnolla.</p>
<p>Paulan korusivulla jQueryä käytetään varjostuksen lisäämiseksi kuville. Kuvat on tässä määritelty kattamaan .kuvat-divien sisällä olevat <img>-tagit.</p>
{% highlight javascript %}
$(document).ready(function(){
  $('.kuva img').shadow({
    offset: 5,
    opacity: 0.11
  });
});
{% endhighlight %}
<p>Kannattaa huomata, että shadow-funktio vaatii toimiakseen jQuery-peruspaketin lisäksi myös <em><a href="http://dev.jquery.com/view/trunk/plugins/dimensions/jquery.dimensions.js">jquery.dimensions.js</a></em> ja <em><a href="http://dev.jquery.com/view/trunk/fx/fx.shadow.js">fx.shadow.js</a></em> -tiedostot.</p>
<p>Varjotukset eivät valitettavasti toimi aivan täydellisesti. Varjot menevät IE6:lla rikki ja jäävät joskus näkymättä uudemmillakin selaimilla.</p>
<h4><a href="http://wettone.com/code/clean-urls">mod_rewrite</a></h4>
<p>Sivuston käyttämät URLit on siivottu käyttäen apachen mod_rewrite-sääntöjä. Esimerkki:</p>
{% highlight apache %}
RewriteEngine On
RewriteRule ^([a-z\-]+)/([0-9]+)$ index.php?kategoria=$1&sivu=$2
{% endhighlight %}
<p>Kyseinen sääntö muuttaisi esimerkiksi URLin</p>
<pre>http://www.paulaminni.fi/korvakorut/1</pre>
<p>muotoon</p>
<pre>http://www.paulaminni.fi/index.php?kategoria=korvakorut&sivu=1</pre>
<p>Tämän avulla käyttäjille näkyy siistimmät URLit. Sivuston URLit voidaan myös säilyttää samana, vaikka sivuston tekniikka muuttuisi muuten. Edellä olevassa esimerkissä index.php voidaan nimetä uudestaan tai parametrien nimet vaihtaa ilman että käyttäjät tai hakukoneet huomaavat eroa.</p>
<h4><a href="http://shiftingpixel.com/2008/03/03/smart-image-resizer/">Smart Image Resizer</a></h4>
<p>Etusivulla ja galleriassa näkyvät pikkukuvat on kaikki tehty käyttäen Smart Image Resizer -PHP-skriptiä. Skriptille annetaan kuvan osoite ja haluttu koko, johon kuvat muutetaan. Paulan korusivulla kuvien URLit ovat esimerkiksi:</p>
<pre><code>&lt;img src="/paula/image.php/Kaulakorut/_DSC0060.jpg?width=200&amp;height=200&amp;cropratio=1:1&amp;image=/paula/kategoriat/Kaulakorut/_DSC0060.jpg" alt="" /&gt;</code></pre>
<p>Pahaksi onneksi skripti käyttää <em>imageconvolution()</em>-funktiota, jota ei löydy PHP:n valmiiksi käännetyistä GD-kirjastoista. Netistä löytyy kuitenkin <a href="http://mgccl.com/2007/03/02/simple-replication-of-imageconvolution-function">PHP:lla kirjoitettu imageconvolution-funktio</a>, joka ajaa saman asian, mutta on erittäin hidas. Sivuston kuvat eivät onneksi muutu kovin usein ja valmiiksi pienennetyt kuvat tallennetaan palvelimelle, eikä niitä tarvitse laskea uudestaan.</p>
<h3>Yhteenveto</h3>
<p>Paljon siis mahtuu yksinkertaisenkin sivuston toteutukseen. Osaa tekniikoista (jQuery, mod_rewrite, smart image resizer) kyllä käytin lähinnä sen takia, että halusin tietää miten ne toimivat. </p>
<p>Paulan korusivu ei ole missään nimessä valmis, jatkan pienimuotoisia parannustöitä muiden töiden ohessa. Seuraavaksi listalla olisi mm. RSS-syötteen tekeminen uusista koruista. Kommentteja ja parannusehdotuksia saa myös laittaa. :)</p>
