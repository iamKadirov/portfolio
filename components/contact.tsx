import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-16">
      <div className="section-container">
        <h2 className="section-title">
          Get In <span className="text-green-400">Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-center text-white">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-gray-300">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out
                through any of the channels below.
              </p>

              <div className="flex flex-col gap-4">
                <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                  <Link href="mailto:criro9891@gmail.com" className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    kadirovabduvosit102@gmail.com
                  </Link>
                </Button>

                <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                  <Link
                    href="https://t.me/iamkadirov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.306 7.4c.18.597.724 1.014 1.372 1.014.448 0 .852-.188 1.147-.493l2.08-2.082 3.992 2.94a2.25 2.25 0 0 0 3.496-1.675l3-16.5a2.247 2.247 0 0 0-2.896-2.597z"></path>
                      <path d="M10.002 14.003l-2.735 2.734"></path>
                    </svg>
                    Telegram: @iamkadirov
                  </Link>
                </Button>

                <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                  <Link
                    href="https://linkedin.com/in/abduvosit-kadirov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </Link>
                </Button>
              </div>

              <div className="pt-4 text-center">
                <p className="text-gray-400">Available for remote work worldwide</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Abduvosit Kadirov. All rights reserved.</p>
      </footer>
    </section>
  )
}
