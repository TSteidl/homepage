import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Server } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});
type Project = {
  id: number;
  title: string;
  description: string;
  content: string;
  url?: string;
  url2?: string;
};
const projects: Project[] = [
  {
    id: 1,
    title: "My homepage",
    description: "Here you can find the sourcecode of this homepage",
    content:
      "A constant work in progress, with a lot of iterations and improvements over time.",
    url: "https://github.com/TSteidl/homepage",
  },
  {
    id: 2,
    title: "EKM",
    description: "Externes Kosten Modul",
    content:
      "I was involved in the management and further development of the project. Besides management, I was mostly tasked with developing a solution to make the project run in docker and kubernetes. I was also involved in the system administration when higher permissions were required. While managing I needed to ensure the code quality of the external partner with whom I did code reviews and had to sign off on any technical changes.",
  },
  {
    id: 3,
    title: "Production line management software",
    description: "Fullstack Software for managing car production lines",
    content:
      "This application was developed in two weeks with a team of four, three developers and one manager. I was responsible for some backend tasks but mostly the frontend. Frontend and backend are listed separately below.",
    url: "https://github.com/TSteidl/frontend-productionline",
    url2: "https://github.com/TSteidl/backend_productionline",
  },
];
function App() {
  return (
    <div>
      <div className="p-8">
        <div className="pb-4">
          <Badge className="text-sm">An incomplete list of my projects</Badge>
        </div>
        <div className="text-lg p-4 rounded-lg border-2 gap-4">
          {projects.map((project) => (
            <div className="p-2">
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-lg">{project.content}</CardContent>
                <CardFooter className="flex justify-end">
                  {project.url !== undefined ? (
                    <div className="flex flex-row">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          <Github />
                        </Button>
                      </a>
                      {project.url2 && (
                        <div className="pl-4">
                          <a
                            href={project.url2}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button>
                              <Server />
                            </Button>
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm">
                      This project is hosted on the Volkswagen internal
                      Bitbucket.
                    </p>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
