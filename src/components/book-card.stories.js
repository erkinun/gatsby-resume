import React from 'react'
import BookCard from './book-card'

export default {
  title: 'Components/BookCard',
}

export const bookCardStory = () => (
  <BookCard
    title="THINKING FAST AND SLOW"
    date={new Date(2020, 6, 20).toLocaleDateString()}
    score={10}
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque id nibh sed faucibus. Donec sed finibus lectus. Fusce et magna sit amet lectus volutpat luctus porttitor id quam. Nunc consequat tellus vel euismod placerat. Aenean turpis ante, lobortis in placerat ut, tristique eget leo. Fusce faucibus vitae ligula vitae mollis. Morbi dignissim tincidunt purus quis rutrum. Sed pharetra ligula in est elementum pharetra vel vel tellus. Maecenas ullamcorper volutpat massa vel fringilla. Cras vel libero at enim venenatis facilisis in sit amet arcu. Fusce faucibus vitae magna vitae dapibus. Donec ex justo, mollis at eros efficitur, venenatis consectetur justo."
    links={{
      amazonLink: 'http://amazon.co.uk',
      goodreadsLink: 'http://goodreads.com',
    }}
    postLink="/books"
  />
)
