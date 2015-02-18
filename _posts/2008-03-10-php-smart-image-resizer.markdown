---
layout: post
status: publish
published: true
title: 'PHP: Smart Image Resizer'
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: PHP-skripti, joka osaa pienentää kuvia URLissa annettavien parametrien perusteella.
wordpress_id: 32
wordpress_url: http://www.bobs.fi/oiva/2008/03/10/php-smart-image-resizer/
date: '2008-03-10 01:04:30 +0200'
date_gmt: '2008-03-09 23:04:30 +0200'
categories:
- PHP
tags:
- PHP
- smart image resizer
- kuvat
- resize
comments:
- id: 70
  author: Temposaur
  author_email: temposaur@gmail.com
  author_url: http://www.terolepisto.net
  date: '2008-07-24 14:02:38 +0300'
  date_gmt: '2008-07-24 11:02:38 +0300'
  content: "Sori et kommentoin vanhahkoa blogimerkint&auml;&auml;, mutta phpThumb
    ajaisi saman asian ja k&auml;ytt&auml;&auml; ImageMagicki&auml; jos palvelimelta
    sellainen l&ouml;ytyy:\r\nhttp://phpthumb.sourceforge.net/"
- id: 71
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://www.bobs.fi/oiva
  date: '2008-07-25 00:09:58 +0300'
  date_gmt: '2008-07-24 21:09:58 +0300'
  content: Kiitos vinkist&auml;. Smart image resizerin kanssa olikin v&auml;h&auml;n
    ongelmia, kun se k&auml;ytt&auml;&auml; jotain GD:n ominaisuutta, jota ei ole
    defaulttina k&auml;&auml;nnetty mukaan. K&auml;yt&auml;nn&ouml;ss&auml; yksi funktio
    piti toteuttaa PHP:n puolella -> ensimm&auml;isell&auml; kerralla resize on todella
    todella hidas, sen j&auml;lkeen cachetettu versio tulee nopeasti :)
---
<p><a href="http://shiftingpixel.com/2008/03/03/smart-image-resizer/">Shiftingpixel.com: smart image resizer.</a> PHP-skripti, joka osaa muokata JPEG, GIF ja PNG -kuvien kokoa, sek&auml; ter&auml;v&ouml;itt&auml;&auml; ja kropata kuvia. Osaa ilmeisesti my&ouml;s cachettaa tuloksensa. Keksin t&auml;lle ainakin muutaman k&auml;ytt&ouml;tarkoituksen heti, pit&auml;&auml; siis kokeilla.</p>
<p>Onko olemassa muita vastaavia palikoita? Tarvitsen suurin piirtein juuri nuo edell&auml; mainitut ominaisuudet.</p>
