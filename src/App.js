import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Brian Made this starting in Vercel. Check 'em out!</h1>
      <h2>
        Brian lives at{" "}
        <a
          href="https://IwantedBrian.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          This site!
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/BrianReisman"
          target="_blank"
          rel="noreferrer noopener"
        >
          My GitHub
        </a>{" "}
        is where you can take a look at just about anything I've made.
      </p>
    </main>
  );
}

export default App;
