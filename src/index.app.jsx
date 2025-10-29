import React, { useState } from "react";
// Importa os ícones da biblioteca lucide-react
import {
  Home,
  MessageSquare,
  Calendar,
  DollarSign,
  Shield,
} from "lucide-react";

/**
 * Componente: Botão da Barra de Navegação
 * Um botão individual para o menu inferior.
 */
function NavItem({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-20 p-2 rounded-lg transition-all duration-200 ${
        isActive
          ? "text-red-500" // Cor quando ativo
          : "text-gray-400 hover:text-white" // Cor quando inativo
      }`}
    >
      <Icon className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

/**
 * Componente: Barra de Navegação Inferior
 * Contém os quatro botões principais do app.
 */
function BottomNav({ activeView, setActiveView }) {
  // Definição dos itens do menu
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "calendar", label: "Calendário", icon: Calendar },
    { id: "financial", label: "Financeiro", icon: DollarSign },
  ];

  return (
    // 'sticky bottom-0' garante que o menu fique fixo na parte inferior
    <nav className="sticky bottom-0 w-full bg-black/80 backdrop-blur-sm border-t border-gray-700 p-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeView === item.id}
            onClick={() => setActiveView(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}

// --- Definição das Telas (Views) ---

function HomeView() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-white">Bem-vindo, Lutador!</h2>
      <p className="text-gray-300">
        Seu progresso é nossa missão. Pronto para o próximo desafio?
      </p>

      {/* Card de Próximo Treino */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-bold text-red-500 mb-2">Próximo Treino</h3>
        <p className="text-gray-200">
          <span className="font-semibold">Hoje às 19:00</span> - Jiu-Jitsu
          (Avançado)
        </p>
        <p className="text-gray-400 text-sm mt-1">com Mestre Silva</p>
        <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Confirmar Presença
        </button>
      </div>

      {/* Card de Avisos */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-2">Avisos</h3>
        <p className="text-gray-300">
          Sábado (30/10) haverá um seminário especial de Muay Thai. Inscrições
          abertas!
        </p>
      </div>
    </div>
  );
}

function ChatView() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-white">Chat</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 text-center">
        <MessageSquare className="w-16 h-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white">Canal da Equipe</h3>
        <p className="text-gray-400 mt-2">
          O chat em grupo será ativado em breve. Fique atento!
        </p>
      </div>
    </div>
  );
}

function CalendarView() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-white">Calendário de Aulas</h2>

      {/* Lista de Aulas */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 divide-y divide-gray-700">
        <div className="p-4">
          <h3 className="font-bold text-red-500">Segunda-Feira</h3>
          <p className="text-gray-300">18:00 - Muay Thai (Iniciante)</p>
          <p className="text-gray-300">19:00 - Jiu-Jitsu (Todos)</p>
          <p className="text-gray-300">20:00 - Boxe (Avançado)</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-red-500">Terça-Feira</h3>
          <p className="text-gray-300">18:00 - Boxe (Iniciante)</p>
          <p className="text-gray-300">19:00 - Jiu-Jitsu (Sem Kimono)</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-red-500">Quarta-Feira</h3>
          <p className="text-gray-300">18:00 - Muay Thai (Iniciante)</p>
          <p className="text-gray-300">19:00 - Jiu-Jitsu (Todos)</p>
          <p className="text-gray-300">20:00 - Boxe (Avançado)</p>
        </div>
      </div>
    </div>
  );
}

function FinancialView() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-white">Financeiro</h2>

      {/* Status da Mensalidade */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-3">Sua Situação</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Mensalidade (Outubro):</span>
          <span className="font-bold text-lg text-green-500">PAGO</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Vencimento (Novembro):</span>
          <span className="font-medium text-gray-200">10/11/2025</span>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
          Pagar próxima fatura
        </button>
        <button className="mt-3 w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">
          Ver histórico de pagamentos
        </button>
      </div>
    </div>
  );
}

/**
 * Componente Principal: App
 * Controla o estado de qual tela está ativa e renderiza
 * o cabeçalho, o conteúdo principal e a navegação.
 */
export default function App() {
  // Estado para controlar a tela ativa. 'home' é a tela inicial.
  const [activeView, setActiveView] = useState("home");

  // Função para renderizar a tela correta com base no estado 'activeView'
  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView />;
      case "chat":
        return <ChatView />;
      case "calendar":
        return <CalendarView />;
      case "financial":
        return <FinancialView />;
      default:
        return <HomeView />;
    }
  };

  return (
    // Container principal do app, com tema escuro
    <div className="h-screen w-full bg-gray-900 text-gray-100 flex flex-col font-sans">
      {/* Cabeçalho Fixo */}
      <header className="sticky top-0 w-full bg-black/80 backdrop-blur-sm shadow-md z-10">
        <div className="max-w-md mx-auto p-4 flex items-center space-x-3">
          <Shield className="w-8 h-8 text-red-500" />
          <h1 className="text-2xl font-bold text-white">CT LadoNegro</h1>
        </div>
      </header>

      {/* Área de Conteúdo Principal */}
      {/* 'flex-1' faz com que ocupe o espaço restante */}
      {/* 'overflow-y-auto' permite rolar o conteúdo se for maior que a tela */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-md mx-auto">{renderView()}</div>
      </main>

      {/* Menu de Navegação Inferior */}
      <BottomNav activeView={activeView} setActiveView={setActiveView} />

      {/* CSS para a animação de Fade-in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
