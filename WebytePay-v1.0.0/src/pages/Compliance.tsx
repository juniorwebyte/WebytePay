import React from 'react';
import { Shield, Lock, FileCheck, Scale } from 'lucide-react';

export function Compliance() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compliance e Segurança
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nosso compromisso com a conformidade regulatória e segurança dos dados
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Certificações</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li>• PCI DSS Level 1</li>
                <li>• ISO 27001</li>
                <li>• SOC 2 Type II</li>
                <li>• Certificação Banco Central</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Segurança</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li>• Criptografia de ponta a ponta</li>
                <li>• Monitoramento 24/7</li>
                <li>• Proteção contra fraudes</li>
                <li>• Backups redundantes</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center mb-6">
                <FileCheck className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">LGPD</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Estamos em total conformidade com a Lei Geral de Proteção de Dados:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>• Consentimento explícito</li>
                <li>• Direitos dos titulares</li>
                <li>• Relatório de impacto</li>
                <li>• Políticas de privacidade</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Regulamentações</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Conformidade com as principais regulamentações:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>• Resoluções Banco Central</li>
                <li>• Normas do BACEN</li>
                <li>• Regulamentações PIX</li>
                <li>• Diretrizes de Pagamentos</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Nosso Compromisso
            </h3>
            <p className="text-gray-600 text-center">
              A WebytePay está comprometida em manter os mais altos padrões de segurança e
              conformidade. Investimos continuamente em tecnologia e processos para proteger nossos
              clientes e seus dados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}