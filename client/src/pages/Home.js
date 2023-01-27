import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>


      <div className="jumbotron">
        <h1>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">More Power To You</h1>
        <p class="lead text-muted">Admin have rights to see all registered user information and delete and update them accordingly in case of any mistake by students. They can add list all event members with their postion of responsibility.</p>
        <p>
        <a className="btn btn-info" href="/create" role="button">
          Add Members
        </a>
        </p>
      </div>
    </div>
  </section>
       
      </div>
    </>
  );
};

export default Home;
