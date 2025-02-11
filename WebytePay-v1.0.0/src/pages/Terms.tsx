import React from 'react';

export function Terms() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Termos de Uso
          </h2>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-500 mb-8">
              Ao utilizar os serviços da WebytePay, você concorda com estes termos. Por favor, leia-os
              atentamente.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              1. Aceitação dos Termos
            </h3>
            <p className="text-gray-600 mb-6">
              Ao acessar ou usar nossos serviços, você concorda em cumprir estes termos e todas as
              leis e regulamentos aplicáveis.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              2. Serviços
            </h3>
            <p className="text-gray-600 mb-4">
              A WebytePay oferece:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Processamento de pagamentos</li>
              <li>Maquininhas de cartão</li>
              <li>Gateway de pagamento</li>
              <li>APIs de integração</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              3. Responsabilidades
            </h3>
            <p className="text-gray-600 mb-4">
              O usuário é responsável por:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Manter suas credenciais seguras</li>
              <li>Fornecer informações precisas</li>
              <li>Cumprir as leis aplicáveis</li>
              <li>Usar os serviços de forma adequada</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              4. Taxas e Pagamentos
            </h3>
            <p className="text-gray-600 mb-6">
              As taxas são cobradas conforme os planos contratados. Os valores podem ser atualizados
              mediante aviso prévio.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              5. Propriedade Intelectual
            </h3>
            <p className="text-gray-600 mb-6">
              Todo o conteú do e propriedade intelectual da WebytePay são protegidos por lei. O uso não autorizado é
              estritamente proibido.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              6. Limitação de Responsabilidade
            </h3>
            <p className="text-gray-600 mb-6">
              A WebytePay não se responsabiliza por danos indiretos, consequenciais ou lucros
              cessantes decorrentes do uso dos serviços.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              7. Modificações dos Termos
            </h3>
            <p className="text-gray-600 mb-6">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
              serão comunicadas através de nossos canais oficiais.
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