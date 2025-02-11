import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { CreditCard, DollarSign, TrendingUp, Users } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { TransactionsTable } from '../components/TransactionsTable';
import type { TransactionData } from '../types/dashboard';

export function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      // First check the current session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('Session error:', sessionError);
        throw sessionError;
      }

      if (!session) {
        console.log('No active session found');
        navigate('/login');
        return;
      }

      // Get the user from the session
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error('User fetch error:', userError);
        throw userError;
      }

      if (!user) {
        console.log('No user found in session');
        navigate('/login');
        return;
      }

      console.log('Authenticated user:', user);
      setUser(user);

      // Get user profile with role
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Profile fetch error:', profileError);
        throw new Error('Erro ao carregar perfil do usuário.');
      }

      if (!profile) {
        console.error('No profile found for user:', user.id);
        throw new Error('Perfil não encontrado.');
      }

      console.log('User profile:', profile);
      setProfile(profile);
      setIsAdmin(profile.role === 'admin');
      localStorage.setItem('userRole', profile.role);

    } catch (error) {
      console.error('Error checking user:', error);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  }

  const metrics = [
    {
      title: 'Total de Vendas',
      value: 'R$ 12.450,00',
      change: 12,
      icon: DollarSign
    },
    {
      title: 'Transações',
      value: '156',
      change: 8,
      icon: CreditCard
    },
    {
      title: 'Taxa de Aprovação',
      value: '98.5%',
      change: 2,
      icon: TrendingUp
    },
    {
      title: 'Clientes Ativos',
      value: '45',
      change: 15,
      icon: Users
    }
  ];

  const transactions: TransactionData[] = [
    {
      id: '1',
      date: '2024-02-20',
      type: 'credit',
      amount: 250.00,
      status: 'completed',
      customer: 'João Silva'
    },
    {
      id: '2',
      date: '2024-02-20',
      type: 'debit',
      amount: 120.00,
      status: 'completed',
      customer: 'Maria Santos'
    },
    {
      id: '3',
      date: '2024-02-20',
      type: 'pix',
      amount: 89.90,
      status: 'completed',
      customer: 'Pedro Oliveira'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Bem-vindo, {profile?.full_name || user?.email}</p>
          </div>
          {isAdmin && (
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
              Acesso Administrativo
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {isAdmin && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Painel Administrativo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">Gestão de Usuários</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Gerenciar Usuários
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">Configurações do Sistema</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Configurações
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          <TransactionsTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
}