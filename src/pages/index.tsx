import { Card } from '@mui/material';

import Carousel from '~/components/carousel/carousel';
import ImageTextRow from '~/components/image-text-row/image-text-row';

const slides = [
  {
    text: 'San Francisco – Oakland Bay Bridge, United States',
    imageUrl: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598',
  },
  {
    text: 'Bird',
    imageUrl: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7',
  },
  {
    text: 'Bali, Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    text: 'Goč, Serbia',
    imageUrl: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8',
  },
];

const content = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&h=250',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, turpis ut elementum placerat,' +
      'augue mi dictum nibh, vel euismod felis dolor nec est. Sed rutrum urna et scelerisque rhoncus. Integer' +
      'ipsum metus, facilisis sodales rutrum vitae, viverra eget elit. Praesent eu erat consectetur, efficitur' +
      'tellus non, laoreet est. Duis aliquet velit at mattis aliquet. In sollicitudin accumsan blandit. Proin' +
      'libero urna, rutrum at dui id, tincidunt egestas neque. Integer vitae orci vel tortor aliquet fringilla.' +
      'Praesent at augue hendrerit nulla ultrices commodo. Fusce efficitur mattis sodales. Nulla libero magna,' +
      'dictum a purus ac, pharetra viverra ligula. Sed at velit ut ligula porta dignissim sed ac urna. Nullam' +
      'porta velit eget hendrerit aliquet. Nunc dignissim purus felis, venenatis accumsan orci molestie sed.' +
      'Nulla facilisi. Ut ut dolor at purus placerat tempus.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=500&h=250&q=60',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, turpis ut elementum placerat,' +
      'augue mi dictum nibh, vel euismod felis dolor nec est. Sed rutrum urna et scelerisque rhoncus. Integer' +
      'ipsum metus, facilisis sodales rutrum vitae, viverra eget elit. Praesent eu erat consectetur, efficitur' +
      'tellus non, laoreet est. Duis aliquet velit at mattis aliquet. In sollicitudin accumsan blandit. Proin' +
      'libero urna, rutrum at dui id, tincidunt egestas neque. Integer vitae orci vel tortor aliquet fringilla.' +
      'Praesent at augue hendrerit nulla ultrices commodo. Fusce efficitur mattis sodales. Nulla libero magna,' +
      'dictum a purus ac, pharetra viverra ligula. Sed at velit ut ligula porta dignissim sed ac urna. Nullam' +
      'porta velit eget hendrerit aliquet. Nunc dignissim purus felis, venenatis accumsan orci molestie sed.' +
      'Nulla facilisi. Ut ut dolor at purus placerat tempus.',
  },
];

export default function Home() {
  return (
    <>
      <div className='page__container'>
        <Carousel slides={slides} />
        {content.map((row, index) => (
          <ImageTextRow
            key={row.text}
            imageUrl={row.imageUrl}
            imageAlign={index % 2 === 0 ? 'left' : 'right'}
            text={row.text}
          />
        ))}
      </div>
    </>
  );
}
