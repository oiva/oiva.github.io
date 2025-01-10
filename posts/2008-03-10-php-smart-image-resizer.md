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
date: 2008-03-10 01:04:30 +02:00
date_gmt: 2008-03-09 23:04:30 +02:00
tags:
- PHP
old_tags:
- PHP
- smart image resizer
- kuvat
- resize
comments:
- id: 70
  author: Temposaur
  author_email: temposaur@gmail.com
  author_url: http://www.terolepisto.net
  date: 2008-07-24 14:02:38 +03:00
  date_gmt: 2008-07-24 11:02:38 +03:00
  content: "Sori et kommentoin vanhahkoa blogimerkintää, mutta phpThumb
    ajaisi saman asian ja käyttää ImageMagickiä jos palvelimelta
    sellainen löytyy:\r\nhttp://phpthumb.sourceforge.net/"
- id: 71
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://oivaeskola.fi
  date: 2008-07-25 00:09:58 +03:00
  date_gmt: 2008-07-24 21:09:58 +03:00
  content: Kiitos vinkistä. Smart image resizerin kanssa olikin vähän
    ongelmia, kun se käyttää jotain GD:n ominaisuutta, jota ei ole
    defaulttina käännetty mukaan. Käytännössä yksi funktio
    piti toteuttaa PHP:n puolella -> ensimmäisellä kerralla resize on todella
    todella hidas, sen jälkeen cachetettu versio tulee nopeasti :)
---
<p><a href="http://shiftingpixel.com/2008/03/03/smart-image-resizer/">Shiftingpixel.com: smart image resizer.</a> PHP-skripti, joka osaa muokata JPEG, GIF ja PNG -kuvien kokoa, sekä terävöittää ja kropata kuvia. Osaa ilmeisesti myös cachettaa tuloksensa. Keksin tälle ainakin muutaman käyttötarkoituksen heti, pitää siis kokeilla.</p>
<p>Onko olemassa muita vastaavia palikoita? Tarvitsen suurin piirtein juuri nuo edellä mainitut ominaisuudet.</p>
