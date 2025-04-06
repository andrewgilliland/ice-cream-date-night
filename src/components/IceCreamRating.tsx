import type { JSX } from "solid-js";
import type { IceCream } from "../routes/index.tsx";

type Component<P = {}> = (props: P) => JSX.Element;
type ParentProps<P = {}> = P & { children?: JSX.Element };
type ParentComponent<P = {}> = Component<ParentProps<P>>;

const IceCreamRating: ParentComponent<{ iceCream: IceCream }> = ({
  iceCream,
}) => {
  const { flavor, rating } = iceCream;
  return (
    <div class="flex justify-between border-b-2 border-dashed border-gray-300 py-1">
      <h2 class="text-gray-100">{flavor}</h2>
      <div class="flex gap-2">
        {[...Array(rating)].map((_, i) => (
          <span class="text-pink-300">$</span>
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <span class="text-gray-400">$</span>
        ))}
      </div>
    </div>
  );
};

export default IceCreamRating;
