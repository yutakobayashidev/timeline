import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>
      <span>🪐</span>
      </div>
      <h1 className={styles.title}>Hi, I'm Yuta Kobayashi</h1>
      <p className={styles.description}>
      My hobbies are programming, music, and space, and I enrolled in N middle school in April.
      </p>
    </div>
  );
};
