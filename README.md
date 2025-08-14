# react-easy-scroll-up

A lightweight and customizable React **scroll-to-top** button component.  
Shows a floating button after scrolling down, allowing users to quickly return to the top.


## Installation

```bash
npm install react-easy-scroll-up
````


## Usage

```jsx
import React from "react";
import ScrollToTop from "react-easy-scroll-up";

export default function App() {
  return (
    <div style={{ height: "2000px" }}>
      <h1>Scroll Down to See the Button</h1>
      <ScrollToTop showAt={200} smooth={true} />
    </div>
  );
}
```

---

## Styling

You can customize the button in two ways:

### Inline Styles

```jsx
<ScrollToTop style={{ backgroundColor: "red", fontSize: "20px" }} />
```

### CSS Class

```jsx
<ScrollToTop className="my-scroll-btn" />
```

```css
.my-scroll-btn {
  background-color: blue;
  font-size: 24px;
  padding: 12px;
  border-radius: 50%;
}
```

---

## Props

| Prop        | Type    | Default | Description                                |
| ----------- | ------- | ------- | ------------------------------------------ |
| `showAt`    | number  | `200`   | Scroll position (in px) to show the button |
| `smooth`    | boolean | `true`  | Enable smooth scroll animation             |
| `style`     | object  | `{}`    | Inline styles for the button               |
| `className` | string  | `""`    | Custom CSS class for styling               |

---

## Features

* Minimal and dependency-free (only React required)
* Appears after scrolling a configurable distance
* Smooth scroll option
* Fully customizable styles

---

## License

MIT © 2025 [Tharun26-G](https://github.com/Tharun26-G)
