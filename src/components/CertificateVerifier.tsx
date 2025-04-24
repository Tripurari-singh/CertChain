import React, { useState } from 'react';
import { format } from 'date-fns';
import { Search } from 'lucide-react';
import useBlockchainStore from '../lib/blockchain';

export default function CertificateVerifier() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchCertificates = useBlockchainStore(state => state.searchCertificates);
  const verifyChain = useBlockchainStore(state => state.verifyChain);
  const results = searchQuery ? searchCertificates(searchQuery) : [];
  const isChainValid = verifyChain();

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name or roll number..."
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 pl-10 pr-3 py-2 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {!isChainValid && (
        <div className="bg-red-50 dark:bg-red-900/50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700 dark:text-red-200">
                Warning: The blockchain has been tampered with. Certificates may not be valid.
              </p>
            </div>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {results.map((block) => (
              <li key={block.hash} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {block.certificate.studentName}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Roll Number</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.rollNumber}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Degree</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.degree}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Marks</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.marks}%</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Institution</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.institutionName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Issue Date</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                        {format(block.certificate.issueDate, 'PPP')}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Certificate Hash</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 font-mono">{block.hash}</dd>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchQuery && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">No certificates found matching your search.</p>
        </div>
      )}
    </div>
  );
}