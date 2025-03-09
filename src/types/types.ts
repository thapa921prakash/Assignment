export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  barcode: string;
  createdAt: string;
  qrCode: string;
  updatedAt: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
}
export interface ProductsResponse {
  data: number;
}

export interface Product {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: Meta;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

export interface ProductsResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
