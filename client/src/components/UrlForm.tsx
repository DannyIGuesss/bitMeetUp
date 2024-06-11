import { useState } from "react";
import axios from "axios";

export default function UrlForm() {
  const handleSubmit = 0;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>URL</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
