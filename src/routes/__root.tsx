import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-row">
      <div className="w-1/5 h-screen">
        <Sidebar />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
