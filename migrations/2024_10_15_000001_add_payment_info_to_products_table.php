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

 use Illuminate\Database\Migrations\Migration;
 use Illuminate\Database\Schema\Blueprint;
 use Illuminate\Support\Facades\Schema;
 
 class AddPaymentInfoToProductsTable extends Migration
 {
     public function up()
     {
         Schema::table('products', function (Blueprint $table) {
             $table->enum('payment_status', ['not_paid', 'paid', 'refunded'])->default('not_paid'); // Altera is_paid para payment_status
             $table->foreignId('transaction_id')->nullable()->constrained('transactions')->onDelete('set null');
             $table->decimal('payment_amount', 10, 2)->nullable(); // Novo campo para armazenar o valor do pagamento
             $table->timestamp('payment_date')->nullable(); // Novo campo para armazenar a data do pagamento
         });
     }
 
     public function down()
     {
         Schema::table('products', function (Blueprint $table) {
             $table->dropForeign(['transaction_id']);
             $table->dropColumn(['payment_status', 'payment_amount', 'payment_date', 'transaction_id']);
         });
     }
 }
 
