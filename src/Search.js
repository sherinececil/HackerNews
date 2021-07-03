import Button from "react-bootstrap/Button";

export default function Search({ getQuery }) {
  const handleClick = (event) => {
    event.preventDefault();
    const text = event.target.userQuery.value;
    if (text) {
      getQuery(text);
      //console.log(text);
      event.target.userQuery.value = "";
    } else {
      alert("Somethihng went wrong");
    }
  };

  return (
    <div className="navbar navbar-light bg-light">
      <form className="form-inline" onSubmit={handleClick}>
        <input
          className="form-control mr-sm-2 mb-4"
          type="text"
          name="userQuery"
        />{" "}
        <Button variant="success" type="submit" className="mb-4">
          Search
        </Button>{" "}
      </form>
    </div>
  );
}
