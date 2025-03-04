import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { GithubIcon, LucideLinkedin } from "lucide-react";

export default function Sidebar() {
  return (
    <header className="p-2 flex flex-col w-full justify-between">
      <div className="text-3xl">Tina Steidl</div>
      <nav className="flex flex-col pt-12">
        <div className="flex flex-col">
          <Link to="/">
            <Button className="rounded-none skew-y-12">
              <div className="text-lg">Home</div>
            </Button>
          </Link>
          <Link to="/about">
            <Button className="rounded-none skew-y-12 translate-y-2">
              <div className="text-lg">About</div>
            </Button>
          </Link>
        </div>
        <div className="gap-2">
          <a
            href="https://github.com/TSteidl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size={"icon"}
              className="rounded-none skew-y-12 translate-y-2"
            >
              <GithubIcon />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/tim-steidl-269015170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size={"icon"}
              className="rounded-none skew-y-12 translate-y-4.5 translate-x-2"
            >
              <LucideLinkedin />
            </Button>
          </a>
        </div>
        <Button size={"icon"} className="rounded-none skew-y-12 translate-y-4">
          <ModeToggle />
        </Button>
      </nav>
    </header>
  );
}
