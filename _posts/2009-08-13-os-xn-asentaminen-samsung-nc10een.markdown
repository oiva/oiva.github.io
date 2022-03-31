---
layout: post
status: publish
published: true
title: OS X:n asentaminen Samsung NC10:een
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 632
wordpress_url: http://www.bobs.fi/oiva/?p=632
date: '2009-08-13 23:25:20 +0300'
date_gmt: '2009-08-13 21:25:20 +0300'
categories:
- osx
tags:
- apple
- samsung
- OS X
- sonera
- nc10
- quicksilver
- ukelele
- mac
comments:
- id: 2047
  author: johannes
  author_email: tulikirnu@netikka.fi
  author_url: ''
  date: '2012-05-25 21:06:03 +0300'
  date_gmt: '2012-05-25 19:06:03 +0300'
  content: "Törmäsinpä sattumalta tähän blogiin ja nyt on
    Samsungin \"päivitys operaatio\" työn alla. :)\r\nOnko blogaajalla vielä
    kyseinen laitteisto käytössä?"
- id: 2048
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://oivaeskola.fi
  date: '2012-05-25 21:58:51 +0300'
  date_gmt: '2012-05-25 19:58:51 +0300'
  content: "Ei ole enää käytössä - pitäisi itse asiassa
    myydä kone pois. Asensin vastaavalla tavalla pöytäkoneeseen OS
    X Lionin, mikä toimii nyt ykköskoneena. Töistä on myös
    \"oikea\" mäkkiläppäri käytössä, joten omalle miniläppärille
    ei ole enää tarvetta.\r\n\r\nEi ole tullut myöskään kokeiltua
    saisiko Samsungin päivitettyä 10.6:een tai uudempaan. 10.5.6 rupeaa
    jo olemaan vähän vanha, ja ihan kaikkia ohjelmia ei siihen saa."
