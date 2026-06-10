import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark section-padding">
      <div className="text-center px-6">
        <div className="font-heading text-display font-semibold gold-gradient-text mb-6">404</div>
        <h1 className="font-heading text-h2 font-semibold text-white mb-4">Страницата не е намерена</h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Страницата, която търсите, не съществува или е преместена.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 gold-gradient-bg text-dark px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
        >
          Към началната страница
        </Link>
      </div>
    </div>
  );
}