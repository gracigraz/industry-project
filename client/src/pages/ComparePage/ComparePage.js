import Carousel from "../../components/Carousel/Carousel";
import "./ComparePage.scss";
import { useParams } from "react-router-dom";

function ComparePage() {
  const { cruiseOne } = useParams();
  const { cruiseTwo } = useParams();

  return (
    <>
      <section className="compare-container">
        <Carousel cruiseOne={cruiseOne} cruiseTwo={cruiseTwo} />
      </section>
    </>
  );
}

export default ComparePage;
