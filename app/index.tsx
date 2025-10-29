import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
// Ícones para React Native. É preciso ter 'react-native-vector-icons' instalado.
import Icon from "react-native-vector-icons/Ionicons";

// Cores do Tema
const colors = {
  background: "#111827", // bg-gray-900
  card: "#1F2937", // bg-gray-800
  text: "#F9FAFB", // text-gray-100
  textSecondary: "#D1D5DB", // text-gray-300
  textMuted: "#9CA3AF", // text-gray-400
  primary: "#EF4444", // text-red-500
  primaryHover: "#DC2626", // bg-red-600
  accent: "#3B82F6", // bg-blue-600
  border: "#374151", // border-gray-700
  blackTransparent: "rgba(0, 0, 0, 0.8)",
  white: "#FFFFFF",
  green: "#22C55E", // text-green-500
};

/**
 * Componente: Botão da Barra de Navegação
 */
function NavItem({ iconName, label, isActive, onPress }) {
  const activeColor = isActive ? colors.primary : colors.textMuted;
  return (
    <TouchableOpacity onPress={onPress} style={styles.navItem}>
      <Icon name={iconName} size={24} color={activeColor} />
      <Text style={[styles.navLabel, { color: activeColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

/**
 * Componente: Barra de Navegação Inferior
 */
function BottomNav({ activeView, setActiveView }) {
  return (
    <View style={styles.bottomNavContainer}>
      <NavItem
        iconName={activeView === "home" ? "home" : "home-outline"}
        label="Home"
        isActive={activeView === "home"}
        onPress={() => setActiveView("home")}
      />
      <NavItem
        iconName={activeView === "chat" ? "chatbubbles" : "chatbubbles-outline"}
        label="Chat"
        isActive={activeView === "chat"}
        onPress={() => setActiveView("chat")}
      />
      <NavItem
        iconName={activeView === "calendar" ? "calendar" : "calendar-outline"}
        label="Calendário"
        isActive={activeView === "calendar"}
        onPress={() => setActiveView("calendar")}
      />
      <NavItem
        iconName={activeView === "financial" ? "cash" : "cash-outline"}
        label="Financeiro"
        isActive={activeView === "financial"}
        onPress={() => setActiveView("financial")}
      />
    </View>
  );
}

// --- Definição das Telas (Views) ---

function HomeView() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.h2}>Bem-vindo, Lutador!</Text>
      <Text style={styles.p}>
        Seu progresso é nossa missão. Pronto para o próximo desafio?
      </Text>

      {/* Card de Próximo Treino */}
      <View style={styles.card}>
        <Text style={styles.h3Primary}>Próximo Treino</Text>
        <Text style={styles.p}>
          <Text style={{ fontWeight: "bold" }}>Hoje às 19:00</Text> - Jiu-Jitsu
          (Avançado)
        </Text>
        <Text style={styles.pMutedSmall}>com Mestre Silva</Text>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Confirmar Presença</Text>
        </TouchableOpacity>
      </View>

      {/* Card de Avisos */}
      <View style={styles.card}>
        <Text style={styles.h3}>Avisos</Text>
        <Text style={styles.pSecondary}>
          Sábado (30/10) haverá um seminário especial de Muay Thai. Inscrições
          abertas!
        </Text>
      </View>
    </View>
  );
}

function ChatView() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.h2}>Chat</Text>
      <View
        style={[styles.card, { alignItems: "center", paddingVertical: 32 }]}
      >
        <Icon name="chatbubbles-outline" size={64} color={colors.textMuted} />
        <Text style={[styles.h3, { marginTop: 16 }]}>Canal da Equipe</Text>
        <Text style={styles.pMuted}>
          O chat em grupo será ativado em breve. Fique atento!
        </Text>
      </View>
    </View>
  );
}

function CalendarView() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.h2}>Calendário de Aulas</Text>
      <View style={styles.card}>
        <View style={styles.calendarEntry}>
          <Text style={styles.h3Primary}>Segunda-Feira</Text>
          <Text style={styles.pSecondary}>18:00 - Muay Thai (Iniciante)</Text>
          <Text style={styles.pSecondary}>19:00 - Jiu-Jitsu (Todos)</Text>
          <Text style={styles.pSecondary}>20:00 - Boxe (Avançado)</Text>
        </View>
        <View style={styles.calendarEntry}>
          <Text style={styles.h3Primary}>Terça-Feira</Text>
          <Text style={styles.pSecondary}>18:00 - Boxe (Iniciante)</Text>
          <Text style={styles.pSecondary}>19:00 - Jiu-Jitsu (Sem Kimono)</Text>
        </View>
        <View style={styles.calendarEntry}>
          <Text style={styles.h3Primary}>Quarta-Feira</Text>
          <Text style={styles.pSecondary}>18:00 - Muay Thai (Iniciante)</Text>
          <Text style={styles.pSecondary}>19:00 - Jiu-Jitsu (Todos)</Text>
          <Text style={styles.pSecondary}>20:00 - Boxe (Avançado)</Text>
        </View>
      </View>
    </View>
  );
}

function FinancialView() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.h2}>Financeiro</Text>
      <View style={styles.card}>
        <Text style={[styles.h3, { marginBottom: 12 }]}>Sua Situação</Text>
        <View style={styles.financialRow}>
          <Text style={styles.pMuted}>Mensalidade (Outubro):</Text>
          <Text style={styles.pGreenBold}>PAGO</Text>
        </View>
        <View style={styles.financialRow}>
          <Text style={styles.pMuted}>Vencimento (Novembro):</Text>
          <Text style={styles.pSecondary}>10/11/2025</Text>
        </View>

        <TouchableOpacity style={styles.buttonAccent}>
          <Text style={styles.buttonText}>Pagar próxima fatura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Ver histórico de pagamentos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/**
 * Componente Principal: App
 */
export default function App() {
  const [activeView, setActiveView] = useState("home");

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
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      {/* Cabeçalho Fixo */}
      <View style={styles.headerContainer}>
        <Icon name="shield" size={28} color={colors.primary} />
        <Text style={styles.headerTitle}>LN App</Text>
      </View>

      {/* Área de Conteúdo Principal com Rolagem */}
      <ScrollView
        style={styles.contentScrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {renderView()}
      </ScrollView>

      {/* Menu de Navegação Inferior */}
      <BottomNav activeView={activeView} setActiveView={setActiveView} />
    </SafeAreaView>
  );
}

/**
 * StyleSheet
 * Aqui ficam todos os estilos do aplicativo, similar ao CSS.
 */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // Cabeçalho
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.blackTransparent,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
    marginLeft: 12,
  },
  // Conteúdo
  contentScrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  viewContainer: {
    marginBottom: 24,
  },
  // Navegação Inferior
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    backgroundColor: colors.blackTransparent,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    padding: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 2,
  },
  // Tipografia
  h2: {
    fontSize: 28,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 16,
  },
  h3: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  h3Primary: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  p: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 24,
  },
  pSecondary: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  pMuted: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: 8,
  },
  pMutedSmall: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
  },
  pGreenBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green,
  },
  // Cards
  card: {
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Botões
  buttonPrimary: {
    backgroundColor: colors.primaryHover,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonAccent: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  buttonSecondary: {
    backgroundColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  // Específicos
  calendarEntry: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  financialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
});
