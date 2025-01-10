---
layout: post
status: publish
published: true
title: Kuukausien listaaminen PHP:ssä
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 19
wordpress_url: http://www.bobs.fi/oiva/2008/01/29/kuukausien-listaaminen-phpssa/
date: 2008-01-29 11:07:18 +02:00
date_gmt: 2008-01-29 09:07:18 +02:00
tags:
- PHP
old_tags:
- PHP
comments: []
---
<p>Note to self-osastoa: Miten listataan kuukausien nimet suomeksi PHP:ssä.</p>
``` php
setlocale(LC_ALL, 'fi_FI');
for ($i=1; $i<=12; $i++)
    echo strftime('%B', mktime(0, 0, 0, $i, 1, 0));
```
<p><a href="http://fi2.php.net/strftime">strftime-referenssi</a></p>
