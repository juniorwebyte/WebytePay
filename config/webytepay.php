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
    'pix' => [
        'api_key' => env('PIX_API_KEY'),
        'api_secret' => env('PIX_API_SECRET'),
    ],
    'boleto' => [
        'api_key' => env('BOLETO_API_KEY'),
        'api_secret' => env('BOLETO_API_SECRET'),
    ],
    'cartao' => [
        'api_key' => env('CARTAO_API_KEY'),
        'api_secret' => env('CARTAO_API_SECRET'),
    ],
];

