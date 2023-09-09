import React, { useState } from "react";
import { contextStore } from "./Contextstore";

const ContextProvider = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openModal = () => {
    handleShow();
  };
  return (
    <contextStore.Provider
      value={{
        show: show,
        handleShow: handleShow,
        handleClose: handleClose,
        openModal: openModal,
      }}
    >
      {props.children}
    </contextStore.Provider>
  );
};

export default ContextProvider;
