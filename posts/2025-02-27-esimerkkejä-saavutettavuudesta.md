---
published: true
status: publish
layout: post
title: "Esimerkkejä syötekentän saavutettavuudesta"
language: fi
date: 2025-02-27 21:28:02
date_gmt: 2025-02-27 19:28:02
excerpt: Miten saavutettavuus voidaan ottaa huomioon yksittäisen syötekentän toteutuksessa?
tags:
- saavutettavuus
- käytettävyys
#eleventyExcludeFromCollections: ['posts']
#translations:
#  en: /2025/02/27/examples-of-accessibility
---

**Verkkosivujen saavutettavuus** voi tuntua vähän hähmäiseltä käsitteeltä. Mitä kaikkea siihen kuuluu? Mitä pitää oikeasti tehdä että on saavutettava?

Kirjoitin tämän artikkelin näyttääkseni muutaman esimerkin, miten saavutettavuutta voi huomioida *yksittäisen syötekentän* suunnittelussa ja toteutuksessa. Syötekentät eli `<input>`-elementit ovat verkkolomakkeiden peruskauraa. Miten vaikeaa niistä on tehdä saavutettavia?

**Huom:** Tämä ei ole varsinaisesti opas siihen, mitä saavutettavuus ylätasolla on –
[muut](https://www.eficode.com/fi/blog/mita-eroa-saavutettavuudella-ja-inklusiivisuudella)
[tekevät](https://papunet.net/saavutettavuus/miksi-saavutettava/mita-on-saavutettavuus/)
[sen](https://www.saavutettavasti.fi/verkkosisaltojen-saavutettavuus/wcag/) paremmin.

## Nopea kertaus saavutettavuuden määritelmästä

Saavutettavuus tosi lyhyesti:
> Saavutettavuus tarkoittaa sitä, että mahdollisimman moni erilainen ihminen voi käyttää verkkosivuja ja mobiilisovelluksia mahdollisimman helposti. Saavutettavuus on ihmisten erilaisuuden ja moninaisuuden huomiointia verkkosivujen ja mobiilisovelluksien suunnittelussa ja toteutuksessa.
<br>– [saavutettavuusvaatimukset.fi](https://www.saavutettavuusvaatimukset.fi/fi/yleista-saavutettavuudesta/tietoa-saavutettavuudesta)

Saavutettavuutta lähestytään usein henkilöiden rajoitteiden kautta. Esimerkiksi värisokean ihmisen on pystyttävä erottamaan eri toimintojen tarkoitus, jolloin eroa ei voi kommunikoida pelkällä värillä. Sokean ihmisen pitää pystyä käyttämään verkkosivuja ruudunlukijalla.

Mutta rajoite voi olla myös väliaikainen ja huomattavasti yleisempi. Esimerkiksi verkkolomakkeen täyttäminen vauva sylissä, tai vaikka vain väsyneenä on vaikeampaa kuin "optimiolosuhteissa". Kaikki ihmiset hyötyvät, jos lomakkeen *kognitiivista kuormaa* pienennetään, eli suomeksi {% footnoteref "myclub" "Täytin juuri väsyneenä junnun tietoja urheiluseuran jäsenpalveluun, ja yksi kysymyksistä oli '#No.', ilman mitään muuta selitystä. Risuaita numero? En tiedä vieläkään mitä tämä tarkoittaa. Onneksi tämä ei ollut pakollinen tieto 😅" %}täyttäminen ei vaadi niin paljon ajattelua{% endfootnoteref %}.

## Taustaa

Olen töissä vakuutusyhtiössä, jota koskevat tiukennetut saavutettavuus&shy;vaatimukset. Ihmisten on pakko ostaa liikenne&shy;vakuutus ajaakseen moottori&shy;ajoneuvolla, joten vakuutusverkkokaupan pitää olla saavutettava.

Käytännössä teimme verkkopalvelumme saavutettavuuteen yhden isomman korjauskierroksen ennen vaatimusten voimaanastumista. Mutta itsekkäästi yritämme myös jatkuvasti tehdä vakuutusten ostamisesta helpompaa, koska *se lisää myyntiä*.

Tässä artikkelissa tarkastellaan POP Vakuutuksen [ajoneuvovakuutuksen ostopolulta](https://www.popvakuutus.fi/ajoneuvovakuutus/autovakuutus/laske-hinta/vaihe/perustiedot) löytyvää **{% footnoteref "hetu" "Emme käytä henkilötunnusta tässä henkilön tunnistamiseen. Tarvitsemme tiedon muutamiin ajoneuvon omistajuuteen liittyviin tarkistuksiin ja henkilön iän laskemiseen. Henkilö tunnistetaan myöhemmin vahvalla tunnistautumisella. Henkilötunnuksen käyttäminen ihmisten tunnistamiseen on oma matopurkkinsa"%}henkilötunnuksen{% endfootnoteref %} syötekenttää.** Kyseinen kenttä voi muuttua jatkossa, mutta tässä on tähän mennessä syntyneitä huomioita.

{% callout "Huom" %}Tämä ei ole esimerkki täydellisestä saavutettavuudesta tai käytettävyydestä, vaan kokoelma erilaisia saavutettavuusparannuksia.{% endcallout %}

Hypätään matkaan!

## Haluttu syötteen muoto placeholderissa

{% callout %}<ul><li>Vähennetään tarvetta ajatella mitä kenttään pitää kirjoittaa</li></ul>{% endcallout %}

<a href="/images/2025/saavutettavuus/placeholder.png">
<img src="/images/2025/saavutettavuus/placeholder.png" alt="Syötekenttä, jonka yllä kentän nimi 'Henkilötunnus'. Kentän sisällä on placeholder ppkkvv-xxxx, eli päivä päivä kuukausi kuukausi vuosi vuosi, henkilötunnuksen loppuosa." height="122" loading="lazy">
</a>

Henkilötunnus on *useimmille* tuttu konsepti, mutta joskus henkilötunnus menee sekaisin syntymäajan kanssa, tai ihmiselle ei heti muistu mieleen mistä tunnuksesta puhutaan. (Olemme törmänneet tähän ihan oikeasti!)

**Syötekentässä on muistutuksena haluttu muoto vastaukselle**, eli niin sanottu *placeholder*: ppkkvv-XXXX.

Placeholder-teksti on hieman hailakka harmaa. Luettavuuden kannalta tekstin ja taustan välinen kontrasti pitäisi olla isompi, mutta toisaalta liian tumma teksti antaa vaikutelman siitä, että kentässä on jo vastaus. Tämä voi johtaa siihen, että asiakas ei itse kirjoita vastausta, eikä siksi pääse etenemään ostossa.

## Placeholder koko ajan näkyvillä

{% callout "" %}<ul><li>Pidetään placeholder koko ajan näkyvillä, jotta sitä ei tarvitse muistaa</li></ul>{% endcallout %}

Placeholder-tekstien ongelmana on, että ne katoavat kun kenttään alkaa kirjoittamaan tekstiä. Asiakkaan pitäisi vastausta kirjoittaessaan muistaa mitä placeholderissa luki, mikä ei yleisesti ottaen ole mahdotonta, mutta voi olla haastavaa.

Tämä on meillä ratkaistu niin, että kun kenttä on kohdistettuna (focus), siirtyy kentän placeholder kentän nimen perään. Tällä tavalla haluttu muoto säilyy näkyvillä koko ajan, **eikä sitä tarvitse muistaa**:

<figure>
  <a href="/images/2025/saavutettavuus/placeholder-in-label.png">
    <img src="/images/2025/saavutettavuus/placeholder-in-label.png" alt="Sama syötekenttä kuin edellisessä kuvassa, mutta kentässä on tekstiä ja kentän placeholder on siirretty kentän otsikkoon (label). Otsikossa lukee 'Henkilötunnuksesi suluissa pee pee koo koo vee vee viiva x x x x'" height="123" loading="lazy">
  </a>
  <figcaption>Haluttu syötteen muoto siirtyy kentän nimen perään kentän ollessa kohdistettu</figcaption>
</figure>

## Kohdistuksen näyttäminen

{% callout "" %}<ul><li>Näytetään mikä kenttä on kohdistettuna – helpottaa näppäimistökäyttöä ja näkörajoitteisten lomakkeen täyttöä</li></ul>{% endcallout %}

<figure>
  <a href="/images/2025/saavutettavuus/keyboard-focus.png">
    <img src="/images/2025/saavutettavuus/keyboard-focus.png" alt="Henkilötunnuskenttä, jonka ympärillä on paksuhko keltainen ääriviiva" height="127" loading="lazy" />
  </a>
  <figcaption>Kohdistin kentän sisällä. Kohdistin on siirretty kenttään tab-näppäimellä.</figcaption>
</figure>

Lomaketta täyttäessä on tärkeä tietää mihin kenttään on kirjoittamassa tekstiä.
Ohut tekstikohdistin voi olla vaikea huomata (varsinkin näkö&shy;rajoiteisella) tai huomion herpaantuessa. Selain näyttää kohdistetun kentän ympärillä oletus&shy;arvoisesti sinisen ääriviivan, mikä toimi huonosti meidän sinisen taustavärin kanssa.

Päädyimme designerin kanssa käyttämään keltaista ääriviivaa. **Ääriviiva on paksumpi jos kenttään siirtyy näppäimistöllä.** Tässä oli ajatuksena, että klikatessaan kenttää hiirellä asiakas on paremmin tietoinen missä kohdistin menee. 

Pelkällä näppäimistöllä navigoidessa on lähtökohtaisesti vaikeampi seurata mihin kohdistin seuraavaksi hyppää. Paksu ääriviiva näyttää selvästi missä kohdistin on. (Paksumpi ääriviiva oli ehkä designerin mielestä liikaa käytettäväksi koko ajan ja sen takia vain näppäimistökäytössä? – en muista.)

Myös kaikki ohjetekstit ovat avattavissa näppäimistöllä:

<figure>
  <a href="/images/2025/saavutettavuus/keyboard-focus-2.png">
    <img src="/images/2025/saavutettavuus/keyboard-focus-2.png" alt="Kentän yläpuolella oleva kysymysmerkki kohdistettuna, paksu keltainen ääriviiva ikonin ympärillä" width="394" height="228" loading="lazy" />
  </a>
  <figcaption>Ohjetekstin näyttävä kysymysmerkki kohdistettuna näppäimistöllä</figcaption>
</figure>

## Virhetilanteet

{% callout "" %}<ul><li>Näytetään virheet selkeästi ja yritetään ohjata virheen korjaamiseen</li></ul>{% endcallout %}

Asiakkaan antaessa virheellisen syötteen näytetään kentän ympärillä punainen ääriviiva ja kentän alapuolella virheviesti. Virhe näytetään vasta kun kohdistin siirretään pois kentästä, jotta asiakas voi rauhassa muokata henkilötunnusta ilman virheen välkkymistä.

<figure>
  <a href="/images/2025/saavutettavuus/error-generic.png">
    <img src="/images/2025/saavutettavuus/error-generic.png" alt="Henkilötunnuskenttä jonka ympärillä on punainen ääriviiva. Kentän alapuolella on virheviesti 'Tarkista henkilötunnuksesi'" width="686" height="190" loading="lazy" />
  </a>
  <figcaption>Virheellinen vastaus</figcaption>
</figure>

Virheviestistä on yritetty tehdä tarpeeksi näkyvä, jotta asiakas huomaisi virhetilanteen. Mobiililaitteilla selain vierittää automaattisesti ensimmäiseen virheelliseen kenttään, jos asiakas yrittää jatkaa ostossa eteenpäin virheellisin tiedoin.

Virheviestissä lukee aina mistä tiedosta on kyse eikä esimerkiksi "Tarkista tieto". Jos mahdollista, yritetään käyttää tarkkaa virheilmoitusta, esimerkiksi alaikäiselle vakuutuksenottajalle kerrotaan tarkemmin miksi annettu henkilötunnus ei kelpaa:

<figure>
  <a href="/images/2025/saavutettavuus/error-age.png">
    <img src="/images/2025/saavutettavuus/error-age.png" alt="Henkilötunnuskenttä jossa on oikeanmuotoinen henkilötunnus. Kentän alapuolella on virheviesti 'Vakuutuksenottajan oltava täysi-ikäinen'" width="686" height="188" loading="lazy" />
  </a>
  <figcaption>Alaikäinen vakuutuksenottaja saa oman virheviestin</figcaption>
</figure>

Virheviestejä voisi meilläkin vielä parantaa, esimerkiksi henkilö&shy;tunnuksen tapauksessa voisi kertoa onko virhe henkilö&shy;tunnuksen päivämäärässä vai loppuosassa.

{% callout %}Useamman eri virheviestin tuki voi vaatia eri virheiden asettamista tärkeysjärjestykseen. Jos kentässä voi olla samaan aikaan monta virhettä, tulisi asiakkaan nähdä hyödyllisin virheilmoitus.{% endcallout %}

## Ruudunlukijavastine placeholderille

{% callout "" %}<ul><li>Haluttu syötteen muoto pitää toimia myös ruudunlukijalla</li></ul>{% endcallout %}

*Ruudunlukijavastineella* tarkoitetaan [ruudunlukijan](https://fi.wikipedia.org/wiki/Ruudunlukuohjelma) lukemaa käyttöliittymätekstiä. Tietyissä tilanteissa pelkkä ruudulla näkyvä teksti ei auta ruudunlukijan lukemana, vaan ruudunlukijalle pitää välittää ruudulla näkyvä *informaatio* eri tavalla.

Esimerkiksi ruudulla voi nähdä helposti, että tietyt napit muodostavat nappiryhmän, mutta ruudunlukijalle suhde pitää kuvailla kertomalla mihin asiaan tietty nappi liittyy.

{% callout "Huom" %}Joku voi miettiä miksi näkövammainen olisi ostamassa liikenne&shy;vakuutusta. Teoriassa henkilön näkökyky voi olla sellainen, että ajoneuvon kuljettaminen on sallittua, vaikka näytön lukeminen on vaikeaa. Mutta toinen, usein toistuva skenaario on vanhempi, joka hoitaa lapsensa vakuutusasioita.{% endcallout %}

Henkilötunnuskentän placeholderin tapauksessa pelkät kirjaimet ppkkvv... eivät kuulosta järkevältä ruudunlukijan lukemana. Siksi ruudunlukijalle välitetään syötteen muoto auki kirjoitettuna:

<figure>
  <a href="/images/2025/saavutettavuus/screen-reader-placeholder.png">
    <img src="/images/2025/saavutettavuus/screen-reader-placeholder.png" alt="Henkilötunnuskentän otsikossa olevan placeholderin ruudunlukijavastine (aria-label): kirjaimet p, p, k, k... on kirjoitettu aria-labeliin auki muodossa 'päivä päivä kuukausi kuukausi vuosi vuosi viiva, henkilötunnuksen loppuosa.'" width="686" height="154" loading="lazy" />
  </a>
  <figcaption>ppkkvv merkitys välitettynä ruudunlukijalle</figcaption>
</figure>

## Virheviestien välittäminen ruudunlukijalle

{% callout "" %}<ul><li>Ruudunlukijan pitää pystyä lukemaan virheviestit</li></ul>{% endcallout %}

Ruudunlukijaa käyttävän asiakkaan on yhtä lailla saatava tietää, jos jonkun kentän sisältö on virheellinen. Myös ruudulla näkyvä virheviesti pitää kertoa ruudunlukijalle. Näihin on muutamia tapoja, mutta nyt mennään hieman teknisiin yksityiskohtiin.

Syötekenttä itsessään pitää merkitä koodissa virheelliseksi. Tämä tapahtuu kentän `invalid` ja `aria-invalid` -attribuuteilla:

<pre><code>&lt;input invalid="true" aria-invalid="true" aria-describedby="root_ssn-error"&gt;</code></pre>

Lisäksi kentässä on viittaus virheviestiin (`aria-describedby="root_ssn-error"`). Tämä kertoo ruudunlukijalle, että kentän kuvaus löytyy elementistä `<li id="root_ssn-error">`, jolloin ruudunlukija lukee sieltä löytyvän virheviestin.

Lisäksi itse virheviesti luodaan elementin sisälle, jolla on `aria-live`-attribuutti. Tämä itsessään vinkkaa ruudunlukijan lukemaan virheviestin heti kun se ilmestyy ruudulle. (Tämä tosin toimii hieman vaihtelevasti eri ruudunlukuohjelmistoilla.)

<figure>
  <a href="/images/2025/saavutettavuus/screen-reader-error.png">
  <img src="/images/2025/saavutettavuus/screen-reader-error.png" alt="Virheviestielementin lähdekoodi. Virheviesti on div-elementin sisällä, jolla on aria-live ja aria-relevan -attribuutit. Lisäksi virheviestin id-attribuutti on 'root_ssn-error', mikä oli sidottu syötekentän 'described by' -attribuuttiin." width="686" height="270" loading="lazy">
  </a>
  <figcaption>Virheviesti `aria-live` elementin sisällä</figcaption>
</figure>

Näillä keinoin ruudunlukija lukee virheviestin heti kun se ilmestyy, ja joka kerta kun asiakas siirtyy virheelliseen syötekenttään.

## Sekalaiset

Näiden mainittujen juttujen lisäksi on olemassa yleisempiä saavutettavuus&shy;korjauksia, mitkä koskevat kaikkia kenttiä. Esimerkiksi tekstin värin pitää erottua taustasta, ja tekstien pitäisi olla luettavissa jos asiakas suurentaa tekstikokoa huomattavasti. Lomakkeen on oltava käytettävissä pelkällä näppäimistöllä, jne.

Lopuksi vielä humio, että osa tässä nostetuista esimerkeistä koskee vain nykyisin suosittuja "Single Page Application"-tyylisiä sivuja, joilla lomakkeen validointi tehdään ilman sivunlatausta. Selaimet osaavat aika hyvin itsekin hoitaa esimerkiksi virhetilanteiden esille nostamisen, mutta osan näistä joutuu tekemään itse saavutettavaksi, kun lomaketta validoidaan lennossa.

Toivottavasti nämä esimerkit auttavat hahmottamaan miten saavutettavuutta voi parantaa!