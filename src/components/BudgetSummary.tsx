import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

interface BudgetSummaryProps {
  totalIncome: number;
  totalExpenses: number;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ totalIncome, totalExpenses }) => {
  const balance = totalIncome - totalExpenses;

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Wallet className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-gray-800">الرصيد الحالي</h3>
        </div>
        <p className="text-3xl font-bold text-gray-900">{balance} ريال</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-800">إجمالي الدخل</h3>
        </div>
        <p className="text-3xl font-bold text-green-600">{totalIncome} ريال</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <TrendingDown className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-semibold text-gray-800">إجمالي المصروفات</h3>
        </div>
        <p className="text-3xl font-bold text-red-600">{totalExpenses} ريال</p>
      </div>
    </>
  );
};

export default BudgetSummary;