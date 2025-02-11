# WebytePay - Guia de Instalação Local

## Requisitos do Sistema

- Windows 10 ou superior
- XAMPP 8.0+ (PHP 8.0+)
- Node.js 18+ e npm
- Git (opcional)

## 1. Instalação do XAMPP

1. Baixe o XAMPP em: https://www.apachefriends.org/download.html
2. Execute o instalador e siga as instruções
3. Instale com os componentes:
   - Apache
   - MySQL
   - PHP
   - phpMyAdmin

## 2. Configuração do Ambiente

1. Inicie o XAMPP Control Panel
2. Inicie os serviços Apache e MySQL
3. Configure as variáveis de ambiente:
   - Adicione PHP ao PATH do sistema
   - Adicione MySQL ao PATH do sistema

## 3. Instalação do WebytePay

### Método Manual

1. Clone ou baixe o repositório:
```bash
git clone https://github.com/seu-usuario/webytepay.git
# ou extraia o ZIP baixado
```

2. Navegue até a pasta do projeto:
```bash
cd webytepay
```

3. Instale as dependências:
```bash
npm install
```

4. Configure o banco de dados:
- Acesse http://localhost/phpmyadmin
- Crie um novo banco de dados chamado `webytepay`
- Importe os arquivos SQL da pasta `supabase/migrations` em ordem

5. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Atualize as credenciais do banco de dados

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### Método Automático (Script de Instalação)

1. Baixe o instalador automático
2. Execute como administrador
3. Siga as instruções na tela

## 4. Acessando o Sistema

1. Frontend:
   - Acesse: http://localhost:5173
   - Login admin: juniorwci70@gmail.com
   - Senha: 99110990Webytebr@

2. Painel Admin:
   - Acesse: http://localhost:5173/dashboard
   - Use as mesmas credenciais de admin

## 5. Estrutura de Pastas

```
webytepay/
├── src/                  # Código fonte React
├── supabase/            # Migrações do banco de dados
├── public/              # Arquivos estáticos
└── docs/                # Documentação adicional
```

## 6. Problemas Comuns

1. Erro de conexão com banco:
   - Verifique se MySQL está rodando
   - Confirme as credenciais no .env
   - Verifique permissões do usuário

2. Erro no npm install:
   - Limpe o cache: `npm cache clean --force`
   - Delete node_modules e package-lock.json
   - Tente novamente: `npm install`

3. Erro de CORS:
   - Verifique configurações do Apache
   - Adicione headers corretos no .htaccess

## 7. Suporte

Para suporte adicional:
- E-mail: suporte@webytepay.com
- Documentação: https://docs.webytepay.com