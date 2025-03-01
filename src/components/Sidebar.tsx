import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";

export default function Sidebar() {
  return (
    <header className="p-2 flex gap-2 flex-col justify-center w-full">
      <nav className="flex flex-col">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <ModeToggle />
    </header>
  );
}
