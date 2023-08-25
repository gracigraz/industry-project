import "./Carousel.scss";
import { useState, useEffect } from "react";
import checkmark from "../../assets/icons/checkmark-outline.svg";
import mark from "../../assets/icons/close-outline.svg";
import chevronForward from "../../assets/icons/chevron-forward-outline.svg";

function Carousel() {
  const handleSwipe = () => {};
  return (
    <>
      <section>
        <figure className="carousel">
          <h1 className="carousel__title">Compare Our Ships</h1>
          <div className="carousel-card">
            <h2 className="carousel-card__subtitle">KIDS</h2>
            <hr className="carousel-card__divider"></hr>

            <div className="carousel-row1">
              <div className="carousel-content1">
                <h2 className="carousel-content1__title">
                  Independence of the Seas
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
              <h2 className="carousel-paragraph__text">
                Childcare (6-36 mths)
              </h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Childcare (6-12 yrs)</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Tweens and Teens</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Activities</h2>

              <p className="carousel-pragraph__text2">Many</p>
            </div>

            <div className="carousel-row2">
              <div className="carousel-content1">
                <h2 className="carousel-content1__title">Jewel of the Seas</h2>
              </div>
            </div>
            <div className="carousel-content-div-box">
              <hr className="carousel-content-div-box__divider"></hr>
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">
                Childcare (6-36 mths)
              </h2>

              <img
                className="carousel-paragraph__mark"
                src={mark}
                alt="X mark"
              />
            </div>

            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Childcare (6-12 yrs)</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Tweens and Teens</h2>

              <img
                className="carousel-paragraph__check"
                src={checkmark}
                alt="check"
              />
            </div>
            <div className="carousel-paragraph">
              <h2 className="carousel-paragraph__text">Activities</h2>

              <p className="carousel-pragraph__text2">Many</p>
            </div>
          </div>

          <button
            className="carousel-btn carousel-btn--right"
            onClick={handleSwipe}
          >
            <img
              className="carousel-btn__arrow"
              src={chevronForward}
              alt="check"
            />
          </button>
        </figure>
      </section>
    </>
  );
}

export default Carousel;
