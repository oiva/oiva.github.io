---
layout: post
status: publish
published: true
title: "InfoToggle"
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
date: 2019-10-21 19:20:00 +02:00
date_gmt: 2019-10-21 17:20:00 +0000
tags: 
- infotoggle
- web-kehitys
- web-palvelut
- työ
- internet
old_tags: []
excerpt: "I'm creating a SaaS called InfoToggle"
---

I've been building a product for displaying announcements and alert messages on
ecommerce websites, called [InfoToggle](https://infotoggle.com). It started out
as a side project and has now grown to a point where it might actually be
useful to others as well.

The problem InfoToggle solves is pretty simple and is something we see in my
current work at [POP Vakuutus](https://www.popvakuutus.fi) quite often. We sell
insurance but a successful sale depends on multiple external systems, for
example the national vehicle database Trafi, a credit check service, and 
customer authentication, a service provided by banks. Any of these systems
might and do break from time to time. Especially Trafi has a notoriously bad
uptime record and often does unscheduled service breaks they only announce
afterwards. During an outage we might not be able to sell a single vehicle
insurance but such is life.

If any of these services breaks there's not much we can do but wait. One thing
we _can_ do is communicate the disruption and its extent to our customers. Due
to the ecommerce aspect it has to be done in a way that doesn't scare away
customers not affected by the disruption. If a disruption prevents customers
from buying a car insurance, it's best to only inform customers about to buy
car insurance and preferably ask them to try again later.

Here's where InfoToggle comes in: it lets site owners create messages for
situations like these and easily \*toggle\* them on. For service
breaks known in advance a message can be timed to be visible the duration of
the break. 

Of course the messages added to your site can be whatever: announcements,
discount codes... InfoToggle lets you add any HTML, CSS, and JS code you need
to your site. But I feel it's useful to frame it around situations where you
quickly need to communicate things to your customers. Once an initial set of
messages have been defined they can easily be duplicated and modified.

Not every site needs a system like this--a good CMS will let you do all of
this. What I'm willing to bet is that there are a lot of ecommerce sites that
don't have a good CMS :)

## Side hustle

InfoToggle started as and still is a side project. One motivator was to try out
new tech (which I will expand on later) and have fun coding challenges.

It also provides a chance to practice many non-technical skills like product
development and marketing.

Of course being limited to a couple of hours after work and on weekends means
any progress is a bit slow but the development combined to trying to sell a
product gives great focus. There are countless things you could do but you have
to choose the single most important feature (or bug) and get it done.
I think it's also great for learning new things.

## Going Forward

InfoToggle is now at a point where technically it works and it's in production
use. There are a ton of features and improvements still to do but I also need
to focus on marketing and selling hard. All in all it's still super early and
we'll see how it goes. I'll keep you posted :)

