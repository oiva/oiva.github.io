#!/usr/bin/python
# -*- coding: UTF-8 -*-

import codecs
from datetime import datetime
import feedparser
import sys
import re

sys.stdout = codecs.getwriter('utf-8')(sys.stdout)


def parse_books():
    # url = 'http://feeds.5by5.tv/b2w'
    filename = './b2w.xml'
    pattern = '<a .*? href="(http:\/\/www\.amazon\.com[^"]*).*?>(.*?)</a>'
    pattern2 = '<a .*? href="((?!http:\/\/www\.amazon).*?)" .*?>((?:Audio)?\
Book: .*?)</a>'
    skip = ['Health &amp; Personal Care', 'Toys &amp; Games', 'MP3 Downloads',
            'Computers &amp; Accessories', 'Musical Instruments', 'Moleskine',
            'Everything Else', 'Music', 'Electronics', 'Movies &amp; TV',
            'Sports &amp; Outdoors', 'Grocery &amp; Gourmet Food', ': Baby',
            'Amazon Instant Video', 'Kitchen &amp; Dining', 'Floor Lamp',
            'Wishlist', 'The Aviator', 'Home Improvement', 'Video Games',
            'Fingernail Clipper', 'Edimax N150 Wireless', 'Automotive',
            'ASUS Dual-Band Wireless', 'Camera &amp; Photo', 'Beauty',
            'Office Products', 'Crafts & Sewing', 'Patio, Lawn &amp; Garden',
            'Home &amp; Kitchen', 'Brass No Soliciting Sign', 'Light Bulb',
            'Ultra Pro Resealable Current Size Comic Bags', 'Model Rocket Kit',
            'Arts, Crafts &amp; Sewing']
    regex = re.compile(pattern, re.IGNORECASE)
    regex2 = re.compile(pattern2, re.IGNORECASE)
    books = []

    feed = feedparser.parse(filename)

    for episode in feed.entries:
        links = regex.findall(episode.content[0].value)
        non_amazon = regex2.findall(episode.content[0].value)
        links += non_amazon

        for link in links:
            # skip items that are not really books
            is_book = True
            for category in skip:
                if category in link[1]:
                    is_book = False
            if not is_book:
                continue

            # include episode info
            link += (episode.link, episode.title)

            # no duplicates
            if link not in books:
                books.append(link)
    return books


def produce_list(books):
    filename = './index.tmpl'
    filtered = [';Book: ', 'BOOK: ', ': Books', ':Books', ':Books', '[Amazon]',
                'Amazon.com: Boo', 'Amazon: ', 'Amazon.com: ', ': Amazon.com',
                ' at Amazon.com', ':Amazon', '(Amazon.com)', '(Amazon)',
                ': Explore similar items', ' - Amazon.com', 'Kindle Store',
                ' (HIGHLY recommended by Merlin)']
    comics = ['Marvel Famous Firsts', 'Marvel Now', 'Thor:', 'X-Men',
              'Hawkeye', 'American Vampire', 'The Walking Dead', 'Watchmen',
              'X-Force', 'Daredevil', 'Spider-Man', 'Scarlet', 'She-Hulk',
              'Fantastic Four', 'Wolverine', 'Fiona Staples', 'Civil War',
              'Brian Michael Bendis', 'Marvels', 'Batman', 'Deadpool',
              'Avengers', 'Animal Man', 'Transmetropolitan', 'Volume 1',
              'Y: The Last Man', 'Zita the Spacegirl', 'Invincible:',
              '5 Ronin', 'Runaways', 'The Immortal Iron Fist', 'Superman',
              'The Wonderful Wizard of Oz', 'World War Hulk',
              'Incredible Hulk', 'Infinity Gauntlet', 'Punk Rock Jesus']

    booklist = comiclist = ''
    bookcount = comiccount = authorcount = gtd = 0

    for book in books:
        (link, title, episodeLink, episodeTitle) = book

        # filter out "Amazon.com" and similar things from the title
        for word in filtered:
            title = title.replace(word, '')
        title = re.sub(r'^(Audiobook|Book):', '', title)
        title = title.replace('&#x27;', '\'')

        # one stupid link in ep 72
        if title == 'Amazon':
            title = 'The Now Habit: A Strategic Program for Overcoming\
                     Procrastination and Enjoying Guilt-Free Play: \
                     Neil Fiore'

        iscomic = False
        for comic in comics:
            if comic in title:
                iscomic = True
                break

        # try to guess author from title
        (author, title) = get_author(title)

        # parse episode number for sorting
        episode = episodeTitle[:episodeTitle.find(':')]

        row = '\t\t\t<tr>\n\t\t\t\t<td><a href="%s">%s</a></td>\n\
                    <td>%s</td>\
                    <td data-value="%s"><a href="%s">%s</a></td>\n\
                    \t\t\t</tr>\n'\
                    % (link, title, author, episode, episodeLink, episodeTitle)

        if iscomic:
            comiclist += row
            comiccount += 1
        else:
            booklist += row
            bookcount += 1
        if author != '':
            authorcount += 1
        if 'Getting Things Done' in title:
            gtd += 1

    with codecs.open(filename, 'r', 'utf-8') as template:
        html = template.read()
        html = html.replace('{tablebody}', booklist)
        html = html.replace('{bookcount}', str(bookcount))
        html = html.replace('{comicbody}', comiclist)
        html = html.replace('{comiccount}', str(comiccount))
        html = html.replace('{date}', "{:%Y-%m-%d}".format(datetime.now()))
        html = html.replace('{gtd}', str(gtd))

    if not html:
        print 'reading template from %s failed' % filename
        return

    with codecs.open(filename.replace('tmpl', 'html'), 'w', 'utf-8') as file:
        file.write(html)

    return (bookcount, comiccount, authorcount)


def get_author(title):
    # remove (9123912392925) from title
    title = re.sub(r'\(?[0-9]{6,}\)?', '', title)

    # split title into title and author. Usually separated by ':'.
    if title.count(':') == title.count(' - ') and title.count(':') > 0:
        parts = title.split(' - ')
    elif ':' in title:
        parts = title.split(':')
        # remove empty parts
        parts = filter(lambda title: title.strip(), parts)
    elif ' by ' in title:
        parts = title.split(' by ')
    else:
        parts = title.split(' - ')

    # take last part of title
    part = parts.pop()

    if len(parts) >= 1:
        # try to guess if string is either a list of authors or just part of
        # the title
        author = part.strip(': ')
        author = author.replace(' and ', ', ').replace(',,', ',')

        # remove middle name initials for easier heuristics about name
        simpleauthor = re.sub(r'\s[A-Z]\.', '', author)
        simpleauthor = simpleauthor.replace(' MSPT', '').strip()

        authorparts = len(simpleauthor.split(' '))
        commas = simpleauthor.count(',')

        # example: Andrew Hunt, David Thomas -> 4 names <= (1 comma + 1) * 2
        if authorparts > 3 and authorparts > (commas + 1) * 2 + 1:
            author = ''
        # more than three words without commas
        elif authorparts > 3 and commas == 0:
            author = ''

        if author != '':
            title = ': '.join(parts)
    else:
        author = ''

    # cleanup
    title = title.strip(' :')
    author = re.sub(r',([^\s])', r', \1', author)

    return (author, title)

books = parse_books()
count = produce_list(books)
print "found %d books and %d comics. %d authors found." % count
