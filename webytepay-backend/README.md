
# WebytePay Backend

## 📌 Sobre o Projeto
O **WebytePay** é uma solução de pagamento desenvolvida pela Webyte Desenvolvimentos. Este repositório contém o código-fonte do backend, responsável pelo processamento de transações, gerenciamento de usuários e integração com sistemas financeiros.

## 🚀 Tecnologias Utilizadas
- PHP (Laravel)
- MySQL
- Redis
- Docker

## ⚙️ Funcionalidades Principais
- Autenticação de usuários
- Processamento de pagamentos
- Geração de faturas
- Webhooks para notificações

## 📂 Estrutura do Projeto
```
webytepay-backend/
│── app/
│── config/
│── database/
│── routes/
│── tests/
│── .env.example
│── composer.json
│── README.md
```

## 📦 Instalação e Configuração
1. Clone o repositório:
   ```sh
   git clone https://github.com/WebyteDesenvolvimentos/webytepay-backend.git
   ```
2. Instale as dependências:
   ```sh
   composer install
   ```
3. Configure o ambiente:
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
4. Rode as migrações:
   ```sh
   php artisan migrate
   ```
5. Inicie o servidor local:
   ```sh
   php artisan serve
   ```

## ✅ Testes
Execute os testes unitários e de integração com:
```sh
php artisan test
```

## 📬 Contato
Para mais informações, acesse [Webyte Desenvolvimentos](https://webyte.com.br) ou entre em contato via suporte@webyte.com.br.
