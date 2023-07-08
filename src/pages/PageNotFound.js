import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const gotToHomeHandler = () => {
    navigate("/");
  };

  return (
    <article className="errorPage_container ">
      <section
        className="
         flex-column flex-center"
      >
        <div className="errorPage_Img-container">
          <img
            src="https://res.cloudinary.com/dz0snqho8/image/upload/v1688132825/PageNotFound/PageNotFound_g2leky.png"
            alt="page not found"
            width="300px"
            height="300px"
          />
        </div>
        <div className="errorPage_text-Container flex-column flex-center">
          <h3>Oops! Something went wrong.</h3>

          <button onClick={gotToHomeHandler} className="btn backHomeBtn">
            Back To Home
          </button>
        </div>
      </section>
    </article>
  );
};

export default PageNotFound;
