import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Users, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Home,
  DollarSign,
  FileText,
  Zap,
  Star,
  BookOpen
} from 'lucide-react';
import { companyInfo, allReviews } from '../mock';

const HOAPage = () => {
  const hoaReviews = allReviews.filter(review => review.service === 'HOA Services').slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">HOA Specialists</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Comprehensive Spotted Lanternfly
                <span className="text-blue-600 block">Solutions for HOA Communities</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Protect your entire community with our specialized HOA programs. 
                Bulk treatment rates, community education, and professional reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    Get Community Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6" asChild>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call HOA Specialist
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbHxlbnwwfHx8fDE3NTY1NzM5ODB8MA&ixlib=rb-4.1.0&q=85"
                alt="Professional pest control for communities"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for HOAs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">HOA Benefits</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why HOAs Choose The Lantern Fly Guys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed specifically for homeowner associations and planned communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Bulk Treatment Rates",
                description: "Significant cost savings with community-wide treatment programs",
                benefits: ["Volume discounts", "Shared cost structure", "Transparent pricing", "Annual contracts available"]
              },
              {
                icon: FileText,
                title: "Professional Reporting",
                description: "Detailed reports for HOA board meetings and resident communications",
                benefits: ["Treatment summaries", "Progress reports", "Cost breakdowns", "Maintenance schedules"]
              },
              {
                icon: BookOpen,
                title: "Community Education",
                description: "Educational workshops and resources for residents",
                benefits: ["Resident workshops", "Identification guides", "Prevention tips", "Q&A sessions"]
              },
              {
                icon: Shield,
                title: "Property Value Protection",
                description: "Maintain property values by preventing landscape damage",
                benefits: ["Heritage tree care", "Landscape preservation", "Aesthetic maintenance", "Long-term protection"]
              },
              {
                icon: Users,
                title: "Resident Involvement",
                description: "Engage residents in community-wide pest management efforts",
                benefits: ["Reporting systems", "Resident training", "Community awareness", "Proactive monitoring"]
              },
              {
                icon: Zap,
                title: "Rapid Response",
                description: "Priority service for HOA communities with emergency situations",
                benefits: ["24/7 availability", "Same-day response", "Crisis management", "Board communication"]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOA Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              HOA Community Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures minimal disruption to your community while maximizing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Community Assessment",
                description: "Comprehensive evaluation of common areas, landscaping, and high-risk zones throughout the community"
              },
              {
                step: 2,
                title: "Board Presentation",
                description: "Detailed presentation to HOA board with treatment plan, timeline, and cost structure"
              },
              {
                step: 3,
                title: "Resident Notification",
                description: "Professional communication to all residents about treatment schedule and safety protocols"
              },
              {
                step: 4,
                title: "Community Treatment",
                description: "Systematic treatment of all common areas and coordinated individual property treatments"
              }
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800">Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              HOA Community Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real HOA communities we've helped protect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hoaReviews.map((review) => (
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
                      <Badge variant="secondary">HOA Board Member</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOA Packages */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Service Packages</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              HOA Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your community's needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential Protection",
                price: "Starting at $2,500",
                description: "Basic community-wide treatment",
                features: [
                  "Community assessment",
                  "Common area treatment",
                  "Basic resident notification",
                  "Treatment report",
                  "30-day follow-up"
                ],
                popular: false
              },
              {
                name: "Complete Community",
                price: "Starting at $4,500",
                description: "Comprehensive protection program",
                features: [
                  "Full community assessment",
                  "Common + individual treatments",
                  "Resident education workshop",
                  "Monthly monitoring",
                  "Detailed reporting",
                  "Emergency response"
                ],
                popular: true
              },
              {
                name: "Premium Management",
                price: "Starting at $7,500",
                description: "Full-service community management",
                features: [
                  "Year-round protection",
                  "Quarterly treatments",
                  "Ongoing resident education",
                  "24/7 emergency response",
                  "Board meeting presentations",
                  "Property value protection"
                ],
                popular: false
              }
            ].map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-lg relative ${pkg.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`} asChild>
                    <Link to="/contact">Get Community Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Protect Your HOA Community Today
          </h2>
          <p className="text-xl opacity-90">
            Join hundreds of HOA communities that trust us for comprehensive spotted lanternfly protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Get Community Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Speak to HOA Specialist
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ Bulk Treatment Discounts ✓ Board Presentations ✓ Professional Reporting ✓ Community Education
          </p>
        </div>
      </section>
    </div>
  );
};

export default HOAPage;