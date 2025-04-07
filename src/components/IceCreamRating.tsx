import { createSignal } from "solid-js";
import type {
  IceCream,
  FunctionalComponent,
  Rating,
} from "../routes/index.tsx";
import HeartIcon from "./icons/HeartIcon.jsx";

function isRating(value: number): value is Rating {
  return value >= 1 && value <= 5;
}

const IceCreamRating: FunctionalComponent<{ iceCream: IceCream }> = ({
  iceCream,
}) => {
  const { flavor } = iceCream;
  const [rating, setRating] = createSignal<Rating>(iceCream.rating);

  const handleClick = (newRating: number) => {
    if (!isRating(newRating)) {
      throw new Error("Invalid rating");
    }
    setRating(newRating);
  };

  return (
    <div class="flex flex-col sm:flex-row items-center justify-between border-b-2 border-dashed border-gray-300 py-1">
      <h2 class="text-gray-100">{flavor}</h2>
      <div class="flex gap-2">
        {[...Array(rating())].map((_, i) => (
          <button onClick={() => handleClick(i + 1)} class="cursor-pointer">
            <HeartIcon class="text-white fill-pink-300 size-5" />
          </button>
        ))}
        {[...Array(5 - rating())].map((_, i) => (
          <button
            onClick={() => handleClick(rating() + i + 1)}
            class="cursor-pointer"
          >
            <HeartIcon class="text-white fill-black size-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default IceCreamRating;
