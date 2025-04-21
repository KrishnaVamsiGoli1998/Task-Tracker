import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Analytics from './pages/Analytics';
import AuditLogs from './pages/AuditLogs';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ marginLeft: '300px', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/audit" element={<AuditLogs />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
