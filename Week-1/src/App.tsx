import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';
import { FormDataProvider } from './context/FormDataContext';

function App() {
  return (
    <FormDataProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/success" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </Router>
    </FormDataProvider>
  );
}

export default App;