import "./CruiseList.scss";
import cocoCay from "../../assets/images/coco-cay.jpg";
import cruiseList from "../../data/cruise-list.json";
import { Link } from "react-router-dom";

function CruiseList() {
  return (
    <div className="cruise-list">
      <h1 className="cruise-list__h1">Cruise List</h1>
      {cruiseList.map((selectedCruise) => {
        return (
          <Link
            className="cruise-list__link"
            to={"/cruise-details/" + selectedCruise.id}
          >
            <section key={selectedCruise.id} className="cruise-list__section">
              <div className="cruise-list__top-container">
                <img
                  className="cruise-list__cruise-photo"
                  src={cocoCay}
                  alt="test"
                />
              </div>
              <div className="cruise-list__bottom-container">
                <h3 className="cruise-list__h3">
                  <span className="cruise-list__bold">Boat name:</span>{" "}
                  {selectedCruise.boat_name}
                </h3>
                <h3 className="cruise-list__h3">
                  <span className="cruise-list__bold">
                    Kids & family friendly:
                  </span>{" "}
                  {selectedCruise.family_friendly}
                </h3>
                <h3 className="cruise-list__h3">
                  <span className="cruise-list__bold">Next departure:</span>{" "}
                  {selectedCruise.next_departure}
                </h3>
                <h3 className="cruise-list__h3">
                  <span className="cruise-list__bold">Port:</span>{" "}
                  {selectedCruise.port}
                </h3>
              </div>
            </section>
          </Link>
        );
      })}
    </div>
  );
}

export default CruiseList;
