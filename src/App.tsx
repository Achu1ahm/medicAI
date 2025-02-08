import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>        
        {/* Define the routes */}
        <Router>
          <Routes>
            {/* Public Route */}
            <Route path='/login' element={<Login />} />

            {/* Protected Routes */}
            <Route path="/doctor" element={<ProtectedRoute>
              <UserChat />
            </ProtectedRoute>} />

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/login" replace />} ></Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </Router>
      </div>
    </Router>
  );
}

export default App;
