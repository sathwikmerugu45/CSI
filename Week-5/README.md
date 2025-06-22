# React Admin Dashboard

An **Admin Dashboard** application built using **React + TypeScript**, featuring:

✅ Customizable Themes  
✅ Interactive Kanban Board  
✅ Responsive Calendar with Event Modal  
✅ Data-rich Tables with Modal  
✅ Analytics Charts  
✅ Settings Management  
✅ Smooth UI & Seamless UX

---

## 🚀 Project Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sathwikmerugu45/CSI.git
cd Week-5
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Run Development Server
bash
Copy
Edit
npm run dev
Visit: http://localhost:5173

4️⃣ Build for Production
bash
Copy
Edit
npm run build
🗂 Project Structure & Code Explanation
pgsql
Copy
Edit
src/
├── components/
│   ├── calendar/         # Calendar & Event Modal
│   ├── charts/           # Analytics Charts (e.g., line, bar, pie charts)
│   ├── dashboard/        # Dashboard overview with metric cards
│   ├── kanban/           # Fully interactive Kanban board
│   ├── layout/           # App Layout (Header, Sidebar, Layout wrapper)
│   ├── settings/         # Settings screen
│   ├── tables/           # Data Tables with Modal
│
├── contexts/             # React Context (Global State & Theme)
├── data/                 # Static Mock Data
├── hooks/                # Custom React Hooks (useLocalStorage)
├── types/                # TypeScript types
├── App.tsx               # Root App Component
├── main.tsx              # Entry Point
🛠️ Logic & Implementation
1️⃣ Theming & Context
ThemeContext manages light/dark mode and stores theme preference in localStorage using useLocalStorage hook.

Global app state is managed via DataContext for cross-component communication.

2️⃣ Layout
Layout.tsx wraps the entire app.

Sidebar.tsx handles navigation across Dashboard, Kanban, Calendar, Tables, Settings.

Header.tsx provides quick action buttons (theme toggle, user info).

3️⃣ Kanban Board
KanbanBoard.tsx displays all columns and tasks.

KanbanColumn.tsx renders individual columns with draggable cards.

KanbanCard.tsx displays task details.

TaskModal.tsx allows editing or creating new tasks.

Drag & Drop can be implemented using react-beautiful-dnd or similar libraries.

4️⃣ Calendar
Calendar.tsx displays monthly/weekly calendar.

EventModal.tsx allows adding/updating/deleting events.

Events are persisted in localStorage or backend (if connected).

5️⃣ Dashboard & Charts
DashboardOverview.tsx displays overall stats.

MetricsCard.tsx shows quick KPIs.

AnalyticsCharts.tsx renders interactive charts using a charting library (Chart.js, Recharts, etc).

6️⃣ Data Table
DataTable.tsx displays tabular data with sorting, filtering, pagination.

UserModal.tsx allows editing user details.

7️⃣ Settings
Settings.tsx allows updating app configurations and preferences.

8️⃣ Custom Hook: useLocalStorage
Encapsulates the logic of syncing state with browser localStorage.

Used for persisting theme and user settings.

9️⃣ Mock Data
mockData.ts provides initial data for Dashboard, Kanban, Tables without needing a backend.

🧩 Technologies Used
React + TypeScript

Vite for fast development

TailwindCSS for styling

React Context API for global state

Chart.js / Recharts for charts

react-beautiful-dnd (recommended) for Kanban drag-and-drop

React Calendar / FullCalendar (optional) for Calendar implementation

React Modal for modals