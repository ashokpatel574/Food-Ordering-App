import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import PageNotFound from "./pages/PageNotFound";

import Modal from "./components/Modal";
import { useData } from "./context/DataContext";

const App = () => {
  const {
    state: { isModalOpen },
    dispatch,
  } = useData();

  const closeModalOverlayHandler = (e) => {
    if (
      e.target.className === "modal_overlay" ||
      e.target.className === "modal_section"
    ) {
      dispatch({
        type: "CloseModal",
      });
    }
  };

  return (
    <main className="main  flex-column">
      <h2>Food Ordering App</h2>
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/restaurant/:restId" element=<SinglePage /> />
        <Route path="*" element=<PageNotFound /> />
      </Routes>

      {isModalOpen && (
        <div className="modal_overlay" onClick={closeModalOverlayHandler}>
          <Modal />
        </div>
      )}
    </main>
  );
};

export default App;
