import { useState } from "react";

export default function RSVPForm() {
  const [form, setForm] = useState({
    full_name: "",
    attending: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.full_name || !form.attending) {
      setError("Please fill in your name and attendance! 🐾");
      return;
    }
    setLoading(true);
    if (error) {
      setError("Something went wrong 😢 Please try again!");
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <div style={{ fontSize: 48 }}>🐾</div>
        <h2
          style={{
            fontFamily: "'Playpen Sans', cursive",
            color: "var(--blue)",
            margin: "12px 0 8px",
          }}
        >
          Yay! You're In!
        </h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Jacob can't wait to see you.
          <br />
          Gus and Umi are already wagging their tails! 💛
        </p>
      </div>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {error && <p style={{ color: "var(--red)", fontSize: 13 }}>{error}</p>}
      <div>
        <div className="field-label">Your Full Name</div>
        <input
          type="text"
          placeholder="e.g. Maria Santos"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
        />
      </div>
      <div>
        <div className="field-label">Will You Attend?</div>
        <select
          value={form.attending}
          onChange={(e) => setForm({ ...form, attending: e.target.value })}
        >
          <option value="">Choose one...</option>
          <option value="yes">Yes, I'll Be There! 🎉</option>
          <option value="no">Sorry, Can't Make It 😢</option>
        </select>
      </div>
      <div>
        <div className="field-label">Number Of Guests</div>
        <input
          type="number"
          min="1"
          max="20"
          placeholder="Including yourself"
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
        />
      </div>
      <div>
        <div className="field-label">Message For Jacob 💛</div>
        <textarea
          placeholder="Write something special for him..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Sending... 🐾" : "Send My RSVP 🐾"}
      </button>
    </div>
  );
}
