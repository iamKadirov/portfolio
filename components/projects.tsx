import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

//assets
import proimage1 from "../assets/CoffeeShop.png"
import blinkitimage from "../assets/blinkit.png"
import Olympics2024 from "../assets/Olympics2024.png"
import HospitalReport from "../assets/HospitalReport.png"
import WeatherReport from "../assets/Weather.png"
import Attendence from "../assets/Attendence.png"
import PizzaSales from "../assets/Pizza.png"

export default function Projects() {
  const projects = [
    {
      title: "Pizza Sales Performance",
      description:
        "This Power BI dashboard project analyzes pizza sales performance across categories and time periods. It includes KPIs like Total Revenue, Orders, and Pizzas Sold, supported by MoM and YTD growth tracking, dynamic targets, and conditional formatting. A smart drillthrough system enables deep-dive views by category, with SVG-based visuals like donut charts and rounded bar charts. Advanced features include recommendation logic based on performance trends, fully dynamic titles and metrics via field/numeric parameters, and interactive bookmarks for focused KPI analysis. Designed for decision-makers, this report helps uncover sales drivers, identify underperforming areas, and guide marketing and operational strategy.",
      tools: ["Power BI", "SQL", "Excel"],
      image: PizzaSales,
      link: "https://app.powerbi.com/view?r=https://app.fabric.microsoft.com/reportEmbed?reportId=d6bd4150-9e02-44dd-97a5-513b22445b82&autoAuth=true&ctid=3de8742e-c05f-4a18-a682-e23b929f1359%3D%3D",
    },
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
      image: blinkitimage,
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNGFhMTMzYTgtZGQ4Yy00MjU5LTk2NmEtOWU5YTBhYTQ2ZGVmIiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D&pageName=b04aaf040550612ab157",
    },
    {
      title: "Paris 2024 Olympics Dashboard",
      description:
        "Designed and developed a visually engaging Power BI dashboard to analyze Paris 2024 Olympic data. The project involved extracting and cleaning data using Python from Kaggle, designing the interface in Figma, and building interactive visualizations in Power BI. Key insights include medal tracking, athlete stats, and country-wise performance, with advanced DAX and Power Query techniques applied for dynamic reporting.",
      tools: ["Power BI", "DAX", "Power Query", "Python", "Figma", "Kaggle"],
      image: Olympics2024,
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiN2VjOTM1MWQtMTljOC00Njc4LWFmMTItM2MyYjk1NmFlMTViIiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D",
    },
    {
      title: "Hospital Dashboard",
      description:
        "This Power BI dashboard was built to give healthcare managers a clear, interactive view of hospital operations — covering patients, doctors, facilities, and financials. In addition to core metrics, the report also includes insights on surgeries, appointments, and medicine usage, all integrated within the main pages (Overview, Patient, Doctor, Hospital, Finance). The goal is to support faster, data-driven decisions by presenting complex information in a clean, visual format with intuitive navigation, filters, and key KPIs.",
      tools: ["Power BI", "DAX", "Power Query", "Figma", "Kaggle"],
      image: HospitalReport,
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjU1M2RlOWEtOWY1MS00ZmViLThhZDktMDk3MDU3NDQ0NWY4IiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D",
    },
    {
      title: "Live Weather & AQI Dashboard",
      description:
        "Built a real-time weather and air quality dashboard using Power BI and WeatherAPI. Integrated JSON data, created dynamic DAX measures for AQI interpretation (status, suggestion, color), and designed interactive visuals with city filters and icons. Showcases API integration and advanced data modeling skills.",
      tools: ["Power BI", "DAX", "Power Query", "WeatherAPI", "Data Modeling"],
      image: WeatherReport,
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiM2FkYzFiZTMtMWVlOS00YjkyLTgwYzktNjFhZGJmNzY3NzlmIiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D",
    },
    {
      title: "Employee Attendance Dashboard",
      description:
        "Developed an interactive dashboard to monitor employee attendance and working hours. Key features include Top/Bottom N analysis, calendar heatmap with performance indicators, and employee-level drillthrough insights. Used DAX to calculate deviations, status flags, and dynamic filters. Strengthened practical skills in layout design, data modeling, and drillthrough navigation.",
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      image: Attendence,
      link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNjVjZDVhNTItYjJmYy00ZjNkLWJhNmQtN2FjMWZmMTc0Zjc1IiwidCI6IjNkZTg3NDJlLWMwNWYtNGExOC1hNjgyLWUyM2I5MjlmMTM1OSIsImMiOjEwfQ%3D%3D",
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
