import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    console.log("kesa he veer");
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/product/list");
    console.log(result.data.data);
    setUser(result.data.data.reverse());
    console.log(users._id);
  };
  const addTocart = async (id) => {
    await axios.post(`http://localhost:5000/api/addtocart/cart/${id}`);
    alert("user added ");
    loadUsers();
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Products</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Prod_name}</td>
                <td>{user.Prod_praice}</td>

                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/users/${user._id}`}
                  >
                    Views
                  </Link>
                  <Link
                    className="btn btn-outline-danger mr-2"
                    onClick={() => {
                      addTocart(user._id);
                    }}
                  >
                    AddToCart
                  </Link>

                  {/* <Link
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    delete
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
