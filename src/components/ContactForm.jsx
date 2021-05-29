import React, { useState } from "react";
import { sendMessage } from "../services/ContactService";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [userEmail, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingProgress, setSendingProgress] = useState(false);

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function messageChange(e) {
    setMessage(e.target.value);
  }

  function loadAppear() {
    if (sendingProgress) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }

  async function send() {
    setSendingProgress(true);
    let resp = await sendMessage(message);
    if (resp === true) {
      toast.success("Message Sent", { position: "top-right" });
    } else {
      toast.error("Message did not send", { position: "top-right" });
    }
    setEmail("");
    setMessage("");
    setSendingProgress(false);
  }

  let spinnerAppear = loadAppear();

  return (
    <div className="container">
      <div className="">
        <div id="ContactForm">
          <form>
            <div className="form-group">
              <label for="contactEmail">
                <strong>Contact Email: </strong>
              </label>
              <input
                id="contactEmail"
                className="form-control"
                type="email"
                placeholder="something@gmail.com"
                onChange={(e) => emailChange(e)}
                value={userEmail}
                disabled={sendingProgress}
              />
            </div>
            <div className="form-group">
              <label for="contactMessage">
                <strong>Message:</strong>
              </label>
              <textarea
                className="form-control"
                rows="4"
                onChange={(e) => messageChange(e)}
                value={message}
                disabled={sendingProgress}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={send}
              disabled={sendingProgress}
            >
              Send
            </button>
            {spinnerAppear}
          </form>
        </div>
      </div>
    </div>
  );
}
