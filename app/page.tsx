import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Dogu Website</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/timer">Timer</Link></p>
    </main>
  );
}
