function CheckOut() {
  return (
    <div>
      <h1>check out</h1>
      <div className="container">
        <div className="row">
            <div className="col-6">
                {order.map((item) => {
                    <div><h3>order.name</h3>                    
                    </div>
                    
                })}
            </div>
            <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
