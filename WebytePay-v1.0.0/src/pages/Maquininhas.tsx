import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Wifi, Smartphone, Battery } from 'lucide-react';

export function Maquininhas() {
  const features = [
    {
      name: 'Tecnologia NFC',
      description: 'Aceite pagamentos por aproximação com total segurança',
      icon: Wifi,
    },
    {
      name: 'Bateria de Longa Duração',
      description: 'Até 12 horas de uso contínuo',
      icon: Battery,
    },
    {
      name: 'App Mobile',
      description: 'Gerencie suas vendas pelo celular',
      icon: Smartphone,
    },
    {
      name: 'Todas as Bandeiras',
      description: 'Aceite os principais cartões do mercado',
      icon: CreditCard,
    },
  ];

  const plans = [
    {
      name: 'Smart',
      price: '9,90',
      features: [
        'Aceita débito e crédito',
        'Taxa débito: 1,99%',
        'Taxa crédito: 3,99%',
        'Recebimento em 2 dias',
      ],
    },
    {
      name: 'Pro',
      price: '14,90',
      features: [
        'Aceita débito, crédito e NFC',
        'Taxa débito: 1,49%',
        'Taxa crédito: 3,49%',
        'Recebimento em 1 dia',
        'Suporte prioritário',
      ],
      featured: true,
    },
    {
      name: 'Ultra',
      price: '29,90',
      features: [
        'Todas as funcionalidades Pro',
        'Taxa débito: 0,99%',
        'Taxa crédito: 2,99%',
        'Recebimento no mesmo dia',
        'Suporte VIP 24/7',
        'Relatórios avançados',
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Maquininhas WebytePay
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            A solução completa para seu negócio aceitar pagamentos
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <img
                className="w-full h-auto rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Maquininha WebytePay"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Design moderno e funcional
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Nossas maquininhas foram desenvolvidas pensando na melhor experiência para você e seus
                clientes. Com design ergonômico e tela touchscreen de alta resolução, você tem toda a
                praticidade na palma da mão.
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
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Escolha o plano ideal para seu negócio
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                  plan.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    R$ {plan.price}
                    <span className="text-lg font-normal text-gray-500">/mês</span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/cadastro"
                    className={`block w-full text-center py-3 px-4 rounded-full font-medium ${
                      plan.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    } transition-colors duration-200`}
                  >
                    Começar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}