export default function PostFooter({ slug, title }) {
  const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=https://oivaeskola.fi/${slug}`
  return (
    <>
      <section class="feedback">
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
