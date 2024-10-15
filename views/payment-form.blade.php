<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Pagamento</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <h1>Formulário de Pagamento</h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="/webytepay/initiate" method="POST">
        @csrf
        <label for="amount">Valor:</label>
        <input type="number" name="amount" id="amount" placeholder="0.00" step="0.01" required aria-label="Valor do pagamento">
        
        <label for="payment_method">Método de Pagamento:</label>
        <select name="payment_method" id="payment_method" required aria-label="Método de pagamento">
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão</option>
        </select>
        
        <button type="submit">Pagar</button>
    </form>
</body>
</html>
