import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Next.js Shopify Demo
      </h1>
      {/* <Image
        src="/nextjs-shopify-demo.png"
        alt="Next.js Shopify Demo"
        width={800}
        height={400}
      /> */}
    </main>
  );
}
