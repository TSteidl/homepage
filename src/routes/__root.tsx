import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-1/5 h-screen flex flex-col">
        <Sidebar />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
