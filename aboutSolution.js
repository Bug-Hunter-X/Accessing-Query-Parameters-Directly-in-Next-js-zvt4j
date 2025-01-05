```javascript
//pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <h1>About Page</h1>
      {name && <p>Hello {name}</p>}
    </div>
  );
}
```