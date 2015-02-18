---
layout: post
status: publish
published: true
title: OpenStreetMap
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 1159
wordpress_url: http://www.bobs.fi/oiva/?p=1159
date: '2013-05-29 23:23:35 +0300'
date_gmt: '2013-05-29 21:23:35 +0300'
categories:
- k&auml;ytett&auml;vyys
- el&auml;m&auml;
- internet
tags:
- JavaScript
- OpenStreetMap
- OSM
- kartat
comments: []
---
<p><a href="http://www.openstreetmap.org/">OpenStreetMap</a>&nbsp;on projekti, jonka tarkoituksena on ker&auml;t&auml; yhteis&ouml;llisesti karttatietoa ja jakaa sit&auml; vapaasti eteenp&auml;in. V&auml;h&auml;n niin kuin Wikipedia, mutta kartoille. Kuka tahansa p&auml;&auml;see lis&auml;&auml;m&auml;&auml;n yhteiselle kartalle asioita, ja karttadatasta voi muodostaa erilaisia karttoja tai k&auml;ytt&auml;&auml; sit&auml; navigointiin, tai mit&auml; nyt ikin&auml; keksiikin.</p>
<p>Koko maailman kartoitus on yll&auml;tt&auml;v&auml;n iso homma, eik&auml; OSM ole kattavuudeltaan ihan kaupallisten karttapalveluiden tasoa, mutta avoimuus tarjoaa sellaista ketteryytt&auml;, mihin isommat toimijat eiv&auml;t pysty. OSM-piireiss&auml; tyk&auml;t&auml;&auml;n kertoa tarinaa siit&auml;, miten Haitin maanj&auml;ristyksen j&auml;lkeen <a href="http://www.newyorker.com/online/blogs/closeread/2010/02/a-map-of-thousands.html">tuhannet OSM-k&auml;ytt&auml;j&auml;t kartoittivat saaren viikossa</a>, kun olemassa olevat kartat alueelta olivat ep&auml;tarkkoja ja vuosikymmeni&auml; vanhoja. Uudet kartat auttoivat pelastusty&ouml;ntekij&ouml;it&auml; toimittamaan apua tehokkaammin perille.</p>
<p>Vaikka OpenStreetMappia verrataan usein Wikipediaan, niin niill&auml; on my&ouml;s selke&auml; ero: OpenStreetMappiin kannustetaan tekem&auml;&auml;n muutoksia riippumatta siit&auml;, miten merkitt&auml;vi&auml; tai merkityksett&ouml;mi&auml; ne ovat. Mik&auml;&auml;n taho ei tunnu m&auml;&auml;r&auml;&auml;v&auml;n millaista tietoa kartalle ker&auml;t&auml;&auml;n. Jos joku haluaa merkit&auml; kartalle <a title="Liikennemerkkien kartoitus - OpenStreetMap forum" href="http://forum.openstreetmap.org/viewtopic.php?id=20822">kaikki Suomen liikennemerkit</a>, niin riitt&auml;&auml;, ett&auml; keksii liikennemerkeille sopivat tagit ja rupeaa lis&auml;&auml;m&auml;&auml;n niit&auml; kartalle. Jos idea saa kannatusta, niin muutkin rupeavat ker&auml;&auml;m&auml;&auml;n liikennemerkkej&auml;.</p>
<p>Kartalle ker&auml;tyill&auml; asioilla ei ole oikeastaan v&auml;li&auml;, koska niitten merkitys m&auml;&auml;r&auml;ytyy vasta siin&auml; vaiheessa kun joku muodostaa datasta kartan. <a href="http://www.openwhatevermap.org/">OpenWhateverMap</a> n&auml;ytt&auml;&auml; esimerkkej&auml; siit&auml;, miten erilaisia karttoja samasta datasta voidaan muodostaa.</p>
<p>Jos ontuvaa vertausta Wikipediaan haluttaisiin jatkaa, niin Wikipediaan voitaisiin periaatteessa ker&auml;t&auml; kaikki tieto, mist&auml; joku taho voisi halutessaan julkaista koosteen "Wikipedia - j&auml;rkev&auml;t artikkelit". OSM:n datan on toki tarkoitus kuvata todellisuutta mahdollisimman hyvin, mutta asioiden luokittelu ja t&auml;g&auml;ys on ainakin aloittelijan n&auml;k&ouml;kulmasta yll&auml;tt&auml;v&auml;n vapaata.</p>
<h3>iD-editor</h3>
<p>Yhteis&ouml;llisiss&auml; projekteissa kunnon ty&ouml;kaluilla on yll&auml;tt&auml;v&auml;n suuri merkitys. Avoimen l&auml;hdekoodin ohjelmien kehitys l&auml;hti kunnolla nousuun kun <a href="https://github.com/">GitHub</a> teki projekteihin osallistumisesta helppoa. Veikkaisin, ett&auml; OpenStreetMapin tietojen keruu tehostuu samaan tapaan uuden <a href="http://wiki.openstreetmap.org/wiki/ID">iD-editorin</a> my&ouml;t&auml;.</p>
<p>ID on javascriptill&auml; tehty editori, joka toimii selaimessa. Editoria p&auml;&auml;see kokeilemaan kun klikkaa <a href="http://www.openstreetmap.org/">OpenStreetMapissa</a> "muokkaa". &nbsp;Editori on tarkoituksella kevyt, eik&auml; se edes yrit&auml; tarjota samoja ominaisuuksia mit&auml; vanhemmissa OSM-applikaatioissa on. Se on my&ouml;s sen merkitt&auml;vin etu, jos kohderyhm&auml;n&auml; ovat uudet k&auml;ytt&auml;j&auml;t. Kumpaa alla olevista ohjelmista kokeilisit mieluummin?</p>
<h4>JOSM (Java OpenStreetMap Editor)</h4>
<p><a href="http://www.bobs.fi/oiva/wp-content/uploads/2013/05/osm1.png"><img class="size-full wp-image-1163 alignnone" alt="JOSM" src="http://www.bobs.fi/oiva/wp-content/uploads/2013/05/osm1.png" width="426" height="527" /></a></p>
<h4>iD-editor</h4>
<p><a href="http://www.bobs.fi/oiva/wp-content/uploads/2013/05/osm2.jpg"><img class="alignnone size-full wp-image-1164" alt="iD-editor" src="http://www.bobs.fi/oiva/wp-content/uploads/2013/05/osm2.jpg" width="425" height="345" /></a></p>
<p>Voin kyll&auml; melkein ly&ouml;d&auml; vetoa, ett&auml; vanhojen partojen mielest&auml; iD on liian kevyt, ei tarjoa ollenkaan tarvittavia ominaisuuksia, ja on tehty vaarallisen helpoksi :D. V&auml;itt&auml;isin silti, ett&auml; t&auml;m&auml;nkaltaisessa projektissa kontribuutioiden m&auml;&auml;r&auml; korvaa laadun. Jotkut ovat varmasti eri mielt&auml;.</p>
<h3>Mit&auml; kartalta puuttuu?</h3>
<p>OpenStreetMap on joiltain osin h&auml;m&auml;&auml;v&auml;n valmiin oloinen. Olen katsonut karttaa pari kertaa ylimalkaisesti ja todennut sen olevan oman asuinalueeni kohdalta "valmis". N&auml;kemykseni muuttui pari viikkoa sitten&nbsp;<a href="https://www.facebook.com/HSLdevcom">HSL:n kehitt&auml;j&auml;tapaamisessa</a>, miss&auml; <a href="http://paikkatieto.com/">Pekka Sarkola</a> oli kertomassa OpenStreetMapista ja sen haasteista. Pekka pystyi heti osoittamaan Espoosta muutamia asuinalueita, joilta puuttuvat talot kokonaan. Esimerkiksi&nbsp;<a href="http://www.openstreetmap.org/?lat=60.17662&amp;lon=24.68426&amp;zoom=15">Kukkum&auml;ki</a>&nbsp;ja <a href="http://www.openstreetmap.org/?lat=60.15839&amp;lon=24.66967&amp;zoom=15">N&ouml;ykki&ouml;</a>.</p>
<p>Vaikka talot olisivatkin paikoillaan, niin kartoitettavaa riitt&auml;&auml; silti. Voit merkit&auml; <a href="http://wiki.openstreetmap.org/wiki/Key:parking:lane">tienvarsipys&auml;k&ouml;intej&auml;</a>, <a href="http://wiki.openstreetmap.org/wiki/Key:button_operated">painonapilla toimivia liikennevaloja</a>, <a href="http://wiki.openstreetmap.org/wiki/Key:lit">valaistuja tienp&auml;tki&auml;</a>, <a href="http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_parking">polkupy&ouml;r&auml;parkkeja</a>, <a href="http://wiki.openstreetmap.org/wiki/Tag:highway%3Dpath">polkuja</a>, <a href="http://wiki.openstreetmap.org/wiki/Map_Features#Aerialway">k&ouml;ysiratoja</a>... <a href="http://wiki.openstreetmap.org/wiki/Fi:Map_Features">Tagien syvyys</a> on aika tajuton.</p>
<p>Monesta paikasta puuttuvat my&ouml;s talojen osoitteet. Puuttuvia tietoja on helppo lis&auml;t&auml; kevyell&auml; paikallistuntemuksella, tai niit&auml; voi k&auml;yd&auml; tarkistamassa paikan p&auml;&auml;ll&auml;.</p>
<p>Itse olen kartoittanut tuntemiani paikkoja l&auml;hist&ouml;lt&auml;. ID-editorin taustalla n&auml;kyv&auml;t oletusarvoisesti <a title="Bing Maps" href="http://www.bing.com/maps/">Bingin</a> ilmakuvat, joiden perusteella voi jossain m&auml;&auml;rin piirt&auml;&auml; taloja ja teit&auml;. Lis&auml;ksi k&auml;yt&auml;n apuna <a href="http://www.fonecta.fi/s/17qt">Fonectan helikopterikuvia</a>&nbsp;ja <a href="http://maps.google.fi">Google Street Viewi&auml;</a>. N&auml;iden kolmen avulla n&auml;kee jo melko tarkasti miten talot ja tiet menev&auml;t, ja jopa montako autopaikkaa parkkipaikalla on. Aineistot ovat kuitenkin muutaman vuoden ik&auml;ist&auml;, joten ihan uusimpia tietoja ei aina l&ouml;ydy.</p>
<p>Kartan muokkaaminen on yll&auml;tt&auml;v&auml;n koukuttavaa puuhaa. Tein ensimm&auml;isen&auml; p&auml;iv&auml;n&auml; noin 100 muokkausta pelk&auml;st&auml;&auml;n lis&auml;&auml;m&auml;ll&auml; l&auml;hist&ouml;n asukaspys&auml;k&ouml;intej&auml; ja uusia taloja. Muokkaamista on nyt hieman rauhoittanut ymm&auml;rrys siit&auml;, miten <em>paljon</em> tietoja viel&auml; puuttuu. Vaikka oman korttelinsa saisikin t&auml;ydelliseksi, niin jo naapurista puuttuu taloja, teit&auml; ja metatietoja.</p>
<p>Suosittelen kuitenkin kokeilemaan kartan muokkaamista. K&auml;y lis&auml;&auml;m&auml;ss&auml; vaikka oikopolut, joita k&auml;yt&auml;t joka p&auml;iv&auml;. Niit&auml; tuskin l&ouml;ytyy Google Mapsista.</p>
