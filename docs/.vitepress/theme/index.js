// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style/custom.css'
//引入tailwindcss样式
import "./tailwind.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
  },
}