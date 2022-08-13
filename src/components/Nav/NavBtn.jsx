import "./navBtn.scss";

export default function NavBtn(props) {
  let page = props.page;
  let setPage = props.setPage;

  console.log(page);

  return (
    <div className="btn-wrapper">
      <div className="header">
        <h1>FITCHYFLICKER</h1>
      </div>
      <div className="nav-btn">
        {page > 1 ? (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev Page
          </button>
        ) : (
          ""
        )}
        <h3>{page}</h3>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
