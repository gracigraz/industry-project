import Carousel3 from "../../components/Carousel3/Carousel3";
import "./ComparePage3.scss";
import { useParams } from "react-router-dom";

function ComparePage3() {
  const { cruiseOne } = useParams();
  const { cruiseTwo } = useParams();

  return (
    <>
      <section className="compare-container">
        <Carousel3 cruiseOne={cruiseOne} cruiseTwo={cruiseTwo} />
      </section>
    </>
  );
}

export default ComparePage3;
