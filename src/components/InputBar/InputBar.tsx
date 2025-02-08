import React from "react";
import { Send } from "react-feather";
import { useChatContext } from "../../context/Appcontext";
import styles from "./InputBar.module.css";

const InputBar = () => {
  const { messageText, setMessageText, handleSubmission } = useChatContext();

  return (
    <div className={styles.footer}>
      <textarea
        placeholder="Type here..."
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}  
        onKeyUp={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmission();
          }
        }}
      />
      <div className={styles.btn} onClick={handleSubmission}>
        <div className={styles.icon}>
          <Send />
        </div>
      </div>
    </div>
  );
};

export default InputBar;
