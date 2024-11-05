import React, { useState, useEffect } from "react";

function HitungMundur() {
  // State untuk menyimpan angka hitungan mundur
  const [hitung, setHitung] = useState(10);

  useEffect(() => {
    // Menginisiasi interval
    const interval = setInterval(() => {
      setHitung((prevHitung) => {
        // Jika hitungan mencapai 0, hentikan interval
        if (prevHitung <= 1) {
          clearInterval(interval);
          return 0; // Set hitungan menjadi 0
        }
        return prevHitung - 1; // Kurangi hitungan
      });
    }, 1000); // Set interval setiap 1 detik

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []); // Hanya jalankan sekali saat komponen pertama kali dimuat

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{hitung}</h1>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: "48px",
    color: "#333",
  },
};

export default HitungMundur;
