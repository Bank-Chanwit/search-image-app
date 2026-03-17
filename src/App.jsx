import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("กรุณาป้อนชื่อรูปภาพ");
    } else {
      //เรียกใช้งาน api
      console.log(word)
    }
  }
  return (
    <>
      <h1>ระบบค้นหารูปภาพ</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="ป้อนชื่อรูปภาพที่ต้องการค้นหา"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">ค้นหา</button>
      </form>
    </>
  );
}

export default App;
