import { useState } from "react";

export const Interactive = () => {
  const [name, setName] = useState<string>("");
  const [responseName, setResponseName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      setResponseName(data.name || "");
    } catch (error) {
      console.error("Failed to fetch name:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border"
      />
      <button
        className="max-w-20 rounded-md text-center"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {responseName && <p>Response: {responseName}</p>}
    </div>
  );
};
