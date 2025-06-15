import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import { Layout } from './components/layout/Layout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { DataTable } from './components/tables/DataTable';
import { AnalyticsCharts } from './components/charts/AnalyticsCharts';
import { Calendar } from './components/calendar/Calendar';
import { KanbanBoard } from './components/kanban/KanbanBoard';
import { Settings } from './components/settings/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'tables':
        return <DataTable />;
      case 'charts':
        return <AnalyticsCharts />;
      case 'calendar':
        return <Calendar />;
      case 'kanban':
        return <KanbanBoard />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <ThemeProvider>
      <DataProvider>
        <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
          {renderContent()}
        </Layout>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;