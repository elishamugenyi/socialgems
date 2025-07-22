import { Suspense } from 'react';
import BlogPostClient from './BlogPostClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostClient />
    </Suspense>
  );
}