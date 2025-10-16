import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  promise: string;
  price: string;
  cta: string;
  features: string[];
  delay?: number;
  featured?: boolean;
}

export function PricingCard({
  name,
  promise,
  price,
  cta,
  features,
  delay = 0,
  featured = false
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8,
        boxShadow: featured 
          ? '0 30px 60px rgba(41, 193, 182, 0.25)' 
          : '0 20px 40px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
      className={`relative p-8 rounded-[20px] ${
        featured 
          ? 'bg-gradient-to-br from-[#29C1B6] to-[#4FD6C6] text-white' 
          : 'bg-white'
      }`}
      style={{ 
        boxShadow: featured 
          ? '0 10px 30px rgba(41, 193, 182, 0.2)' 
          : '0 4px 20px rgba(0, 0, 0, 0.06)' 
      }}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C9B8FF] text-[#1E2228] px-4 py-1 rounded-full uppercase tracking-wider"
          style={{ fontSize: '11px', fontWeight: 600 }}
        >
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`mb-2 ${featured ? 'text-white' : 'text-[#1E2228]'}`}>
          {name}
        </h3>
        <p className={`${featured ? 'text-white/90' : 'text-[#5A5F65]'}`}>
          {promise}
        </p>
      </div>
      
      <div className="mb-6">
        <div className={`flex items-baseline gap-2 ${featured ? 'text-white' : 'text-[#1E2228]'}`}>
          {price === 'Custom' ? (
            <span className="text-3xl" style={{ fontWeight: 600 }}>{price}</span>
          ) : price === 'Free' ? (
            <span className="text-3xl" style={{ fontWeight: 600 }}>{price}</span>
          ) : (
            <>
              <span className="text-3xl" style={{ fontWeight: 600 }}>{price}</span>
              <span className={featured ? 'text-white/70' : 'text-[#5A5F65]'}>/month</span>
            </>
          )}
        </div>
      </div>
      
      <Button 
        className={`w-full mb-6 uppercase tracking-wider ${
          featured 
            ? 'bg-white text-[#29C1B6] hover:bg-white/90' 
            : 'bg-gradient-to-r from-[#29C1B6] to-[#4FD6C6] text-white hover:opacity-90'
        }`}
        style={{ fontWeight: 500 }}
      >
        {cta}
      </Button>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              featured ? 'text-white' : 'text-[#29C1B6]'
            }`} />
            <span className={featured ? 'text-white/90' : 'text-[#5A5F65]'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
