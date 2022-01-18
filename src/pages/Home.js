import AptPlans from "../components/AptPlans";
import AptTypes from "../components/AptTypes";
import Hero from "../components/Hero";
import AptFeatures from "../components/AptFeatures";

function Home() {
  return (
    <div className="home-containe">
      <Hero />
      <AptTypes></AptTypes>
      <AptPlans></AptPlans>
      <AptFeatures></AptFeatures>
    </div>
  );
}

export default Home;
