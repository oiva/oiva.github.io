---
layout: post
status: publish
published: true
title: Sy&ouml;tteiden tekeminen on helppoa ja hauskaa
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
date: '2008-05-14 12:34:57 +0300'
date_gmt: '2008-05-14 09:34:57 +0300'
categories:
- web-kehitys
- PHP
tags:
- PHP
- HTML
- rss
- sy&ouml;te
- cdata
- xhtml
comments:
- id: 79
  author: Uuden .fi-domainin varaaminen ja sivuston siirt&auml;minen &#8212; Oivallisia
    juttuja
  author_email: ''
  author_url: http://www.bobs.fi/oiva/2008/08/12/uuden-fi-domainin-varaaminen-ja-sivuston-siirtaminen/
  date: '2008-08-12 22:26:17 +0300'
  date_gmt: '2008-08-12 19:26:17 +0300'
  content: "[...] varaaminen ja sivuston siirt&auml;minen sujui hyvin, lukuun ottamatta
    sivustolla ollutta RSS-sy&ouml;tett&auml;. Sy&ouml;tteen yksitt&auml;isten artikkelien
    tunnisteina oli k&auml;ytetty kunkin artikkelin alkuper&auml;isen [...]"
---
<p>Tein <a href="http://www.paulaminni.fi/" title="K&auml;sintehtyj&auml; koruja">Paulan korusivuille</a> <a href="http://www.jorkki.com/artikkelit/mika_rss_opas_aloittelijoille.php">RSS-sy&ouml;tteen</a> uusista koruista. Sy&ouml;te on t&auml;ss&auml; tapauksessa yksinkertainen PHP-skripti, joka hakee kannasta uusimmat korut ja liitt&auml;&auml; mukaan tarvittavat metatiedot.</p>
<p>Toteutuksessa oli hy&ouml;ty&auml; seuraavista linkeist&auml;:<br />
<a href="http://cyber.law.harvard.edu/rss/rss.html">RSS 2.0 spesifikaatio</a><br />
<a href="http://feedvalidator.org/">Feed Validator</a><br />
<a href="http://en.wikipedia.org/wiki/RSS_(file_format)">RSS Wikipediassa</a><br />
<a id="more"></a><a id="more-90"></a></p>
<p>Lopullinen sy&ouml;tte n&auml;ytt&auml;&auml; jotakuinkin t&auml;lt&auml; (v&auml;h&auml;n karsittuna):</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
&lt;rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"&gt;
&lt;channel&gt;
  &lt;title&gt;Paulan korut&lt;/title&gt;
  &lt;link&gt;http://www.paulaminni.fi&lt;/link&gt;
  &lt;language&gt;fi&lt;/language&gt;
  &lt;lastBuildDate&gt;Sat, 03 May 2008 21:11:18 +0300&lt;/lastBuildDate&gt;
  &lt;item&gt;
    &lt;title&gt;3.5.2008&lt;/title&gt;
    &lt;link&gt;http://www.paulaminni.fi/korut/80&lt;/link&gt;
    &lt;guid&gt;http://www.paulaminni.fi/korut/80&lt;/guid&gt;
    &lt;author&gt;[s&auml;hk&ouml;postiosoite] (Paula Minni)&lt;/author&gt;
    &lt;description&gt;
    &lt;![CDATA[
        &lt;img src="http://www.paulaminni.fi/kategoriat/Kaulakorut/_DSC0190.jpg" alt="" /&gt;
    ]]&gt;
    &lt;/description&gt;
  &lt;/item&gt;
  &lt;atom:link href="http://www.paulaminni.fi/feed.php" rel="self" type="application/rss+xml" /&gt;
&lt;/channel&gt;
&lt;/rss&gt;</code></pre>
<p>Sy&ouml;tteen p&auml;ivittymisajankohtana voidaan k&auml;ytt&auml;&auml; uusimman korun julkaisuajankohtaa. Julkaisuajankohta on MySQL:n timestamp-muodossa, josta se saadaan haluttuun muotoon esimerkiksi seuraavalla koodinp&auml;tk&auml;ll&auml;:</p>
<pre><code>$lastBuildDate = date("D, d M Y H:i:s O", strtotime($timestamp));<br /></code></pre>
<p>Itemien descriptioneiden sis&auml;ll&auml; voi k&auml;ytt&auml;&auml; HTML-koodia, kunhan muistaa merkit&auml; sen <em>character dataksi</em>:
<pre><code>&lt;description&gt;
&lt;![CDATA[
    &lt;!-- html-koodit t&auml;h&auml;n --&gt;
]]&gt;
&lt;/description&gt;</code></pre>
<h3>Muuta huomionarvoista</h3>
RSS-sy&ouml;te pit&auml;&auml; tarjoilla palvelimelta <em>application/rss+xml</em> -muodossa. Helpoiten t&auml;m&auml; onnistuu kun PHP:ss&auml; sanoo ennen sy&ouml;tteen tulostamista:
<pre><code>header('Content-type: application/rss+xml');</code></pre>
Selaimelle voi kertoa, ett&auml; sivusta l&ouml;ytyy my&ouml;s RSS-versio lis&auml;&auml;m&auml;ll&auml; linkin sy&ouml;tteeseen XHTML-tiedoston head-osioon:
<pre><code>&lt;link rel="alternate" type="application/rss+xml" href="http://www.paulaminni.fi/feed.php" title="Tilaa sy&ouml;te" /&gt;</code></pre>
<p>Sy&ouml;tteen tekeminen oli yll&auml;tt&auml;v&auml;n helppoa. Skripti&auml; voisi viel&auml; jatkokehitt&auml;&auml; niin, ett&auml; se cachettaisi valmiin sy&ouml;tteen, eik&auml; rakentaisi sit&auml; joka kerta uudestaan tyhj&auml;st&auml;. Nykyisill&auml; liikennem&auml;&auml;rill&auml; t&auml;m&auml; ei viel&auml; ole ongelma.</p>
