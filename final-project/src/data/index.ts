import type { NavLink, Tour } from '../types';
import kaxetiImg from '../assets/kaxeti_high.png';
import kaxetiThumb from '../assets/kaxeti.webp';
import kaxetiGal from '../assets/kaxeti_gal1.png';

import yazbegiImg from '../assets/yazbegi_high.png';
import yazbegiThumb from '../assets/yazbegi.webp';
import yazbegiGal from '../assets/yazbegi_gal1.png';

import svanetiImg from '../assets/svaneti_high.png';
import svanetiThumb from '../assets/svaneti.webp';
import svanetiGal from '../assets/svaneti_gal1.png';

import batumiImg from '../assets/batumi_high.png';
import batumiThumb from '../assets/batumi.jpg';
import batumiGal from '../assets/batumi_gal1.png';

import vardziaImg from '../assets/vardzia_high.png';
import vardziaThumb from '../assets/vardzia.jpg';
import vardziaGal from '../assets/vardzia_gal1.png';

import tushetiImg from '../assets/tusheti_high.png';
import tushetiThumb from '../assets/tusheti.jpg';
import tushetiGal from '../assets/tusheti_gal1.png';

import imeretiImg from '../assets/imereti_high.png';
import imeretiThumb from '../assets/mereti.jpg';
import imeretiGal from '../assets/imereti_gal1.png';

import mcxetaImg from '../assets/mcxeta_high.png';
import mcxetaThumb from '../assets/mcxeta.jpg';
import mcxetaGal from '../assets/mcxeta_gal1.png';

import rachaImg from '../assets/racha_high.png';
import rachaThumb from '../assets/racha.jpg';

export const navLinks: NavLink[] = [
  { label: 'მთავარი', path: '/' },
  { label: 'ტურები', path: '/tours' },
  { label: 'ჩემი ჯავშნები', path: '/bookings' },
  { label: 'ჩვენ შესახებ', path: '/about' },
  { label: 'კონტაქტი', path: '/contact' },
];

export const contactInfo = {
  phone: '597394042',
  email: 'sabamachaladze123@gmail.com',
  address: 'ქუთაისი, საქართველო'
};

export const tours: Tour[] = [
  {
    id: 1,
    title: 'კახეთის ღვინის ტური',
    description: 'დაათვალიერეთ სიღნაღი, ეწვიეთ ღვინის მარნებს და დააგემოვნეთ უგემრიელესი ქართული ღვინო. ჩვენი ტური მოიცავს ვიზიტს ალაზნის ველზე და წინანდლის მამულში.',
    imageUrl: kaxetiImg,
    gallery: [kaxetiGal, kaxetiImg],
    destination: 'კახეთი, საქართველო',
    duration: '2 დღე',
    price: 150,
    distanceFromKutaisi: '4 საათი და 30 წუთი'
  },
  {
    id: 2,
    title: 'ყაზბეგის სათავგადასავლო ტური',
    description: 'მოინახულეთ გერგეტის სამება, ისიამოვნეთ ულამაზესი მთის ხედებით და გაატარეთ დაუვიწყარი დრო ბუნებაში. ტური მოიცავს ჯიპ-ტურს გერგეტზე.',
    imageUrl: yazbegiImg,
    gallery: [yazbegiGal, yazbegiImg],
    destination: 'ყაზბეგი, საქართველო',
    duration: '1 დღე',
    price: 80,
    distanceFromKutaisi: '3 საათი და 34 წუთი'
  },
  {
    id: 3,
    title: 'სვანეთის ზღაპრული მოგზაურობა',
    description: 'აღმოაჩინეთ უძველესი სვანური კოშკები, მესტია და უშგული ევროპის ყველაზე მაღალ დასახლებულ პუნქტში. გელოდებათ მყინვარები და ულამაზესი ალპური მდელოები.',
    imageUrl: svanetiImg,
    gallery: [svanetiGal, svanetiImg],
    destination: 'სვანეთი, საქართველო',
    duration: '4 დღე',
    price: 350,
    distanceFromKutaisi: '4 საათი'
  },
  {
    id: 4,
    title: 'ბათუმის დასვენება და გართობა',
    description: 'დაისვენეთ შავი ზღვის სანაპიროზე, ისიამოვნეთ ბათუმის ბულვარით და ეწვიეთ ბოტანიკურ ბაღს. ღამის ბათუმი და მისი ფერადი შადრევნები გელოდებათ.',
    imageUrl: batumiImg,
    gallery: [batumiGal, batumiImg],
    destination: 'ბათუმი, საქართველო',
    duration: '3 დღე',
    price: 250,
    distanceFromKutaisi: '2 საათი და 15 წუთი'
  },
  {
    id: 5,
    title: 'ვარძიის ისტორიული საოცრება',
    description: 'აღმოაჩინეთ XII საუკუნის კლდეში ნაკვეთი ქალაქი, რაბათის ციხე და ბორჯომის პარკი. შეიგრძენით საქართველოს უძველესი ისტორია.',
    imageUrl: vardziaImg,
    gallery: [vardziaGal, vardziaImg],
    destination: 'ასპინძა, საქართველო',
    duration: '2 დღე',
    price: 180,
    distanceFromKutaisi: '3 საათი და 30 წუთი'
  },
  {
    id: 6,
    title: 'თუშეთის ველური ბუნება',
    description: 'ყველაზე ექსტრემალური და ულამაზესი გზა საქართველოში. დაათვალიერეთ ომალო, შენაქო და დიკლო. თუშური სტუმართმოყვარეობა და კოშკები.',
    imageUrl: tushetiImg,
    gallery: [tushetiGal, tushetiImg],
    destination: 'თუშეთი, საქართველო',
    duration: '5 დღე',
    price: 500,
    distanceFromKutaisi: '6 საათი'
  },
  {
    id: 7,
    title: 'იმერეთის მღვიმეების ტური',
    description: 'პრომეთეს მღვიმე, სათაფლია და მარტვილის კანიონი. ნავით გასეირნება კანიონში და დინოზავრების ნაკვალევი.',
    imageUrl: imeretiImg,
    gallery: [imeretiGal, imeretiImg],
    destination: 'წყალტუბო, საქართველო',
    duration: '1 დღე',
    price: 100,
    distanceFromKutaisi: '30 წუთი'
  },
  {
    id: 8,
    title: 'მცხეთა-თბილისის ტური',
    description: 'ჯვრის მონასტერი, სვეტიცხოველი და ძველი თბილისის ვიწრო ქუჩები. აბანოთუბანი და რიყის პარკი.',
    imageUrl: mcxetaImg,
    gallery: [mcxetaGal, mcxetaImg],
    destination: 'თბილისი, საქართველო',
    duration: '2 დღე',
    price: 140,
    distanceFromKutaisi: '3 საათი'
  },
  {
    id: 9,
    title: 'რაჭის დაუვიწყარი ხედები',
    description: 'ნიკორწმინდა, შაორის წყალსაცავი და ამბროლაური. დააგემოვნეთ ნამდვილი ხვანჭკარა რაჭულ სტუმართმოყვარეობასთან ერთად.',
    imageUrl: rachaImg,
    gallery: [rachaImg],
    destination: 'რაჭა, საქართველო',
    duration: '2 დღე',
    price: 160,
    distanceFromKutaisi: '2 საათი და 30 წუთი'
  }
];


