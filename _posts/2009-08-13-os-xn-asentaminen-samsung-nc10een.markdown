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
- ohjeet
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
  content: "T&ouml;rm&auml;sinp&auml; sattumalta t&auml;h&auml;n blogiin ja nyt on
    Samsungin \"p&auml;ivitys operaatio\" ty&ouml;n alla. :)\r\nOnko blogaajalla viel&auml;
    kyseinen laitteisto k&auml;yt&ouml;ss&auml;?"
- id: 2048
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://www.bobs.fi/oiva
  date: '2012-05-25 21:58:51 +0300'
  date_gmt: '2012-05-25 19:58:51 +0300'
  content: "Ei ole en&auml;&auml; k&auml;yt&ouml;ss&auml; - pit&auml;isi itse asiassa
    myyd&auml; kone pois. Asensin vastaavalla tavalla p&ouml;yt&auml;koneeseen OS
    X Lionin, mik&auml; toimii nyt ykk&ouml;skoneena. T&ouml;ist&auml; on my&ouml;s
    \"oikea\" m&auml;kkil&auml;pp&auml;ri k&auml;yt&ouml;ss&auml;, joten omalle minil&auml;pp&auml;rille
    ei ole en&auml;&auml; tarvetta.\r\n\r\nEi ole tullut my&ouml;sk&auml;&auml;n kokeiltua
    saisiko Samsungin p&auml;ivitetty&auml; 10.6:een tai uudempaan. 10.5.6 rupeaa
    jo olemaan v&auml;h&auml;n vanha, ja ihan kaikkia ohjelmia ei siihen saa."
