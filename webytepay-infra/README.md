# WebytePay Infra

## 📌 Sobre o Projeto

O **WebytePay Infra** é o repositório responsável pela infraestrutura necessária para o sistema WebytePay. Este repositório contém os scripts, configurações e templates necessários para automatizar o processo de deploy, configurar o ambiente e garantir a escalabilidade e resiliência do sistema WebytePay.

## 🚀 Tecnologias Utilizadas

- Docker
- Docker Compose
- Nginx
- AWS (ou outras plataformas de nuvem)
- Terraform (se aplicável)
- Ansible (se aplicável)

## ⚙️ Funcionalidades Principais

- Configuração de containers Docker para WebytePay Backend e Frontend
- Arquitetura de escalabilidade e balanceamento de carga
- Automação de deploy usando Ansible ou scripts personalizados
- Configuração de servidores Nginx para proxy reverso
- Definição de infraestrutura como código (IaC) usando Terraform

## 📂 Estrutura do Projeto

```bash
webytepay-infra/
│── ansible/
│── docker/
│── nginx/
│── terraform/
│── .env.example
│── README.md 
```

## 📦 Como Usar

### Clone o repositório:
```sh
git clone https://github.com/WebyteDesenvolvimentos/webytepay-infra.git
```

### Configure o ambiente:
```sh
cp .env.example .env
```

### Suba a infraestrutura usando Docker Compose:
```sh
docker-compose up -d
```

### Para aplicar configurações de infraestrutura (se necessário), use o Terraform:
```sh
terraform init
terraform apply
```

## 📬 Contato

Para mais informações, acesse Webyte Desenvolvimentos ou entre em contato via suporte@webyte.com.br.
