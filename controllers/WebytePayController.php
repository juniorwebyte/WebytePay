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

 namespace App\Http\Controllers;
 
 use Illuminate\Http\Request;
 use App\Models\Transaction; // Modelo de transação
 use Illuminate\Support\Facades\Auth; // Para autenticação
 
 class WebytePayController extends Controller
 {
     /**
      * Cria uma nova transação.
      *
      * @param Request $request
      * @return \Illuminate\Http\JsonResponse
      */
     public function createTransaction(Request $request)
     {
         $request->validate([
             'amount' => 'required|numeric|min:0.01',
             'currency' => 'required|string|max:3',
             'payment_method' => 'required|string',
         ]);
 
         $transaction = Transaction::create([
             'user_id' => Auth::id(),
             'transaction_id' => uniqid('txn_'), // Gera um ID único para a transação
             'amount' => $request->amount,
             'currency' => $request->currency,
             'payment_method' => $request->payment_method,
             'status' => 'pending', // Inicialmente, a transação está pendente
         ]);
 
         return response()->json([
             'success' => true,
             'message' => 'Transação criada com sucesso.',
             'transaction' => $transaction,
         ], 201);
     }
 
     /**
      * Lista as transações de um usuário autenticado.
      *
      * @return \Illuminate\Http\JsonResponse
      */
     public function getUserTransactions()
     {
         $transactions = Transaction::where('user_id', Auth::id())->get();
 
         return response()->json([
             'success' => true,
             'transactions' => $transactions,
         ]);
     }
 
     // Adicione outros métodos conforme necessário...
 }
 