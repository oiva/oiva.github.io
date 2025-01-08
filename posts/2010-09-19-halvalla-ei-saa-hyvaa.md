---
layout: post
status: publish
published: true
title: Halvalla ei saa hyvää
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 695
wordpress_url: http://www.bobs.fi/oiva/?p=695
date: 2010-09-19 18:40:18 +03:00
date_gmt: 2010-09-19 16:40:18 +03:00
categories:
- linux
tags:
- vps
- Linode
- varmuuskopiot
comments: []
excerpt: Web-palvelimenani tähän asti toiminut iFuse Hostingin VPS otti ja kuoli viime viikon alussa. Tai ei kuollut, vaan tuhoutui.
---
<p>Web-palvelimenani tähän asti toiminut <a href="http://ifusehosting.com/home">iFuse Hostingin</a> <abbr title="Virtual Private Sever">VPS</abbr> otti ja kuoli viime viikon alussa. Tai ei kuollut, vaan tuhoutui. Halpa 10 punnan kuukausihinta oli ilmeisesti kompensoitu ei-niin-ammattitaitoisella työvoimalla.</p>
<p>Virallisen selityksen mukaan serverifarmin ylläpitäjät olivat ddos-hyökkäyksen yllättäessä irrottaneet useita palvelimia sähköverkosta sammuttamatta palvelimia. Valitettavasti toimenpide aiheuttaa helposti kovalevyillä olevan datan rikkoontumisen, toisin kuin esimerkiksi verkkoyhteyden katkaiseminen. Tällä hetkellä ei ole mitään varmuutta saanko palvelimella olleita tiedostojani takaisin.</p>
<p>Katastrofaaliseksi palvelimen rikkoontumisen teki se, että suurin osa automaattisista varmuuskopioistani oli jo jonkin aikaa mennyt koneelle, jota ei ole olemassa. Olin omaa tyhmyyttäni muuttanut koneen muuhun käyttöön muistamatta, että se palveli varmuuskopiokoneena. (Opetus: varmista, että saat varoituksen jos varmuuskopiointi epäonnistuu.)</p>
<p>Tapahtuneen johdosta myös tästä blogista katosi muutama kirjoitus ja joitakin lukijoiden kommentteja. Pahoitteluni tästä.</p>
<p>Uutena palvelimena toimii nyt <a href="http://www.linode.com/?r=a5ee99ca3460fa24e8ee172aa706b8a0f7a4e725">Linoden</a> VPS, johon saa lisäpalveluna myös automaattiset varmuuskopiot. Tämän lisäksi pitäisi tosin keksiä toimiva ratkaisu off-site -vamuuskopioiden tekemiseen. Ideoita otetaan vastaan. Linoden palvelin on Lontoossa, joten latenssit pysyvät kohtuullisina. Tähän mennessä palvelu on tuntunut hyvältä ja luotettavalta.</p>
<p>Kantapään kautta asioiden oppiminen on tehokasta, mutta vähän liian usein se ainoa tapa oppia. Toivottavasti joku muu oppii tästä myös jotain.</p>
