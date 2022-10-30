import axios from "axios";
import { createRef } from "react";

const PingUser = () => {
  const inputRef = createRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URI}/ping-message`, {
        message: inputRef.current.value,
      });
    } catch (error) {
      alert("Error occurred at pinging !");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Enter the message to ping.</h1>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type={"text"}
          placeholder="Enter the message to ping."
          required
        />
        <button>Ping</button>
      </form>
    </div>
  );
};

export default PingUser;
