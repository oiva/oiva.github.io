---
layout: post
status: publish
published: true
title: Kuukausien listaaminen PHP:ss&auml;
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
wordpress_id: 19
wordpress_url: http://www.bobs.fi/oiva/2008/01/29/kuukausien-listaaminen-phpssa/
date: '2008-01-29 11:07:18 +0200'
date_gmt: '2008-01-29 09:07:18 +0200'
categories:
- PHP
tags:
- PHP
comments: []
---
<p>Note to self-osastoa: Miten listataan kuukausien nimet suomeksi PHP:ss&auml;.</p>
<pre><code>setlocale(LC_ALL, 'fi_FI');</p>
<p>for ($i=1; $i<=12; $i++)<br />
    echo strftime('%B', mktime(0, 0, 0, $i, 1, 0));</code></pre><br />
<a href="http://fi2.php.net/strftime">strftime-referenssi</a></p>
