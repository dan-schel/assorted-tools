import { PageWrapper } from "@/components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper class="items-center justify-center" title={null}>
      <p class="text-fg-strong text-2xl font-bold">Page not found</p>
      <p class="text-fg mt-4 text-sm">
        This page doesn't exist, at least not anymore!
      </p>
      <a href="/" class="text-accent-text mt-8 text-sm underline">
        Go back home
      </a>
    </PageWrapper>
  );
}
