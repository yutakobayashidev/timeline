import styles from '../styles/components/SiteHeader.module.scss';
import Link from 'next/link'

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerwrapper}>
        <div className={styles.header_inner}>
          <Link href="/">
            <a><h1 className={styles.title}>yutaKobayashi.dev</h1></a>
          </Link>
          <div className={styles.header__links}>
          <Link href="/about">
          <a className={styles.header__link}>About</a>
          </Link>
          <Link href="/blog">
          <a className={styles.header__link}>Blog</a>
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
