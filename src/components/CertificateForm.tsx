import React, { useState } from 'react';
import useBlockchainStore from '../lib/blockchain';
import type { Certificate } from '../types/blockchain';

export default function CertificateForm() {
  const addBlock = useBlockchainStore(state => state.addBlock);
  const [formData, setFormData] = useState<Omit<Certificate, 'issueDate'>>({
    studentName: '',
    rollNumber: '',
    degree: '',
    marks: 0,
    institutionName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlock({
      ...formData,
      issueDate: new Date()
    });
    setFormData({
      studentName: '',
      rollNumber: '',
      degree: '',
      marks: 0,
      institutionName: ''
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Issue New Certificate</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Student Name
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={e => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Roll Number
            </label>
            <input
              type="text"
              required
              value={formData.rollNumber}
              onChange={e => setFormData(prev => ({ ...prev, rollNumber: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Degree
            </label>
            <input
              type="text"
              required
              value={formData.degree}
              onChange={e => setFormData(prev => ({ ...prev, degree: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Marks
            </label>
            <input
              type="number"
              required
              min="0"
              max="100"
              value={formData.marks}
              onChange={e => setFormData(prev => ({ ...prev, marks: Number(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Institution Name
            </label>
            <input
              type="text"
              required
              value={formData.institutionName}
              onChange={e => setFormData(prev => ({ ...prev, institutionName: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-emerald-500 to-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300"
          >
            Issue Certificate
          </button>
        </div>
      </form>
    </div>
  );
}