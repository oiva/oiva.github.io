---
layout: post
status: publish
published: true
title: VR:n palautelomake
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Yritys käyttää VR:n palautelomaketta kännykällä, väsyneenä, johti käyttäjän
  aivojen sulamiseen.
wordpress_id: 25
wordpress_url: http://www.bobs.fi/oiva/2008/02/15/vrn-palautelomake/
date: '2008-02-15 21:18:33 +0200'
date_gmt: '2008-02-15 19:18:33 +0200'
categories:
- web-kehitys
- k&auml;ytett&auml;vyys
- mobiili
tags:
- k&auml;ytett&auml;vyys
- VR
- mobiili
- JavaScript
- ei n&auml;in
comments: []
---
<p>Matkustin pitk&auml;st&auml; aikaa junalla ja tulin samalla testanneeksi VR:n palautelomakkeen k&auml;yt&ouml;n k&auml;nnyk&auml;ll&auml;. Ehk&auml; pari sanaa k&auml;ytt&ouml;kontekstista:</p>
<p>Juna l&auml;hti aamulla kello 7:30, mik&auml; on opiskelijalle suurin piirtein sama kuin 4:30 muille. V&auml;sytti. Olin tilannut liput edellisen&auml; p&auml;iv&auml;n&auml; VR:n nettivarauksesta ilman mit&auml;&auml;n erityistoiveita. Junassa odottikin sitten yll&auml;tys: paikat olivat lasten leikkivaunusta, vaikka juna oli muuten melko v&auml;lj&auml;sti t&auml;ytetty. Nukkuminen ei siis tullut kysymykseen, joten p&auml;&auml;tin k&auml;ytt&auml;&auml; ajan hy&ouml;dyksi ja l&auml;hett&auml;&auml; VR:lle kysymyksen heid&auml;n paikkojen sijoittelualgoritmista, ymm&auml;rr&auml;tteh&auml;n.</p>
<p>P&auml;&auml;sin k&auml;nnyk&auml;ll&auml; k&auml;tev&auml;sti VR:n palautelomakkeeseen ja t&auml;ytin sen huolellisesti. Kaikki sujui hyvin, kunnes "L&auml;het&auml;"-napin alta paljastui teksti: "<strong>Huom! Lomake vaatii oikein toimiakseen javascript-tuen." </strong>(Kuvakaappaus alla)</p>
<p><a href="{{ site.baseurl }}/images/2008/02/vr_palaute2.PNG" title="VR:n palautelomake"><img src="{{ site.baseurl }}/images/2008/02/vr_palaute2.thumbnail.PNG" alt="VR:n palautelomake" /></a></p>
<p>Palaute j&auml;i sitten l&auml;hett&auml;m&auml;tt&auml;. V&auml;symys ja harmistus vaikuttivat k&auml;ytt&ouml;tilanteeseen paljon - kaikki kognitiiviset resurssit eiv&auml;t ehk&auml; olleet k&auml;yt&ouml;ss&auml;. Lomakkeessa on silti vakava k&auml;ytett&auml;vyysongelma. Muutama parannusehdotus:</p>
<ol>
<li>&Auml;l&auml; vaadi JavaScriptin k&auml;ytt&ouml;&auml; palautelomakkeessa. VR:n tapauksessa JavaScripti&auml; k&auml;ytet&auml;&auml;n vain tarkistamaan onko k&auml;ytt&auml;j&auml; t&auml;ytt&auml;nyt kaikki kent&auml;t. T&auml;m&auml;n voi toteuttaa my&ouml;s ilman JavaScripti&auml;.</li>
<li>Jos kuitenkin haluat k&auml;ytt&auml;&auml; JavaScripti&auml; tarkistamaan sy&ouml;tteen, haistele onko k&auml;ytt&auml;j&auml;ll&auml; JavaScript p&auml;&auml;ll&auml;. Jos EI ole, turvaudu muihin keinoihin.</li>
<li>Jos kuitenkin haluat est&auml;&auml; sivun toimimisen ilman JavaScripti&auml;, varoita k&auml;ytt&auml;ji&auml; sivun alussa. Ei sivun lopussa kun k&auml;ytt&auml;j&auml; on jo t&auml;ytt&auml;nyt kaikki kent&auml;t turhaan.</li>
</ol><br />
<p>Ongelma olisi helppo ratkaista esimerkiksi sijoittamalla kyseinen varoitusteksti sivun alkuun ja piilottamalla se  n&auml;kyvist&auml; JavaScriptill&auml;. N&auml;in teksti n&auml;kyisi juuri niille k&auml;ytt&auml;jille, jotka sit&auml; eniten tarvitsevat.</p>
