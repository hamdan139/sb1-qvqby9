import React from 'react';
import { PiggyBank, LightbulbIcon } from 'lucide-react';

const SavingsTips: React.FC = () => {
  const tips = [
    'ضع ميزانية شهرية وحاول الالتزام بها',
    'ادخر 20% من دخلك الشهري',
    'قلل من المصروفات غير الضرورية',
    'استخدم تطبيقات التوفير للتسوق',
    'قارن الأسعار قبل الشراء',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-yellow-100 rounded-lg">
          <LightbulbIcon className="w-6 h-6 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">نصائح للتوفير</h2>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3">
            <PiggyBank className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
            <p className="text-gray-600">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingsTips;