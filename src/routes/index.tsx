import { type JSX } from "solid-js";
import IceCreamRating from "~/components/IceCreamRating";

type Component<P = {}> = (props: P) => JSX.Element;
type ParentProps<P = {}> = P & { children?: JSX.Element };
export type FunctionalComponent<P = {}> = Component<ParentProps<P>>;

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export type IceCream = {
  id: number;
  flavor: string;
  rating: Rating;
};

const iceCreams: IceCream[] = [
  { id: 1, flavor: "Vanilla Speck", rating: 4 },
  { id: 2, flavor: "Blueberry Crumble", rating: 5 },
  { id: 3, flavor: "Chocolate Milk", rating: 0 },
  { id: 4, flavor: "Birthday Cake", rating: 3 },
  { id: 5, flavor: "Strawberries & Cream", rating: 4 },
  { id: 6, flavor: "Rasperry Truffle", rating: 2 },
  { id: 7, flavor: "Cookies & Cream", rating: 4 },
  { id: 8, flavor: "Chocolate Covered Strawberry", rating: 2 },
  { id: 9, flavor: "Cookie Monster", rating: 3 },
  { id: 10, flavor: "Red Velvet", rating: 3 },
  { id: 11, flavor: "Espresso", rating: 2 },
  { id: 12, flavor: "Black Like Ny Heart", rating: 3 },
  { id: 13, flavor: "Salted Caramel", rating: 3 },
  { id: 14, flavor: "Be Mine Bliss", rating: 4 },
  { id: 15, flavor: "Cookie Dough", rating: 0 },
  { id: 16, flavor: "Eternal Flame", rating: 2 },
  { id: 17, flavor: "Mint Cookie Chip", rating: 2 },
  { id: 18, flavor: "Love Potion Sorbet", rating: 4 },
];

export default function HomePage() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <div class="mx-auto max-w-3xl">
        <section class="flex flex-col items-center justify-center mt-20">
          <h1 class="font-bold text-2xl text-pink-300">
            it's time for an ice cream date night!
          </h1>
          <p class="text-gray-100 mt-4">
            There are a total of 18 flavors to fall in love with. which ones
            will you love a litte & which ones will you love a lot?
          </p>
        </section>
        <section class="mt-20">
          <div class="grid md:grid-cols-2 gap-4">
            {iceCreams.map((iceCream) => (
              <IceCreamRating iceCream={iceCream} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
