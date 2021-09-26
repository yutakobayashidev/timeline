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
        You can follow{' '}
        <a href="https://twitter.com/yutakobayashi">
          @yutakobayashi
          <TwitterIcon width={18} height={18} />
        </a>{' '}
        if you like.
      </p>
    </div>
  );
};
