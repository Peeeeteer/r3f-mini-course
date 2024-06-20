###### Hint 2: This is the robot.
> Run the following commands in your terminal:
```bash
npm install -D tailwindcss
npx tailwindcss init
```
![hint2-1](/portfolio-page-1/milestone-1/hint2-1.png "using npm to install tailwindcss")

![hint2-2](/portfolio-page-1/milestone-1/hint2-2.png "install tailwind config")

> Update **tailwind.config.js**:
```js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```
![hint2-2](/portfolio-page-1/milestone-1/hint2-3.png "")
