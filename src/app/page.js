import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <div className="flex flex-row gap-x-2 p-2 bg-black/10 border-black/10 rounded-xl">
        <Link href="/monthly" className="px-2 py-1 font-medium shadow-md bg-white rounded-md border border-black/10">
          Monthly
        </Link>
        <Link href="/annually" className="px-2 py-1 font-medium rounded-md border border-transparent">
          Annually
        </Link>
      </div>
    </main>
  );
}
