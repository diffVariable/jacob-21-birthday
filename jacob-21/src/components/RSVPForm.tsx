import { useState } from "react";
import styles from "./styles/RSVPForm.module.css";

interface IFormState {
  full_name: string;
  attending: string;
  guests: string;
  paw_patrol_character: string;
  message: string;
}

const INITIAL_FORM: IFormState = {
  full_name: "",
  attending: "",
  guests: "",
  paw_patrol_character: "",
  message: "",
};

export default function RSVPForm() {
  const [form, setForm] = useState<IFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update =
    (field: keyof IFormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (error) setError("");
    };

  const handleSubmit = async () => {
    if (!form.full_name.trim()) {
      setError("Please enter your full name!");
      return;
    }
    if (!form.attending) {
      setError("Please let us know if you can attend!");
      return;
    }

    setLoading(true);
    setError("");

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted && form.attending === "yes") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h2 className={styles.successTitle}>Yay! You're In!</h2>
        <p className={styles.successSub}>Jacob can't wait to see you.</p>
      </div>
    );
  } else if (submitted && form.attending === "no") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>😢</div>
        <h2 className={styles.successTitle}>Sorry to Hear That!</h2>
        <p className={styles.successSub}>Jacob will miss you!</p>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.field}>
        <div className="field-label">Your Full Name</div>
        <input
          type="text"
          placeholder="e.g. Gustavo Castillo"
          value={form.full_name}
          onChange={update("full_name")}
        />
      </div>

      <div className={styles.field}>
        <div className="field-label">Will You Attend?</div>
        <select value={form.attending} onChange={update("attending")}>
          <option value="">Choose one...</option>
          <option value="yes">Yes, I'll Be There! 🎉</option>
          <option value="no">Sorry, Can't Make It 😢</option>
        </select>
      </div>

      <div className={styles.field}>
        <div className="field-label">Number Of Guests</div>
        <input
          type="number"
          min="1"
          max="20"
          placeholder="Including yourself"
          value={form.guests}
          onChange={update("guests")}
        />
      </div>

      <div className={styles.field}>
        <div className="field-label">Your Favorite Paw Patrol Character 🐾</div>
        <select
          value={form.paw_patrol_character}
          onChange={update("paw_patrol_character")}
        >
          <option value="">Pick a character...</option>
          <option value="Chase">Chase 🐕</option>
          <option value="Marshall">Marshall 🔴</option>
          <option value="Skye">Skye 🩷 (Jacob's Favorite)</option>
          <option value="Rubble">Rubble 🟡</option>
          <option value="Rocky">Rocky ♻️</option>
          <option value="Zuma">Zuma 🟠</option>
          <option value="Everest">Everest ❄️ (Jacob's 2nd Favorite)</option>
          <option value="Tracker">Tracker 🟢</option>
          <option value="Tuck">Tuck 💜</option>
          <option value="Ella">Ella 💜</option>
          <option value="Liberty">Liberty 🗽</option>
        </select>
      </div>

      <div className={styles.field}>
        <div className="field-label">Message For Jacob 💛</div>
        <textarea
          placeholder="Write something special for him..."
          value={form.message}
          onChange={update("message")}
        />
      </div>

      <button
        className={styles.submitBtn}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending... " : "Send My RSVP"}
      </button>
    </div>
  );
}
