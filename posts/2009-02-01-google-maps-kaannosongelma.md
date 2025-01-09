---
layout: post
status: publish
published: true
title: Google Maps käännösongelma
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Google Mapsin liitetyissä kartoissa on käännösongelma
wordpress_id: 524
wordpress_url: http://www.bobs.fi/oiva/?p=524
date: 2009-02-01 15:03:13 +02:00
date_gmt: 2009-02-01 12:03:13 +02:00
tags:
- web-kehitys
old_tags:
- google
- kartta
- google maps
comments: []
---
<p><img class="alignleft size-full wp-image-525" title="google1" src="{{ site.baseurl }}/images/2009/02/google1.png" alt="google1" width="286" height="104" /></p>
<p>Google pääsi otsikoihin kun hakutuloksissa väitettiin jokaisen sivun olevan haitallinen käyttäjän tietokoneelle, eikä hakutulokseen tarjottu suoraa linkkiä. <a title="Google Blog: This site may harm your computer on every search result?!?!" href="http://googleblog.blogspot.com/2009/01/this-site-may-harm-your-computer-on.html">Vika saatiin korjattua nopeasti</a>, ja lopputuloksena lähinnä havaittiin miten vaikeaa on käyttää nettiä ilman Googlea.</p>
<p><a title="Google Maps" href="http://maps.google.fi/">Google Mapsissa</a> on sen sijaan ollut ongelma, jota ei ole korjattu yhtä nopeasti. Karttoja voi liittää omille sivuillensa (eng. embed), jolloin kartta toimii samaan tapaan kuin se toimisi Google Maps-palvelussa. Tämä on esimerkiksi yrityksille kätevä tapa näyttää missä firma sijaitsee.<img class="alignnone size-full wp-image-531" title="Google maps: liitä kartta" src="{{ site.baseurl }}/images/2009/02/google5.png" alt="Google maps: " width="445" height="187" /></p>
<p>Kartan ominaisuuksiin kuuluu, että kartan tyypin voi valita normaalin kartan, satelliittikuvan tai maastokartan väliltä:</p>
<p><img class="alignnone size-full wp-image-533" title="Google Maps: Kartta - Satelliitti - Maasto" src="{{ site.baseurl }}/images/2009/02/google31.png" alt="Google Maps: Kartta - Satelliitti - Maasto" width="446" height="100" /></p>
<p>Ulkopuolisille sivuille liitetyssä kartassa karttatyypin valintanapit ovat kuitenkin lyhennetty muotoon "Kartta - la - Maas". Wtf?</p>
<p><img class="size-full wp-image-526 alignnone" title="Suomenkielinen kartta: Kartta - la - maas" src="{{ site.baseurl }}/images/2009/02/google2.png" alt="google2" width="425" height="106" /></p>
<p>Pohdin useamman päivän miten sana "satelliitti" on saatu lyhennettyä muotoon "la". Maasto -> Maas on vielä jotenkin ymmärrettävissä, mutta la:sta ei voi mitenkään johtaa satelliittia. Asia selvisi lopulta kun näin englanninkielisen kartan lyhennökset:</p>
<p><img class="alignnone size-full wp-image-528" title="Englanninkielinen kartta: Map - Sat - Ter" src="{{ site.baseurl }}/images/2009/02/google4.png" alt="google4" width="425" height="133" /></p>
<p>Englanninkielisessä kartassa Satellite on lyhennetty "Sat". Suomenkielinen lyhennös on saatu kääntämällä englannin lyhennös. Sanan merkitys vain on kadonnut matkalla ja käännös on ilmeisesti tehty Sat (Saturday) -> la (lauantai).</p>
<p>Tällä hetkellä ainoa tapa kiertää käännösongelma on käyttää<a title="Google Maps API" href="http://code.google.com/apis/maps/"> Google Maps APIa</a> ja liittää kartta javascriptillä.</p>
<p>(Sitä en tiedä miksi Helsinki on englanninkielisessä kartassa kirjoitettu <em>portugaliksi</em> Hels&iacute;nquia.)</p>
