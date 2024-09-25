import Head from 'next/head';
// Import dynamic from Next.js for code-splitting and server-side rendering
import dynamic from 'next/dynamic';

// Dynamically import components or functions
const Header = dynamic(() => import('../fe1/header'), { ssr: false });
const squareRoot = dynamic(() => import('../fe2/getSquareRoot'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <main>
        <Header />
        <h1>
          Square root of 4: {squareRoot(4)}
        </h1>
      </main>
    </div>
  );
}
