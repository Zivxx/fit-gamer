import { Card, Grid } from '@mui/material';
import styles from './image-text-row.module.css';

type ImageTextRowProps = {
  imageUrl: string;
  imageAlign: 'left' | 'right';
  text: string;
};

const ImageTextRow = (props: ImageTextRowProps) => {
  return (
    <Card style={{ marginTop: '20px', padding: '20px' }}>
      <Grid container spacing={2}>
        {props.imageAlign === 'left' && (
          <Grid item xs={12} md={4}>
            <div
              className={styles['row-image']}
              style={{
                backgroundImage: 'url(' + props.imageUrl + ')',
              }}
            ></div>
          </Grid>
        )}
        <Grid item xs={12} md={8}>
          <p style={{ fontSize: '30px' }}>{props.text}</p>
        </Grid>
        {props.imageAlign === 'right' && (
          <Grid item xs={12} md={4}>
            <div
              className={styles['row-image']}
              style={{
                backgroundImage: 'url(' + props.imageUrl + ')',
              }}
            ></div>
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default ImageTextRow;
