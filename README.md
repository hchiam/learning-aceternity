# Learning Aceternity

Just one of the things I'm learning. https://github.com/hchiam/learning

https://www.youtube.com/watch?v=RPa3_AD1_Vs

- aceternity

  - more copy+paste than node_modules, for more control over the code as opposed to a component library, but still assumes react, tailwind, and framer motion are installed
  - https://ui.aceternity.com/components
  - 3D card effect = `transform-style: preserve-3d; transform:` `translate` and `rotate` https://ui.aceternity.com/components/3d-card-effect
  - SVG lines animating, controlled by scroll https://ui.aceternity.com/components/google-gemini-effect
    - minimal version with raw HTML/CSS/JS: https://codepen.io/hchiam/pen/NWJQdWG
  - typewriter effect = split into characters https://ui.aceternity.com/components/typewriter-effect
    - `npm i framer-motion clsx tailwind-merge`
  - gradient position controlled by mouse, idea for text that changes https://ui.aceternity.com/components/evervault-card
  - lamp lighting simulation = divs and `filter: blur(...)` https://ui.aceternity.com/components/lamp-effect
  - scroll-controlled macbook screen turning flat into view https://ui.aceternity.com/components/macbook-scroll

- shadcn
  - also more copy+paste than node_modules, for more control over the code as opposed to a component library, but still assumes tailwind and radix ui are installed
  - https://ui.shadcn.com/
  - https://github.com/shadcn-ui/ui

## Demo

Created with:

```sh
npx create-next-app@latest
# to create my-app
```

But to run it as-is:

```sh
cd my-app
yarn
yarn dev
```
