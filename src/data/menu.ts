export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: string[];
  origin?: string;
  pairing?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}
