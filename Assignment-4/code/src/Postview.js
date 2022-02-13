import React, { useEffect, useState } from "react";
import "./Postview.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const leftArrow = "<";
const rightArrow = ">";
const Postview = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="site-container">
      <header className="page-header">
        <div className="title">
          <a href="http://localhost:3000/">Insta Clone</a>
        </div>
        <div className="insta-icon">
          <a href="http://localhost:3000/">
            <i id="insta" className="fa-brands fa-instagram fa-2g"></i>
          </a>
        </div>
      </header>
      <div className="posts-container">
        {users.map((user, idx) => {
          return (
            <section className="post" key={user.id}>
              <header>
                <div className="name-loc">
                <a href={`http://localhost:3000/${user.id}`}>
                  <h3>{user.name}</h3>
                  </a>
                  <span>{user.location}</span>
                </div>
                <div className="options">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </header>
              <div className="post-img">
                <img src={user.PostImage + idx} alt="unsplash" />
              </div>
              <div className="post-interaction">
                <div className="likes">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
                <div>
                  <p id="date">{new Date(user.date).toLocaleDateString()}</p>
                </div>
              </div>
              <p id="likes-count">{user.likes} likes</p>
              <div className="post-desc">
                <p>
                  <b>{user.description}</b>
                </p>
              </div>
            </section>
          );
        })}
      </div>
      <footer>
        <a href="http://localhost:3000/">
          <i className="fa-solid fa-house"></i>
        </a>

        <a href="http://localhost:3000/">{leftArrow}</a>

        <p>1 of 1</p>

        <a href="http://localhost:3000/">{rightArrow}</a>
      </footer>
    </div>
  );
};

export default Postview;
