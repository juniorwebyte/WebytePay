import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Zap, Lock } from 'lucide-react';

export function Products() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Produtos
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Soluções completas para seu negócio crescer
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Maquininhas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maquininhas</h3>
                <p className="text-gray-600 mb-4">
                  Aceite todos os cartões com nossas maquininhas modernas e seguras.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Tecnologia NFC
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Todas as bandeiras
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Recebimento em 2 dias
                  </li>
                </ul>
                <Link
                  to="/cadastro"
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Começar Agora
                </Link>
              </div>
            </div>

            {/* Gateway */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gateway</h3>
                <p className="text-gray-600 mb-4">
                  Processe pagamentos online com segurança e rapidez.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Checkout transparente
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Split de pagamentos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Antifraude incluso
                  </li>
                </ul>
                <Link
                  to="/cadastro"
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Começar Agora
                </Link>
              </div>
            </div>

            {/* APIs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">APIs</h3>
                <p className="text-gray-600 mb-4">
                  Integre pagamentos em seu sistema com nossas APIs robustas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Documentação completa
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Sandbox para testes
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Suporte dedicado
                  </li>
                </ul>
                <Link
                  to="/cadastro"
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Começar Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}