import styled from "styled-components";
import Header from "../header";
import DetailsLayout from "./details-layout";
import DetailsContent from "./details-content";
import Footer from "./footer";
import { Link, useParams } from "react-router-dom";
import { useGetJobsData } from "../fetch/useFetch";

const DetailsStyled = styled.div``;

function Details() {
  const { data } = useGetJobsData();
  const { jobSlug } = useParams();
  const selectedJob = data.find((job) => {
    return jobSlug === job.slug
  })
  console.log(selectedJob, 'selectedJob');
  return (
    <DetailsStyled>
      <Link href="/">back</Link>
      <Header />
      <DetailsLayout  >
        <DetailsContent date={selectedJob.date || 'Hoy'} company={selectedJob.company} logo={selectedJob.logo || 'https://remoteok.com/assets/img/jobs/9b15f3762d7deb367a2dc1141b37afba1690191087.png'} position={selectedJob.position} jobLocation={selectedJob.location || 'Lima - Peru'} description={selectedJob && <div dangerouslySetInnerHTML={{ __html: selectedJob.description }} />} />
      </DetailsLayout>
      <Footer />
    </DetailsStyled>
  );
}

export default Details;
