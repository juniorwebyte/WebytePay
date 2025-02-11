import React from 'react';
import { Building2, Users, Shield, Target } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre a WebytePay
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Transformando o mercado de pagamentos com tecnologia e inovação
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
              <p className="text-gray-600 mb-6">
                A WebytePay nasceu da necessidade de simplificar o processo de pagamentos para empresas
                de todos os tamanhos. Desde nossa fundação, temos trabalhado incansavelmente para
                desenvolver soluções que tornem as transações financeiras mais simples, seguras e
                acessíveis.
              </p>
              <p className="text-gray-600">
                Hoje, somos uma das principais empresas de tecnologia financeira do Brasil, processando
                milhões de transações mensalmente e ajudando negócios a crescerem com nossas soluções
                inovadoras.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900">2000+</p>
                <p className="text-gray-500">Empresas Atendidas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900">150+</p>
                <p className="text-gray-500">Colaboradores</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900">99.9%</p>
                <p className="text-gray-500">Uptime</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900">R$ 1B+</p>
                <p className="text-gray-500">Transacionados</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Inovação</h4>
                <p className="text-gray-600">
                  Buscamos constantemente novas formas de melhorar nossos produtos e serviços.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Segurança</h4>
                <p className="text-gray-600">
                  Proteção de dados e transações é nossa prioridade número um.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparência</h4>
                <p className="text-gray-600">
                  Mantemos uma comunicação clara e honesta com nossos clientes e parceiros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}