// tailwind.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette" {
    export function flattenColorPalette(
      colors: Record<string, string | Record<string, string>>
    ): Record<string, string>;
  }