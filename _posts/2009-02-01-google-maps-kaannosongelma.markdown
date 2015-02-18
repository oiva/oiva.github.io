---
layout: post
status: publish
published: true
title: Google Maps k&auml;&auml;nn&ouml;songelma
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Google Mapsin liitetyissä kartoissa on
wordpress_id: 524
wordpress_url: http://www.bobs.fi/oiva/?p=524
date: '2009-02-01 15:03:13 +0200'
date_gmt: '2009-02-01 12:03:13 +0200'
categories:
- web-kehitys
tags:
- google
- kartta
- google maps
comments: []
---
<p><img class="alignleft size-full wp-image-525" title="google1" src="http://www.bobs.fi/oiva/wp-content/uploads/2009/02/google1.png" alt="google1" width="286" height="104" /></p>
<p>Google p&auml;&auml;si otsikoihin kun hakutuloksissa v&auml;itettiin jokaisen sivun olevan haitallinen k&auml;ytt&auml;j&auml;n tietokoneelle, eik&auml; hakutulokseen tarjottu suoraa linkki&auml;. <a title="Google Blog: "This site may harm your computer" on every search result?!?!" href="http://googleblog.blogspot.com/2009/01/this-site-may-harm-your-computer-on.html">Vika saatiin korjattua nopeasti</a>, ja lopputuloksena l&auml;hinn&auml; havaittiin miten vaikeaa on k&auml;ytt&auml;&auml; netti&auml; ilman Googlea.</p>
<p><a title="Google Maps" href="http://maps.google.fi/">Google Mapsissa</a> on sen sijaan ollut ongelma, jota ei ole korjattu yht&auml; nopeasti. Karttoja voi liitt&auml;&auml; omille sivuillensa (eng. embed), jolloin kartta toimii samaan tapaan kuin se toimisi Google Maps-palvelussa. T&auml;m&auml; on esimerkiksi yrityksille k&auml;tev&auml; tapa n&auml;ytt&auml;&auml; miss&auml; firma sijaitsee.<img class="alignnone size-full wp-image-531" title="Google maps: liit&auml; kartta" src="http://www.bobs.fi/oiva/wp-content/uploads/2009/02/google5.png" alt="Google maps: " width="445" height="187" /></p>
<p>Kartan ominaisuuksiin kuuluu, ett&auml; kartan tyypin voi valita normaalin kartan, satelliittikuvan tai maastokartan v&auml;lilt&auml;:</p>
<p><img class="alignnone size-full wp-image-533" title="Google Maps: Kartta - Satelliitti - Maasto" src="http://www.bobs.fi/oiva/wp-content/uploads/2009/02/google31.png" alt="Google Maps: Kartta - Satelliitti - Maasto" width="446" height="100" /></p>
<p>Ulkopuolisille sivuille liitetyss&auml; kartassa karttatyypin valintanapit ovat kuitenkin lyhennetty muotoon "Kartta - la - Maas". Wtf?</p>
<p><img class="size-full wp-image-526 alignnone" title="Suomenkielinen kartta: Kartta - la - maas" src="http://www.bobs.fi/oiva/wp-content/uploads/2009/02/google2.png" alt="google2" width="425" height="106" /></p>
<p>Pohdin useamman p&auml;iv&auml;n miten sana "satelliitti" on saatu lyhennetty&auml; muotoon "la". Maasto -> Maas on viel&auml; jotenkin ymm&auml;rrett&auml;viss&auml;, mutta la:sta ei voi mitenk&auml;&auml;n johtaa satelliittia. Asia selvisi lopulta kun n&auml;in englanninkielisen kartan lyhenn&ouml;kset:</p>
<p><img class="alignnone size-full wp-image-528" title="Englanninkielinen kartta: Map - Sat - Ter" src="http://www.bobs.fi/oiva/wp-content/uploads/2009/02/google4.png" alt="google4" width="425" height="133" /></p>
<p>Englanninkielisess&auml; kartassa Satellite on lyhennetty "Sat". Suomenkielinen lyhenn&ouml;s on saatu k&auml;&auml;nt&auml;m&auml;ll&auml; englannin lyhenn&ouml;s. Sanan merkitys vain on kadonnut matkalla ja k&auml;&auml;nn&ouml;s on ilmeisesti tehty Sat (Saturday) -> la (lauantai).</p>
<p>T&auml;ll&auml; hetkell&auml; ainoa tapa kiert&auml;&auml; k&auml;&auml;nn&ouml;songelma on k&auml;ytt&auml;&auml;<a title="Google Maps API" href="http://code.google.com/apis/maps/"> Google Maps APIa</a> ja liitt&auml;&auml; kartta javascriptill&auml;.</p>
<p>(Sit&auml; en tied&auml; miksi Helsinki on englanninkielisess&auml; kartassa kirjoitettu <em>portugaliksi</em> Hels&iacute;nquia.)</p>
