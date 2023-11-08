import Form from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-[100svh] place-content-center p-4">
      <section className="flex flex-col items-center gap-8 sm:w-[345px]">
        <div className="flex items-center">
          <Image
            src="/images/whatsapp-shortcut-logo.webp"
            alt="App logo"
            width={70}
            height={70}
          />
          <div className="w-[120px]">
            <h1 className="text-center text-2xl font-bold text-prussian-blue-900">
              Whatsapp Shortcut
            </h1>
          </div>
        </div>
        <h2 className="text-center text-prussian-blue-900">
          Envía mensajes de WhatsApp sin necesidad de agregar contactos
        </h2>
        <Form />
      </section>
    </main>
  );
}
