import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Shield, Zap } from 'lucide-react';

export function APIs() {
  const features = [
    {
      name: 'REST e GraphQL',
      description: 'Escolha a API que melhor se adapta ao seu projeto',
      icon: Code,
    },
    {
      name: 'Alta Performance',
      description: 'Resposta em milissegundos e 99.9% de uptime',
      icon: Zap,
    },
    {
      name: 'Segurança',
      description: 'Autenticação OAuth 2.0 e tokens JWT',
      icon: Shield,
    },
    {
      name: 'Webhooks',
      description: 'Receba notificações em tempo real',
      icon: Database,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            APIs WebytePay
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Integre pagamentos em sua aplicação de forma simples e segura
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                APIs modernas e flexíveis
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Nossas APIs foram desenvolvidas seguindo as melhores práticas do mercado, oferecendo
                flexibilidade e segurança para sua integração.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-start">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {feature.name}
                      </h4>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`// Exemplo de integração
const payment = await webytepay.payments.create({
  amount: 1000, // R$ 10,00
  currency: 'BRL',
  payment_method: {
    type: 'credit_card',
    card: {
      number: '4111111111111111',
      exp_month: 12,
      exp_year: 2025,
      cvc: '123'
    }
  },
  description: 'Pedido #123'
});

// Resposta
{
  id: 'pay_123',
  status: 'succeeded',
  amount: 1000,
  currency: 'BRL',
  payment_method: {
    type: 'credit_card',
    last4: '1111',
    brand: 'visa'
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-0 lg:flex-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Comece a integrar agora
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg text-blue-100">
                    Crie sua conta e tenha acesso à documentação completa e ambiente de testes.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <div className="flex space-x-4">
                    <Link
                      to="/cadastro"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
                    >
                      Criar Conta
                    </Link>
                    <Link
                      to="/docs"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-full text-base font-medium text-white hover:bg-blue-700 transition-colors duration-200"
                    >
                      Ver Documentação
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