---
<p><a href="/images/2009/08/DSC_0442.jpg"><img class="size-medium wp-image-676 alignnone" title="Samsung NC10 ja OS X" src="/images/2009/08/DSC_0442-300x200.jpg" alt="Samsung NC10 ja OS X" width="300" height="200" /></a></p>
<p>Ostin vähän aikaa sitten Samsungin NC10 -miniläppärin. Tavoitteenani oli tehdä siitä halpa ja kevyt mäkkikone asentamalla OS X mukana tulleen Windows XP:n tilalle.</p>
<p>(OS X:n voi asentaa myös muihin miniläppäreihin. Boing Boingilla on <a title="Mac OS X Netbook Compatibility Chart" href="http://gadgets.boingboing.net/2008/12/17/osx-netbook-compatib.html">yhteensopivuuslista</a>, joka on melko hyvin ajan tasalla.)</p>
<p>OS X:n asentamiseen löytyy todella pätevät ohjeet <a title="Definitive Mac OS X installation guide for netbooks" href="http://blog.stuart.shelton.me/archives/256">Stuart Sheltonin blogista</a>, joita noudattamalla homma onnistuu hyvin. Huom! Stuartin ohjeissa Win XP poistetaan kokonaan. Dual boot -asennus vaatii kikkailua, enkä ole toistaiseksi löytänyt siihen ohjeita.</p>
<p>En toista asennusohjeita tässä, mutta listaan tarvittavat valmistelut ja muuta asiaan liittyvää.</p>
<h3>Valmistelut - Mitä tarvitset</h3>
<ul>
<li>Samsung NC10:n. <a title="Verkkokauppa.com: Samsung NC10" href="http://www.verkkokauppa.com/popups/prodinfo.php?id=40997">Verkkokauppa.com</a> myy konetta noin 400 eurolla. Koneessani ei ole integroitua 3G-modeemia. <a href="https://kauppa.sonera.fi/yksityisille/raatali/kannettava.aspx">Sonera kauppaa 3G-mallia </a>liittymäsopimuksella. Asennuksen pitäisi onnistua myös 3G-malliin, Stuartin ohjeissa on oma kohta tälle kokoonpanolle.</li>
<li>OS X:n tukeman MiniPCI-e WiFi-kortin. NC10:n alkuperäinen WiFi-kortti ei toimi OS X:ssä ilman kikkailua, ja silloinkin huonosti. Ethernet-yhteys toiminee uusimmilla ajureilla, mutta WiFi-kortin vaihtaminen on suositeltavaa. OS X tukee ainakin Broadcomin piirillä varustettuja Dell DW 1390 ja 1490-sarjan WiFi-kortteja. Näitä löytyy esimerkiksi <a title="eBay: dell dw 1490" href="http://shop.ebay.co.uk/i.html?LH_BIN=1&amp;_nkw=dell+dw+1490&amp;_fcid=70&amp;_sc=1&amp;_sop=15&amp;_stpos=&amp;_trksid=p3286.c0.m301&amp;gbr=1">eBaystä</a> muutamalla kymmenellä eurolla. Ohjeet kortin vaihtamiseen löytyvät <a title="How-to: Changing WiFi card in Samsung NC10" href="http://www.tomacintosh.com/2009/03/25/how-to-changing-wifi-card-in-samsung-nc10/">täältä</a>. Operaatio on helpompi kuin miltä se kuulostaa, läppärin takakansi irtoaa ilman erityistä työkaluakin.</li>
<li>OS X asennus-dvd:n, 129&euro;. Kaupoissa myydään tällä hetkellä 10.5.6 versiota, jonka voi päivittää ohjelmistopäivityksellä 10.5.7:ään. Asennuslevyn myynyt myyjä ei halunnut kommentoida saako OS X:n asentaa muuhun kuin Applen koneeseen :) (Vinkki: <a title="Software license agreement for Mac OS X [pdf]" href="http://images.apple.com/legal/sla/docs/macosx105.pdf">EULAn</a> mukaan ei saa.)</li>
<li>2 gigan muistikamman - suositeltava, mutta ei pakollinen. 2 gigan DDR2 SO-DIMM 667MHz maksaa 20-30&euro;. Kokemuksen perusteella ainakin <a title="Verkkokauppa: Kingston 2GB DDR2 800MHz SODIMM -muistimoduli" href="http://www.verkkokauppa.com/popups/prodinfo.php?id=34440">tämä muistikampa</a> toimii. Ohjeet muistikamman vaihtamiseen <a title="LaptopMag: How to Add RAM to the Samsung NC10" href="http://www.laptopmag.com/advice/how-to/nc10-ram.aspx?step=1">Laptop Magazinesta</a> tai&nbsp;<a title="YT: Samsung NC10 RAM Upgrade Video Guide" href="http://www.youtube.com/watch?v=lkIJE901vFM">YouTubesta</a>.</li>
</ul>
<p>OS X:n asennus onnistuu helpoiten kopioimalla asennus-dvd:n USB-kovalevylle. Tämän jälkeen kone bootataan muistitikulta, joka käynnistää asennusohjelman kovalevyltä. Tällä tavoin asennettuna tarvitset edellisten lisäksi:</p>
<ul>
<li>USB-kovalevyn, johon mahtuu kopio asennus-dvd:stä ( > 8Gb)</li>
<li>Kaverin macin, jolla asennus-dvd "palautetaan" USB-kovalevylle</li>
<li>USB-muistitikun</li>
</ul>
<p>Katso varsinainen asennusohje <a title="Definitive Mac OS X installation guide for netbooks" href="http://blog.stuart.shelton.me/archives/256">Stuartin blogista -></a></p>
<p><strong>Tällaisenaan koneelle tuli hintaa noin 580-590&euro;</strong>. Vertailun vuoksi alumiininen MacBook 13" 2008-malli maksaa 980&euro; ja halvin MacBook Air 1300&euro;.</p>
<h3>Mikä ei toimi?</h3>
<ul>
<li>Sleep ei toimi jos virtajohto on kytkettynä (myöskään kannen sulkeminen ei aseta konetta sleep-tilaan)</li>
<li>< > | -näppäin oikean shiftin vieressä ei toimi nykyisillä ajureilla</li>
<li>Mikrofoni</li>
<li><span style="text-decoration: line-through;">Tasohiiren multitouch</span> multitouchille on kuulemma ajurit, en ole kokeillut<span style="text-decoration: line-through;"><br />
</span></li>
</ul>
<p>Lisäksi näytön kirkkauden säätäminen ja äänen vaihtaminen sisäisten kaiuttimien ja kuulokkeitten välillä vaativat erilliset apuohjelmat. Myös näppäimistö tuottaa osittain vääriä merkkejä, minkä saa korjattua omalla asetustiedostolla.</p>
<h3>Näytön kirkkauden säätäminen</h3>
<p>Kirkkauden säätäminen fn+nuolinäppäimillä ei toimi. Näytön taustavaloa voi kuitenkin säätää skriptillä. Ratkaisuna on siis asentaa <a title="Download Quicksilver for Mac" href="http://www.macupdate.com/info.php/id/14831">Quicksilver</a>, jolla voi ajaa skriptejä haluamillaan näppäinyhdistelmillä.</p>
<p>InsanelyMac-foorumin <a title="Mysticus C*: Brightness control" href="http://www.insanelymac.com/forum/index.php?s=ba2a310e85d04ba09456b3b08189e7cc&amp;showtopic=137314&amp;view=findpost&amp;p=1006464">viestistä</a> löytyy brightness.zip, joka sisältää kirkkauden säätämiseen tarvittavan skriptin. Pura paketin sisältö <em>/Library/Scripts/Brightness</em> -hakemistoon.</p>
<p><a href="/images/2009/08/Picture-11.png"><img class="alignleft size-thumbnail wp-image-655" title="Kuvakaappaus Quicksilveristä" src="/images/2009/08/Picture-11-150x150.png" alt="Kuvakaappaus Quicksilveristä" width="150" height="150" /></a>Tee Quicksilveriin kaksi uutta 'Custom Triggeriä'. Vedä decrease.scpt / increase.scpt item-laatikkoon, ja aseta actioniksi 'Run'. Komennolle pitää vielä antaa 'hot key'. Itse käytän omppu+nuolinäppäimiä.</p>
<p>Skripti kysyy ensimmäisellä kerralla salasanaa, jonka jälkeen se toimii kivasti taustalla, kunhan muistaa asettaa Quicksilverin käynnistymän automaattisesti.</p>
<h3>Näppäimistö</h3>
<p>Näppäimistöasetteluja voi muokata <a title="Mac OS X Keyboard Layout Editor" href="http://scripts.sil.org/ukelele">Ukelelella</a>. Tein Ukelelella kokeeksi suomenkielisen näppäimistöasettelun, jolla toimivat useimmat näppäimet [<a href="/images/2009/08/finnish_nc10.keylayout">finnish_nc10.keylayout</a>].</p>
<p>Tallenna .keylayout-tiedosto <em>/Library/Keyboard Layouts</em> -hakemistoon, avaa international -asetukset ja valitse listasta "Finnish NC10".</p>
<p><img class="alignleft size-full wp-image-649" title="Picture 2" src="/images/2009/08/Picture-2.png" alt="Kuvakaappaus OS X:n näppäimistövalikosta, Finnish NC10 valittuna" width="250" height="206" /></p>
<p>Tämän jälkeen näppäimistöasettelu pitää vielä ottaa käyttöön yläpalkin näppäimistövalikosta.</p>
<h3>Trackpad</h3>
<p>Trackpad-asetusten saaminen system preferenceihin on neuvottu Stuartin <a title="Trackpad PreferencePane fix" href="http://blog.stuart.shelton.me/archives/256#comment-7614">kommentissa</a> asennusohjeiden lopussa.</p>
<p>Trackpad on hiukan erimuotoinen kuin oikeissa maceissa, minkä takia kursorin kiihtyvyys ylös ja alas on liian suuri. Tähän on olemassa jokin komentorivikomento jolla asian saa korjattua, mutta en löytänyt sitä uudestaan. (Muista bookmarkata kaikki ohjeet...)</p>
<h3>äänen ulostulon valinta</h3>
<p><a href="http://ipis-osx.wikidot.com/forum/t-101853/audieee:the-less-ugly-stop-gap"><img class="alignleft size-full wp-image-669" title="Audiee Menu" src="/images/2009/08/audieee_menu1.jpg" alt="Audiee Menu" width="245" height="169" /></a></p>
<p>Lataa <a href="http://ipis-osx.wikidot.com/forum/t-101853/audieee:the-less-ugly-stop-gap">Audiee -apuohjelma täältä</a>.</p>
<h3>Linkkejä</h3>
<ul>
<li><a title="Samsung NC10 -minikannettava testissä" href="http://plaza.fi/muropaketti/artikkelit/kannettavat-tietokoneet/samsung-nc10-minikannettava-testissa">Muropaktin NC10-testi</a></li>
</ul>
