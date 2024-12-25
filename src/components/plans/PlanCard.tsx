import React from 'react';
import { Check, Star } from 'lucide-react';
import { Plan } from '../../types';
import { Button } from '../ui/Button';

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-8">
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center gap-1 bg-slate-800 text-white px-4 py-1 rounded-full text-sm">
            <Star className="h-4 w-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
      <p className="text-gray-600 mb-4">{plan.duration}</p>
      <div className="mb-6">
        <p className="text-4xl font-bold">{plan.price}</p>
        <p className="text-gray-500">per person</p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={plan.recommended ? 'primary' : 'secondary'}
        className="w-full bg-[#5a2a08] text-white hover:bg-[#5a2a08] transition-colors"
      >
        Select Plan
      </Button>
    </div>
  );
}
