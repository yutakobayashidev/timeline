import { ContentWrapper } from '../components/ContentWrapper';
import styles from '../styles/components/SiteFooter.module.scss';

export const SiteFooter = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
      This page is made with reference to<a href="https://github.com/catnose99/timeline" class="SiteFooter_link__1H0A6">catnose99/timeline</a>.
      </div>
    </ContentWrapper>
  );
};
