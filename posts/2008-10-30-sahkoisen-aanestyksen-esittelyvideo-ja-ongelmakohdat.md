---
layout: post
status: publish
published: true
title: Sähköisen äänestyksen esittelyvideo ja ongelmakohdat
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Sähköisen äänestyksen käyttöliittymässä on muutamia perusvirheitä, minkä
  takia en ihmettele jos se on aiheuttanut käytettävyysongelmia.
wordpress_id: 345
wordpress_url: http://www.bobs.fi/oiva/?p=345
date: 2008-10-30 00:28:22 +02:00
date_gmt: 2008-10-29 21:28:22 +02:00
tags:
- käytettävyys
old_tags:
- käytettävyys
- tietoenator
- sähköinen äänestys
comments: []
---
<p>Internetin uumenista löytyi vihdoin <a title="Sähköinen äänestäminen 2008" href="http://www.vaalit.fi/sahkoinenaanestaminen/esitys/esitys1.html">video sähköisen äänestyskoneen toiminnasta.</a> Kannattaa katsoa. äänestyksessä esiintyneet käytettävyysongelmat liittyvät ilmeisesti näihin vaiheisiin:</p>
<ol>
<li>Käyttäjä näppäilee ehdokkaansa numeron, joka ilmestyy ympyrän keskelle. Tämän jälkeen käyttäjä painaa OK-nappia:<a id="more"></a><a id="more-345"></a></li>
<p><a href="{{ site.baseurl }}/images/2008/10/aanestys1.png"><img class="alignnone size-full wp-image-346" title="äänestys1" src="{{ site.baseurl }}/images/2008/10/aanestys1.png" alt="" width="450" height="248" /></a></p>
<li>Ruudulle tulevat näkyviin ehdokkaan tiedot. Käyttäjän pitäisi tässä vaiheessa painaa OK-nappia varmistaakseen äänensä:</li>
</ol>
<p><a href="{{ site.baseurl }}/images/2008/10/aanestys2.png"><img class="alignnone size-full wp-image-347" title="äänestys2" src="{{ site.baseurl }}/images/2008/10/aanestys2.png" alt="" width="450" height="242" /></a></p>
<p>Tämän ruudun toiminta on ehkä kerrottu ohjeissa. Käyttöliittymässä itsessään on kuitenkin muutamia perusvirheitä, minkä takia en ihmettele jos se on aiheuttanut käytettävyysongelmia.</p>
<ul>
<li><a title="Usability Tip: Use Verbs as Labels on Buttons" href="http://www.usabilitypost.com/2008/08/30/usability-tip-use-verbs-as-labels-on-buttons/">Nappien teksteinä pitäisi käyttää verbejä</a>, esimerkiksi "äänestä"</li>
<li>OK-napin voi tulkita indikaattoriksi siitä, että äänestys on onnistunut ja ääni kirjattu. Käyttäjä on kuitenkin jo edellisessä ruudussa painanut OK-nappia.</li>
<li>Ruudulla ei näy indikaattoria, joka kertoisi äänestysprosessin olevan vielä kesken, ts. <a title="Heuristinen arviointi" href="http://virtlab.joensuu.fi/heuristinenarviointi.htm">järjestelmän tila on epäselvä.</a></li>
<li>Nappien vieressä ei ole ohjetekstiä, joka kehottaisi painamaan OK:ta äänen kirjaamiseksi</li>
<li>Napit ovat eri järjestyksessä kuin edellisessä ruudussa, mikä vähäntää OK-napin <em>eteenpäinvievyyttä.</em> (OK ja Peruuta-nappien oikeasta järjestyksestä voi kiisteellä, mutta <a title="OK&ndash;Cancel or Cancel&ndash;OK?" href="http://www.useit.com/alertbox/ok-cancel.html">käytännössä sillä ei ole kovinkaan suurta merkitystä</a>, kunhan järjestys pysyy aina samana.)</li>
<li>Ensisijaisen toiminnon (OK) ja toissijaisen toiminnon (Peruuta) napit eivät saisi olla samannäköisiä. Ensisijaisen toiminnon nappi voisi olla valmiiksi korostettu, jolloin sen painaminen olisi luontevampaa.</li>
</ul>
<p>(lisää <a title="Functioning form: Articles About Buttons" href="http://www.lukew.com/ff/entry.asp?740">nappiaiheisia artikkeleita</a>)</p>
<p>Tämän lisäksi laite ei ilmeisesti ole antanut varoitusta jos käyttäjä on tässä vaiheessa poistanut äänestyskorttinsa. Laite on palannut alkutilaan (tai sitä muistuttavaan tilaan), jossa käyttäjää pyydetään syöttämään äänestyskortti.</p>
<p>Käytettävyyden suunnitteleminen ei ole rakettikirurgiaa ;)</p>
