import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Globe,
  Leaf,
  Code,
  Briefcase,
  Palette,
  FileCheck,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-emerald-600" />
          <span className="font-bold text-xl">HANDOVER</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Features
          </a>
          <a href="#who" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Who It's For
          </a>
          <a href="#workflows" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Workflows
          </a>
          <a href="#compare" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Compare
          </a>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Login
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Secure, Ethical Project Handover – <span className="text-emerald-600">Verified On-Chain</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          HANDOVER is a blockchain-backed productivity platform for clean, trustworthy transitions of work ownership
          across teams and time zones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700">Start Free Trial</Button>
          <Button variant="outline" className="gap-2">
            See How It Works
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-16 relative">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="HANDOVER platform dashboard"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium">Blockchain Verified</span>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Core Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Streamline Workflows</h3>
              <p className="text-gray-600">
                Automate handover processes with smart templates and reduce transition time by up to 60%.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verifiable Accountability</h3>
              <p className="text-gray-600">
                Every handover is recorded on-chain, creating immutable proof of work completion and transfer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Time Tracking & AI Forecasting</h3>
              <p className="text-gray-600">
                Track time ethically and use AI to forecast project handover timelines with greater accuracy.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Remote Work</h3>
              <p className="text-gray-600">
                Optimize digital carbon footprint with eco-conscious features designed for remote teams.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower Cross-Border Teams</h3>
              <p className="text-gray-600">
                Bridge time zones and cultural gaps with standardized handover protocols that work globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Who It's For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Persona 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">SaaS Freelancers</h3>
              <p className="text-sm text-gray-600">
                Seamlessly transfer projects to clients with verifiable completion records.
              </p>
            </div>

            {/* Persona 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Consultants / PMs</h3>
              <p className="text-sm text-gray-600">
                Manage multiple client handovers with accountability and precision.
              </p>
            </div>

            {/* Persona 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Creative Teams</h3>
              <p className="text-sm text-gray-600">
                Transfer creative assets between team members with clear ownership trails.
              </p>
            </div>

            {/* Persona 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold mb-2">Regulated Industry Workers</h3>
              <p className="text-sm text-gray-600">Maintain compliance with immutable records of work handovers.</p>
            </div>

            {/* Persona 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Sustainability Advocates</h3>
              <p className="text-sm text-gray-600">
                Track and reduce digital carbon footprint while maintaining productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Workflows */}
      <section id="workflows" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Example Workflows</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-xl mb-4 border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">SaaS Product Team Handoff</h3>
                      <p className="text-sm text-gray-600">Backend → Frontend → QA</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Backend Development Completion</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Backend developer completes API endpoints, runs tests, and initiates handover with
                          documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Frontend Integration</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Frontend developer accepts handover, connects UI to APIs, and verifies functionality.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">QA Verification</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          QA team receives handover from frontend, runs test suite, and provides final verification.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-2 text-emerald-700 font-medium mb-2">
                        <Shield className="h-4 w-4" />
                        <span>Blockchain Verification</span>
                      </div>
                      <p className="text-sm text-emerald-700">
                        Each handover step is timestamped and verified on-chain, creating an immutable record of the
                        development process.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Cross-Team Corporate Handoff</h3>
                      <p className="text-sm text-gray-600">Marketing → Finance</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-purple-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Campaign Completion</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Marketing team finalizes campaign, compiles performance metrics, and prepares financial
                          summary.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-purple-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Handover Documentation</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Marketing creates handover package with spend tracking, ROI calculations, and invoice details.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-purple-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Finance Processing</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Finance team accepts handover, reconciles expenses, and completes accounting procedures.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-2 text-emerald-700 font-medium mb-2">
                        <Shield className="h-4 w-4" />
                        <span>Blockchain Verification</span>
                      </div>
                      <p className="text-sm text-emerald-700">
                        Complete audit trail of campaign expenses and approvals, with timestamped verification for
                        compliance.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blockchain Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Blockchain Features Highlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-emerald-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Immutable Logs</h3>
              <p className="text-gray-600">
                Every handover action is recorded on the blockchain, creating a permanent and tamper-proof record of all
                project transitions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-emerald-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Legal Proof</h3>
              <p className="text-gray-600">
                Blockchain verification provides legally admissible evidence of work completion, transfer, and
                acceptance for dispute resolution.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-emerald-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Timestamps & Signatures</h3>
              <p className="text-gray-600">
                Cryptographically secure timestamps and digital signatures verify exactly when work was handed over and
                by whom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Conscious Design */}
      <section className="bg-emerald-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Eco-Conscious Design Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Carbon Lite Mode</h3>
              <p className="text-gray-600 mb-4">
                Reduce digital carbon footprint with optimized UI that minimizes server requests and data transfer.
              </p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Standard Mode</span>
                <span>Carbon Lite: 75% Reduction</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Carbon Tracker</h3>
              <p className="text-gray-600 mb-4">
                Monitor your team's digital carbon emissions with real-time tracking and actionable insights.
              </p>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="text-sm">
                  <span className="font-medium">Monthly Carbon:</span>
                  <span className="ml-2 text-green-600">12.4 kg CO₂e</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Industry Avg:</span>
                  <span className="ml-2 text-gray-600">34.8 kg CO₂e</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 20 0" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Offset Integrations</h3>
              <p className="text-gray-600 mb-4">
                Automatically offset your digital carbon footprint through verified environmental projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Reforestation
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Renewable Energy
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Ocean Cleanup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why HANDOVER Stands Out</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-medium text-gray-600 border-b">Features</th>
                  <th className="p-4 text-center font-medium text-gray-600 border-b">HANDOVER</th>
                  <th className="p-4 text-center font-medium text-gray-600 border-b">Trello</th>
                  <th className="p-4 text-center font-medium text-gray-600 border-b">Notion</th>
                  <th className="p-4 text-center font-medium text-gray-600 border-b">Traditional PM Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b font-medium">Trust & Verification</td>
                  <td className="p-4 border-b text-center bg-emerald-50 text-emerald-700">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs block mt-1">Blockchain Verified</span>
                  </td>
                  <td className="p-4 border-b text-center text-gray-500">Limited</td>
                  <td className="p-4 border-b text-center text-gray-500">Limited</td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                </tr>

                <tr>
                  <td className="p-4 border-b font-medium">Workflow Automation</td>
                  <td className="p-4 border-b text-center bg-emerald-50 text-emerald-700">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs block mt-1">Advanced</span>
                  </td>
                  <td className="p-4 border-b text-center text-gray-500">Basic</td>
                  <td className="p-4 border-b text-center text-gray-500">Basic</td>
                  <td className="p-4 border-b text-center text-gray-500">Varies</td>
                </tr>

                <tr>
                  <td className="p-4 border-b font-medium">Handover Finalization</td>
                  <td className="p-4 border-b text-center bg-emerald-50 text-emerald-700">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs block mt-1">Legally Binding</span>
                  </td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                </tr>

                <tr>
                  <td className="p-4 border-b font-medium">AI Forecasting</td>
                  <td className="p-4 border-b text-center bg-emerald-50 text-emerald-700">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs block mt-1">Built-in</span>
                  </td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                  <td className="p-4 border-b text-center text-gray-500">Limited</td>
                </tr>

                <tr>
                  <td className="p-4 border-b font-medium">Sustainability Features</td>
                  <td className="p-4 border-b text-center bg-emerald-50 text-emerald-700">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs block mt-1">Comprehensive</span>
                  </td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                  <td className="p-4 border-b text-center text-gray-500">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Build with Trust. Transition with Proof.</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join the future of ethical, transparent, and sustainable project handovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100">Start Free Trial</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-700">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">HANDOVER</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-white">HANDOVER</span>
            </div>

            <div className="text-sm">
              <span>Eco-first Design • Blockchain Verified • Made for Teams</span>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="text-sm">&copy; {new Date().getFullYear()} HANDOVER. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

