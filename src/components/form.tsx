"use client";

import { useState } from "react";

export default function Form() {
  const [number, setNumber] = useState("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${number}`, "_blank");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
      <input
        type="number"
        name="number"
        value={number}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5"
        placeholder="1123210708"
        onChange={handleOnChange}
        autoFocus
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-2.5 focus:outline-none"
      >
        Enviar mensaje!
      </button>
    </form>
  );
}
