import "./Carousel.scss";

function Carousel() {
  return (
    <>
      <section>
        <div className="carousel">
          <h1 className="carousel__title">Compare</h1>
          <div className="carousel-card">
            <table className="carousel-table">
              <thead>
                <tr>
                  <th>Cruises</th>
                  <th>Child Friendly</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Cruise 1</th>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>Cruise 2</th>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
