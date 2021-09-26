import { ContentWrapper } from '../components/ContentWrapper';
import styles from '../styles/components/SiteFooter.module.scss';

export const SiteFooter = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
      <a href="https://github.com/catnose99/timeline">This page is made with reference to catnose99/timeline</a>.
      </div>
    </ContentWrapper>
  );
};
