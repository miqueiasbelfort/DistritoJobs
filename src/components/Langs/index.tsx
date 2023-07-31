import styles from './Langs.module.css';

interface Props {
    lang: string
}

function langs({lang}: Props) {
  return (
    <div className={styles.container}>{lang}</div>
  )
}

export default langs;