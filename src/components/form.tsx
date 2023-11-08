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
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 sm:w-full">
      <input
        type="text"
        value={number}
        className="bg-gray-50 border border-cadet-gray-100 text-prussian-blue-900 rounded-md block w-full p-2.5 focus:border-jungle-green-100 focus:ring-jungle-green-100 focus:outline-none"
        placeholder="1123210708"
        onChange={handleOnChange}
        autoFocus
      />
      <button
        type="submit"
        className="text-white bg-jungle-green-700 hover:bg-jungle-green-600 rounded-md px-2 py-2.5 focus:outline-none"
      >
        Enviar mensaje!
      </button>
    </form>
  );
}
