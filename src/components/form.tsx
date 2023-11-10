"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  whatsappNumber: String;
}

export default function Form() {
  const { register, handleSubmit, formState } = useForm<IFormInput>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const number = data.whatsappNumber;
    window.open(`https://api.whatsapp.com/send?phone=${number}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 sm:w-full"
    >
      <div>
        <input
          {...register("whatsappNumber", {
            required: {
              value: true,
              message: "El numero es requerido",
            },
            pattern: {
              value: /^\d{10}$/, // regexp that checks if the lenght of the number is 10
              message: "El numero no es valido",
            },
          })}
          type="number"
          name="whatsappNumber"
          className={`bg-gray-50 border border-cadet-gray-100 text-prussian-blue-900 rounded-md block w-full p-2.5 focus:border-jungle-green-100 focus:ring-jungle-green-100 focus:outline-none ${
            errors.whatsappNumber ? "border-red-400 focus:border-red-400" : ""
          }`}
          placeholder="1123210708"
          autoFocus
        />
        <small className={`px-2.5 block text-sm text-red-600 `}>
          {errors.whatsappNumber && errors.whatsappNumber.message}
        </small>
      </div>
      <button className="text-white bg-jungle-green-700 hover:bg-jungle-green-600 rounded-md px-2 py-2.5 focus:outline-none">
        Enviar mensaje!
      </button>
    </form>
  );
}
