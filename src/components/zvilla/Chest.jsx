import * as React from "react";
import { useState, useRef } from "react";
import empty from "../../assets/images/Empty.mp4";
import full from "../../assets/images/Full.mp4";

export default function Chest() {
  const videoRef = useRef(null);
  const [money, setMoney] = useState(false);

  function handlePlay() {
    videoRef.current.play();
  }
  return (
    <>
      <section className="bg-body justify-content-center align-items-center rounded-4 m-4">
        {money ? (
          <video ref={videoRef} width="320" height="240" onClick={handlePlay}>
            <source src={full} type="video/mp4" />
          </video>
        ) : (
          <video ref={videoRef} width="320" height="240" onClick={handlePlay}>
            <source src={empty} type="video/mp4" />
          </video>
        )}
        <h3 className="purple p-5 ">Available Coupon : </h3>
      </section>
    </>
  );
}
