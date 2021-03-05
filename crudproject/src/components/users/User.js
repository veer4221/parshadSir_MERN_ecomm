import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    Prod_name: "",
    Prod_praice: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/api/product/prod/${id}`);
    console.log("veer");
    console.log(res);
    setUser(res.data.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary m-1" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.Prod_name}</li>
        <li className="list-group-item">price: {user.Prod_praice}</li>
      </ul>
    </div>
  );
};

export default User;
