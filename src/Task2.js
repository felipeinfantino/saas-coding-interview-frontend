import { useEffect } from 'react';

const products = [
  {
    name: 'concert a',
    type: 'TICKETS',
    quality: 30,
    sellIn: 12,
  },
  {
    name: 'concert b',
    type: 'TICKETS',
    quality: 30,
    sellIn: 8,
  },
  {
    name: 'concert c',
    type: 'TICKETS',
    quality: 30,
    sellIn: 1,
  },
  {
    name: 'macbook',
    type: 'NORMAL',
    quality: 30,
    sellIn: 0,
    isSecondHand: false,
  },
  {
    name: 'monitor',
    type: 'NORMAL',
    quality: 30,
    sellIn: 2,
    isSecondHand: false,
  },
  {
    name: 'keyboard',
    type: 'NORMAL',
    quality: 0,
    sellIn: 2,
    isSecondHand: false,
  },
  {
    name: 'mouse',
    type: 'NORMAL',
    quality: 20,
    sellIn: 5,
    isSecondHand: true,
  },
];

export function Task2() {
  useEffect(() => {
    const updated = updateQuality(products);
    console.log(updated)
  }, []);
  return null;
}

export function updateQuality(products) {
  return products.map(product => {
    if (product.type === "TICKETS") {
      updateTicket(product)
    } else {
      updateNormal(product)
    }

    if (product.sellIn <= 0) {
      product.sellIn = 0;
    }

    if (product.quality <= 0) {
      product.quality = 0;
    }

    return product

  })
  
}

function updateTicket(product) {
  if (product.sellIn >= 10) {
    product.quality += 1;
    product.sellIn -= 1;
    return;
  }
  if (product.sellIn < 10 && product.sellIn > 1) {
    product.quality += 2;
    product.sellIn -= 1;
    return;
  }
  if (product.sellIn <= 1) {
    product.quality = 0;
    product.sellIn = 0;
    return;
  }
}

function updateNormal(product) {
  if ( (product.sellIn <= 0 && product.quality > 0) || product.isSecondHand  ) {
    product.quality -= 2;
    product.sellIn -= 1;
    return;
  }

  if( product.sellIn > 0 && product.quality == 0) {
    product.quality = 0;
    product.sellIn -= 1;
    return;
   }

   if (product.sellIn > 0 && product.quality > 0) {
    product.quality -= 1;
    product.sellIn -= 1;
    return;
  }

}


