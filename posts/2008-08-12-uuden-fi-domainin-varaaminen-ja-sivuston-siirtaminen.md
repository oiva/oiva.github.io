---
layout: post
status: publish
published: true
title: Uuden .fi-domainin varaaminen ja sivuston siirtäminen
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 132
wordpress_url: http://www.bobs.fi/oiva/?p=132
date: 2008-08-12 22:26:09 +03:00
date_gmt: 2008-08-12 19:26:09 +03:00
categories:
- web-kehitys
tags:
- rss
- ficora
- redirect
- htaccess
- dns
- nimipalvelin
- xname
- ip-osoite
- domain
- ".fi"
- domainin varaaminen
comments: []
---
<p>Fi-domainin varaaminen on helppoa ja hauskaa, ja prosessi onnistuu suurin piirtein näin:</p>
<ol>
<li>Rekisteröidy viestintäviraston <a title="viestintävirasto: fi-verkkotunnuspalvelu" href="https://domain.ficora.fi/fiDomain/aca.aspx">fi-verkkotunnuspalveluun</a></li>
<li>Posti tuo fyysisen salasanalistan 1-3 työpäivän kuluessa</li>
<li>Verkkotunnuksen varaamista varten tarvitset vähintään kaksi <a title="Wikipedia: DNS" href="http://fi.wikipedia.org/wiki/DNS">nimipalvelinta</a>, jotka kertovat mihin <a title="Wikipedia: IP-osoite" href="http://fi.wikipedia.org/wiki/IP-osoite">IP-osoitteeseen</a> uuden verkkotunnuksen liikenne ohjataan. Hyvä, ilmainen nimipalvelinpalvelu löytyy esimerkiksi <a href="http://xname.org">xname.org</a>:sta. Alla esimerkki nimipalvelimen virittämisestä paulaminni.fi-domainille:
<ul>
<li><em>(Rekisteröidy xname.orgiin)</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname1.png"><img class="alignnone size-thumbnail wp-image-133" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname1-150x150.png" alt="Luo uusi zone" width="150" height="150" /></a><br />
<em>Luo uusi zone</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname2.png"><img class="alignnone size-thumbnail wp-image-134" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname2-150x150.png" alt="" width="150" height="150" /></a><br />
<em>nimipalvelimiksi voi antaa </em>ns0.xname.org.<em> ja </em>ns1.xname.org.<em> Muista liittää nimen loppuun piste. Myös </em>ns2.xname.org.<em> on olemassa ja sitä voi käyttää edellisten lisäksi.</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname3.png"><img class="alignnone size-thumbnail wp-image-135" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname3-150x150.png" alt="" width="150" height="150" /></a><br />
<em>A-recordiin tulee domainin nimi (taas loppupisteen kanssa) ja IP-osoite, jossa oma palvelin sijaitsee.<br />
</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname4.png"><img class="alignnone size-thumbnail wp-image-136" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname4-150x150.png" alt="" width="150" height="150" /></a><br />
<em>Jos haluat osoitteen toimivan myös www-alkuosan kanssa, lisää 'www' CNAME-osioon. CNAMEa voi käyttää jos haluaa useampia alidomaineita, jotka vievät samaan IP-osoitteeseen kuin A-record.</em></li>
</ul>
</li>
<li>Xnamen nimipalvelimien päivittymisessä menee 1-2 tuntia. Tämän jälkeen voit varata domainin viestintäviraston palvelussa. Nimipalvelimet voi syöttää lomakkeeseen ilman IP-osoitetta. Xnamen nimipalvelinten IP-osoitteet löytyvät kuitenkin <a title="xname: What Name Server is serving my zone?" href="https://www.xname.org/faq.php#item3">FAQ</a>:sta jos niitä tarvitsee.</li>
<li>Viestintäviraston omat nimipalvelimet päivittyvät myös noin tunnissa parissa, jonka jälkeen domainin pitäisi toimia.</li>
<li>???</li>
<li>Profit.</li>
</ol>
<h3>Sivuston siirtäminen uudelle palvelimelle</h3>
<p>Vanhan sivuston ohjaaminen uudelle palvelimelle on <em>lähes triviaalia</em>, ja vastaus löytyy jälleen kerran <a title="Wikipedia: URL redirection: using .htaccess for redirection (eng)" href="http://en.wikipedia.org/wiki/URL_redirection#Using_.htaccess_for_Redirection">Wikipediasta</a>. Homma onnistuu (esimerkiksi) käyttämällä .htaccess-tiedostoa vanhan sivuston juuressa:</p>
<pre>RewriteEngine On
RewriteCond %{HTTP_HOST} ^.*oldwebsite\.com$ [NC]
RewriteRule ^(.*)$ http://www.preferredwebsite.net/$1 [R=301,L]</pre>
<p>Käyttäjän yrittäessä päästä vanhalle sivulle palvelin vastaa sivun sijaitsevan uudessa osoitteessa. Käyttäjän selain on fiksu ja siirtyy automaattisesti uuteen osoitteeseen.</p>
<p>Ylläolevassa koodissa <strong>301</strong> on <a title="Wikipedia: http vastauskoodit" href="http://fi.wikipedia.org/wiki/Http#Vastauskoodit">HTTP-vastauskoodi</a>, joka tarkoittaa, että sivusto on siirtynyt lopullisesti uuteen osoitteeseen. Tämän koodin ansiosta esimerkiksi Google osaa nähdä uuden ja vanhan sivuston samana. Jonkin ajan kuluttua Google ei enää näytä linkkejä vanhalle sivustolle.</p>
<h3>älä tee näin</h3>
<p>Viime viikolla tehty <a title="Paula Minni" href="http://www.paulaminni.fi">paulaminni.fi</a>-domainin varaaminen ja sivuston siirtäminen sujui hyvin, lukuun ottamatta sivustolla ollutta <a title="Oivallisia juttuja: syötteiden tekeminen on helppoa ja hauskaa" href="https://oivaeskola.fi/2008/05/14/syotteiden-tekeminen-on-helppoa-ja-hauskaa/">RSS-syötettä</a>. Syötteen yksittäisten artikkelien tunnisteina oli käytetty kunkin artikkelin alkuperäisen HTML-version osoitetta. Kun domain muuttui, myös tunnisteet muuttuivat, ja kaikki syötteen artikkelit näkyivät lukijaohjelmille uusina artikkeleina. <strong>Opetus: käytä RSS-syötteessä muuttumattomia tunnisteita (doh).</strong></p>
