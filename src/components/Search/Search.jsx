import { useEffect, useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import NavBtn from "../Nav/NavBtn";
import Spinner from "../Spinner/Spinner.jsx";

import "./search.scss";

export default function GetRepos() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let componentIsValid = true; // a helper variable, that will be used to validate this version of the useEffect function

    fetch(
      `https://api.github.com/search/repositories?q=react&per_page=20&page=${page}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (componentIsValid) {
          setRepos(result.items);
          setLoading(false);
        }
        console.log(result);
      });

    return () => {
      componentIsValid = false; //in case the next page button was clicked multiple times, and in order to prevent any request fetching collision we tell the cleanup function to remove any previous rendering requests coming from the component
      //prevent previous versions
    };
  }, [page]);

  return (
    <>
      <NavBtn page={page} setPage={setPage}></NavBtn>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="repos-wrapper">
            {repos.map((repo) => (
              <SearchResults key={repo.id} repo={repo}></SearchResults>
            ))}
          </div>
        </>
      )}
    </>
  );
}
