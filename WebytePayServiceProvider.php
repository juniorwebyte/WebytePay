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

 <?php

namespace App\Plugins\WebytePay;

use Illuminate\Support\ServiceProvider;

class WebytePayServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/config/webytepay.php', 'webytepay');
    }

    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/views', 'webytepay');
        $this->loadTranslationsFrom(__DIR__.'/lang', 'webytepay');
    }
}
