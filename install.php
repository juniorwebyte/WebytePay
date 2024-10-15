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

 use App\Plugins\WebytePay\WebytePayServiceProvider;
 
 // Verificar se o plugin já está registrado
 if (app()->getProviders(WebytePayServiceProvider::class)) {
     echo "Plugin WebytePay já está instalado.";
     exit;
 }
 
 try {
     // Registrar o WebytePay
     app()->register(WebytePayServiceProvider::class);
     echo "Plugin WebytePay instalado com sucesso!";
 } catch (Exception $e) {
     echo "Erro ao instalar o plugin WebytePay: " . $e->getMessage();
 }
 