import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-gray-600"
      : "border-transparent hover:border-gray-600";

  return (
    <nav class="bg-pink-300">
      <ul class="container flex items-center p-3 text-gray-200">
        <li
          class={`flex justify-center items-center bg-gray-100 border-2 rounded-full h-12 w-12 ${active(
            "/"
          )} mx-1.5 sm:mx-6`}
        >
          <a class="text-3xl" href="/">
            🍦
          </a>
        </li>
      </ul>
    </nav>
  );
}
