---
layout: post
status: published
published: true
title: Most Popular Black Ops II Multiplayer Maps
date: '2015-08-18 15:53:00 +0300'
date_gmt: '2015-08-18 12:53:00 +0000'
categories: [] 
tags:
- games
- multiplayer
- Black Ops II
---
<img src="/images/2015/nuketown.jpg" alt="Nuketown" width="686" />

[Call of Duty: Black Ops II](https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_II)
is a 2012 first-person shooter game for the previous generation consoles
(PS3, Xbox 360, Wii U). While the game is a bit old, its multiplayer mode is
still insanely popular.

Most of the multiplayer action happens in Team Deathmatch which is a
fast-paced, two team *run-shoot-die* game mode.

And I have been playing that <span style="text-decoration: underline">a lot</span>
lately (under my secret alias *Oivaraattori*).

### Picking a map

A key part of the team deathmatch is voting for the next map to be played.
In Black Ops II there are
[15 standard maps](http://callofduty.wikia.com/wiki/Category:Call_of_Duty:_Black_Ops_II_Multiplayer_Maps)
to choose from.

Each player can either vote a new map chosen randomly by the game,
the previous map, or a random map which is revealed when voting ends.

<p><img src="/images/2015/blackops2.png" alt="Black Ops 2 map voting" width="343" height="260" /></p>

If a map has been played two times in a row it cannot be voted again and only
available options are the new map suggested by the game or a random map.

After playing a while you start to see which of the 15 maps usually win the
vote. Players seem to be surprisingly unanimous about the ranking
of the maps.

I decided to find out if certain maps really are more likely to win, and which
of the maps are most popular.

### The Data

I collected data by observing map voting until the maps had completed a
double round-robin tournament: each map faced all other maps twice in a vote.

In practice I didn't get 100% coverage of all the possible map pairs. Some maps
just don't come up often enough in voting and waiting for those pairs to play
out would have taken a very long time.

In the end I observed 193 map pairs out of the 256 possible (75% coverage).
This gave enough data to see which maps tend to win, but certain groups of maps
might have had different order with more data.

### Ranking

<style>
table#ranking {
  margin-bottom: 1em;
}
table#ranking tbody th {
  font-weight: 400;
}
table#ranking span {
  display: block;
  padding: 2px 5px 2px 10px;
}
table#ranking tr.best td span {
  background: #BBD22F;
}
table#ranking tr.good td span {
  background: #7D8A2E;
}
table#ranking tr.random span {
  background: #10222B;
  color: white;
}
table#ranking tr.ok td span {
  background: #C9D787;
}
table#ranking tr.okish td span {
  background: #FFC0A9;
}
table#ranking tr.bad td span {
  background: #FF8598;
}
table#ranking tr.worse td span {
  background: #D06C7B;
}
</style>
<table id="ranking">
  <thead>
    <tr>
      <th>Map</th>
      <th>Winning percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr class="best">
      <th>Nuketown</th>
      <td><span style="width: 200px">100%</span></td>
    </tr>
    <tr class="good">
      <th>Hijacked</th>
      <td><span style="width: 162px">82.1%</span></td>
    </tr>
    <tr class="good">
      <th>Standoff</th>
      <td><span style="width: 155px">77.8%</span></td>
    </tr>
    <tr class="good">
      <th>Raid</th>
      <td><span style="width: 150px">75%</span></td>
    </tr>
    <tr class="random">
      <th><span>Random</span></th>
      <td><span style="width: 133px">66.7%</span></td>
    </tr>
    <tr class="ok">
      <th>Express</th>
      <td><span style="width: 92px">46.2%</span></td>
    </tr>
    <tr class="ok">
      <th>Yemen</th>
      <td><span style="width: 80px">40%</span></td>
    </tr>
    <tr class="okish">
      <th>Carrier</th>
      <td><span style="width: 56px">28%</span></td>
    </tr>
    <tr class="okish">
      <th>Turbine</th>
      <td><span style="width: 45px">22.7%</span></td>
    </tr>
    <tr class="okish">
      <th>Meltdown</th>
      <td><span style="width: 44px">22.2%</span></td>
    </tr>
    <tr class="bad">
      <th>Plaza</th>
      <td><span style="width: 38px">19%</span></td>
    </tr>
    <tr class="bad">
      <th>Slums</th>
      <td><span style="width: 36px">18.2%</span></td>
    </tr>
    <tr class="bad">
      <th>Drone</th>
      <td><span style="width: 30px">15%</span></td>
    </tr>
    <tr class="bad">
      <th>Overflow</th>
      <td><span style="width: 30px">15%</span></td>
    </tr>
    <tr class="worse">
      <th>Cargo</th>
      <td><span style="width: 10px">5.3%</span></td>
    </tr>
    <tr class="worst">
      <th>Aftermath</th>
      <td>0%</td>
    </tr>
  </tbody>
</table>

So, there you have it. *Nuketown 2025* was the clear winner. The map never loses
a vote. On the other end of the spectrum *Aftermath* was a clear loser, never
winning a vote against any of the other maps.

The random line is interesting. If given an option below the random line people
are more likely to vote for random in order to possibly get one of the four
"good" maps above it. The maps above the line nearly always beat random in a
vote. **If players were given a free choice they would probably just play the
top-4 maps**.

As mentioned before, some maps were really close and could easily have changed
order given slightly different votes or more data. *Carrier* / *Turbine* /
*Meltdown* were always close, as were *Plaza* / *Slums* / *Drone* /
*Overflow*. Of the top maps *Hijacked*, *Standoff*, and *Raid* were almost
equally as good.

Personally I feel the results are OK. *Nuketown* **is** a really fun map with
many ways to play it and limited sniper action. And I dislike *Drone*
because it's mostly a sniper map with some anemic close combat action
but apparently it has some fans.

I'm sure Treyarch would have a lot more data about this but I haven't come
across any official rankings. If some previous work exists or you have better
data hit me up on [Twitter](https://twitter.com/oiva)!