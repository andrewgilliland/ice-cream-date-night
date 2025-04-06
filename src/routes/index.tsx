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
  { id: 2, flavor: "Chocolate Milk", rating: 3 },
  { id: 3, flavor: "Strawberries & Cream", rating: 4 },
  { id: 4, flavor: "Mint Cookie Chip", rating: 2 },
  { id: 5, flavor: "Blueberry Crumble", rating: 5 },
  { id: 6, flavor: "Rasperry Truffle", rating: 2 },
];

export default function HomePage() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <div class="mx-auto max-w-2xl">
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
          <div class="grid grid-cols-2 gap-4">
            {iceCreams.map((iceCream) => (
              <IceCreamRating iceCream={iceCream} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
