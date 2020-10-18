import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'The Chick-fil-A classic.',
    media: '/static/images/products/product_1.png',
    title: 'Chicken Sandwich',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'The spicy twist to Chick-fil-A\'s classic.',
    media: '/static/images/products/product_2.png',
    title: 'Spicy Chicken Sandwich',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Our deep fried and breaded delicacies.',
    media: '/static/images/products/product_3.png',
    title: 'Chicken Nuggets',
    totalDownloads: '357'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Quarter turning potato fries usually sold with sandwich combos.',
    media: '/static/images/products/product_4.png',
    title: 'Waffle Fries',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Although new on the menu, our cheesy macaroni is skyrocketing in popularity.',
    media: '/static/images/products/product_5.png',
    title: 'Mac & Cheese',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Our most popular drink, filled with Southern hospitality.',
    media: '/static/images/products/product_6.png',
    title: 'Sweet Tea',
    totalDownloads: '835'
  }
];
