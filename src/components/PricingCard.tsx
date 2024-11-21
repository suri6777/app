import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
  return (
    <Card className={`relative ${isPopular ? 'border-2 border-blue-500' : ''}`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-4">{price}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant={isPopular ? 'primary' : 'outline'} className="w-full">
          Get Started
        </Button>
      </div>
    </Card>
  );
}