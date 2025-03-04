import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

type Leistung = {
  date: string;
  start: string;
  end: string;
  description: string;
};

const bub: Leistung[] = [
  {
    date: "08/2016 – 05/2021",
    start: "08/2016",
    end: "05/2021",
    description: "Abitur an der Walter-Lübcke-Schule Wolfhagen",
  },
  {
    date: "09/2021 – 10/2022",
    start: "09/2021",
    end: "10/2022",
    description: "Studium Lehramt Englisch, Politik",
  },
  {
    date: "12/2022 – 07/2025",
    start: "12/2022",
    end: "07/2025",
    description: "Ausbildung zur Fachinformatikerin für Anwendungsentwicklung",
  },
  {
    date: "12/2022 – 07/2025",
    start: "12/2022",
    end: "07/2025",
    description:
      "Fakultät 73 • Schwerpunkt: Java • Vertiefung: Full-Stack Entwicklung",
  },
  {
    date: "04/2024 – 07/2024",
    start: "04/2024",
    end: "07/2024",
    description: "Entwicklungsmanagerin in der VW-Konzern-IT",
  },
  {
    date: "11/2024 – 07/2025",
    start: "11/2024",
    end: "07/2025",
    description: "Softwareentwicklerin in der VW-Konzern-IT",
  },
];

const euS: Leistung[] = [
  {
    date: "05/2018 – heute",
    start: "05/2018",
    end: "heute",
    description: "Engagement bei Ver.di Hessen",
  },
  {
    date: "11/2020 – 08/2022",
    start: "11/2020",
    end: "08/2022",
    description: "Engagement bei Die Linke Hessen",
  },
  {
    date: "04/2024 – heute",
    start: "04/2024",
    end: "heute",
    description: "Engagement im Queeren Jugendraum Loud & Proud Wolfsburg",
  },
  {
    date: "09/2024 – 03/2025",
    start: "09/2024",
    end: "03/2025",
    description: "Engagement bei Volt Wolfsburg",
  },
];
function RouteComponent() {
  return (
    <div className="p-8">
      <div className="text-lg p-2 rounded-lg border-2 gap-2">
        <div className="text-3xl text-center pb-2">
          IHK-Anwendungsentwicklerin
        </div>
        <div className="text-center text-sm pb-4">10.02.2002</div>
        <Card>
          <CardHeader>
            <CardTitle>Bildungs- und Berufslaufbahn:</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              {bub.map((work) => (
                <div className="flex flex-row p-2">
                  <div className="flex flex-row">
                    <div className="w-20">{work.start}</div>-
                    <div className="pl-4 w-20">{work.end}</div>
                  </div>
                  <div className="pl-8 flex flex-row">
                    <div className="">{work.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Ehrenamtliches und soziales Engagement:</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {euS.map((engagement) => (
                  <div className="flex flex-row p-2">
                    <div className="flex flex-row">
                      <div className="w-20">{engagement.start}</div>-
                      <div className="pl-4 w-20">{engagement.end}</div>
                    </div>
                    <div className="pl-8 flex flex-row">
                      <div className="">{engagement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
