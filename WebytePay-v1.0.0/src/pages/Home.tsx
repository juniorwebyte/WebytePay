import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Zap,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';
import { IllustrationSection } from '../components/IllustrationSection';

const recentDeposits = [
  { id: 1, user: "João S.", amount: "R$ 5.000", plan: "Pro", date: "2 min atrás" },
  { id: 2, user: "Maria L.", amount: "R$ 10.000", plan: "Enterprise", date: "5 min atrás" },
  { id: 3, user: "Pedro M.", amount: "R$ 2.500", plan: "Basic", date: "10 min atrás" },
];

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Empresário",
    content: "A WebytePay revolucionou a forma como gerencio os pagamentos do meu negócio.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Ana Santos",
    role: "Lojista",
    content: "Excelente plataforma, suporte incrível e taxas competitivas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50 dark:from-blue-900/80 dark:to-purple-900/80"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              <span className="text-gradient">Revolucione</span> seus
              <br />
              Pagamentos Digitais
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Plataforma completa de pagamentos com as melhores taxas do mercado e tecnologia de ponta
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/cadastro"
                className="btn btn-primary"
              >
                Comece Agora Gratuitamente
              </Link>
              <Link
                to="/demo"
                className="btn btn-secondary"
              >
                Agendar Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 container-custom">
        <IllustrationSection
          imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          title="Pagamentos Simplificados"
          description="Nossa plataforma oferece uma solução completa para seu negócio aceitar todos os tipos de pagamentos, com segurança e agilidade."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Segurança Garantida</h3>
                <p className="text-gray-600 dark:text-gray-400">Proteção total contra fraudes e dados criptografados</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Processamento Rápido</h3>
                <p className="text-gray-600 dark:text-gray-400">Receba seus pagamentos em até 2 dias úteis</p>
              </div>
            </div>
          </div>
        </IllustrationSection>

        <IllustrationSection
          imageUrl="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          title="Gestão Completa"
          description="Acompanhe suas vendas em tempo real, gere relatórios detalhados e tome decisões baseadas em dados."
          reverse
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Análise em Tempo Real</h3>
                <p className="text-gray-600 dark:text-gray-400">Dashboard completo com métricas importantes</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <DollarSign className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Melhores Taxas</h3>
                <p className="text-gray-600 dark:text-gray-400">Taxas competitivas para seu negócio crescer</p>
              </div>
            </div>
          </div>
        </IllustrationSection>
      </div>

      {/* Recent Deposits */}
      <div className="py-24 glass">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Últimas</span> Transações
            </h2>
            <p className="text-xl text-gray-400">
              Acompanhe em tempo real as movimentações na plataforma
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table-dark w-full">
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>Valor</th>
                  <th>Plano</th>
                  <th>Tempo</th>
                </tr>
              </thead>
              <tbody>
                {recentDeposits.map((deposit) => (
                  <tr key={deposit.id}>
                    <td>{deposit.user}</td>
                    <td className="text-gradient">{deposit.amount}</td>
                    <td>{deposit.plan}</td>
                    <td className="text-gray-400">{deposit.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">O que dizem</span> nossos clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex items-center mb-6">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
                <div className="mt-4 flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 glass">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Comece a aceitar pagamentos <span className="text-gradient">hoje mesmo</span>
            </h2>
            <Link
              to="/cadastro"
              className="btn btn-primary inline-flex items-center"
            >
              Criar Conta Grátis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}