---
<p><a href="{{ site.baseurl }}/images/2009/08/DSC_0442.jpg"><img class="size-medium wp-image-676 alignnone" title="Samsung NC10 ja OS X" src="{{ site.baseurl }}/images/2009/08/DSC_0442-300x200.jpg" alt="Samsung NC10 ja OS X" width="300" height="200" /></a></p>
<p>Ostin v&auml;h&auml;n aikaa sitten Samsungin NC10 -minil&auml;pp&auml;rin. Tavoitteenani oli tehd&auml; siit&auml; halpa ja kevyt m&auml;kkikone asentamalla OS X mukana tulleen Windows XP:n tilalle.</p>
<p>(OS X:n voi asentaa my&ouml;s muihin minil&auml;pp&auml;reihin. Boing Boingilla on <a title="Mac OS X Netbook Compatibility Chart" href="http://gadgets.boingboing.net/2008/12/17/osx-netbook-compatib.html">yhteensopivuuslista</a>, joka on melko hyvin ajan tasalla.)</p>
<p>OS X:n asentamiseen l&ouml;ytyy todella p&auml;tev&auml;t ohjeet <a title="Definitive Mac OS X installation guide for netbooks" href="http://blog.stuart.shelton.me/archives/256">Stuart Sheltonin blogista</a>, joita noudattamalla homma onnistuu hyvin. Huom! Stuartin ohjeissa Win XP poistetaan kokonaan. Dual boot -asennus vaatii kikkailua, enk&auml; ole toistaiseksi l&ouml;yt&auml;nyt siihen ohjeita.</p>
<p>En toista asennusohjeita t&auml;ss&auml;, mutta listaan tarvittavat valmistelut ja muuta asiaan liittyv&auml;&auml;.</p>
<h3>Valmistelut - Mit&auml; tarvitset</h3>
<ul>
<li>Samsung NC10:n. <a title="Verkkokauppa.com: Samsung NC10" href="http://www.verkkokauppa.com/popups/prodinfo.php?id=40997">Verkkokauppa.com</a> myy konetta noin 400 eurolla. Koneessani ei ole integroitua 3G-modeemia. <a href="https://kauppa.sonera.fi/yksityisille/raatali/kannettava.aspx">Sonera kauppaa 3G-mallia </a>liittym&auml;sopimuksella. Asennuksen pit&auml;isi onnistua my&ouml;s 3G-malliin, Stuartin ohjeissa on oma kohta t&auml;lle kokoonpanolle.</li>
<li>OS X:n tukeman MiniPCI-e WiFi-kortin. NC10:n alkuper&auml;inen WiFi-kortti ei toimi OS X:ss&auml;&nbsp; ilman kikkailua, ja silloinkin huonosti. Ethernet-yhteys toiminee uusimmilla ajureilla, mutta WiFi-kortin vaihtaminen on suositeltavaa. OS X tukee ainakin Broadcomin piirill&auml; varustettuja Dell DW 1390 ja 1490-sarjan WiFi-kortteja. N&auml;it&auml; l&ouml;ytyy esimerkiksi <a title="eBay: dell dw 1490" href="http://shop.ebay.co.uk/i.html?LH_BIN=1&amp;_nkw=dell+dw+1490&amp;_fcid=70&amp;_sc=1&amp;_sop=15&amp;_stpos=&amp;_trksid=p3286.c0.m301&amp;gbr=1">eBayst&auml;</a> muutamalla kymmenell&auml; eurolla. Ohjeet kortin vaihtamiseen l&ouml;ytyv&auml;t <a title="How-to: Changing WiFi card in Samsung NC10" href="http://www.tomacintosh.com/2009/03/25/how-to-changing-wifi-card-in-samsung-nc10/">t&auml;&auml;lt&auml;</a>. Operaatio on helpompi kuin milt&auml; se kuulostaa, l&auml;pp&auml;rin takakansi irtoaa ilman erityist&auml; ty&ouml;kaluakin.</li>
<li>OS X asennus-dvd:n, 129&euro;. Kaupoissa myyd&auml;&auml;n t&auml;ll&auml; hetkell&auml; 10.5.6 versiota, jonka voi p&auml;ivitt&auml;&auml; ohjelmistop&auml;ivityksell&auml; 10.5.7:&auml;&auml;n. Asennuslevyn myynyt myyj&auml; ei halunnut kommentoida saako OS X:n asentaa muuhun kuin Applen koneeseen :) (Vinkki: <a title="Software license agreement for Mac OS X [pdf]" href="http://images.apple.com/legal/sla/docs/macosx105.pdf">EULAn</a> mukaan ei saa.)</li>
<li>2 gigan muistikamman - suositeltava, mutta ei pakollinen. 2 gigan DDR2 SO-DIMM 667MHz maksaa 20-30&euro;. Kokemuksen perusteella ainakin <a title="Verkkokauppa: Kingston 2GB DDR2 800MHz SODIMM -muistimoduli" href="http://www.verkkokauppa.com/popups/prodinfo.php?id=34440">t&auml;m&auml; muistikampa</a> toimii. Ohjeet muistikamman vaihtamiseen <a title="LaptopMag: How to Add RAM to the Samsung NC10" href="http://www.laptopmag.com/advice/how-to/nc10-ram.aspx?step=1">Laptop Magazinesta</a> tai&nbsp;<a title="YT: Samsung NC10 RAM Upgrade Video Guide" href="http://www.youtube.com/watch?v=lkIJE901vFM">YouTubesta</a>.</li>
</ul>
<p>OS X:n asennus onnistuu helpoiten kopioimalla asennus-dvd:n USB-kovalevylle. T&auml;m&auml;n j&auml;lkeen kone bootataan muistitikulta, joka k&auml;ynnist&auml;&auml; asennusohjelman kovalevylt&auml;. T&auml;ll&auml; tavoin asennettuna tarvitset edellisten lis&auml;ksi:</p>
<ul>
<li>USB-kovalevyn, johon mahtuu kopio asennus-dvd:st&auml; ( > 8Gb)</li>
<li>Kaverin macin, jolla asennus-dvd "palautetaan" USB-kovalevylle</li>
<li>USB-muistitikun</li>
</ul>
<p>Katso varsinainen asennusohje <a title="Definitive Mac OS X installation guide for netbooks" href="http://blog.stuart.shelton.me/archives/256">Stuartin blogista -></a></p>
<p><strong>T&auml;llaisenaan koneelle tuli hintaa noin 580-590&euro;</strong>. Vertailun vuoksi alumiininen MacBook 13" 2008-malli maksaa 980&euro; ja halvin MacBook Air 1300&euro;.</p>
<h3>Mik&auml; ei toimi?</h3>
<ul>
<li>Sleep ei toimi jos virtajohto on kytkettyn&auml; (my&ouml;sk&auml;&auml;n kannen sulkeminen ei aseta konetta sleep-tilaan)</li>
<li>< > | -n&auml;pp&auml;in oikean shiftin vieress&auml; ei toimi nykyisill&auml; ajureilla</li>
<li>Mikrofoni</li>
<li><span style="text-decoration: line-through;">Tasohiiren multitouch</span> multitouchille on kuulemma ajurit, en ole kokeillut<span style="text-decoration: line-through;"><br />
</span></li>
</ul>
<p>Lis&auml;ksi n&auml;yt&ouml;n kirkkauden s&auml;&auml;t&auml;minen ja &auml;&auml;nen vaihtaminen sis&auml;isten kaiuttimien ja kuulokkeitten v&auml;lill&auml; vaativat erilliset apuohjelmat. My&ouml;s n&auml;pp&auml;imist&ouml; tuottaa osittain v&auml;&auml;ri&auml; merkkej&auml;, mink&auml; saa korjattua omalla asetustiedostolla.</p>
<h3>N&auml;yt&ouml;n kirkkauden s&auml;&auml;t&auml;minen</h3>
<p>Kirkkauden s&auml;&auml;t&auml;minen fn+nuolin&auml;pp&auml;imill&auml; ei toimi. N&auml;yt&ouml;n taustavaloa voi kuitenkin s&auml;&auml;t&auml;&auml; skriptill&auml;. Ratkaisuna on siis asentaa <a title="Download Quicksilver for Mac" href="http://www.macupdate.com/info.php/id/14831">Quicksilver</a>, jolla voi ajaa skriptej&auml; haluamillaan n&auml;pp&auml;inyhdistelmill&auml;.</p>
<p>InsanelyMac-foorumin <a title="Mysticus C*: Brightness control" href="http://www.insanelymac.com/forum/index.php?s=ba2a310e85d04ba09456b3b08189e7cc&amp;showtopic=137314&amp;view=findpost&amp;p=1006464">viestist&auml;</a> l&ouml;ytyy brightness.zip, joka sis&auml;lt&auml;&auml; kirkkauden s&auml;&auml;t&auml;miseen tarvittavan skriptin. Pura paketin sis&auml;lt&ouml; <em>/Library/Scripts/Brightness</em> -hakemistoon.</p>
<p><a href="{{ site.baseurl }}/images/2009/08/Picture-11.png"><img class="alignleft size-thumbnail wp-image-655" title="Kuvakaappaus Quicksilverist&auml;" src="{{ site.baseurl }}/images/2009/08/Picture-11-150x150.png" alt="Kuvakaappaus Quicksilverist&auml;" width="150" height="150" /></a>Tee Quicksilveriin kaksi uutta 'Custom Triggeri&auml;'. Ved&auml; decrease.scpt / increase.scpt item-laatikkoon, ja aseta actioniksi 'Run'. Komennolle pit&auml;&auml; viel&auml; antaa 'hot key'. Itse k&auml;yt&auml;n omppu+nuolin&auml;pp&auml;imi&auml;.</p>
<p>Skripti kysyy ensimm&auml;isell&auml; kerralla salasanaa, jonka j&auml;lkeen se toimii kivasti taustalla, kunhan muistaa asettaa Quicksilverin k&auml;ynnistym&auml;n automaattisesti.</p>
<h3>N&auml;pp&auml;imist&ouml;</h3>
<p>N&auml;pp&auml;imist&ouml;asetteluja voi muokata <a title="Mac OS X Keyboard Layout Editor" href="http://scripts.sil.org/ukelele">Ukelelella</a>. Tein Ukelelella kokeeksi suomenkielisen n&auml;pp&auml;imist&ouml;asettelun, jolla toimivat useimmat n&auml;pp&auml;imet [<a href="{{ site.baseurl }}/images/2009/08/finnish_nc10.keylayout">finnish_nc10.keylayout</a>].</p>
<p>Tallenna .keylayout-tiedosto <em>/Library/Keyboard Layouts</em> -hakemistoon, avaa international -asetukset ja valitse listasta "Finnish NC10".</p>
<p><img class="alignleft size-full wp-image-649" title="Picture 2" src="{{ site.baseurl }}/images/2009/08/Picture-2.png" alt="Kuvakaappaus OS X:n n&auml;pp&auml;imist&ouml;valikosta, Finnish NC10 valittuna" width="250" height="206" /></p>
<p>T&auml;m&auml;n j&auml;lkeen n&auml;pp&auml;imist&ouml;asettelu pit&auml;&auml; viel&auml; ottaa k&auml;ytt&ouml;&ouml;n yl&auml;palkin n&auml;pp&auml;imist&ouml;valikosta.</p>
<h3>Trackpad</h3>
<p>Trackpad-asetusten saaminen system preferenceihin on neuvottu Stuartin <a title="Trackpad PreferencePane fix" href="http://blog.stuart.shelton.me/archives/256#comment-7614">kommentissa</a> asennusohjeiden lopussa.</p>
<p>Trackpad on hiukan erimuotoinen kuin oikeissa maceissa, mink&auml; takia kursorin kiihtyvyys yl&ouml;s ja alas on liian suuri. T&auml;h&auml;n on olemassa jokin komentorivikomento jolla asian saa korjattua, mutta en l&ouml;yt&auml;nyt sit&auml; uudestaan. (Muista bookmarkata kaikki ohjeet...)</p>
<h3>&Auml;&auml;nen ulostulon valinta</h3>
<a href="http://ipis-osx.wikidot.com/forum/t-101853/audieee:the-less-ugly-stop-gap"><img class="alignleft size-full wp-image-669" title="Audiee Menu" src="{{ site.baseurl }}/images/2009/08/audieee_menu1.jpg" alt="Audiee Menu" width="245" height="169" /></a></p>
<p>Lataa <a href="http://ipis-osx.wikidot.com/forum/t-101853/audieee:the-less-ugly-stop-gap">Audiee -apuohjelma t&auml;&auml;lt&auml;</a>.</p>
<h3>Linkkej&auml;</h3>
<ul>
<li><a title="Samsung NC10 -minikannettava testiss&auml;" href="http://plaza.fi/muropaketti/artikkelit/kannettavat-tietokoneet/samsung-nc10-minikannettava-testissa">Muropaktin NC10-testi</a></li>
</ul>
