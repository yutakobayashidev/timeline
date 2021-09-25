import { ContentWrapper } from '../components/ContentWrapper';
import styles from '../styles/components/SiteFooter.module.scss';

export const SiteFooter = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
        <a href="https://github.com/yutakobayashidev/timeline" className={styles.link}>
          Source code is open on GitHub
        </a>
      </div>
    </ContentWrapper>
  );
};
