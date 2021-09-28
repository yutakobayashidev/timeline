import styles from '../styles/components/PageWrap.module.scss';

export const PageWrap: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return <div className={styles.PageWrapper}>{props.children}</div>;
};

export const UndoWrapForScroll: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className={styles.undoWrapForScroll}>{props.children}</div>;
};
