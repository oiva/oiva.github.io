import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="page-content">
        <Alert preview={preview} />
        <div className="wrapper">
          <main className="home">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
