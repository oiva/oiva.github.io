---
layout: post
status: publish 
published: true
title: "Technical learnings from InfoToggle"
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
date: 2019-10-31 22:00:00 +02:00
date_gmt: 2019-10-31 20:00:00 +0000
tags: 
- infotoggle
- web-kehitys
- web-palvelut
- työ
- internet
old_tags: []
excerpt: "Technical aspects of InfoToggle"
---

I've been building a SaaS product called InfoToggle as a side project. My
[previous post](/2019/10/21/infotoggle/) has details on what it is and what it
does.

As a programmer having a side project is a good way to learn new technologies
that you might not come across in your regular job. Having a _project_ means
there's a clear problem you want to solve and you get to choose the most
suitable tools to solve it.

In the context of [InfoToggle](https://infotoggle.com) I had a chance to learn
multiple new tools, including Laravel, Docker, React Hooks, Stripe, and some
AWS features like CloudFront.

## Laravel: thumbs up

A big initial impetus for this whole project was to test out [Laravel
framework](https://laravel.com). I had heard many good things about it and
wanted to see what a _modern_ PHP framework would look like. I'e used Zend
Framework in my jobby job and it works there but it's no fun to use really.

Laravel's tagline "freeing you to create without sweating the small things"
is pretty spot on. The framework has a lot of built-in functionality and
sensible defaults for creating basic web apps. Creating new routes,
controllers, database migrations, and events is all very streamlined.

Occasionally some of the inner workings of Laravel might feel a bit too magical
which might become a problem in a bigger web app. The call stacks for some of
the errors are \*wild\* but mostly _it just works_ and it's fast enough for a
basic web app. Laravel's documentation is also pretty good, at least compared to
Zend.

## Technical Challenges with Stripe

One of the biggest hurdles was building the subscription system. Billing happens
through [Stripe](https://stripe.com) and integrating with their subscription
flow took a month and a half (not full time, but working hours here and there.)
That's a pretty big chunk of time where little progress was made.

Don't get me wrong, Stripe is probably the best payment processor there is and
others would probably have taken far longer. The problem with Stripe was mostly
that there are quite many different ways to create a sign up / subscription flow
and there is no clear path to choose the correct one.

On top of that their documentation occasionally had PSD2-related warnings "Are
you in Europe? Then you probably shouldn't be using this method but this other
one here which is in beta and doesn't have the same features."

### Stripe webhook matching

Most of Stripe's flows work by sending requests to a
[webhook](https://stripe.com/docs/webhooks) you set up. One of the biggest
source of my confusion was that there was no single way of matching an incoming
webhook event to a customer.

You can tie a "client reference ID" to Stripe's customer objects (usually the
customer's ID in your own system) but only some of the events sent back to you
include the reference. Other times you are left trying to match a subscription
ID to a ID you know or in worst case an email address. 

Some of Stripe's events include a Customer ID (in Stripe's system) and once you
can match that to a known ID you are mostly set. But for example the "customer
created", "subscription created", and "invoice created" events can arrive in any
order and each has a different set of identifiers that you must keep track of
and try to match to later requests. I still have a hundred line function whose
only job is to match an incoming Stripe event to a customer in my database.

## Docker

I've avoided Docker for a very long time, mostly because in my job I have worked
on just a single project where I had the development and production environments
set up. But at this point Docker seems to be required knowledge pretty much
everywhere so why not try it?

It seems that waiting with Docker was partly a good thing. Researching how to
configure Docker (and Docker Compose) revealed that the configuration options
and syntaxes haves changed at least a couple times. This made following
tutorials quite difficult as most of the examples didn't work anymore when run
against a recent version of Docker.

What's positive about docker is that it makes deployments easy. Replicating the
production environment is also easy although I haven't needed that apart from
adding a separate testing environment.

Docker was also the biggest source of WTFs along with Stripe. Most of this stems
from all Docker tutorials and examples being about building a _development_
environment with Docker.

Very little of that is applicable when deploying to production which was what I
tried to achieve. For example Docker volumes work completely different locally
and on a server. In the end I needed to have two separate configurations for
building the development environment and the production environment which feels
a bit silly.

Another small disadvantage with Docker is that deployments on the go over a cell
phone connection take a long time. Apparently there's quite a lot of data
transfer happening?

## React Hooks

Quick shout out to [React Hooks](https://reactjs.org/docs/hooks-intro.html):
they work, and make developing basic components that much nicer. Use them.

That's it for now! Everything sort of works and I'm pretty happy with the stack
as it is. There are also many parts that didn't get a mention, maybe more on
those next time.