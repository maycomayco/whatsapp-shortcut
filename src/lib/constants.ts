// defaulr URL for whatsapp API
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=";

// regex for whatsapp phone number
export const PHONE_REGEX = new RegExp(
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
);

export const NUMBER_VALIDATIONS = {
  REQUIRED: "El número es requerido",
  INVALID: "El número no es válido",
};
