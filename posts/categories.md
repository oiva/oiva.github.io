---
pagination:
  data: collections
  size: 1
  alias: category
permalink: "/archive/{{ category | replace: 'ä','a' | replace: 'ö','o' }}/"
eleventyComputed:
  title: "Blog Archive: {% categoryName category %}"
status: publish
includeheader: false
published: true
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
  url: ''
author_login: oiva
author_email: oiva.eskola@gmail.com
date: 2013-05-29 23:23:35 +03:00
date_gmt: 2013-05-29 21:23:35 +03:00
tags: []
old_tags: []
comments: []
eleventyExcludeFromCollections: true
layout: archive
---