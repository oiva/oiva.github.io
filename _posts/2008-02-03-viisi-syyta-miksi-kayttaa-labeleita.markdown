---
layout: post
status: publish
published: true
title: Viisi syyt&auml; miksi k&auml;ytt&auml;&auml; labeleita
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Liian moni ei vieläkään käytä labeleita HTML-formeissaan, vaikka ne olisi
  helppo tehdä ja hyödyttäisivät käyttäjää suuresti.
wordpress_id: 20
wordpress_url: http://www.bobs.fi/oiva/2008/02/03/viisi-syyta-miksi-kayttaa-labeleita/
date: '2008-02-03 00:51:37 +0200'
date_gmt: '2008-02-02 22:51:37 +0200'
categories:
- web-kehitys
tags:
- HTML
- label
- saavutettavuus
- k&auml;ytett&auml;vyys
comments:
- id: 4
  author: Olli Huotari
  author_email: olli.huotari@hut.fi
  author_url: http://www.iki.fi/holli
  date: '2008-02-05 15:43:14 +0200'
  date_gmt: '2008-02-05 13:43:14 +0200'
  content: "Labelit ovat kielt&auml;m&auml;tt&auml; sen verran triviaali asia, ett&auml;
    kaikkien webdev hemmojen pit&auml;isi ne osata vaikka ne aina unohtuukin :(\r\n\r\nViel&auml;
    hieman unohdetumpi asia on accesskeyt ja muut tavat hy&ouml;dynt&auml;&auml; n&auml;ppist&auml;.
    Hyvill&auml; siteill&auml; alt-shift-4 (firefoxissa) menee search boxiin eik&auml;
    tarvitse edes hiireen koskea. http://www.cs.tut.fi/~jkorpela/forms/accesskey.html\r\n\r\nToinen
    k&auml;tsy on javascriptill&auml; n&auml;ppiksen k&auml;ytt&auml;minen, esmes
    matin maapallossa: http://matin.maapallo.org/site.pl/selain/?c=fingerpori&amp;i=34"
- id: 5
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://
  date: '2008-02-05 16:43:47 +0200'
  date_gmt: '2008-02-05 14:43:47 +0200'
  content: "Kiitos tuosta acceskey-vinkist&auml;. Korpela ei ihan varauksetta noita
    suosittele, vaikka tarkoitus on hyv&auml;: mahdollistaa surffaus pelk&auml;ll&auml;
    n&auml;pp&auml;imist&ouml;ll&auml;. T&ouml;rm&auml;sin ensimm&auml;ist&auml; kertaa
    noihin \"standardoituihin\" n&auml;pp&auml;inoikoteihin netiss&auml;, niit&auml;
    ei taida kovin moni k&auml;ytt&auml;&auml;?\r\n\r\nJoissain laitteissa surffaus
    taas tapahtuu l&auml;hes pelk&auml;st&auml;&auml;n osoittimella, jota ohjataan
    sormella / kyn&auml;ll&auml; / wii-motella. Niiss&auml; tilanteissa labelit
    on aika must."
- id: 6
  author: Henri
  author_email: henri@mnd.fi
  author_url: http://mnd.fi
  date: '2008-02-07 18:31:40 +0200'
  date_gmt: '2008-02-07 16:31:40 +0200'
  content: "Oho, en ollut edes tiet&auml;&auml;kseni kuullut noista labeleista. Hienoja,
    nyt vaan her&auml;&auml; kysymys ett&auml; miksei noita oo kaikilla sivuilla?
    :-)\r\n\r\nNoissa (Nokian) puhelinselaimissa onneksi se hiiri hyppii linkist&auml;
    toiseen, joten siihen checkboxiin osuminen ei sin&auml;ns&auml; ole ihan niin
    ongelma. Ipod touchilla /iphonella nuo taas tulevat eritt&auml;in tarpeeseen.\r\n\r\nNoi
    Ollin mainitsemat n&auml;pp&auml;inoikotiet kuullostavat periaatteessa k&auml;tevilt&auml;
    mutta k&auml;yt&auml;nn&ouml;ss&auml; en oikein usko niiden erityiseen yleistymiseen.
    T&auml;m&auml; l&auml;hinn&auml; siksi ett&auml; ne perustuvat vaan muistamiseen."
---
<p>Ajattelin kirjoittaa lyhyesti miksi HTML:n label-elementtej&auml; pit&auml;isi k&auml;ytt&auml;&auml;. 456 Berea Street on kuitenkin tehnyt saman v&auml;h&auml;n kattavammin: <a href="http://www.456bereastreet.com/archive/200711/use_the_label_element_to_make_your_html_forms_accessible/">Use the label element to make your HTML forms accessible</a>. Kannattaa lukea jos aihe tuntuu vieraalta.</p>
<p>Nopea demonstraatio:</p>
<form> <input type="checkbox" /> <em>Checkbox ilman label-elementti&auml;</em> <br /><input id="test" type="checkbox" /><em> <label for="test">Checkbox, jolle on  m&auml;&auml;ritelty label</label></em><br />
<p>Alemmassa valinnassa koko teksti toimii klikattavana kohteena. </form></p>
<h3>Viisi hyv&auml;&auml; syyt&auml; miksi sinunkin pit&auml;isi k&auml;ytt&auml;&auml; labeleita:</h3>
<ul>
<li>Kaikki muutkin k&auml;ytt&auml;v&auml;t labeleita. K&auml;ytt&auml;jien voi aluksi olla vaikeaa oppia klikkaamaan labeleita, sill&auml; muutos lomakkeessa on melko pieni. Mutta kun sen kerran oppii sit&auml; odottaa kaikilta kohtaamiltaan lomakkeilta.</li>
<li>Checkboxien klikkaaminen hiirell&auml; on rasittavaa. <a href="http://en.wikipedia.org/wiki/Fitts'_law">Fittsin lain</a> mukaan kohteen osoittamiseen kuluva aika on k&auml;&auml;nt&auml;en verrannollinen sen kokoon. Pienten checkboxien klikkaaminen on siksi hidasta ja vaatii k&auml;ytt&auml;j&auml;lt&auml; ylim&auml;&auml;r&auml;ist&auml; keskittymist&auml;.</li>
<li>Checkboxien klikkaaminen <em>mobiiliselaimilla</em> on <em>todella</em> rasittavaa. Klikattavan kohteen pienen koon lis&auml;ksi osoitin on huomattavan ep&auml;tarkka (Nokian puhelimista l&ouml;ytyv&auml; "hiiri" tai sormi iPodissa).</li>
<li>Kaksi edellist&auml; kohtaa yhdistettyn&auml; johonkin motoriseen ongelmaan tekee teht&auml;v&auml;st&auml; jo l&auml;hes mahdottoman.</li>
<li><label>-tagien k&auml;ytt&ouml; on eritt&auml;in helppoa, joten k&auml;ytt&auml;m&auml;tt&ouml;myydelle ei pit&auml;isi olla mit&auml;&auml;n estett&auml;.</li>
</ul><br />
<p>Terveisin nimim. "ketuttaa joka ikinen kerta kun t&ouml;rm&auml;&auml; n&auml;in helppoon virheeseen" :P</p>
