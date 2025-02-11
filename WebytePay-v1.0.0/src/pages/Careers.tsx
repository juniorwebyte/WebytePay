import React from 'react';
import { Link } from 'react-router-dom';

export function Careers() {
  const positions = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack Senior',
      department: 'Tecnologia',
      location: 'São Paulo, SP',
      type: 'Remoto',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Produto',
      location: 'São Paulo, SP',
      type: 'Híbrido',
    },
    {
      id: 3,
      title: 'Especialista em Vendas',
      department: 'Comercial',
      location: 'Rio de Janeiro, RJ',
      type: 'Presencial',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Carreiras na WebytePay
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Junte-se a nós e faça parte da revolução dos pagamentos digitais
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {positions.map((position) => (
                <li key={position.id}>
                  <Link to={`/carreiras/${position.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {position.title}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {position.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {position.department}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            {position.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-blue-50 rounded-lg px-6 py-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Por que trabalhar na WebytePay?
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Crescimento</h4>
                  <p className="text-gray-600">
                    Oportunidades de desenvolvimento profissional e pessoal
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Benefícios</h4>
                  <p className="text-gray-600">
                    Pacote competitivo de benefícios e remuneração
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Cultura</h4>
                  <p className="text-gray-600">
                    Ambiente dinâmico e colaborativo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}