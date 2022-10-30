import { cloneElement } from "react";
import openSocket from "socket.io-client";
import toast from "react-hot-toast";

const Socket = ({ children }) => {
  const socket = openSocket(process.env.REACT_APP_BASE_URI);

  socket.on("ping-message", ({ message }) => {
    toast.success(message, { position: "top-center" });
  });

  return cloneElement(children, { socket: socket });
};

export default Socket;
