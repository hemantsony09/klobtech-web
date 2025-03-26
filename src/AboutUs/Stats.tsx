import React from 'react';
import { Users, Package, ShoppingCart, Briefcase } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, number: '3450', label: 'FOLLOWERS' },
    { icon: Package, number: '1000+', label: 'PRODUCTS' },
    { icon: ShoppingCart, number: '560', label: 'SALES' },
    { icon: Briefcase, number: '850', label: 'JOB EVENTS' },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, number, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-4 text-blue-600" size={40} />
              <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;