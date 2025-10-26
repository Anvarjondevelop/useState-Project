import React, { useState } from "react";
import { Container, Mode, TodoList } from "./App.js";

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

  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);

  function handleClick() {
    if (text.trim() !== "") setAdd([...add, text]);
    setText("");
  }

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        background: darkmode
          ? "linear-gradient(135deg, #063345 0%, #381103 50%, #032737 100%)"
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
          <option>*</option>
        </select>
      </span>
      <Input value={b} onChange={(e) => setB(e.target.value)} />
      <p>Result: {Number(a) * Number(b)}</p>

      <TodoList>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          Todo List
        </h1>
        <input
          type="text"
          value={text}
          placeholder="Todo list"
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            border: "2px solid #22e510",
            borderRadius: "10px",
            outline: "none",
            marginRight: "10px",
            transition: "0.3s",
            backgroundColor: hoverIndex !== null ? "#f9fff9" : "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            width: "250px",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        />
        <button
          onClick={handleClick}
          style={{
            backgroundColor: darkmode ? "black" : "green",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            padding: "10px 20px",
            fontSize: "16px",
            marginLeft: "10px",
          }}
        >
          Add
        </button>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {add.map((text, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "250px",
                background: "#fff3",
                marginTop: "5px",
                padding: "8px 12px",
                borderRadius: "10px",
              }}
            >
              {text}
              <button
                onClick={() => setAdd(add.filter((_, i) => i !== index))}
                style={{
                  backgroundColor: hoverIndex === index ? "red" : "#233c7e",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  padding: "4px 8px",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                🗑️.
              </button>
            </li>
          ))}
          {add.length > 0 && (
            <button
              onClick={() => setAdd([])}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                padding: "8px 18px",
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              Delete All 🗑️
            </button>
          )}
        </ul>
      </TodoList>
    </Container>
  );
};

export default AppComponent;
