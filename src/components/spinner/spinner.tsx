import { CircularProgress } from '@mui/material';

import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinner__container}>
      <CircularProgress />
    </div>
  );
}
