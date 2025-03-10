// 遍历文章组键位树

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// 为组件添加按钮事件

const articlecontainer = document.querySelector(".article-container");
console.log(articlecontainer);