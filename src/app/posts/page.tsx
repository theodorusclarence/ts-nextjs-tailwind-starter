'use client';

import * as React from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = React.useMemo(() => {
    if (!searchQuery.trim()) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [posts, searchQuery]);

  return (
    <main className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h1 className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl'>
            Posts Gallery
          </h1>
          <p className='mt-3 text-lg text-gray-600'>
            Explore {posts.length} amazing posts
          </p>
        </div>

        {/* Search Input */}
        <div className='mb-10'>
          <div className='relative mx-auto max-w-2xl'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
              <svg
                className='h-5 w-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              type='text'
              placeholder='Search posts by title...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-lg transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100'
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 transition-colors hover:text-gray-600'
              >
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className='mt-3 text-center text-sm text-gray-600'>
              Found {filteredPosts.length} post
              {filteredPosts.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className='flex items-center justify-center py-20'>
            <div className='h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600'></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className='mx-auto max-w-md rounded-2xl bg-red-50 p-6 text-center'>
            <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
              <svg
                className='h-6 w-6 text-red-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
            <h3 className='mb-1 text-lg font-semibold text-red-900'>
              Error Loading Posts
            </h3>
            <p className='text-sm text-red-700'>{error}</p>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <>
            {filteredPosts.length === 0 ? (
              <div className='py-20 text-center'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
                  <svg
                    className='h-8 w-8 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                  No posts found
                </h3>
                <p className='text-gray-600'>Try adjusting your search query</p>
              </div>
            ) : (
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className='group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                  >
                    {/* Gradient accent */}
                    <div className='absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500'></div>

                    {/* Post number badge */}
                    <div className='mb-4 flex items-center justify-between'>
                      <span className='inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700'>
                        Post #{post.id}
                      </span>
                      <div className='h-8 w-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                    </div>

                    {/* Title */}
                    <h2 className='mb-3 text-xl font-bold capitalize leading-tight text-gray-900 transition-colors group-hover:text-indigo-600'>
                      {post.title}
                    </h2>

                    {/* Body */}
                    <p className='line-clamp-4 text-sm leading-relaxed text-gray-600'>
                      {post.body}
                    </p>

                    {/* Hover effect overlay */}
                    <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full'></div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
