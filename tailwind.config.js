/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/components/home/myhead-component.component.html',
    // './src/app/components/home/myhead-component.component.ts',
    './src/app/components/home/mybody/mybody-component.component.html',
    // './src/app/components/home/mybody/mybody-component.component.ts',

    './src/app/components/equiposDeComputo/mybody/equiposBody-component.component.html',
    // './src/app/components/equiposDeComputo/mybody/equiposBody-component.component.ts',
    './src/app/components/equiposDeComputo/myhead/equiposHead-component.component.html',
    // './src/app/components/equiposDeComputo/myhead/equiposHead-component.component.ts',

    './src/app/pages/homePage/homePage-component.component.html',
    // './src/app/pages/homePage/homePage-component.component.ts',

    // './src/app/pages/equiposDeComputo-Page/edc-component.component.html',
    // './src/app/pages/equiposDeComputo-Page/edc-component.component.ts',

    './src/app/app.component.html',
    // './src/app/app.component.ts',
    './index.html',
    // './src./styles.css',
    // './main.ts'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

