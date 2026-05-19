export default function NotFound() {
  return (
    <div class="px-8 py-10">
      <h1 class="text-fg-strong text-xl font-bold">Page not found</h1>
      <p class="text-fg-weak mt-2 text-sm">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        class="text-accent-text mt-4 inline-block text-sm hover:underline"
      >
        Go back home
      </a>
    </div>
  );
}
