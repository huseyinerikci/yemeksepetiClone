import Detail from "./Detail";
import Products from "./Products";
function Restaurant() {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <Detail />
        </div>
      </div>
      <div>
        <div className="shadow">
          <div className="container">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
