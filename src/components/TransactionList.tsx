import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${
              transaction.type === 'income' 
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            }`}>
              {transaction.type === 'income' ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
            </div>
            <div>
              <p className="font-medium text-gray-900">{transaction.category}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
          <p className={`font-semibold ${
            transaction.type === 'income'
              ? 'text-green-600'
              : 'text-red-600'
          }`}>
            {transaction.type === 'income' ? '+' : '-'} {transaction.amount} ريال
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;