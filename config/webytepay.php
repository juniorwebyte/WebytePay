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
    'payment_methods' => [
        'pix' => [
            'api_key' => env('PIX_API_KEY'),
            'api_secret' => env('PIX_API_SECRET'),
            'api_url' => env('PIX_API_URL', 'https://api.pix.com'),
        ],
        'boleto' => [
            'api_key' => env('BOLETO_API_KEY'),
            'api_secret' => env('BOLETO_API_SECRET'),
            'api_url' => env('BOLETO_API_URL', 'https://api.boleto.com'),
        ],
        'cartao' => [
            'api_key' => env('CARTAO_API_KEY'),
            'api_secret' => env('CARTAO_API_SECRET'),
            'api_url' => env('CARTAO_API_URL', 'https://api.cartao.com'),
        ],
    ],
];


