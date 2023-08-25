import "./NotFound.scss";

function NotFound() {
  return (
    <>
      <main className="not-found">
        <h1 className="not-found__error">404</h1>
        <p className="not-found__message">
          Can't find what you're looking for, sorry!
        </p>
      </main>
    </>
  );
}

export default NotFound;
