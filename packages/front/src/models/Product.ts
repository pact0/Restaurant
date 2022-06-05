export interface Product {
  id: string;
  name: string;
  category: string;
  allergens: {
    gluten: number;
    lactose: number;
    mushrooms: number;
    nuts: number;
    soya: number;
  };
  desc: string;
  image: string;
  nutrition: {
    fat: number;
    calories: number;
    carb: number;
    protein: number;
    sodium: number;
  };
  price: string;
}
