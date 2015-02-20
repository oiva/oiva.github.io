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
- käytettävyys
- elämä
- internet
tags:
- JavaScript
- OpenStreetMap
- OSM
- kartat
comments: []
---
<p><a href="http://www.openstreetmap.org/">OpenStreetMap</a> on projekti, jonka tarkoituksena on kerätä yhteisöllisesti karttatietoa ja jakaa sitä vapaasti eteenpäin. Vähän niin kuin Wikipedia, mutta kartoille. Kuka tahansa pääsee lisäämään yhteiselle kartalle asioita, ja karttadatasta voi muodostaa erilaisia karttoja tai käyttää sitä navigointiin, tai mitä nyt ikinä keksiikin.</p>
<p>Koko maailman kartoitus on yllättävän iso homma, eikä OSM ole kattavuudeltaan ihan kaupallisten karttapalveluiden tasoa, mutta avoimuus tarjoaa sellaista ketteryyttä, mihin isommat toimijat eivät pysty. OSM-piireissä tykätään kertoa tarinaa siitä, miten Haitin maanjäristyksen jälkeen <a href="http://www.newyorker.com/online/blogs/closeread/2010/02/a-map-of-thousands.html">tuhannet OSM-käyttäjät kartoittivat saaren viikossa</a>, kun olemassa olevat kartat alueelta olivat epätarkkoja ja vuosikymmeniä vanhoja. Uudet kartat auttoivat pelastustyöntekijöitä toimittamaan apua tehokkaammin perille.</p>
<p>Vaikka OpenStreetMappia verrataan usein Wikipediaan, niin niillä on myös selkeä ero: OpenStreetMappiin kannustetaan tekemään muutoksia riippumatta siitä, miten merkittäviä tai merkityksettömiä ne ovat. Mikään taho ei tunnu määräävän millaista tietoa kartalle kerätään. Jos joku haluaa merkitä kartalle <a title="Liikennemerkkien kartoitus - OpenStreetMap forum" href="http://forum.openstreetmap.org/viewtopic.php?id=20822">kaikki Suomen liikennemerkit</a>, niin riittää, että keksii liikennemerkeille sopivat tagit ja rupeaa lisäämään niitä kartalle. Jos idea saa kannatusta, niin muutkin rupeavat keräämään liikennemerkkejä.</p>
<p>Kartalle kerätyillä asioilla ei ole oikeastaan väliä, koska niitten merkitys määräytyy vasta siinä vaiheessa kun joku muodostaa datasta kartan. <a href="http://www.openwhatevermap.org/">OpenWhateverMap</a> näyttää esimerkkejä siitä, miten erilaisia karttoja samasta datasta voidaan muodostaa.</p>
<p>Jos ontuvaa vertausta Wikipediaan haluttaisiin jatkaa, niin Wikipediaan voitaisiin periaatteessa kerätä kaikki tieto, mistä joku taho voisi halutessaan julkaista koosteen "Wikipedia - järkevät artikkelit". OSM:n datan on toki tarkoitus kuvata todellisuutta mahdollisimman hyvin, mutta asioiden luokittelu ja tägäys on ainakin aloittelijan näkökulmasta yllättävän vapaata.</p>
<h3>iD-editor</h3>
<p>Yhteisöllisissä projekteissa kunnon työkaluilla on yllättävän suuri merkitys. Avoimen lähdekoodin ohjelmien kehitys lähti kunnolla nousuun kun <a href="https://github.com/">GitHub</a> teki projekteihin osallistumisesta helppoa. Veikkaisin, että OpenStreetMapin tietojen keruu tehostuu samaan tapaan uuden <a href="http://wiki.openstreetmap.org/wiki/ID">iD-editorin</a> myötä.</p>
<p>ID on javascriptillä tehty editori, joka toimii selaimessa. Editoria pääsee kokeilemaan kun klikkaa <a href="http://www.openstreetmap.org/">OpenStreetMapissa</a> "muokkaa". &nbsp;Editori on tarkoituksella kevyt, eikä se edes yritä tarjota samoja ominaisuuksia mitä vanhemmissa OSM-applikaatioissa on. Se on myös sen merkittävin etu, jos kohderyhmänä ovat uudet käyttäjät. Kumpaa alla olevista ohjelmista kokeilisit mieluummin?</p>
<h4>JOSM (Java OpenStreetMap Editor)</h4>
<p><a href="{{ site.baseurl }}/images/2013/05/osm1.png"><img class="size-full wp-image-1163 alignnone" alt="JOSM" src="{{ site.baseurl }}/images/2013/05/osm1.png" width="426" height="527" /></a></p>
<h4>iD-editor</h4>
<p><a href="{{ site.baseurl }}/images/2013/05/osm2.jpg"><img class="alignnone size-full wp-image-1164" alt="iD-editor" src="{{ site.baseurl }}/images/2013/05/osm2.jpg" width="425" height="345" /></a></p>
<p>Voin kyllä melkein lyödä vetoa, että vanhojen partojen mielestä iD on liian kevyt, ei tarjoa ollenkaan tarvittavia ominaisuuksia, ja on tehty vaarallisen helpoksi :D. Väittäisin silti, että tämänkaltaisessa projektissa kontribuutioiden määrä korvaa laadun. Jotkut ovat varmasti eri mieltä.</p>
<h3>Mitä kartalta puuttuu?</h3>
<p>OpenStreetMap on joiltain osin hämäävän valmiin oloinen. Olen katsonut karttaa pari kertaa ylimalkaisesti ja todennut sen olevan oman asuinalueeni kohdalta "valmis". Näkemykseni muuttui pari viikkoa sitten <a href="https://www.facebook.com/HSLdevcom">HSL:n kehittäjätapaamisessa</a>, missä <a href="http://paikkatieto.com/">Pekka Sarkola</a> oli kertomassa OpenStreetMapista ja sen haasteista. Pekka pystyi heti osoittamaan Espoosta muutamia asuinalueita, joilta puuttuvat talot kokonaan. Esimerkiksi <a href="http://www.openstreetmap.org/?lat=60.17662&amp;lon=24.68426&amp;zoom=15">Kukkumäki</a> ja <a href="http://www.openstreetmap.org/?lat=60.15839&amp;lon=24.66967&amp;zoom=15">Nöykkiö</a>.</p>
<p>Vaikka talot olisivatkin paikoillaan, niin kartoitettavaa riittää silti. Voit merkitä <a href="http://wiki.openstreetmap.org/wiki/Key:parking:lane">tienvarsipysäköintejä</a>, <a href="http://wiki.openstreetmap.org/wiki/Key:button_operated">painonapilla toimivia liikennevaloja</a>, <a href="http://wiki.openstreetmap.org/wiki/Key:lit">valaistuja tienpätkiä</a>, <a href="http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_parking">polkupyöräparkkeja</a>, <a href="http://wiki.openstreetmap.org/wiki/Tag:highway%3Dpath">polkuja</a>, <a href="http://wiki.openstreetmap.org/wiki/Map_Features#Aerialway">köysiratoja</a>... <a href="http://wiki.openstreetmap.org/wiki/Fi:Map_Features">Tagien syvyys</a> on aika tajuton.</p>
<p>Monesta paikasta puuttuvat myös talojen osoitteet. Puuttuvia tietoja on helppo lisätä kevyellä paikallistuntemuksella, tai niitä voi käydä tarkistamassa paikan päällä.</p>
<p>Itse olen kartoittanut tuntemiani paikkoja lähistöltä. ID-editorin taustalla näkyvät oletusarvoisesti <a title="Bing Maps" href="http://www.bing.com/maps/">Bingin</a> ilmakuvat, joiden perusteella voi jossain määrin piirtää taloja ja teitä. Nykyään parempi lähde on <a href="http://kartat.kapsi.fi">MML:n ilmakuvat</a>, jotka saa iD:n taustaksi asettamalla osoitteeksi <code>http://tiles.kartat.kapsi.fi/ortokuva/{z}/{x}/{y}.jpg</code>. Ilmakuvien avulla näkee jo melko tarkasti miten talot ja tiet menevät, ja jopa montako autopaikkaa parkkipaikalla on. Aineistot ovat kuitenkin välillä muutaman vuoden ikäisiä, joten ihan uusimpia tietoja ei aina löydy.</p>
<p>Kartan muokkaaminen on yllättävän koukuttavaa puuhaa. Tein ensimmäisenä päivänä noin 100 muokkausta pelkästään lisäämällä lähistön asukaspysäköintejä ja uusia taloja. Muokkaamista on nyt hieman rauhoittanut ymmärrys siitä, miten <em>paljon</em> tietoja vielä puuttuu. Vaikka oman korttelinsa saisikin täydelliseksi, niin jo naapurista puuttuu taloja, teitä ja metatietoja.</p>
<p>Suosittelen kuitenkin kokeilemaan kartan muokkaamista. Käy lisäämässä vaikka oikopolut, joita käytät joka päivä. Niitä tuskin löytyy Google Mapsista.</p>
