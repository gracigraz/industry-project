import Carousel2 from "../../components/Carousel2/Carousel2";
import "./ComparePage2.scss";
import { useParams } from "react-router-dom";

function ComparePage2() {
  const { cruiseOne } = useParams();
  const { cruiseTwo } = useParams();

  return (
    <>
      <section className="compare-container">
        <Carousel2 cruiseOne={cruiseOne} cruiseTwo={cruiseTwo} />
      </section>
    </>
  );
}

export default ComparePage2;
