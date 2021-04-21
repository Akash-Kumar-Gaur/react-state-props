import "./index.css";

// state - internal variables
// props - external variables

function HomePage(props) {
  //   console.log("props", props);
  return (
    <div className="home">
      {props.headerName}
      {props.pageNumber}
    </div>
  );
}

export default HomePage;
