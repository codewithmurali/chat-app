import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div class="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <span>just now</span>
      </div>
      <div class="messageContent">
        <p>Hello</p>
        <img
          src="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
