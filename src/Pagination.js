export default function Pagination({
  articlesPerPage,
  totalArticles,
  changePage
}) {
  const pageNumbers = [];

  const putOnPage = totalArticles / articlesPerPage;
  //console.log(putOnPage);
  for (let i = 1; i <= putOnPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-link"
            style={{ color: "black" }}
            onClick={() => changePage(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
