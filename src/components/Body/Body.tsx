import React from "react";
import ReactMarkdown from "react-markdown";
import chatbot from "../../assets/robot.png";
import user from "../../assets/user1.png";
import styles from "./Body.module.css";
import { useChatContext } from "../../context/Appcontext";

const Body = () => {
  const { messages, processing, lastMsg } = useChatContext();

  return (
    <div className={styles.bodycontainer}>
      {messages.map((msg, index) => (
        <div
          className={`${styles.message} ${msg.from === "ai" ? styles.mLeft : styles.mRight
            }`}
          key={index}
        >
          {msg.from === "ai" ? (
            <div>
              <div className={styles.image}>
                <img src={chatbot} alt="AI" />
              </div>
            </div>
          ) : (
            ""
          )}

<p className={styles.text}><ReactMarkdown>{msg.text}</ReactMarkdown></p>
          {msg.from !== "ai" ? (
            <div>
              <div className={styles.image}>
                <img src={user} alt="user" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}

      {processing ? (
        <div className={styles.typing}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      ) : (
        ""
      )}

      <div ref={lastMsg} />
    </div>
  );
};

export default Body;
