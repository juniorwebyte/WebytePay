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
 
 class CreateTransactionsTable extends Migration
 {
     public function up()
     {
         Schema::create('transactions', function (Blueprint $table) {
             $table->id();
             $table->foreignId('user_id')->constrained()->onDelete('cascade');
             $table->string('transaction_id')->unique();
             $table->decimal('amount', 10, 2);
             $table->string('currency')->default('BRL');
             $table->string('payment_method');
             $table->enum('status', ['pending', 'completed', 'failed']);
             $table->text('payment_info')->nullable(); // Novo campo para armazenar informações do pagamento
             $table->string('ip_address')->nullable(); // Novo campo para armazenar o IP do usuário
             $table->timestamps();
         });
     }
 
     public function down()
     {
         Schema::dropIfExists('transactions');
     }
 }
 
