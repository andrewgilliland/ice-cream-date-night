export default function Nav() {
  return (
    <nav class="bg-pink-300">
      <ul class="container flex items-center p-3 text-gray-200">
        <li>
          <a
            class={`flex justify-center items-center bg-pink-200 border-2 border-black rounded-full shadow text-3xl size-12 mx-6 hover:scale-110 transition-transform duration-300`}
            href="/"
          >
            🍦
          </a>
        </li>
      </ul>
    </nav>
  );
}
