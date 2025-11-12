import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h2>This route does not exist</h2>
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 2rem',
          marginTop: '1rem',
          textDecoration: 'none',
          borderRadius: '9999px',
          backgroundColor: 'var(--font-color)',
          color: 'var(--white)',
          border: 'none',
        }}
      >
        Redirect to main page
      </Link>
    </main>
  );
}
