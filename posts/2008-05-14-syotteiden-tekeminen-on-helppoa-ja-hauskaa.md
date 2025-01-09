---
layout: post
status: publish
published: true
title: Syötteiden tekeminen on helppoa ja hauskaa
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: RSS-syötteen voi tehdä yksinkertaisella PHP-skriptillä, kunhan muistaa pari
  pientä kikkaa.
wordpress_id: 90
wordpress_url: http://www.bobs.fi/oiva/?p=90
date: 2008-05-14 12:34:57 +03:00
date_gmt: 2008-05-14 09:34:57 +03:00
tags:
- web-kehitys
- PHP
old_tags:
- PHP
- HTML
- rss
- syöte
- cdata
- xhtml
comments:
- id: 79
  author: Uuden .fi-domainin varaaminen ja sivuston siirtäminen &#8212; Oivallisia
    juttuja
  author_email: ''
  author_url: http://oivaeskola.fi/2008/08/12/uuden-fi-domainin-varaaminen-ja-sivuston-siirtaminen/
  date: 2008-08-12 22:26:17 +03:00
  date_gmt: 2008-08-12 19:26:17 +03:00
  content: "[...] varaaminen ja sivuston siirtäminen sujui hyvin, lukuun ottamatta
    sivustolla ollutta RSS-syötettä. Syötteen yksittäisten artikkelien
    tunnisteina oli käytetty kunkin artikkelin alkuperäisen [...]"
---
<p>Tein <a href="http://www.paulaminni.fi/" title="Käsintehtyjä koruja">Paulan korusivuille</a> <a href="http://www.jorkki.com/artikkelit/mika_rss_opas_aloittelijoille.php">RSS-syötteen</a> uusista koruista. Syöte on tässä tapauksessa yksinkertainen PHP-skripti, joka hakee kannasta uusimmat korut ja liittää mukaan tarvittavat metatiedot.</p>
<p>Toteutuksessa oli hyötyä seuraavista linkeistä:<br />
<a href="http://cyber.law.harvard.edu/rss/rss.html">RSS 2.0 spesifikaatio</a><br />
<a href="http://feedvalidator.org/">Feed Validator</a><br />
<a href="http://en.wikipedia.org/wiki/RSS_(file_format)">RSS Wikipediassa</a><br />
<a id="more"></a><a id="more-90"></a></p>
<p>Lopullinen syötte näyttää jotakuinkin tältä (vähän karsittuna):</p>
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Paulan korut</title>
  <link>http://www.paulaminni.fi</link>
  <language>fi</language>
  <lastBuildDate>Sat, 03 May 2008 21:11:18 +03:00</lastBuildDate>
  <item>
    <title>3.5.2008</title>
    <link>http://www.paulaminni.fi/korut/80</link>
    <guid>http://www.paulaminni.fi/korut/80</guid>
    <author>[sähköpostiosoite] (Paula Minni)</author>
    <description>
    <![CDATA[
        <img src="http://www.paulaminni.fi/kategoriat/Kaulakorut/_DSC0190.jpg" alt="" />
    ]]>
    </description>
  </item>
  <atom:link href="http://www.paulaminni.fi/feed.php" rel="self" type="application/rss+xml" />
</channel>
</rss>
```

<p>Syötteen päivittymisajankohtana voidaan käyttää uusimman korun julkaisuajankohtaa. Julkaisuajankohta on MySQL:n timestamp-muodossa, josta se saadaan haluttuun muotoon esimerkiksi seuraavalla koodinpätkällä:</p>
`$lastBuildDate = date("D, d M Y H:i:s O", strtotime($timestamp));`
<p>Itemien descriptioneiden sisällä voi käyttää HTML-koodia, kunhan muistaa merkitä sen <em>character dataksi</em>:</p>

```xml
<description>
<![CDATA[
    <!-- html-koodit tähän -->
]]>
</description>
```

<h3>Muuta huomionarvoista</h3>
RSS-syöte pitää tarjoilla palvelimelta <em>application/rss+xml</em> -muodossa. Helpoiten tämä onnistuu kun PHP:ssä sanoo ennen syötteen tulostamista:
`header('Content-type: application/rss+xml');`

Selaimelle voi kertoa, että sivusta löytyy myös RSS-versio lisäämällä linkin syötteeseen XHTML-tiedoston head-osioon:
`<link rel="alternate" type="application/rss+xml" href="http://www.paulaminni.fi/feed.php" title="Tilaa syöte" />`

<p>Syötteen tekeminen oli yllättävän helppoa. Skriptiä voisi vielä jatkokehittää niin, että se cachettaisi valmiin syötteen, eikä rakentaisi sitä joka kerta uudestaan tyhjästä. Nykyisillä liikennemäärillä tämä ei vielä ole ongelma.</p>
