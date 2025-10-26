- Node: v22.18.0
- Yarn: 1.22.19
- TypeScript: 5.9.2
- [SvelteKit](https://kit.svelte.dev/): 5.39.5
- [Tailwind CSS](https://tailwindcss.com/docs/guides/sveltekit): 4.1.13
- [daisyUI](https://daisyui.com/docs/install/): 5.3.10

### Extra:

- [typograf](https://github.com/typograf/typograf)

### Utlis.ts
#### preloadItems
```ts
const preloadItems = (sources: Array<string>) => ...
```

#### setViewportHeightVar
[VH fix](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
```ts
const setViewportHeightVar = () => ...
```

#### preloadItems
format text using [typograf](https://github.com/typograf/typograf)
```ts
const formatText = (text: string): string => ...
```

### Cusom css
#### $lib/css/utils.css
Fix for figma-like fonts and scroll
```css
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  touch-action: manipulation;
}

html, body {
  overscroll-behavior: none;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- `.no-smoothing` -- disable figma-like font
- `.trim` -- vertical trim
- `.no-select` -- disable element select
- `.no-scrollbar` -- hide scrollbar

#### $lib/css/fonts.css
Load fonts, then use if css or in tailwind like this:
```css
@theme {
  --font-aeroport: "SomeFont", sans-serif;
}
```

#### $lib/css/vw.css
Fluid layout utils

Set your values here:
```css
:root {
  --vw-base: 320;
  --vw-unit: 100lvw;
}

@media (min-width: 1366px) {
  :root {
    --vw-base: 1920;
    --vw-unit: 100vw;
  }
}
```

Then use it like this: `mt-vw-[10]`. Set size in px.

Example: your block is 100x100 in 1920 design, use it like this
```
h-vw-[100] w-vw-[100]
```