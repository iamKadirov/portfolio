import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

//assets
import proimage1 from "../assets/project1.png"

export default function Projects() {
  const projects = [
    {
      title: "Coffee Shop Sales Performance Dashboard",
      description:
        "Developed a dynamic Power BI dashboard to analyze coffee shop sales performance. Data was sourced from Excel and SQL, enabling visualization of daily revenue, top-selling products, and customer trends. The project highlights data modeling, DAX usage, and effective report design.",
      tools: ["Power BI", "SQL", "Excel"],
      image: proimage1,
      link: "https://app.powerbi.com/view?r=eyJrIjoiMzcxNTAwNjUtYzIwNy00NzgyLTg0NGItODgxMjBiN2U1N2RkIiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D",
    },
    {
      title: "blinkit",
      description:
        "Developed an interactive Power BI dashboard to analyze Blinkit's sales performance. Leveraged SQL and Excel to extract and transform data, providing insights into total sales, average sales, item distribution, and customer ratings. The dashboard enables stakeholders to make informed decisions based on real-time data visualization.​",
      tools: ["Power BI", "Excel", "Sql"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNGFhMTMzYTgtZGQ4Yy00MjU5LTk2NmEtOWU5YTBhYTQ2ZGVmIiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D&pageName=b04aaf040550612ab157",
    },
    {
      title: "Paris 2024 Olympics Dashboard",
      description:
        "Designed and developed a visually engaging Power BI dashboard to analyze Paris 2024 Olympic data. The project involved extracting and cleaning data using Python from Kaggle, designing the interface in Figma, and building interactive visualizations in Power BI. Key insights include medal tracking, athlete stats, and country-wise performance, with advanced DAX and Power Query techniques applied for dynamic reporting.",
      tools: ["Power BI", "DAX", "Power Query", "Python", "Figma", "Kaggle"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiN2VjOTM1MWQtMTljOC00Njc4LWFmMTItM2MyYjk1NmFlMTViIiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D",
    },
  ]

  return (
    <section id="projects" className="bg-gray-900 py-16">
      <div className="section-container">
        <h2 className="section-title">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
            key={index}
            className="bg-gray-800 border-gray-700 overflow-hidden hover:border-green-500 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project?.image?.src || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-700 text-blue-400 border-blue-500">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-500/10"
                >
                  <Link href={project.link}>View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
