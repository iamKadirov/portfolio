import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

//assets
import proimage1 from "../assets/project1.png"

export default function Projects() {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description:
        "Developed an interactive dashboard to visualize sales performance across different regions and product categories, enabling data-driven decision making for the sales team.",
      tools: ["Power BI", "SQL", "Excel"],
      image: proimage1,
      link: "#",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Implemented a machine learning model to segment customers based on purchasing behavior, demographics, and engagement metrics, resulting in targeted marketing campaigns.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Data Warehouse Implementation",
      description:
        "Designed and implemented a cloud-based data warehouse solution, creating ETL pipelines to integrate data from multiple sources for centralized reporting and analysis.",
      tools: ["Snowflake", "Python", "SQL", "Airflow"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
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
