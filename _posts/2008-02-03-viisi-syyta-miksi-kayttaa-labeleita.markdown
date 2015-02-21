---
layout: post
status: publish
published: true
title: Viisi syytä miksi käyttää labeleita
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
- käytettävyys
comments:
- id: 4
  author: Olli Huotari
  author_email: olli.huotari@hut.fi
  author_url: http://www.iki.fi/holli
  date: '2008-02-05 15:43:14 +0200'
  date_gmt: '2008-02-05 13:43:14 +0200'
  content: "Labelit ovat kieltämättä sen verran triviaali asia, että
    kaikkien webdev hemmojen pitäisi ne osata vaikka ne aina unohtuukin :(\r\n\r\nVielä
    hieman unohdetumpi asia on accesskeyt ja muut tavat hyödyntää näppistä.
    Hyvillä siteillä alt-shift-4 (firefoxissa) menee search boxiin eikä
    tarvitse edes hiireen koskea. http://www.cs.tut.fi/~jkorpela/forms/accesskey.html\r\n\r\nToinen
    kätsy on javascriptillä näppiksen käyttäminen, esmes
    matin maapallossa: http://matin.maapallo.org/site.pl/selain/?c=fingerpori&amp;i=34"
- id: 5
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://
  date: '2008-02-05 16:43:47 +0200'
  date_gmt: '2008-02-05 14:43:47 +0200'
  content: "Kiitos tuosta acceskey-vinkistä. Korpela ei ihan varauksetta noita
    suosittele, vaikka tarkoitus on hyvä: mahdollistaa surffaus pelkällä
    näppäimistöllä. Törmäsin ensimmäistä kertaa
    noihin \"standardoituihin\" näppäinoikoteihin netissä, niitä
    ei taida kovin moni käyttää?\r\n\r\nJoissain laitteissa surffaus
    taas tapahtuu lähes pelkästään osoittimella, jota ohjataan
    sormella / kynällä / wii-motella. Niissä tilanteissa labelit
    on aika must."
- id: 6
  author: Henri
  author_email: henri@mnd.fi
  author_url: http://mnd.fi
  date: '2008-02-07 18:31:40 +0200'
  date_gmt: '2008-02-07 16:31:40 +0200'
  content: "Oho, en ollut edes tietääkseni kuullut noista labeleista. Hienoja,
    nyt vaan herää kysymys että miksei noita oo kaikilla sivuilla?
    :-)\r\n\r\nNoissa (Nokian) puhelinselaimissa onneksi se hiiri hyppii linkistä
    toiseen, joten siihen checkboxiin osuminen ei sinänsä ole ihan niin
    ongelma. Ipod touchilla /iphonella nuo taas tulevat erittäin tarpeeseen.\r\n\r\nNoi
    Ollin mainitsemat näppäinoikotiet kuullostavat periaatteessa käteviltä
    mutta käytännössä en oikein usko niiden erityiseen yleistymiseen.
    Tämä lähinnä siksi että ne perustuvat vaan muistamiseen."
---
<p>Ajattelin kirjoittaa lyhyesti miksi HTML:n label-elementtejä pitäisi käyttää. 456 Berea Street on kuitenkin tehnyt saman vähän kattavammin: <a href="http://www.456bereastreet.com/archive/200711/use_the_label_element_to_make_your_html_forms_accessible/">Use the label element to make your HTML forms accessible</a>. Kannattaa lukea jos aihe tuntuu vieraalta.</p>
<p>Nopea demonstraatio:</p>
<form> <input type="checkbox" /> <em>Checkbox ilman label-elementtiä</em> <br /><input id="test" type="checkbox" /><em> <label for="test">Checkbox, jolle on  määritelty label</label></em><br />
<p>Alemmassa valinnassa koko teksti toimii klikattavana kohteena. </form></p>
<h3>Viisi hyvää syytä miksi sinunkin pitäisi käyttää labeleita:</h3>
<ul>
<li>Kaikki muutkin käyttävät labeleita. Käyttäjien voi aluksi olla vaikeaa oppia klikkaamaan labeleita, sillä muutos lomakkeessa on melko pieni. Mutta kun sen kerran oppii sitä odottaa kaikilta kohtaamiltaan lomakkeilta.</li>
<li>Checkboxien klikkaaminen hiirellä on rasittavaa. <a href="http://en.wikipedia.org/wiki/Fitts'_law">Fittsin lain</a> mukaan kohteen osoittamiseen kuluva aika on kääntäen verrannollinen sen kokoon. Pienten checkboxien klikkaaminen on siksi hidasta ja vaatii käyttäjältä ylimääräistä keskittymistä.</li>
<li>Checkboxien klikkaaminen <em>mobiiliselaimilla</em> on <em>todella</em> rasittavaa. Klikattavan kohteen pienen koon lisäksi osoitin on huomattavan epätarkka (Nokian puhelimista löytyvä "hiiri" tai sormi iPodissa).</li>
<li>Kaksi edellistä kohtaa yhdistettynä johonkin motoriseen ongelmaan tekee tehtävästä jo lähes mahdottoman.</li>
<li>&lt;label&gt;-tagien käyttö on erittäin helppoa, joten käyttämättömyydelle ei pitäisi olla mitään estettä.</li>
</ul>
<p>Terveisin nimim. "ketuttaa joka ikinen kerta kun törmää näin helppoon virheeseen" :P</p>
