type WithNull<T> = {
  [P in keyof T]: T[P] | null;
};

interface BaseProduct {
  title: string;
  description: string;
  price: string;
  currency: string;
}

type BaseProductWithNull = WithNull<BaseProduct>;

type BaseProductImage = WithNull<{
  alt: string;
  src: string;
}>;

type Product = BaseProductWithNull & {
  id: string;
  img: BaseProductImage;
};
