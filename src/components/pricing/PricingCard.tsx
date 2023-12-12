import React from 'react';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className={styles.pricingCard}>
      <h2>{title}</h2>
      <p className={styles.price}>{price}</p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={styles.purchaseButton}>Purchase</button>

    </div>
  );
};

export default PricingCard;