"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:3001/");

export default function Home() {
  useEffect(() => {
    //   fetch("http://localhost:3001/one", {
    //     // fetch("https://rickandmortyapi.com/api", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: "pedrito_id",
    //       message: "oye apurate, siempre llegas tarde crj",
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then((r) => console.log(r));
    // fetch("http://localhost:3002/rubros")
    //   .then((r) => r.json())
    //   .then((r) => console.log(r));
    // console.log("hoy");
    socket.on("hello", (arg) => {
      console.log(arg);
    });
    socket.emit("howdy", "stranger");
  }, []);

  return <div>Hey</div>;
}
