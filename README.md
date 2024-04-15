# Astro Example with Nightwind

This is an example of how to use the [Nightwind](https://github.com/jjranalli/nightwind) in an Astro project for easy dark mode support when using Tailwind CSS.

Open this example on Stackblitz to see it in action!

[![Open on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/Reimirno/astro-nightwind)

## Getting Started

Like every other Astro project you cloned from web, you can start this project by running:

```bash
npm install
npm run dev
```

## Dependencies

This example uses TypeScript - but that is not essential. Switching to JavaScript is easy. Typescript does not do anything in here because the Nightwind library does not have TypeScript support.

Tailwind is of course integrated using the official [Astro Tailwind plugin](https://docs.astro.build/en/guides/integrations-guide/tailwind/).

This example assumes you uses at least one UI Framework with Astro. This example uses [React](https://docs.astro.build/en/guides/integrations-guide/react/).

## Main Files

- `components/`
  - `NightwindInit.tsx`: Initializes Nightwind. Should be included in base layout.
  - `NightwindSwitch.tsx`: The button to switches between dark and light mode.
  - `NightwindStatus.tsx`: Displays the current status of the dark mode.
- `layouts/`
  - `Layout.astro`: The base layout that includes `NightwindInit`, and also runs an inline script to load in current dark mode status (before any rendering). This seems to be the only way to use Nightwind in Astro to avoid the flash of light mode on page load. Every page should use this layout.

## Some Notes

It should be possible to integrate Nightwind in Astro without UI framework (use the vanilla JS approach); but since most Astro projects uses a UI framework, this example chooses to use one.
