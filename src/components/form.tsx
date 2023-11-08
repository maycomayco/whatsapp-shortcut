"use client";
import React, { useState } from "react";

export default function Form() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);

  const validatePhoneNumber = (number: string) => {
    // regexp that checks if the lenght of the number is 10
    const regexPhone = /^\d{10}$/;

    return regexPhone.test(number);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // check if the number is empty
    if (!number) return;

    if (!validatePhoneNumber(number)) return setError(true);

    window.open(`https://api.whatsapp.com/send?phone=${number}`, "_blank");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false); // remove the error message if the user is typing

    const isNumber = /^\d+$/.test(e.target.value); // regexp to check if the value is a number

    if (!isNumber) return; // short circuit if the value is not a number

    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 sm:w-full">
      <div>
        <label htmlFor="whatsapp-number" className="hidden">
          Numero de telefono
        </label>
        <input
          type="text"
          name="whatsapp-number"
          value={number}
          className={`bg-gray-50 border border-cadet-gray-100 text-prussian-blue-900 rounded-md block w-full p-2.5 focus:border-jungle-green-100 focus:ring-jungle-green-100 focus:outline-none ${
            error ? "border-red-500" : ""
          }`}
          placeholder="1123210708"
          onChange={handleOnChange}
          autoFocus
        />
        <small
          className={`block text-sm text-red-600 dark:text-red-500 ${
            error ? "visible" : "invisible"
          }`}
        >
          El número ingresado no es válido
        </small>
      </div>
      <button
        type="submit"
        className="text-white bg-jungle-green-700 hover:bg-jungle-green-600 rounded-md px-2 py-2.5 focus:outline-none"
      >
        Enviar mensaje!
      </button>
    </form>
  );
}
