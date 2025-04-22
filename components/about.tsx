import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-16">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <h3 className="section-subtitle text-blue-400">Professional Background</h3>
              <p className="text-gray-300">
                I am a passionate Data Analyst and Data Engineer with expertise in transforming raw data into meaningful
                insights. With a strong foundation in data processing, analysis, and visualization, I help organizations
                make data-driven decisions that drive growth and efficiency.
              </p>
              <p className="text-gray-300 mt-4">
                My experience spans across various industries including finance, e-commerce, and healthcare, where I've
                implemented data solutions that have significantly improved business operations and strategic planning.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <h3 className="section-subtitle text-green-400">Interests & Approach</h3>
              <p className="text-gray-300">
                I'm particularly interested in predictive analytics, machine learning applications, and building
                scalable data pipelines. My approach combines technical expertise with business acumen to deliver
                solutions that address real-world challenges.
              </p>
              <p className="text-gray-300 mt-4">
                When I'm not working with data, I enjoy contributing to open-source projects, mentoring aspiring data
                professionals, and staying updated with the latest advancements in data science and engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
