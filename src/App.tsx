import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, PiggyBank, Plus } from 'lucide-react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SavingsTips from './components/SavingsTips';
import BudgetSummary from './components/BudgetSummary';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'income', amount: 5000, category: 'راتب', date: '2024-03-01' },
    { id: 2, type: 'expense', amount: 1500, category: 'إيجار', date: '2024-03-02' },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
    setShowForm(false);
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wallet className="w-10 h-10 text-emerald-600" />
            <h1 className="text-4xl font-bold text-gray-800">إدارة الميزانية</h1>
          </div>
          <p className="text-gray-600">تحكم في مصاريفك وحقق أهدافك المالية</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <BudgetSummary 
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">المعاملات</h2>
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  إضافة معاملة
                </button>
              </div>
              
              {showForm && (
                <TransactionForm 
                  onSubmit={addTransaction}
                  onCancel={() => setShowForm(false)}
                />
              )}

              <TransactionList transactions={transactions} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <SavingsTips />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;