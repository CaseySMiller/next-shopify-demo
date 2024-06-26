// this holds the description, loads the varriant-selector component, and has the add to cart button

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ 
  product,
  variantObject
}: { 
  product: Product; 
  variantObject?: { [key: string]: string | string[] | undefined } | undefined;
}) {
  
  // function to return the price of the variant based on the variantObject key/value
  const getVariantPrice = (variantObject: { [key: string]: string | string[] | undefined } | undefined ) => {
    // the value of the first key in the vaiantObject will be the variant title
    const firstValue = variantObject ? Object.values(variantObject)[0] : undefined;
    if (typeof firstValue === 'string') {
      const variant = product.variants.find((variant) => variant.title === firstValue);

      if (variant) {
        return variant.price.amount;
      }
    }
  };

  const price = getVariantPrice(variantObject);
  
  

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={price}
            minAmount={product.priceRange.minVariantPrice.amount}
            maxAmount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>
    </>
  );
}
