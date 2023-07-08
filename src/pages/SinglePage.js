import React from "react";
import { useParams, useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import StarIcon from "@mui/icons-material/Star";

const SinglePage = () => {
  const { restId } = useParams();
  const navigate = useNavigate();
  const {
    state: { restaurantsData },
    dispatch,
  } = useData();

  const restaurantDetails = restaurantsData.find(
    (restItem) => restItem.id === Number(restId)
  );

  const reviewHandler = () => {
    dispatch({
      type: "OpenModal",
    });
  };

  if (restaurantDetails) {
    const { name, address, menu, averageRating, ratings } = restaurantDetails;
    const menuList = menu.map((item) => item.name).join();

    return (
      <section className="rest_details_container">
        <div className="partOne">
          <button onClick={() => navigate(`/`)} className="btn">
            Back
          </button>
        </div>
        <div className="partTwo">
          <div className="rest_wrapper-header">
            <div className="wrapper_header">
              <h3>{name}</h3>
              <p>{menuList}</p>
              <p>{address}</p>
              <p>Average rating: {averageRating}</p>
            </div>
            <div>
              <button className="btn AddreviewBtn" onClick={reviewHandler}>
                Add Review
              </button>
            </div>
          </div>
          <div className="rest_wrapper-review-header">
            <h3>Reviews</h3>
            <ul>
              {ratings.length > 0 &&
                ratings.map((ratgItem) => (
                  <li key={ratgItem.revName}>
                    <div className="review-details">
                      <p>
                        <span className="avatarImg">
                          <img
                            src={ratgItem.pp}
                            alt={ratgItem.revName}
                            className="imgCover"
                          />
                        </span>
                        <span className="name">{ratgItem.revName}</span>
                      </p>
                      <p>{ratgItem.comment}</p>
                    </div>
                    <div>
                      {ratgItem.rating} <StarIcon />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    );
  } else {
    return <h3>No restaurants found!</h3>;
  }
};

export default SinglePage;
