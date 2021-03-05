import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    console.log("kesa he veer");
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:5000/api/addtocart/cartall"
    );
    console.log(result.data);
    setUser(result.data.reverse());
    console.log(users._id);
  };
  const deleteProd = async (id) => {
    await axios.delete(`http://localhost:5000/api/addtocart/cartdlt/${id}`);
    loadUsers();
  };
  //   const deleteUser = async (id) => {
  //     await axios.delete(`http://localhost:3003/users/${id}`);
  //     loadUsers();
  //   };
  return (
    <div className="container">
      <div className="py-4">
        <h1>My cart</h1>
        <Link className="btn btn-primary mb-2" to="/">
          back to Home
        </Link>
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
                <td>{user.Prod_id.Prod_name}</td>
                <td>{user.Prod_id.Prod_praice}</td>

                <td>
                  <Link
                    className="btn btn-outline-danger"
                    onClick={() => {
                      deleteProd(user._id);
                    }}
                  >
                    delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
