import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">This is the About page</h1>
        <Link href="/" className="text-[#D53F8C] hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}