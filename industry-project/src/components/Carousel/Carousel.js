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

            <button class="btn btn--left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="btn-icon"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button class="btn btn--right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="btn-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
