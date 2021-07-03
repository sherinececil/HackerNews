import "./styles.css";
import React, { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import NewsArticle from "./NewsArticle";
import Pagination from "./Pagination";
import NavbarPage from "./NavbarPage";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("cryptocurrency");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=60`
      )
        .then((result) => {
          console.log(result);
          if (!result.ok) {
            throw Error("Whoops!");
          } else {
            return result.json();
          }
        })
        .then((data) => {
          console.log(data.hits);
          setArticles(data.hits);
          setIsLoading(false);
        });
    }, 3000);
  }, [query]);

  //pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  //change page
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <NavbarPage />
      <Search getQuery={(quer) => setQuery(quer)} />
      <NewsArticle isLoading={isLoading} articles={currentArticles} />
      {isLoading ? null : (
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          changePage={changePage}
        />
      )}
    </div>
  );
}
