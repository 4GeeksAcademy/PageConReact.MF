import Card from "./Card";

function CardList() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3 mb-4">
          <Card />
        </div>
        <div className="col-md-3 mb-4">
          <Card />
        </div>
        <div className="col-md-3 mb-4">
          <Card />
        </div>
        <div className="col-md-3 mb-4">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default CardList;
