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
- käytettävyys
- mobiili
tags:
- käytettävyys
- VR
- mobiili
- JavaScript
- ei näin
comments: []
---
<p>Matkustin pitkästä aikaa junalla ja tulin samalla testanneeksi VR:n palautelomakkeen käytön kännykällä. Ehkä pari sanaa käyttökontekstista:</p>
<p>Juna lähti aamulla kello 7:30, mikä on opiskelijalle suurin piirtein sama kuin 4:30 muille. Väsytti. Olin tilannut liput edellisenä päivänä VR:n nettivarauksesta ilman mitään erityistoiveita. Junassa odottikin sitten yllätys: paikat olivat lasten leikkivaunusta, vaikka juna oli muuten melko väljästi täytetty. Nukkuminen ei siis tullut kysymykseen, joten päätin käyttää ajan hyödyksi ja lähettää VR:lle kysymyksen heidän paikkojen sijoittelualgoritmista, ymmärrättehän.</p>
<p>Pääsin kännykällä kätevästi VR:n palautelomakkeeseen ja täytin sen huolellisesti. Kaikki sujui hyvin, kunnes "Lähetä"-napin alta paljastui teksti: "<strong>Huom! Lomake vaatii oikein toimiakseen javascript-tuen." </strong>(Kuvakaappaus alla)</p>
<p><a href="/images/2008/02/vr_palaute2.PNG" title="VR:n palautelomake"><img src="/images/2008/02/vr_palaute2.thumbnail.PNG" alt="VR:n palautelomake" /></a></p>
<p>Palaute jäi sitten lähettämättä. Väsymys ja harmistus vaikuttivat käyttötilanteeseen paljon - kaikki kognitiiviset resurssit eivät ehkä olleet käytössä. Lomakkeessa on silti vakava käytettävyysongelma. Muutama parannusehdotus:</p>
<ol>
<li>älä vaadi JavaScriptin käyttöä palautelomakkeessa. VR:n tapauksessa JavaScriptiä käytetään vain tarkistamaan onko käyttäjä täyttänyt kaikki kentät. Tämän voi toteuttaa myös ilman JavaScriptiä.</li>
<li>Jos kuitenkin haluat käyttää JavaScriptiä tarkistamaan syötteen, haistele onko käyttäjällä JavaScript päällä. Jos EI ole, turvaudu muihin keinoihin.</li>
<li>Jos kuitenkin haluat estää sivun toimimisen ilman JavaScriptiä, varoita käyttäjiä sivun alussa. Ei sivun lopussa kun käyttäjä on jo täyttänyt kaikki kentät turhaan.</li>
</ol>
<p>Ongelma olisi helppo ratkaista esimerkiksi sijoittamalla kyseinen varoitusteksti sivun alkuun ja piilottamalla se  näkyvistä JavaScriptillä. Näin teksti näkyisi juuri niille käyttäjille, jotka sitä eniten tarvitsevat.</p>
