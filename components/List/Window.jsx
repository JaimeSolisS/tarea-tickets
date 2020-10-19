import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const StyledButton = styled.button`
   {
    background-color: #f44336;
    padding: 14px 40px;
    color: white;
    font-size: 16px;
    border-radius: 8px;
  }
`;

Modal.setAppElement();
const Window = ({ show, onClose, task }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: "fixed",
        },
        content: {
          position: "absolute",
          top: "20%",
          left: "20%",
          right: "20%",
          bottom: "20%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div>
        <h1 style={{ flex: "1 90%" }}>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div>
        <h2>Status</h2>
        <p>{task.status}</p>
        <h2>Requester</h2>
        <p>{task.requester}</p>
        <h2>Assingee</h2>
        <p>{task.assingee}</p>
        <h2>Date</h2>
        <p>{task.date}</p>
      </div>
      <StyledButton onClick={onClose}>Close</StyledButton>
    </Modal>
  );
};

export default Window;
