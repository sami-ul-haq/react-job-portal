import HomeCards from "../componenets/HomeCards";
import Hero from "../componenets/Hero";
import JobListings from "../componenets/JobListings";
import ViewAllJobs from "../componenets/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
