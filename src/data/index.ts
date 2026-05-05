import type { Tour, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'მთავარი', path: '/' },
  { label: 'ტურები', path: '/tours' },
  { label: 'ჩვენ შესახებ', path: '/about' },
  { label: 'კონტაქტი', path: '/contact' },
];

export const tours: Tour[] = [
  {
    id: 1,
    title: 'კახეთის ღვინის ტური',
    description: 'დაათვალიერეთ სიღნაღი, ეწვიეთ ღვინის მარნებს და დააგემოვნეთ უგემრიელესი ქართული ღვინო.',
    imageUrl: 'https://images.unsplash.com/photo-1596706927553-9d06637373f7?auto=format&fit=crop&q=80&w=800',
    destination: 'კახეთი, საქართველო',
    duration: '2 დღე',
    price: 150,
  },
  {
    id: 2,
    title: 'ყაზბეგის სათავგადასავლო ტური',
    description: 'მოინახულეთ გერგეტის სამება, ისიამოვნეთ ულამაზესი მთის ხედებით და გაატარეთ დაუვიწყარი დრო ბუნებაში.',
    imageUrl: 'https://images.unsplash.com/photo-1542289457-3f3640277bd6?auto=format&fit=crop&q=80&w=800',
    destination: 'ყაზბეგი, საქართველო',
    duration: '1 დღე',
    price: 80,
  },
  {
    id: 3,
    title: 'სვანეთის ზღაპრული მოგზაურობა',
    description: 'აღმოაჩინეთ უძველესი სვანური კოშკები, მესტია და უშგული ევროპის ყველაზე მაღალ დასახლებულ პუნქტში.',
    imageUrl: 'https://images.unsplash.com/photo-1582298538104-e5cdd443224b?auto=format&fit=crop&q=80&w=800',
    destination: 'სვანეთი, საქართველო',
    duration: '4 დღე',
    price: 350,
  }
];
