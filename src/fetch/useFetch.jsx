import { useState, useEffect } from "react";
// import '../data/data.json'

export function useGetJobsData() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const isLoading = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  useEffect(() => {
    setStatus("pending");
    fetch("https://remoteok.com/api?api")
      .then((response) => response.json())
      .then((data) => {
        setData(data.splice(1));
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);
  return { data, isLoading, isSuccess, isError };
}
