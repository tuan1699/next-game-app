import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CouterSlice from "../store/Counter.slice";
import { counterSelector } from "../store/Counter.slice";

const Contact = () => {
  const distpatch = useDispatch();
  const counter = useSelector(counterSelector);

  return (
    <div className="container">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="counter">
        <button onClick={() => distpatch(CouterSlice.actions.decrement())}>
          -
        </button>
        <button>{counter}</button>
        <button onClick={() => distpatch(CouterSlice.actions.increment())}>
          +
        </button>
      </div>
    </div>
  );
};

export default Contact;
