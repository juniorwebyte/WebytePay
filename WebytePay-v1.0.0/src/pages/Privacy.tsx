import React from 'react';

export function Privacy() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Política de Privacidade
          </h2>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-500 mb-8">
              A WebytePay está comprometida com a proteção da sua privacidade. Esta política descreve
              como coletamos, usamos e protegemos suas informações pessoais.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              1. Informações que Coletamos
            </h3>
            <p className="text-gray-600 mb-4">
              Coletamos informações necessárias para fornecer nossos serviços, incluindo:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Documentos de identificação (CPF/CNPJ)</li>
              <li>Informações bancárias</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              2. Como Usamos suas Informações
            </h3>
            <p className="text-gray-600 mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Processar transações</li>
              <li>Prevenir fraudes</li>
              <li>Melhorar nossos serviços</li>
              <li>Comunicar atualizações importantes</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              3. Proteção de Dados
            </h3>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas
              informações, incluindo criptografia, firewalls e controles de acesso.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              4. Seus Direitos
            </h3>
            <p className="text-gray-600 mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Acessar seus dados</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Revogar consentimento</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              5. Contato
            </h3>
            <p className="text-gray-600 mb-6">
              Para questões sobre privacidade, entre em contato:
              <br />
              Email: privacidade@webytepay.com.br
              <br />
              Telefone: (11) 3333-4444
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: 20 de Fevereiro de 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}