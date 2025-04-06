import { createSignal, type JSX } from "solid-js";
import type { IceCream, Rating } from "../routes/index.tsx";

type Component<P = {}> = (props: P) => JSX.Element;
type ParentProps<P = {}> = P & { children?: JSX.Element };
type ParentComponent<P = {}> = Component<ParentProps<P>>;

function isRating(value: number): value is Rating {
  return value >= 1 && value <= 5;
}

const IceCreamRating: ParentComponent<{ iceCream: IceCream }> = ({
  iceCream,
}) => {
  const { flavor } = iceCream;
  const [rating, setRating] = createSignal<Rating>(iceCream.rating);

  const handleClick = (i: number) => {
    if (!isRating(i)) {
      throw new Error("Invalid rating");
    }
    setRating(i);
  };

  return (
    <div class="flex justify-between border-b-2 border-dashed border-gray-300 py-1">
      <h2 class="text-gray-100">{flavor}</h2>
      <div class="flex gap-2">
        {[...Array(rating())].map((_, i) => (
          <button onClick={() => handleClick(i + 1)} class="cursor-pointer">
            ❤️
          </button>
        ))}
        {[...Array(5 - rating())].map((_, i) => (
          <button
            onClick={() => handleClick(rating() + i + 1)}
            class="cursor-pointer"
          >
            🩶
          </button>
        ))}
      </div>
    </div>
  );
};

export default IceCreamRating;
