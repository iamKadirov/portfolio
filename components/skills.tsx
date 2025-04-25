import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    {
      name: "Python",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 mx-auto mb-4 text-yellow-400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C9.8 0 7.8.6 6.3 1.7c-1.3 1-1.5 2-1.5 3.5v2.6H12v1.8H4.8C2.2 9.6 0 11.9 0 14.4S2.2 19.2 4.8 19.2H6v-2.3c0-1.5.2-2.4 1.5-3.5 1.5-1.1 3.5-1.7 5.7-1.7h2.8c1.5 0 2.6-.3 3.7-1.5 1.1-1.3 1.5-3.1 1.5-4.6V5.2c0-1.5-.6-2.6-1.7-3.7C18.6.6 16.5 0 14.4 0H12zm-1.8 3.6a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3z" />
        </svg>
      ),
      description: "Data analysis, scripting, and automation",
    },
    {
      name: "SQL Server",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 mx-auto mb-4 text-red-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.4 0 0 2.4 0 5.4v13.2C0 21.6 5.4 24 12 24s12-2.4 12-5.4V5.4C24 2.4 18.6 0 12 0zm0 1.5c5.9 0 10.5 2.2 10.5 4.9S17.9 11.3 12 11.3 1.5 9.1 1.5 6.4 6.1 1.5 12 1.5z" />
        </svg>
      ),
      description: "Database querying, stored procedures, and reporting",
    },
    {
      name: "Power BI",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 mx-auto mb-4 text-yellow-400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 12h2v9H3v-9zm4-4h2v13H7V8zm4-5h2v18h-2V3zm4 9h2v9h-2v-9zm4-3h2v12h-2V9z" />
        </svg>
      ),
      description: "Dashboards, visual reports, and business insights",
    },
    {
      name: "Snowflake",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="currentColor">
          <path d="M12 2L9.1 7.4l2.9 5-2.9 5L12 22l2.9-4.6-2.9-5 2.9-5L12 2z" />
          <path d="M4.5 6.5L3 12l1.5 5.5L10 12 4.5 6.5z" />
          <path d="M19.5 6.5L14 12l5.5 5.5L21 12l-1.5-5.5z" />
          <path d="M12 7.4L7.4 12 12 16.6l4.6-4.6L12 7.4z" />
        </svg>
      ),
      description: "Cloud data warehousing, ETL processes, and data modeling",
    },
    {
      name: "Excel",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-green-600">
          <path
            fill="currentColor"
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m1.8 18H14l-2-3.4l-2 3.4H8.2l2.9-4.5L8.2 11H10l2 3.4l2-3.4h1.8l-2.9 4.5l2.9 4.5M13 9V3.5L18.5 9H13z"
          />
        </svg>
      ),
      description: "Advanced data analysis, pivot tables, and financial modeling",
    },
    {
      name: "Tableau",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0v4h-2V0H8v4H6V0H4v4H0v2h4v2H0v2h4v4H0v2h4v4H0v2h4v4h2v-4h2v4h2v-4h4v4h2v-4h2v4h2v-4h4v-2h-4v-2h4v-2h-4v-4h4v-2h-4V6h4V4h-4V0h-2v4h-2V0h-2zm0 6h2v2h-2V6zm-4 4h2v2H8v-2zm8 0h2v2h-2v-2zm-4 4h2v2h-2v-2z"/>
        </svg>
      ),
      description: "Data visualization and storytelling",
    },
    {
      name: "Airflow",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-sky-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L8 6h8l-4-6zm0 24l4-6H8l4 6zM0 12l6-4v8l-6-4zm24 0l-6 4V8l6 4zM7 7l5 3-5 3V7zm10 0v6l-5-3 5-3zm-5 5l5 3v6l-5-3v-6z"/>
        </svg>
      ),
      description: "Workflow orchestration and scheduling",
    },
    {
      name: "Spark",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0l3 6h6l-4.5 3 1.5 6L12 9l-6 6 1.5-6L3 6h6l3-6z"/>
        </svg>
      ),
      description: "Distributed big data processing and pipeline design",
    },
    {
      name: "ClickHouse",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 0h2v24H3V0zm4 0h2v24H7V0zm4 0h2v24h-2V0zm4 0h2v24h-2V0zm4 0h2v24h-2V0z"/>
        </svg>
      ),
      description: "High-speed OLAP and real-time analytics",
    },
    {
      name: "MongoDB",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-green-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-1.143 5.5-5 10.5-5 16 0 4.418 2.582 8 5 8s5-3.582 5-8c0-5.5-3.857-10.5-5-16z"/>
        </svg>
      ),
      description: "NoSQL data integration for analytical systems",
    },
    {
      name: "Azure Data Factory",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2h20v20H2V2zm2 2v16h16V4H4zm4 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
        </svg>
      ),
      description: "Cloud ETL automation for enterprise pipelines",
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C6 0 0 6 0 12s6 12 12 12 12-6 12-12S18 0 12 0zM7 7h10v10H7V7z"/>
        </svg>
      ),
      description: "Relational analytics with advanced SQL and AWS",
    },
    {
      name: "Docker",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8c-1.105 0-2 .895-2 2h2v2h2c0-2.21-1.79-4-4-4zm-8 8h-4v-2h4v2zm6-2h-4v-2h4v2zM6 8h4v2H6V8zm0 4h2v2H6v-2zM2 8h2v2H2V8zm2 4h2v2H4v-2z"/>
        </svg>
      ),
      description: "Containerized environments for scalable deployments",
    },
    {
      name: "Jenkins",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0a12 12 0 00-2.5 23.7c.4.1.5-.2.5-.5v-1.7c-2 .4-2.4-1-2.4-1-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-1-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.5.8-2-.1-.2-.4-1 .1-2 0 0 .7-.2 2.2.8.7-.2 1.5-.3 2.2-.3s1.5.1 2.2.3c1.5-1 2.2-.8 2.2-.8.5 1 .2 1.8.1 2 .5.5.8 1.2.8 2 0 2.8-1.7 3.4-3.3 3.6.3.2.5.7.5 1.4v2c0 .3.1.6.5.5A12 12 0 0012 0z"/>
        </svg>
      ),
      description: "CI/CD automation for data pipelines",
    },
    {
      name: "AWS S3",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4l10-2 10 2v16l-10 2-10-2V4zm10 14l8-2V6l-8 2v10zM4 6v10l8 2V8L4 6z"/>
        </svg>
      ),
      description: "Cloud storage and data lake support",
    },
    {
      name: "Pandas",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0h2v24H6V0zm10 0h2v24h-2V0zm-6 6h8v2h-8V6zm0 10h8v2h-8v-2z"/>
        </svg>
      ),
      description: "Efficient data wrangling and transformation in Python",
    },    
  ]

  return (
    <section id="skills" className="bg-gray-800 py-16">
      <div className="section-container">
        <h2 className="section-title">
          Technical <span className="text-green-400">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500 transition-all">
              <CardContent className="pt-6 text-center">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
