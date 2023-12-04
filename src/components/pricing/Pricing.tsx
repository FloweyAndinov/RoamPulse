import React from 'react';
import PricingCard from './PricingCard';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
  return (
    <div className={styles.pricingPage}>
      <h1>Choose a Plan</h1>

      <div className={styles.pricingCards}>
        <PricingCard
          title="Basic"
          price="$9.99/month"
          features={['Event Locator', 'AI Maps', 'Reviews']}
        />

        <PricingCard
          title="Standard"
          price="$19.99/month"
          features={['Event Locator', 'AI Maps', 'Reviews' , 'Local Words']}
        />

        <PricingCard
          title="Premium"
          price="$29.99/month"
          features={['Event Locator', 'AI Maps', 'Reviews' , 'Local Words', 'Power Orders']}
        />
      </div>
    </div>
  );
};

export default Pricing;