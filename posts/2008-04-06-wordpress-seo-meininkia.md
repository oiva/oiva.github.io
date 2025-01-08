---
layout: post
status: publish
published: true
title: Wordpress SEO-meininkiä
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
excerpt: Suhteellisen turha PHP-skripti Wordpressiin, jolla saa kirjoituksen tagit
  näkymään HTML:n keywords-kentässä.
wordpress_id: 40
wordpress_url: http://www.bobs.fi/oiva/?p=40
date: 2008-04-06 18:01:47 +03:00
date_gmt: 2008-04-06 15:01:47 +03:00
categories:
- web-kehitys
- PHP
tags:
- PHP
- HTML
- wordpress
- seo
- keywords
- tags
comments:
- id: 38
  author: Henri
  author_email: henri@mnd.fi
  author_url: http://mnd.fi
  date: 2008-04-06 20:17:08 +03:00
  date_gmt: 2008-04-06 17:17:08 +03:00
  content: "Luin jostain että nykyiset hakukoneet (tai ainakaan Google - käyttääkö
    joku muka jotain muuta :)) eivät erityisemmin välitä noista keywordeista.
    Teinkin tuosta pikaista Googlausta ja näin se näyttäisi olevan.
    Lisää juttua löytyy vaikka täältä: <a href=\"http://en.wikipedia.org/wiki/Meta_element\"
    rel=\"nofollow\">Wikipedia - Meta element</a>.\r\n\r\nLainaus:<blockquote>37
    leaders in search engine optimization concluded in April 2007 that the relevance
    of having your keywords in the meta-attribute keywords is little to none</blockquote>"
- id: 39
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://oivaeskola.fi
  date: 2008-04-06 20:29:51 +03:00
  date_gmt: 2008-04-06 17:29:51 +03:00
  content: Dodih, hyvä tietää :)
- id: 44
  author: Wautsi!
  author_email: marko.pyhajarvi@gmail.com
  author_url: http://wautsi.com
  date: 2008-04-17 18:39:34 +03:00
  date_gmt: 2008-04-17 15:39:34 +03:00
  content: Henri on oikeassa. Google ei ota huomioon meta-tagia. Toimiva tapa optimoida
    sivua on sijoittaa hakusanafraaseja sivun otsikkoon, title-tagiin ja tekstin sekaan
    tasaisesti tiputellen, pitäen huolen että niitä ei ole joka paikassa.
    pelkkiä hakusanoja sisältävän sivun google pudottaa hakutulosten
    pohjalle. google haluaa tarjota lukijoilleen laatua ja käytettäviä
    sivustoja, joten tuollaiset "kehnot keinot" nousta hakutuloksissa ylöspäin
    tuhotaan saman tien.
---
<p>Päivitin Wordpressin versioon 2.5 ja muokkasin samalla blogin käyttämää templatea. Ideana oli lisätä kaikki yhden postin tagit sivun keywords-metatagin sisään. Eli esimerkiksi tämän sivun html:ssä lukee:</p>
<p><meta name="keywords" content="HTML, keywords, PHP, seo, tags, wordpress" /></p>
<p>En tiedä miten paljon hakukoneet katsovat sivujen avainsanoja, mutta tuskin siitä haittaakaan on.</p>
<a id="more"></a><a id="more-40"></a>
<p>Homma onnistu seuraavalla, kohtuullisen rumalla koodinpätkällä, jonka kirjoitin teeman hakemistosta löytyvään header.php:n  (tässä wp-content/themes/neoclassical/header.php)</p>
``` php
<meta name="keywords" content="<?php
    if (!is_single()) {
        foreach (get_categories() as $key=>$val) {
            echo $val->name;
            if ($key!=count(get_categories())) echo ", ";
        }
    } else {
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                foreach (get_the_tags() as $key=>$val) {
                    echo $val->name;
                    if ($val != end(get_the_tags())) {
                        echo ", ";
                    }
                }
            }
        }
    }
?>" />
```
<p>Ongelmana on vielä se, että etusivulle, arkistolle ja muille staattisille sivuille tulee samat avainsanat. Jatkokehityksessä avainsanoihin voisi lisätä myös kirjoituksen kategoriat yms.</p>
<p>Tämä ei yritä olla millään tapaa optimaalinen ratkaisu, enkä tiedä josko tähän tarkoitukseen olisi ollut joku valmis Wordpress-plugin olemassa. Kaikki Wordpressin tageihin liittyvä tieto tuntui olevan todella kiven alla, joten ei huvittanut etsiä. :)</p>
