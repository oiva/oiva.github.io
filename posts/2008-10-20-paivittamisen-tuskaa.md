---
layout: post
status: publish
published: true
title: Päivittämisen tuskaa
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Ubuntua ei uskalla vieläkään suositella Pertti Peruskäyttäjälle. Ainakaan
  jos näytönohjaimen ajurien asennus ei onnistu "nappia painamalla", ja jos kone voi
  käynnistämisen jälkeen vain ilmoitaa, että "kotihakemistoa ei löydy".
wordpress_id: 286
wordpress_url: http://www.bobs.fi/oiva/?p=286
date: 2008-10-20 20:45:14 +03:00
date_gmt: 2008-10-20 17:45:14 +03:00
tags:
- käytettävyys
- linux
old_tags:
- ubuntu
- nvidia
- linux
comments: []
---
<p>Nurkassa hyrräävä Ubuntu-serveri oli kaatunut perjantain aikana, ja käynnistämisen yhteydessä se otti käyttöön uuden kernelin, jonka olin vahingossa päivittänyt aikoja sitten. Seurauksena Nvidian näytönohjain ei enää suostunut toimimaan vanhoilla asetuksilla.</p>
<p>Päivitin samalla Ubuntun uusimpaan 8.04-versioon, jossa luvattiin olevan graafisia työkaluja näytön asetuksien muuttamiseen. Ei ollut, paitsi sellainen jolla saa valita käyttääkö 800x600 vai 640x480 resoluutiota. Lopun viikonloppua vietinkin asentamalla Nvidian ajureita Ubuntuun, mikä <em>ei tietenkään</em> onnistunut, sillä olin unohtanut poistaa vanhan ajurin ennen Ubuntun päivitystä.</p>
<p>Ubuntussa on kokonaista kolme eri tapaa asentaa Nvidian ajurit, joista hankalin käsiasennus toimi lopulta. Bootin jälkeen myös kovalevyt olivat mountattuna vääriin paikkoihin, mistä seurasi ylimääräistä konffaamista.</p>
<p>Koko hommasta jäi sellainen kutina, ettei Ubuntua uskalla vieläkään suositella Pertti Peruskäyttäjälle. Ainakaan jos näytönohjaimen ajurien asennus ei onnistu "nappia painamalla", ja jos kone voi käynnistämisen jälkeen vain ilmoitaa, että "kotihakemistoa ei löydy".</p>
<p>Sitten lupaan suositella, jos onnistun asentamaan tai päivittämään Ubuntun ilman, että kosken xorg.conf -tiedostoon ;)</p>
