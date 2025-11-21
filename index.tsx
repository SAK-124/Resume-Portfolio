import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

console.log('System initializing...');

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('CRITICAL ERROR: Root element not found!');
} else {
  console.log('Root element found, mounting React app...');
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
    console.log('React app mounted successfully.');
  } catch (e) {
    console.error('Failed to mount React app:', e);
  }
}