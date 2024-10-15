<?php
/**
 * WebytePay - Gateway de Pagamento para o Vendi Aqui
 * Copyright (c) 2024 Webyte Desenvolvimentos. Todos os direitos reservados.
 *
 * Website: https://webytebr.com
 * Autor: Júnior Alves | https://webytebr.com
 *
 * LICENÇA
 * -------
 * Este software é fornecido sob licença e pode ser usado e copiado
 * apenas mediante o pagamento da taxa de licença.
 *
 * Proibida a redistribuição ou modificação sem a autorização expressa
 * da Webyte Desenvolvimentos. Qualquer uso não autorizado é estritamente 
 * proibido e poderá resultar em ações legais.
 */

 return [
    'confirmation' => [
        'subject' => 'Confirmação de Pagamento - Transação #:transaction_id',
        'body' => 'Olá :user_name, seu pagamento de :amount foi processado com sucesso! Obrigado por usar nossos serviços.',
    ],
    'failure' => [
        'subject' => 'Falha no Pagamento - Transação #:transaction_id',
        'body' => 'Olá :user_name, infelizmente, houve um erro ao processar seu pagamento de :amount. Por favor, entre em contato com nosso suporte.',
    ],
    'pending' => [
        'subject' => 'Pagamento Pendente - Transação #:transaction_id',
        'body' => 'Olá :user_name, seu pagamento de :amount está pendente. Você será notificado assim que for processado.',
    ],
    // Adicione outras mensagens conforme necessário
];


