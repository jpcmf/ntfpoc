import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-center md:justify-between py-2 md:py-4">
      <Image src="/img/ntfpoc2021.png" alt="Logo" width={144} height={21} />
      <nav className="hidden md:flex space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-300 ease-linear transition duration-300">
            Next.js
          </a>
        </Link>
        <Link href="/tailwindcss">
          <a className="tracking-wide hover:text-gray-300 ease-linear transition duration-300">
            TailwindCSS
          </a>
        </Link>
        <Link href="/framermotion">
          <a className="tracking-wide hover:text-gray-300 ease-linear transition duration-300">
            Framer Motion
          </a>
        </Link>
      </nav>
    </header>
  );
}
