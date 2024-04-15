# Astro Example with Nightwind

This is an example of how to use the [Nightwind](https://github.com/jjranalli/nightwind) in an Astro project for easy dark mode support when using Tailwind CSS.

Tailwind is integrated using the official [Astro Tailwind plugin](https://docs.astro.build/en/guides/integrations-guide/tailwind/).

This example also assumes you uses at least one UI Framework with Astro. This example uses [React](https://docs.astro.build/en/guides/integrations-guide/react/).

This example also uses TypeScript.

## Main Files

- `components/`
  - `NightwindInit.tsx`: Initializes Nightwind. Should be included in base layout.
  - `NightwindSwitch.tsx`: The button to switches between dark and light mode.
  - `NightwindStatus.tsx`: Displays the current status of the dark mode.
- `layouts/`
  - `Layout.astro`: The base layout that includes `NightwindInit`, and also runs an inline script to load in current dark mode status (before any rendering). This seems to be the only way to use Nightwind in Astro to avoid the flash of light mode on page load. Every page should use this layout.
