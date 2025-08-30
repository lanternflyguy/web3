import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  MapPin, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Building2,
  Users,
  FileText,
  Award,
  Star,
  TreePine,
  Zap
} from 'lucide-react';
import { companyInfo, allReviews } from '../mock';

const MunicipalPage = () => {
  const municipalReviews = allReviews.filter(review => review.service === 'Municipal').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Municipal Services</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Large-Scale Spotted Lanternfly
                <span className="text-green-600 block">Management for Municipalities</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive pest management solutions for cities, counties, and government facilities. 
                Protect public spaces, parks, and municipal properties with our proven systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    Request Municipal Proposal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6" asChild>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Government Specialist
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1650895421894-07954c2134b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwZXN0JTIwY29udHJvbHxlbnwwfHx8fDE3NTY1NzM5ODB8MA&ixlib=rb-4.1.0&q=85"
                alt="Municipal pest control services"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-red-100 text-red-800">Public Challenges</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Municipal Spotted Lanternfly Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cities and municipalities face unique challenges managing spotted lanternfly infestations across large public areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Public Park Infestations",
                description: "Large park systems provide ideal breeding grounds for spotted lanternflies",
                impact: "Visitor experience degradation"
              },
              {
                title: "Tree Canopy Protection",
                description: "Municipal tree canopies are critical infrastructure requiring protection",
                impact: "Urban forest preservation"
              },
              {
                title: "Public Safety Concerns",
                description: "Swarming insects create safety and comfort issues for residents",
                impact: "Public health and safety"
              },
              {
                title: "Budget Constraints",
                description: "Limited municipal budgets require cost-effective pest management solutions",
                impact: "Efficient resource allocation"
              },
              {
                title: "Regulatory Compliance",
                description: "Municipalities must meet state and federal pest management requirements",
                impact: "Legal compliance needs"
              },
              {
                title: "Community Outreach",
                description: "Public education and awareness programs are essential for success",
                impact: "Community engagement"
              }
            ].map((challenge, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  <CardDescription className="text-base">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="font-semibold text-red-800">{challenge.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Municipal Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Government Solutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Specialized Municipal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for municipal and government requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Public Property Treatment",
                description: "Large-scale treatment of parks, municipal buildings, and public spaces",
                features: ["Park system protection", "Building perimeter treatment", "Public facility coverage", "Infrastructure protection"]
              },
              {
                icon: TreePine,
                title: "Urban Forest Management",
                description: "Comprehensive protection for municipal tree canopies and landscaping",
                features: ["Heritage tree care", "Canopy preservation", "Street tree protection", "Forest health monitoring"]
              },
              {
                icon: FileText,
                title: "Government Contracts",
                description: "Structured contracting designed for municipal procurement processes",
                features: ["Competitive bidding support", "Multi-year contracts", "Performance guarantees", "Detailed specifications"]
              },
              {
                icon: Users,
                title: "Community Outreach",
                description: "Public education and awareness programs for residents",
                features: ["Educational workshops", "Public presentations", "Identification training", "Reporting systems"]
              },
              {
                icon: Award,
                title: "Regulatory Compliance",
                description: "Ensure all treatments meet federal, state, and local requirements",
                features: ["EPA compliance", "State regulations", "Safety protocols", "Documentation standards"]
              },
              {
                icon: Zap,
                title: "Emergency Response",
                description: "Rapid deployment for urgent municipal pest management needs",
                features: ["24/7 availability", "Crisis management", "Public safety priority", "Media coordination"]
              }
            ].map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Municipal Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Municipal Engagement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures seamless integration with municipal processes and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Initial Assessment",
                description: "Comprehensive evaluation of municipal properties, parks, and public spaces"
              },
              {
                step: 2,
                title: "Proposal Development",
                description: "Detailed proposal with specifications, timeline, and budget for municipal review"
              },
              {
                step: 3,
                title: "Contract Execution",
                description: "Professional contracting process aligned with municipal procurement requirements"
              },
              {
                step: 4,
                title: "Implementation",
                description: "Systematic treatment execution with ongoing reporting and community coordination"
              }
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800">Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Municipal Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from municipalities we've helped protect their public spaces and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {municipalReviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-lg">"{review.text}"</p>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 text-lg">{review.name}</p>
                      <p className="text-gray-600">{review.location}</p>
                      <Badge variant="secondary">Municipal Official</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Government Benefits</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Municipalities Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Competitive Bidding Experience", description: "Extensive experience with municipal procurement processes" },
              { title: "Performance Guarantees", description: "Written guarantees ensuring treatment effectiveness" },
              { title: "Insurance & Bonding", description: "Full insurance coverage and bonding for municipal projects" },
              { title: "Safety Protocols", description: "Strict safety standards for public area treatments" },
              { title: "Environmental Compliance", description: "EPA-approved treatments safe for public use" },
              { title: "Documentation Standards", description: "Detailed reporting meeting government requirements" },
              { title: "Multi-Year Contracts", description: "Long-term partnerships for ongoing protection" },
              { title: "Budget Planning Support", description: "Assistance with budget planning and cost projections" }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Protect Your Community Today
          </h2>
          <p className="text-xl opacity-90">
            Partner with us to provide comprehensive spotted lanternfly protection for your municipality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Request Municipal Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Government Specialist
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ Government Contracting Experience ✓ Performance Guarantees ✓ Full Insurance & Bonding ✓ EPA Compliance
          </p>
        </div>
      </section>
    </div>
  );
};

export default MunicipalPage;