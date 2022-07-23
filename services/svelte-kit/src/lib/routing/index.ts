import type { SvelteComponent } from "svelte";
import NotFound from "../../routes/fallback/NotFound.svelte";

interface Route {
  pathname: string;
  component: SvelteComponent;
}

type CreateRouterProps = {
  routes: Route[];
  target: HTMLElement;
};

function getRouteComponent(pathname, routes) {
  const currentRoute = routes.find((route) => {
    return pathname === route.pathname;
  });
  return currentRoute?.component ?? NotFound;
}

export function createRouter({ routes }: CreateRouterProps) {
  document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (!event.target) return;
      event.preventDefault();

      const targetPathname = new URL(event.target.href).pathname;
      history.pushState({}, undefined, targetPathname);

      return getRouteComponent(targetPathname, routes);
    });
  });

  return getRouteComponent(window.location.pathname, routes);
}
