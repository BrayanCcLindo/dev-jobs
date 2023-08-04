import { createContext, useState } from "react";
import "../App.css";
import Header from "../header";
import CardsLayout from "../components/cardslayout";
import { useGetJobsData } from "../fetch/useFetch";
import Loader from "../fetch/loader";
import Error from "../fetch/error";
import SectionWrapper, { ButtonWrapper } from "../components/sectionWrapper";
import CardComponent from "../components/card-component";
import { formatDistance } from "date-fns";

export const AppContext = createContext(null);
function Home() {
  const { data, isLoading, isSuccess, isError } = useGetJobsData();
  const [searchValue, setSearchValue] = useState("");
  const [filterJobs, setFilterJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        data,
        setFilterJobs,
        selectedOption,
        setSelectedOption,
      }}
    >
      <Header />
      <SectionWrapper>
        {isLoading && <Loader />}
        {isError && <Error />}

        <CardsLayout>
          {isSuccess &&
            filterJobs.length === 0 &&
            data.map((jobData) => {
              const date = jobData.date;
              const dateResut = formatDistance(new Date(date), new Date(), {
                addSuffix: true,
              });
              return (
                <CardComponent
                  key={jobData.id}
                  logo={
                    jobData.logo ||
                    "https://remoteok.com/assets/img/jobs/da63ff9881a0e6511517eb270be2dec11688265992.png"
                  }
                  position={jobData.position}
                  location={jobData.location || "Peru - Lima"}
                  slug={jobData.slug}
                  business={jobData.company}
                  tags={jobData.tags[jobData.tags.length - 1] || "Meteor JS"}
                  date={dateResut}
                />
              );
            })}
          {isSuccess &&
            filterJobs.map((jobData) => {
              const date = jobData.date;
              const dateResut = formatDistance(new Date(date), new Date(), {
                addSuffix: true,
              });
              return (
                <CardComponent
                  key={jobData.id}
                  logo={
                    jobData.logo ||
                    "https://remoteok.com/assets/img/jobs/da63ff9881a0e6511517eb270be2dec11688265992.png"
                  }
                  position={jobData.position}
                  location={jobData.location || "Peru - Lima"}
                  slug={jobData.slug}
                  business={jobData.company}
                  tags={jobData.tags[jobData.tags.length - 1] || "Meteor JS"}
                  date={dateResut}
                />
              );
            })}
        </CardsLayout>

        <ButtonWrapper />
      </SectionWrapper>
    </AppContext.Provider>
  );
}
export default Home;
