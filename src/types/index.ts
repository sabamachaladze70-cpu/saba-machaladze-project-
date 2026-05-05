export interface Tour {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  destination: string;
  duration: string;
  price: number;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
