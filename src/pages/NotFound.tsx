export default function NotFound() {
  return (
    <div class="flex flex-col items-center justify-center px-8 py-10">
      <h1 class="text-fg-strong text-xl font-bold">Page not found</h1>
      <p class="text-fg mt-4 text-sm">
        This page doesn't exist, at least not anymore!
      </p>
      <a href="/" class="text-accent-text mt-8 text-sm underline">
        Go back home
      </a>
    </div>
  );
}
