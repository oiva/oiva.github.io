---
layout: post
status: publish
published: true
title: Wordpress SEO-meininki&auml;
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
date: '2008-04-06 18:01:47 +0300'
date_gmt: '2008-04-06 15:01:47 +0300'
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
  date: '2008-04-06 20:17:08 +0300'
  date_gmt: '2008-04-06 17:17:08 +0300'
  content: "Luin jostain ett&auml; nykyiset hakukoneet (tai ainakaan Google - k&auml;ytt&auml;&auml;k&ouml;
    joku muka jotain muuta :)) eiv&auml;t erityisemmin v&auml;lit&auml; noista keywordeista.
    Teinkin tuosta pikaista Googlausta ja n&auml;in se n&auml;ytt&auml;isi olevan.
    Lis&auml;&auml; juttua l&ouml;ytyy vaikka t&auml;&auml;lt&auml;: <a href=\"http://en.wikipedia.org/wiki/Meta_element\"
    rel=\"nofollow\">Wikipedia - Meta element</a>.\r\n\r\nLainaus:<blockquote>37
    leaders in search engine optimization concluded in April 2007 that the relevance
    of having your keywords in the meta-attribute keywords is little to none</blockquote>"
- id: 39
  author: Oiva
  author_email: oiva.eskola@gmail.com
  author_url: http://www.bobs.fi/oiva
  date: '2008-04-06 20:29:51 +0300'
  date_gmt: '2008-04-06 17:29:51 +0300'
  content: Dodih, hyv&auml; tiet&auml;&auml; :)
- id: 44
  author: Wautsi!
  author_email: marko.pyhajarvi@gmail.com
  author_url: http://wautsi.com
  date: '2008-04-17 18:39:34 +0300'
  date_gmt: '2008-04-17 15:39:34 +0300'
  content: Henri on oikeassa. Google ei ota huomioon meta-tagia. Toimiva tapa optimoida
    sivua on sijoittaa hakusanafraaseja sivun otsikkoon, title-tagiin ja tekstin sekaan
    tasaisesti tiputellen, pit&auml;en huolen ett&auml; niit&auml; ei ole joka paikassa.
    pelkki&auml; hakusanoja sis&auml;lt&auml;v&auml;n sivun google pudottaa hakutulosten
    pohjalle. google haluaa tarjota lukijoilleen laatua ja k&auml;ytett&auml;vi&auml;
    sivustoja, joten tuollaiset "kehnot keinot" nousta hakutuloksissa yl&ouml;sp&auml;in
    tuhotaan saman tien.
---
<p>P&auml;ivitin Wordpressin versioon 2.5 ja muokkasin samalla blogin k&auml;ytt&auml;m&auml;&auml; templatea. Ideana oli lis&auml;t&auml; kaikki yhden postin tagit sivun keywords-metatagin sis&auml;&auml;n. Eli esimerkiksi t&auml;m&auml;n sivun html:ss&auml; lukee:</p>
<p><meta name="keywords" content="HTML, keywords, PHP, seo, tags, wordpress" /></p>
<p>En tied&auml; miten paljon hakukoneet katsovat sivujen avainsanoja, mutta tuskin siit&auml; haittaakaan on.<br />
<a id="more"></a><a id="more-40"></a><br />
<p>Homma onnistu seuraavalla, kohtuullisen rumalla koodinp&auml;tk&auml;ll&auml;, jonka kirjoitin teeman hakemistosta l&ouml;ytyv&auml;&auml;n header.php:n  (t&auml;ss&auml; wp-content/themes/neoclassical/header.php)</p>
<pre>
<code><br />
<meta name="keywords" content="<?php<br />
    if (!is_single()) {<br />
        foreach (get_categories() as $key=>$val) {<br />
            echo $val->name;<br />
            if ($key!=count(get_categories())) echo ", ";<br />
        }<br />
    } else {<br />
        if (have_posts()) {<br />
            while (have_posts()) {<br />
                the_post();<br />
                foreach (get_the_tags() as $key=>$val) {<br />
                    echo $val->name;<br />
                    if ($val != end(get_the_tags())) {<br />
                        echo ", ";<br />
                    }<br />
                }<br />
            }<br />
        }<br />
    }<br />
?>" /><br />
</code><br />
</pre></p>
<p>Ongelmana on viel&auml; se, ett&auml; etusivulle, arkistolle ja muille staattisille sivuille tulee samat avainsanat. Jatkokehityksess&auml; avainsanoihin voisi lis&auml;t&auml; my&ouml;s kirjoituksen kategoriat yms.</p>
<p>T&auml;m&auml; ei yrit&auml; olla mill&auml;&auml;n tapaa optimaalinen ratkaisu, enk&auml; tied&auml; josko t&auml;h&auml;n tarkoitukseen olisi ollut joku valmis Wordpress-plugin olemassa. Kaikki Wordpressin tageihin liittyv&auml; tieto tuntui olevan todella kiven alla, joten ei huvittanut etsi&auml;. :)</p>
