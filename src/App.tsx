import React, { useState } from 'react';
import { Search, PlusCircle, Shield, Sun, Moon } from 'lucide-react';
import CertificateForm from './components/CertificateForm';
import CertificateVerifier from './components/CertificateVerifier';
import BlockchainVisualizer from './components/BlockchainVisualizer';

function App() {
  const [activeTab, setActiveTab] = useState<'issue' | 'verify' | 'visualize'>('issue');
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">CertSecure</span>
            </div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('issue')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'issue'
                    ? 'border-emerald-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Issue Certificate
              </button>
              <button
                onClick={() => setActiveTab('verify')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'verify'
                    ? 'border-emerald-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                <Search className="w-4 h-4 mr-2" />
                Verify Certificate
              </button>
              <button
                onClick={() => setActiveTab('visualize')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'visualize'
                    ? 'border-emerald-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                <Shield className="w-4 h-4 mr-2" />
                Blockchain Visualizer
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'issue' && <CertificateForm />}
        {activeTab === 'verify' && <CertificateVerifier />}
        {activeTab === 'visualize' && <BlockchainVisualizer />}
      </main>
    </div>
  );
}

export default App;