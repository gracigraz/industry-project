import "./Carousel2.scss";
import checkmark from "../../assets/icons/checkmark-outline.svg";
import mark from "../../assets/icons/close-outline.svg";
import chevronForward from "../../assets/icons/chevron-forward-outline.svg";
import chevronBack from "../../assets/icons/chevron-back-outline.svg";
import cruiseList from "../../data/cruise-list.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import cruiseData from "../../data/comparison.json";

function Carousel2({ cruiseOne, cruiseTwo }) {
  cruiseOne = useParams();
  cruiseTwo = useParams();

  console.log(cruiseList[cruiseOne - 1]);

  return (
    <>
      <section>
        <figure className="carousel">
          <h1 className="carousel__title">Compare Our Ships</h1>
          <div className="carousel-card">
            <h2 className="carousel-card__subtitle">AMENITIES</h2>
            <hr className="carousel-card__divider"></hr>

            <div className="carousel-row1">
              <div className="carousel-content1">
                <h2 className="carousel-content1__title">
                  {cruiseList[cruiseOne - 1].boat_name}
                </h2>
              </div>
              <div className="carousel-content2">
                <h2 className="carousel-content2__title">Y/N</h2>
              </div>
            </div>
            <div className="carousel-content-div-box">
              <hr className="carousel-content-div-box__divider"></hr>
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Food (Included)</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Drinks (Included)</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">
                On board activities (Included)
              </h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">WIFI</h2>

              <p className="carousel-pragraph__text2">Many</p>
            </div>

            <div className="carousel-row2">
              <div className="carousel-content1">
                <h2 className="carousel-content1__title">
                  {cruiseList[cruiseTwo - 1].boat_name}
                </h2>
              </div>
            </div>
            <div className="carousel-content-div-box">
              <hr className="carousel-content-div-box__divider"></hr>
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Food (Included)</h2>

              <img
                className="carousel-paragraph__mark"
                src={mark}
                alt="X mark"
              />
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Drinks (Included)</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">
                On board activities (Included)
              </h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">WIFI</h2>

              <p className="carousel-pragraph__text2">Many</p>
            </div>
          </div>

          <button className="carousel-btn carousel-btn--left">
            <img
              className="carousel-btn__arrow"
              src={chevronBack}
              alt="check"
            />
          </button>

          <Link
            className="onboarding__link"
            to={"/compare3/" + cruiseOne + "/" + cruiseTwo}
          >
            <button className="carousel-btn carousel-btn--right">
              <img
                className="carousel-btn__arrow"
                src={chevronForward}
                alt="check"
              />
            </button>
          </Link>
        </figure>
      </section>
    </>
  );
}

export default Carousel2;
