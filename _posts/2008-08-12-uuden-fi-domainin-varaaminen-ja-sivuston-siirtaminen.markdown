---
layout: post
status: publish
published: true
title: Uuden .fi-domainin varaaminen ja sivuston siirt&auml;minen
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 132
wordpress_url: http://www.bobs.fi/oiva/?p=132
date: '2008-08-12 22:26:09 +0300'
date_gmt: '2008-08-12 19:26:09 +0300'
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
<p>Fi-domainin varaaminen on helppoa ja hauskaa, ja prosessi onnistuu suurin piirtein n&auml;in:</p>
<ol>
<li>Rekister&ouml;idy viestint&auml;viraston <a title="viestint&auml;virasto: fi-verkkotunnuspalvelu" href="https://domain.ficora.fi/fiDomain/aca.aspx">fi-verkkotunnuspalveluun</a></li>
<li>Posti tuo fyysisen salasanalistan 1-3 ty&ouml;p&auml;iv&auml;n kuluessa</li>
<li>Verkkotunnuksen varaamista varten tarvitset v&auml;hint&auml;&auml;n kaksi <a title="Wikipedia: DNS" href="http://fi.wikipedia.org/wiki/DNS">nimipalvelinta</a>, jotka kertovat mihin <a title="Wikipedia: IP-osoite" href="http://fi.wikipedia.org/wiki/IP-osoite">IP-osoitteeseen</a> uuden verkkotunnuksen liikenne ohjataan. Hyv&auml;, ilmainen nimipalvelinpalvelu l&ouml;ytyy esimerkiksi <a href="http://xname.org">xname.org</a>:sta. Alla esimerkki nimipalvelimen viritt&auml;misest&auml; paulaminni.fi-domainille:
<ul>
<li><em>(Rekister&ouml;idy xname.orgiin)</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname1.png"><img class="alignnone size-thumbnail wp-image-133" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname1-150x150.png" alt="Luo uusi zone" width="150" height="150" /></a><br />
<em>Luo uusi zone</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname2.png"><img class="alignnone size-thumbnail wp-image-134" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname2-150x150.png" alt="" width="150" height="150" /></a><br />
<em>nimipalvelimiksi voi antaa </em>ns0.xname.org.<em> ja </em>ns1.xname.org.<em> Muista liitt&auml;&auml; nimen loppuun piste. My&ouml;s </em>ns2.xname.org.<em> on olemassa ja sit&auml; voi k&auml;ytt&auml;&auml; edellisten lis&auml;ksi.</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname3.png"><img class="alignnone size-thumbnail wp-image-135" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname3-150x150.png" alt="" width="150" height="150" /></a><br />
<em>A-recordiin tulee domainin nimi (taas loppupisteen kanssa) ja IP-osoite, jossa oma palvelin sijaitsee.<br />
</em></li>
<li><a href="{{ site.baseurl }}/images/2008/08/xname4.png"><img class="alignnone size-thumbnail wp-image-136" title="klikkaa suuremmaksi" src="{{ site.baseurl }}/images/2008/08/xname4-150x150.png" alt="" width="150" height="150" /></a><br />
<em>Jos haluat osoitteen toimivan my&ouml;s www-alkuosan kanssa, lis&auml;&auml; 'www' CNAME-osioon. CNAMEa voi k&auml;ytt&auml;&auml; jos haluaa useampia alidomaineita, jotka viev&auml;t samaan IP-osoitteeseen kuin A-record.</em></li>
</ul>
</li>
<li>Xnamen nimipalvelimien p&auml;ivittymisess&auml; menee 1-2 tuntia. T&auml;m&auml;n j&auml;lkeen voit varata domainin viestint&auml;viraston palvelussa. Nimipalvelimet voi sy&ouml;tt&auml;&auml; lomakkeeseen ilman IP-osoitetta. Xnamen nimipalvelinten IP-osoitteet l&ouml;ytyv&auml;t kuitenkin <a title="xname: What Name Server is serving my zone?" href="https://www.xname.org/faq.php#item3">FAQ</a>:sta jos niit&auml; tarvitsee.</li>
<li>Viestint&auml;viraston omat nimipalvelimet p&auml;ivittyv&auml;t my&ouml;s noin tunnissa parissa, jonka j&auml;lkeen domainin pit&auml;isi toimia.</li>
<li>???</li>
<li>Profit.</li>
</ol>
<h3>Sivuston siirt&auml;minen uudelle palvelimelle</h3>
<p>Vanhan sivuston ohjaaminen uudelle palvelimelle on <em>l&auml;hes triviaalia</em>, ja vastaus l&ouml;ytyy j&auml;lleen kerran <a title="Wikipedia: URL redirection: using .htaccess for redirection (eng)" href="http://en.wikipedia.org/wiki/URL_redirection#Using_.htaccess_for_Redirection">Wikipediasta</a>. Homma onnistuu (esimerkiksi) k&auml;ytt&auml;m&auml;ll&auml; .htaccess-tiedostoa vanhan sivuston juuressa:</p>
<pre>RewriteEngine On
RewriteCond %{HTTP_HOST} ^.*oldwebsite\.com$ [NC]
RewriteRule ^(.*)$ http://www.preferredwebsite.net/$1 [R=301,L]</pre>
<p>K&auml;ytt&auml;j&auml;n yritt&auml;ess&auml; p&auml;&auml;st&auml; vanhalle sivulle palvelin vastaa sivun sijaitsevan uudessa osoitteessa. K&auml;ytt&auml;j&auml;n selain on fiksu ja siirtyy automaattisesti uuteen osoitteeseen.</p>
<p>Yll&auml;olevassa koodissa <strong>301</strong> on <a title="Wikipedia: http vastauskoodit" href="http://fi.wikipedia.org/wiki/Http#Vastauskoodit">HTTP-vastauskoodi</a>, joka tarkoittaa, ett&auml; sivusto on siirtynyt lopullisesti uuteen osoitteeseen. T&auml;m&auml;n koodin ansiosta esimerkiksi Google osaa n&auml;hd&auml; uuden ja vanhan sivuston samana. Jonkin ajan kuluttua Google ei en&auml;&auml; n&auml;yt&auml; linkkej&auml; vanhalle sivustolle.</p>
<h3>&Auml;l&auml; tee n&auml;in</h3>
Viime viikolla tehty <a title="Paula Minni" href="http://www.paulaminni.fi">paulaminni.fi</a>-domainin varaaminen ja sivuston siirt&auml;minen sujui hyvin, lukuun ottamatta sivustolla ollutta <a title="Oivallisia juttuja: sy&ouml;tteiden tekeminen on helppoa ja hauskaa" href="http://www.bobs.fi/oiva/2008/05/14/syotteiden-tekeminen-on-helppoa-ja-hauskaa/">RSS-sy&ouml;tett&auml;</a>. Sy&ouml;tteen yksitt&auml;isten artikkelien tunnisteina oli k&auml;ytetty kunkin artikkelin alkuper&auml;isen HTML-version osoitetta. Kun domain muuttui, my&ouml;s tunnisteet muuttuivat, ja kaikki sy&ouml;tteen artikkelit n&auml;kyiv&auml;t lukijaohjelmille uusina artikkeleina. <strong>Opetus: k&auml;yt&auml; RSS-sy&ouml;tteess&auml; muuttumattomia tunnisteita (doh).<br />
</strong></p>
