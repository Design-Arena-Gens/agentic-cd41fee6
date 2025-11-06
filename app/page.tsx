"use client";

import { useState } from "react";

const compliments = [
  "Hope your day is going great!",
  "You're doing awesome—keep it up!",
  "Good vibes coming your way.",
  "Take a deep breath, you're exactly where you need to be."
];

export default function HomePage(): JSX.Element {
  const [messageIndex, setMessageIndex] = useState(0);

  return (
    <main className="page">
      <section className="card">
        <h1 className="headline">Hi there 👋</h1>
        <p className="subtitle">{compliments[messageIndex]}</p>
        <button
          className="cta"
          type="button"
          onClick={() =>
            setMessageIndex((prev) => (prev + 1) % compliments.length)
          }
        >
          Send another smile
        </button>
      </section>
    </main>
  );
}
