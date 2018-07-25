const initialState = [
  {
    id: 1,
    name: 'IPhone 7',
    image:
      'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description: 'Mo ta 1',
    price: 500,
    rating: 4,
    inventory: 10
  },
  {
    id: 2,
    name: 'IPhone 6s',
    image:
      'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description: 'Mo ta 1',
    price: 300,
    rating: 5,
    inventory: 10
  },
];

const product = (state = initialState, action) => {
  switch (action.types) {
    default:
      return [...state];
  }
};

export default product;
