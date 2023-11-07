import Form from "@/components/form";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whatsapp Shortcut",
  description: "Envía mensajes de WhatsApp sin necesidad de agregar contactos.",
};

export default function Home() {
  return (
    <main className="grid h-[100dvh] w-full place-content-center">
      <section className="flex flex-col items-center gap-6">
        <Image
          src="/images/whatsapp-shortcut-logo.webp"
          alt="App logo"
          width={120}
          height={120}
        />
        <h1 className="text-center text-xl font-bold">Whatsapp Shortcut</h1>
        <div>
          <Form />
        </div>
      </section>
    </main>
  );
}
