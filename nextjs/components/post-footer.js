import React from 'react'
export default function PostFooter({ slug, title, lang }) {
  const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=https://oivaeskola.fi/${slug}`

  if (lang == 'fi') {
    return (
      <>
        <section className="feedback">
          <h2>Kysymyksiä tai kommentoitavaa?</h2>
          <p>
            Lähetä viesti <a href="https://twitter.com/oiva">Twitterissä</a> tai{' '}
            <a href="mailto:oiva.eskola@gmail.com">sähköpostilla</a>.
          </p>

          <a className="twitter-share" href={shareURL}>
            Jaa tämä sivu Twitterissä
          </a>
        </section>
      </>
    )
  }
  return (
    <>
      <section className="feedback">
        <h2>Questions or feedback?</h2>
        <p>
          Send a message on <a href="https://twitter.com/oiva">Twitter</a> or{' '}
          <a href="mailto:oiva.eskola@gmail.com">email me</a>.
        </p>

        <a className="twitter-share" href={shareURL}>
          Share this post on Twitter
        </a>
      </section>
    </>
  )
}
