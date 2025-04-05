import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function HomePage() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <div class="flex flex-col items-center justify-center mt-20 mx-auto max-w-md">
        <h1 class="font-bold text-2xl text-pink-300">
          it's time for an ice cream date night!
        </h1>
        <p class="text-gray-100 mt-4">
          There are a total of 18 flavors to fall in love with. which ones will
          you love a litte & which ones will you love a lot?
        </p>
      </div>
    </main>
  );
}
