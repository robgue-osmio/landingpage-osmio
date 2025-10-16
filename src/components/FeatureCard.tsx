import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  delay?: number;
  variant?: 'default' | 'alternate';
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  badge, 
  delay = 0,
  variant = 'default'
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(41, 193, 182, 0.15)',
        transition: { duration: 0.3 }
      }}
      className={`relative p-8 rounded-[20px] transition-all duration-500 ${
        variant === 'alternate' ? 'bg-[#F0EFEC]' : 'bg-white'
      }`}
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)' }}
    >
      {badge && (
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-3 -right-3 bg-[#C9B8FF] text-[#1E2228] px-3 py-1 rounded-full uppercase tracking-wider"
          style={{ fontSize: '11px', fontWeight: 600 }}
        >
          {badge}
        </motion.div>
      )}
      
      <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-[#29C1B6] to-[#4FD6C6]">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="mb-3" style={{ color: '#1E2228' }}>
        {title}
      </h3>
      
      <p style={{ color: '#5A5F65', lineHeight: '1.6' }}>
        {description}
      </p>
    </motion.div>
  );
}
