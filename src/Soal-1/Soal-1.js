import React, { useState } from "react";
import "./Soal-1.css";

function DaftarTugas() {
  const [tugas, setTugas] = useState([
    { id: 1, teks: "Belajar React", selesai: false },
    { id: 2, teks: "Mengerjakan tugas UTS", selesai: false },
  ]);
  const [inputTugas, setInputTugas] = useState("");

  const tambahTugas = () => {
    if (inputTugas.trim()) {
      const tugasBaru = {
        id: tugas.length + 1,
        teks: inputTugas,
        selesai: false,
      };
      setTugas([...tugas, tugasBaru]);
      setInputTugas("");
    }
  };

  const tandaiSelesai = (id) => {
    setTugas(
      tugas.map((item) =>
        item.id === id ? { ...item, selesai: !item.selesai } : item
      )
    );
  };

  return (
    <div className="container">
      <h2 className="header">Daftar Tugas</h2>

      <div className="input-container">
        <input
          type="text"
          value={inputTugas}
          onChange={(e) => setInputTugas(e.target.value)}
          placeholder="Masukkan tugas baru"
          className="input"
        />
        <button onClick={tambahTugas} className="add-button">
          Tambahkan Tugas
        </button>
      </div>

      <ul className="list">
        {tugas.map((item) => (
          <li
            key={item.id}
            className={`list-item ${item.selesai ? "selesai" : ""}`}
          >
            {item.teks}
            <button
              onClick={() => tandaiSelesai(item.id)}
              className="done-button"
            >
              {item.selesai ? "Batal" : "Selesai"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DaftarTugas;
