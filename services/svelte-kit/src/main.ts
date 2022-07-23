import "./assets/styles.css";
import { createRouter } from "./lib/routing";
import Impressum from "./routes/Impressum.svelte";
import LogoEditor from "./routes/LogoEditor.svelte";
import Members from "./routes/Members.svelte";
import Mixes from "./routes/Mixes.svelte";
import StartPage from "./routes/StartPage.svelte";
import Layout from "./routes/__layout.svelte";

const currentRoute = createRouter({
  routes: [
    { pathname: "/impressum", component: Impressum },
    { pathname: "/logo-editor", component: LogoEditor },
    { pathname: "/members", component: Members },
    { pathname: "/mixes", component: Mixes },
    { pathname: "/", component: StartPage },
  ],
});

console.log(currentRoute);

// const content = new currentRoute();

new Layout({ target: document.getElementById("app") })
// const layout = new console.log(content);
