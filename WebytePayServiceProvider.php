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

 namespace App\Plugins\WebytePay;
 
 use Illuminate\Support\ServiceProvider;
 
 class WebytePayServiceProvider extends ServiceProvider
 {
     /**
      * Registra os serviços no contêiner de serviços.
      *
      * @return void
      */
     public function register()
     {
         // Mescla o arquivo de configuração
         $this->mergeConfigFrom(__DIR__.'/config/webytepay.php', 'webytepay');
     }
 
     /**
      * Realiza as ações necessárias durante o boot do serviço.
      *
      * @return void
      */
     public function boot()
     {
         // Carrega as rotas do plugin
         $this->loadRoutesFrom(__DIR__.'/routes/web.php');
 
         // Carrega as views do plugin
         $this->loadViewsFrom(__DIR__.'/views', 'webytepay');
 
         // Carrega as traduções do plugin
         $this->loadTranslationsFrom(__DIR__.'/lang', 'webytepay');
         
         // Publica arquivos de configuração, se necessário
         // $this->publishes([
         //     __DIR__.'/config/webytepay.php' => config_path('webytepay.php'),
         // ]);
     }
 }
 
