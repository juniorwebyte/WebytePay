import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Code, CreditCard } from 'lucide-react';

export function Gateway() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Gateway de Pagamentos
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Processe pagamentos online com segurança e rapidez
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Segurança</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Proteção total contra fraudes e dados criptografados.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Certificação PCI DSS
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Antifraude integrado
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Monitoramento 24/7
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Alta disponibilidade e processamento rápido.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    99.9% de uptime
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Processamento em milissegundos
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Escalabilidade automática
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Integração</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Fácil de integrar com qualquer plataforma.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    SDKs para todas as linguagens
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Plugins para e-commerces
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    Documentação completa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-0 lg:flex-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Pronto para começar?
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg text-blue-100">
                    Crie sua conta gratuitamente e comece a aceitar pagamentos hoje mesmo.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <div className="flex space-x-4">
                    <Link
                      to="/cadastro"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-blue-600 bg-white hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                      Começar Agora
                    </Link>
                    <Link
                      to="/contato"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-200"
                    >
                      Falar com Especialista
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}