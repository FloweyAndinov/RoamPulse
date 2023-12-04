import React from 'react';
import PricingCard from './PricingCard';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
  return (
    <div className={styles.pricingPage}>
      <h1>Choose a Plan</h1>

      <div className={styles.pricingCards}>
        <PricingCard
          title="Basic Plan"
          price="$9.99/month"
          features={['Feature 1', 'Feature 2', 'Feature 3']}
        />

        <PricingCard
          title="Standard Plan"
          price="$19.99/month"
          features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}
        />

        <PricingCard
          title="Premium Plan"
          price="$29.99/month"
          features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']}
        />
      </div>
    </div>
  );
};

export default Pricing;