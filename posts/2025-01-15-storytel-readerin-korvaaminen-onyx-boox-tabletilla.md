---
layout: post
status: publish
published: true
title: "Storytel Readerin korvaaminen Onyx Boox tabletilla"
language: fi
author:
  display_name: Oiva Eskola
  login: oiva
  email: oiva.eskola@gmail.com
date: 2025-01-27 12:21:00 +02:00
date_gmt: 2025-01-27 10:21:00 +00:00
tags:
  - e-kirjat
excerpt: "Storytel-lukulaitteen valmistus on lopetettu, mutta sen voi korvata Onyx Boox-tabletilla"
---

<img src="/images/2025/IMG_1677.webp" alt="Vasemmalla rikkinäinen Storytel Reader, oikealla Onyx Boox Go -lukulaite" width="686" />

Perheessämme oli Storytelin lukulaite ([Storytel Reader](https://www.storytel.com/fi/c/reader)), kunnes siitä hajosi näyttö. Lukulaitteiden näytöt ovat aika herkkiä.

'Reader' oli kelpo <abbr title='"sähköpaperinäyttö"'>E ink</abbr> -lukulaite, jolla pystyi lukemaan ja kuuntelemaan Storytelin tilaukseen kuuluvaa kirjavalikoimaa.

Valitettavasti Storytel oli sillä välin lopettanut laitteen valmistuksen, joten uutta ei pystynyt hankkimaan. Storytel kertoo [laitteen valmistuksen lopettamisesta](https://support.storytel.com/hc/fi/articles/13875414424732-Miksi-Storytel-Readerin-valmistus-lopetetaan):

> Strategisesta näkökulmasta katsoen olemme ohjelmistoyhtiö. Näin ollen emme jatka laitevalmistajana.

Tämä kuulostaa vähän kehnolta selitykseltä, koska Storytel ei (tietenkään) itse valmistanut lukulaitettaan.

[Reader oli luultavasti](https://github.com/ntherning/StorytelReaderMods?tab=readme-ov-file#versions) E ink -laitevalmistaja Onyxin ns. _whitelabel_-malli, Android-laite, jossa ajettiin pelkästään Storytelin omaa applikaatiota.

Uskon kyllä, että laitteen myymisestä kuluttajille ja takuuvaihdoista yms. aiheutuu yritykselle vaivaa. Ehkä ohjelmiston kehittäminen vanhaan Android-laitteeseen oli myös hankalaa. Mutta toisaalta Reader toimi sellaisenaan riittävän hyvin.

Readerille on myös edelleen kysyntää: tori.fi:ssä on koko ajan useita ilmoituksia, joissa halutaan ostaa Storytel Reader. Myynti-ilmoituksia ei tällä hetkellä ole yhtään.

## Storytelin käyttäminen Onyx Go -lukulaitteella

Tutkimme olisiko markkinoilla muita lukulaitteita, joilla voisi lukea Storytelin e-kirjoja.

Storytel itse [väittää](https://support.storytel.com/hc/fi/articles/13875414424732-Miksi-Storytel-Readerin-valmistus-lopetetaan), että Storytel (applikaatio) ei toimi muilla lukulaitteilla:

> **Voinko käyttää jotain muita lukulaitteita Storytel e-kirjojen lukemiseen? (Kindle, Onyx jne.)**
>
> Et, mutta voit lukea e-kirjoja lataamalla Storytel-sovelluksen älylaitteisiin, kuten älypuhelimiin ja tabletteihin, joissa on vähintään Android&nbsp;5- tai iOS&nbsp;15 -käyttöjärjestelmä.

Ilmeni, että tämä on tavallaan virheellistä tietoa. Nyt mennään määritelmäkysymyksiin, mutta esimerkiksi hankkimamme [Onyx Boox Go Color](https://shop.boox.com/products/gocolor7) on "Android-tabletti", mutta se on _myös_ "lukulaite", koska siinä on E&nbsp;ink -näyttö.

Boox Go -tabletissa on Google Play -sovelluskauppa ja [Storytelin applikaatio on tarjolla Play -kaupassa](https://play.google.com/store/apps/details?id=grit.storytel.app&hl=fi&pli=1).

Storytelin asentaminen ei siis vaadi muuta kikkailua tai hakkerointia kuin kirjautumisen Google-tunnuksilla ja sovelluksen lataamisen kaupasta lukulaitteeseen.

Saman pitäisi onnistua myös Onyx Boox Page -tabletilla{% footnoteref "android-versions", "Onyx Boox Go:ssa on Android 15 ja Boox Page:ssa Android 11 -käyttöjärjestelmä. Storytel vaatii Android 5:n." %}{% endfootnoteref %}, mutta tätä en ole kokeillut.

## Mikä toimii hyvin?

- Tärkein ensin: Boox Go Coloriin asennettu Storytel -applikaatio pystyy samaan kuin Storytel Reader: lukemaan e-kirjoja ja kuuntelemaan äänikirjoja (tosin vain langattomilla bt-kuulokkeilla.)

- Play-kaupasta saa asennettua muitakin sovelluksia, esimerkiksi Amazon Kindlen, Nextoryn, tai Bookbeatin. Boox-tabletti toimii siis edelleen lukulaitteena vaikka Storytel-tilauksen lopettaisi.

- Taustavalon kirkkautta ja väriä pystyy säätämään helposti

- Boox Go Colorissa on nimensä mukaisesti värinäyttö, mistä voi olla iloa kuvien kanssa. Värit ovat kyllä hieman hailakat.

## Mikä ei toimi hyvin?

- Boox-tabletissa on sivunvaihto&shy;napit, mutta nämä eivät toimi Storytel-applikaatiossa. Toisissa applikaatioissa (esim. Kindle) sama ongelma on kierretty niin, että sivunvaihto&shy;napit voi vaihtaa toimimaan äänen&shy;voimakkuuden säätiminä. Applikaatio osaa sitten tulkita äänenvoimakkuuden muuttumisen sivunvaihdoksi. Storytelin applikaatioon ei ole toteutettu samaa ominaisuutta.

  En ole tutkinut saisiko ongelman nappien kanssa kierrettyä jotenkin muuten, mutta sivun vaihtaminen toimii myös näytöstä tökkäämällä.

- Play-kaupan Storytel-sovellus ei ole ihan yksi yhteen sama kuin Readerissä ollut sovellus. Sovellus ei ole varsinaisesti suunniteltu E&nbsp;ink -näytöille, vaan "tavallisille" tableteille. Esimerkiksi Storytelin etusivulla pyörii animaatioita, jotka eivät oikein toimi E&nbsp;ink -näytöllä.

- Näyttö on tarkka, mutta oletusasetuksilla Storytel-sovelluksen teksti näyttää minun silmään hieman suttuiselta. Tähän vaikuttaa useampi eri asetus tabletin "E-ink Centerissä", muun muassa applikaatiokohtainen näytön tarkkuus, jolla saa skaalattua koko applikaatiota isommaksi tai pienemmäksi.

  Parhaan lopputuloksen saa vain kokeilemalla eri asetuksia. Meillä on käytössä ainakin "High Contrast" ja "DPI Setting 350".

## Miksi Onyx Boox Go on niin kallis?

Maksoimme joulukuussa [Onyx Boox Go Color 7"](https://www.proshop.fi/E-kirjan-lukulaite/Onyx-Boox-Go-Color-7-Black/3284873):sta 249&nbsp;€ mikä tuntui paljolta. Tällä hetkellä (1/2025) [hinta](https://hinta.fi/4940152/onyx-boox-go-color-7) näyttää olevan jo 349&nbsp;€ 😵. En olisi välttämättä maksanut laitteesta ihan näin paljon.

Mustavalkoista Boox Page -mallia saa [noin 280&nbsp;€:lla](https://hinta.fi/4312543/onyx-boox-page).

Storytelin Readeriä taas myytiin aikoinaan 120&nbsp;€:lla, välillä alennuksessa&nbsp;59&nbsp;€.

Vanhan Readerin valmistuskustannukset olivat luultavasti halvemmat, mutta Storytel pystyi myös myymään laitetta halvemmalla, koska laitetta ei voinut käyttää ilman tilausta, josta Storytel sai joka kuukausi rahaa.

Samaten Amazon ~~voi~~ voisi myydä Kindlejä halvemmalla, koska Amazon saa Kindlellä ostetuista kirjoista rahaa.

Onyx taas ei saa Boox-tabletin ostajalta nyhdettyä enempää, minkä vuoksi ostohinta on kalliimpi.