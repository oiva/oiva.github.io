---
layout: post
status: publish
published: true
title: S&auml;hk&ouml;isen &auml;&auml;nestyksen esittelyvideo ja ongelmakohdat
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
date: '2008-10-30 00:28:22 +0200'
date_gmt: '2008-10-29 21:28:22 +0200'
categories:
- k&auml;ytett&auml;vyys
tags:
- k&auml;ytett&auml;vyys
- tietoenator
- s&auml;hk&ouml;inen &auml;&auml;nestys
comments: []
---
<p>Internetin uumenista l&ouml;ytyi vihdoin <a title="S&auml;hk&ouml;inen &auml;&auml;nest&auml;minen 2008" href="http://www.vaalit.fi/sahkoinenaanestaminen/esitys/esitys1.html">video s&auml;hk&ouml;isen &auml;&auml;nestyskoneen toiminnasta.</a> Kannattaa katsoa. &Auml;&auml;nestyksess&auml; esiintyneet k&auml;ytett&auml;vyysongelmat liittyv&auml;t ilmeisesti n&auml;ihin vaiheisiin:</p>
<ol>
<li>K&auml;ytt&auml;j&auml; n&auml;pp&auml;ilee ehdokkaansa numeron, joka ilmestyy ympyr&auml;n keskelle. T&auml;m&auml;n j&auml;lkeen k&auml;ytt&auml;j&auml; painaa OK-nappia:<a id="more"></a><a id="more-345"></a></li>
<p><a href="{{ site.baseurl }}/images/2008/10/aanestys1.png"><img class="alignnone size-full wp-image-346" title="&auml;&auml;nestys1" src="{{ site.baseurl }}/images/2008/10/aanestys1.png" alt="" width="450" height="248" /></a></p>
<li>Ruudulle tulevat n&auml;kyviin ehdokkaan tiedot. K&auml;ytt&auml;j&auml;n pit&auml;isi t&auml;ss&auml; vaiheessa painaa OK-nappia varmistaakseen &auml;&auml;nens&auml;:</li>
</ol>
<p><a href="{{ site.baseurl }}/images/2008/10/aanestys2.png"><img class="alignnone size-full wp-image-347" title="&auml;&auml;nestys2" src="{{ site.baseurl }}/images/2008/10/aanestys2.png" alt="" width="450" height="242" /></a></p>
<p>T&auml;m&auml;n ruudun toiminta on ehk&auml; kerrottu ohjeissa. K&auml;ytt&ouml;liittym&auml;ss&auml; itsess&auml;&auml;n on kuitenkin muutamia perusvirheit&auml;, mink&auml; takia en ihmettele jos se on aiheuttanut k&auml;ytett&auml;vyysongelmia.</p>
<ul>
<li><a title="Usability Tip: Use Verbs as Labels on Buttons" href="http://www.usabilitypost.com/2008/08/30/usability-tip-use-verbs-as-labels-on-buttons/">Nappien tekstein&auml; pit&auml;isi k&auml;ytt&auml;&auml; verbej&auml;</a>, esimerkiksi "&Auml;&auml;nest&auml;"</li>
<li>OK-napin voi tulkita indikaattoriksi siit&auml;, ett&auml; &auml;&auml;nestys on onnistunut ja &auml;&auml;ni kirjattu. K&auml;ytt&auml;j&auml; on kuitenkin jo edellisess&auml; ruudussa painanut OK-nappia.</li>
<li>Ruudulla ei n&auml;y indikaattoria, joka kertoisi &auml;&auml;nestysprosessin olevan viel&auml; kesken, ts. <a title="Heuristinen arviointi" href="http://virtlab.joensuu.fi/heuristinenarviointi.htm">j&auml;rjestelm&auml;n tila on ep&auml;selv&auml;.</a></li>
<li>Nappien vieress&auml; ei ole ohjeteksti&auml;, joka kehottaisi painamaan OK:ta &auml;&auml;nen kirjaamiseksi</li>
<li>Napit ovat eri j&auml;rjestyksess&auml; kuin edellisess&auml; ruudussa, mik&auml; v&auml;h&auml;nt&auml;&auml; OK-napin <em>eteenp&auml;invievyytt&auml;.</em> (OK ja Peruuta-nappien oikeasta j&auml;rjestyksest&auml; voi kiisteell&auml;, mutta <a title="OK&ndash;Cancel or Cancel&ndash;OK?" href="http://www.useit.com/alertbox/ok-cancel.html">k&auml;yt&auml;nn&ouml;ss&auml; sill&auml; ei ole kovinkaan suurta merkityst&auml;</a>, kunhan j&auml;rjestys pysyy aina samana.)</li>
<li>Ensisijaisen toiminnon (OK) ja toissijaisen toiminnon (Peruuta) napit eiv&auml;t saisi olla samann&auml;k&ouml;isi&auml;. Ensisijaisen toiminnon nappi voisi olla valmiiksi korostettu, jolloin sen painaminen olisi luontevampaa.</li>
</ul>
<p>(lis&auml;&auml; <a title="Functioning form: Articles About Buttons" href="http://www.lukew.com/ff/entry.asp?740">nappiaiheisia artikkeleita</a>)</p>
<p>T&auml;m&auml;n lis&auml;ksi laite ei ilmeisesti ole antanut varoitusta jos k&auml;ytt&auml;j&auml; on t&auml;ss&auml; vaiheessa poistanut &auml;&auml;nestyskorttinsa. Laite on palannut alkutilaan (tai sit&auml; muistuttavaan tilaan), jossa k&auml;ytt&auml;j&auml;&auml; pyydet&auml;&auml;n sy&ouml;tt&auml;m&auml;&auml;n &auml;&auml;nestyskortti.</p>
<p>K&auml;ytett&auml;vyyden suunnitteleminen ei ole rakettikirurgiaa ;)</p>
