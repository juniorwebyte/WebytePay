import React from 'react';
import { Link } from 'react-router-dom';

export function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Como escolher a melhor maquininha para seu negócio',
      excerpt: 'Guia completo para ajudar você a escolher a melhor solução de pagamento...',
      date: '20 Fev 2024',
      author: 'Equipe WebytePay',
      imageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'O futuro dos pagamentos digitais no Brasil',
      excerpt: 'Análise das tendências e inovações no mercado de pagamentos...',
      date: '18 Fev 2024',
      author: 'Equipe WebytePay',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Segurança em transações online: o que você precisa saber',
      excerpt: 'Dicas e melhores práticas para proteger suas transações...',
      date: '15 Fev 2024',
      author: 'Equipe WebytePay',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog WebytePay
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Novidades, dicas e tendências sobre o mundo dos pagamentos
          </p>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <Link to={`/blog/${post.id}`} className="hover:underline">
                      Artigo
                    </Link>
                  </p>
                  <Link to={`/blog/${post.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}