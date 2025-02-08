import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import InputBar from "../../components/InputBar/InputBar";
import Body from "../../components/Body/Body";
import { ThreeCircles } from "react-loader-spinner";
import styles from "./chat.module.css";

const UserChat = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      {loading ? (
        <div className={styles.loadcontainer}>
          <ThreeCircles
            height="50"
            width="50"
            color="#046cf1"
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.header} ${styles.item}`}>
              <h2>Hey, Guest </h2>
            </div>
            <Title />
            <Body />
            <InputBar />
          </div>
        </div>
      )}
    </>
  );
};

export default UserChat;
