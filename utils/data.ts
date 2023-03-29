import { icons } from "../assets/images";
import { ICardProps } from "../components/Dashboard/misc/Card";

export type ITemProps = {
  trakingNo: string;
  productName: string;
  img: string;
  price: string;
  total: string;
  amount: string;
};

export type IProductProps = {
  img: string;
  name: string;
  starts: number;
  price: string;
};

export const cards: ICardProps[] = [
  { title: "178+", subtitle: "Save Products", imageSrc: icons.save },
  { title: "20+", subtitle: "Stock Products", imageSrc: icons.stock },
  { title: "190+", subtitle: "Sales Products", imageSrc: icons.sales },
  { title: "12+", subtitle: "Job Application", imageSrc: icons.job },
];

export const productsList: ITemProps[] = [
  {
    trakingNo: "#876364",
    productName: "Camera Lens",
    img: icons.p1,
    price: "$178",
    total: "325",
    amount: "$1,46,660",
  },
  {
    trakingNo: "#876368",
    productName: "Black Sleep Dress",
    img: icons.p2,
    price: "$14",
    total: "53",
    amount: "$46,660",
  },
  {
    trakingNo: "#876364",
    productName: "Argan Oil",
    img: icons.p3,
    price: "$21",
    total: "78",
    amount: "$3,46,676",
  },
  {
    trakingNo: "#876364",
    productName: "Camera Lens",
    img: icons.p4,
    price: "$32",
    total: "98",
    amount: "$1,46,660",
  },
  {
    trakingNo: "#876368",
    productName: "Black Sleep Dress",
    img: icons.p2,
    price: "$14",
    total: "53",
    amount: "$46,660",
  },
  {
    trakingNo: "#876364",
    productName: "Argan Oil",
    img: icons.p3,
    price: "$21",
    total: "78",
    amount: "$3,46,676",
  },
  {
    trakingNo: "#876364",
    productName: "Camera Lens",
    img: icons.p4,
    price: "$32",
    total: "98",
    amount: "$1,46,660",
  },
  {
    trakingNo: "#876368",
    productName: "Black Sleep Dress",
    img: icons.p2,
    price: "$14",
    total: "53",
    amount: "$46,660",
  },
  {
    trakingNo: "#876364",
    productName: "Argan Oil",
    img: icons.p3,
    price: "$21",
    total: "78",
    amount: "$3,46,676",
  },
  {
    trakingNo: "#876364",
    productName: "Camera Lens",
    img: icons.p4,
    price: "$32",
    total: "98",
    amount: "$1,46,660",
  },
];

export const products: IProductProps[] = [
  {
    img: icons.nike,
    name: "NIKE Shoes Black Pattern",
    starts: 4,
    price: "$87",
  },
  {
    img: icons.nike,
    name: "iPhone 12",
    starts: 4,
    price: "$987",
  },
  {
    img: icons.nike,
    name: "NIKE Shoes Black Pattern",
    starts: 4,
    price: "$87",
  },
  {
    img: icons.nike,
    name: "iPhone 12",
    starts: 4,
    price: "$987",
  },
  {
    img: icons.nike,
    name: "NIKE Shoes Black Pattern",
    starts: 4,
    price: "$87",
  },
  {
    img: icons.nike,
    name: "iPhone 12",
    starts: 4,
    price: "$987",
  },
];
