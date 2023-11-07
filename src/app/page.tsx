import Form from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-[100dvh] w-full place-content-center">
      <section className="flex flex-col items-center gap-6">
        <Image
          src="/images/whatsapp-shortcut-logo.webp"
          alt="App logo"
          width={100}
          height={100}
        />
        <h1 className="text-center text-xl font-bold">Whatsapp Shortcut</h1>
        <div>
          <Form />
        </div>
      </section>
    </main>
  );
}
