import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({
    Prod_name: "",
    Prod_praice: "",
  });
  const { Prod_name, Prod_praice } = user;
  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/product", user);
    history.push("/");
  };
  return (
    <div>
      <h1>add Product</h1>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="product Name"
                name="Prod_name"
                value={Prod_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="Prod_praice"
                value={Prod_praice}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-primary btn-block">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
