import React from 'react';
import { format } from 'date-fns';
import useBlockchainStore from '../lib/blockchain';

export default function BlockchainVisualizer() {
  const chain = useBlockchainStore(state => state.chain);

  if (chain.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">No blocks in the chain yet. Start by issuing a certificate.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {chain.map((block, index) => (
        <div key={block.hash} className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Block #{index + 1}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {format(block.timestamp, 'PPpp')}
              </span>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Student Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.studentName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Roll Number</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.rollNumber}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Degree</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.degree}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Institution</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200">{block.certificate.institutionName}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Hash</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 font-mono break-all">{block.hash}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Previous Hash</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 font-mono break-all">{block.previousHash}</dd>
                </div>
              </dl>
            </div>

            {index < chain.length - 1 && (
              <div className="flex justify-center mt-4">
                <svg className="h-8 w-8 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}