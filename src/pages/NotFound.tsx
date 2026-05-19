import { PageWrapper } from "@/components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper class="items-center justify-center" title={null}>
      <h1 class="text-fg-strong text-2xl font-bold">Page not found</h1>
      <p class="text-fg mt-2 text-sm">
        This page doesn't exist, at least not anymore!
      </p>
      <a href="/" class="text-accent-text mt-8 text-sm underline">
        Go back home
      </a>
    </PageWrapper>
  );
}
