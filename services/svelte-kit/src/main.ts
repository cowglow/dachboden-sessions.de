import "./assets/styles.css";
import { createRouter } from "./lib/routing";
import Impressum from "./routes/Impressum.svelte";
import LogoEditor from "./routes/LogoEditor.svelte";
import Members from "./routes/Members.svelte";
import Mixes from "./routes/Mixes.svelte";
import StartPage from "./routes/StartPage.svelte";
import HeaderComponent from "./lib/components/Header.svelte";
import FooterComponent from "./lib/components/Footer.svelte";

const currentRoute = createRouter({
  routes: [
    { pathname: "/impressum", component: Impressum },
    { pathname: "/logo-editor", component: LogoEditor },
    { pathname: "/members", component: Members },
    { pathname: "/mixes", component: Mixes },
    { pathname: "/", component: StartPage },
  ],
});

const headerTarget = document.getElementById("header");
const appTarget = document.getElementById("app");
const footerTarget = document.getElementById("footer");

const header = new HeaderComponent({
  target: headerTarget,
});

const app = new currentRoute({
  target: appTarget,
});

const footer = new FooterComponent({
  target: footerTarget,
});
export { header, app, footer };
