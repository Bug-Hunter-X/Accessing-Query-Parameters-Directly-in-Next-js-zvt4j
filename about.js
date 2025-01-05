```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  //This will cause an error
  //You should use the useRouter hook
  //or define getServerSideProps to get query params
  const query = new URLSearchParams(window.location.search);
  const name = query.get('name');
  return (
    <div>
      <h1>About Page</h1>
      {name && <p>Hello {name}</p>}>
    </div>
  );
}
```