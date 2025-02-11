import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp,
  Shield,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">WebytePay</h3>
            <p className="text-gray-400 mb-6">
              Transformando o futuro dos pagamentos digitais com tecnologia e inovação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/maquininhas" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  Maquininhas
                </Link>
              </li>
              <li>
                <Link to="/gateway" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  Gateway
                </Link>
              </li>
              <li>
                <Link to="/apis" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  APIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>(11) 3333-4444</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>contato@webytepay.com.br</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 WebytePay. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacidade" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Privacidade
              </Link>
              <Link to="/termos" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Termos
              </Link>
              <Link to="/compliance" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Compliance
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 animate-glow"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}