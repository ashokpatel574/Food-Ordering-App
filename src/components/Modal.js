import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useData } from "../context/DataContext";

const Modal = () => {
  const [reviewData, setReviewData] = useState({ rating: "", comment: "" });

  const {
    dispatch,
    state: { user },
  } = useData();

  const reviewInputHandler = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "AddRating",
      payload: { ...reviewData, ...user },
    });
  };

  const closeModalHandler = () => {
    dispatch({
      type: "CloseModal",
    });
  };

  return (
    <section className="modal_section">
      <div className="modal_container flex-column">
        <div className="modal_container-header">
          <span className="title">Add review</span>
          <span onClick={closeModalHandler} className="closeModal">
            <HighlightOffIcon />
          </span>
        </div>
        <div className="modal_container-body">
          <form
            className="form"
            value={reviewData}
            onSubmit={formSubmitHandler}
          >
            <div>
              <label htmlFor="rating">Rating</label>
              <select
                className="rating"
                id="rating"
                name="rating"
                value={reviewData.rating}
                onChange={reviewInputHandler}
                required
              >
                <option value="" disabled>
                  Select Rating
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div className="reviewText">
              <label htmlFor="comment">Comments</label>
              <textarea
                id="comment"
                name="comment"
                className="comment"
                value={reviewData.comment}
                onChange={reviewInputHandler}
                maxLength={500}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn submitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Modal;
