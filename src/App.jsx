import React, { useState } from "react";
import { Container, Mode } from "./App.js";

const AppComponent = () => {
  const [rang, setRang] = useState("");

  const Color =
    rang.toLowerCase() === "qizil"
      ? "red"
      : rang.toLowerCase() === "yashil"
      ? "green"
      : rang.toLowerCase() === "ko'k"
      ? "blue"
      : "black";

  const matn =
    rang.toLowerCase() === "qizil"
      ? "Bu rang qizil"
      : rang.toLowerCase() === "yashil"
      ? "Bu rang yashil"
      : rang.toLowerCase() === "ko'k"
      ? "Bu rang ko‘k"
      : "Bunday rang yo‘q";

  const [key, setKey] = useState("");

  const [click, setClick] = useState(0);

  function handleKeyDown(e) {
    setKey(e.key);
  }

  function Input({ value, onChange }) {
    return <input type="text" value={value} onChange={onChange} />;
  }

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [darkmode, setDarkmode] = useState(false);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        background: darkmode
          ? "linear-gradient(135deg, #000f15 0%, #1b0801 50%, #012231 100%)"
          : "linear-gradient(135deg, #dce8aa 0%, #80dada 50%, #7adb5c 100%)",
        color: darkmode ? "#F7F7FB" : "#2B2B2B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "0.1s",
      }}
    >
      <Mode>
        <button
          onClick={() => setDarkmode(!darkmode)}
          style={{
            backgroundColor: darkmode ? "#F7F7FB" : "#2B2B2B",
            color: darkmode ? "#2B2B2B" : "#F7F7FB",
            border: "none",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {darkmode ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
        </button>
      </Mode>
      <div
        style={{
          textAlign: "center",
          backgroundColor: Color,
          width: "600px",
          height: "100px",
        }}
      >
        <input
          type="text"
          placeholder="Rangni yozing (qizil, yashil, ko'k)"
          onChange={(e) => setRang(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <h2>{matn}</h2>
      </div>

      <input
        type="text"
        onKeyDown={handleKeyDown}
        style={{ marginTop: "20px" }}
      />
      <p>Pressed :{key}</p>

      <p>Count : {click}</p>

      <button
        onClick={() => setClick(click + 1)}
        onDoubleClick={() => setClick(click + 10)}
      >
        Press
      </button>
      <br />
      <br />

      <Input value={a} onChange={(e) => setA(e.target.value)} />
      <span>
        <select>
          <option>Select</option>
          <option>**</option>
        </select>
      </span>
      <Input value={b} onChange={(e) => setB(e.target.value)} />
      <p>Result: {Number(a) * Number(b)}</p>
      <p></p>
    </Container>
  );
};

export default AppComponent;
