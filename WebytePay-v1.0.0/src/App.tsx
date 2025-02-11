import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Compliance } from './pages/Compliance';
import { Maquininhas } from './pages/Maquininhas';
import { Gateway } from './pages/Gateway';
import { APIs } from './pages/APIs';
import { AgendarDemo } from './pages/AgendarDemo';
import { PaymentLinks } from './pages/PaymentLinks'; // Add this line

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/carreiras" element={<Careers />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/termos" element={<Terms />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/maquininhas" element={<Maquininhas />} />
              <Route path="/gateway" element={<Gateway />} />
              <Route path="/apis" element={<APIs />} />
              <Route path="/agendar-demo" element={<AgendarDemo />} />
              <Route path="/payment-links" element={<PaymentLinks />} /> {/* Add this line */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App