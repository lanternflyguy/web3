import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Grape, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Leaf,
  Calendar,
  Award,
  Star,
  Heart,
  Zap
} from 'lucide-react';
import { companyInfo, allReviews } from '../mock';

const WineryPage = () => {
  const wineryReviews = allReviews.filter(review => review.service === 'Winery Protection').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-800">Winery Specialists</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Protect Your Vineyard from
                <span className="text-purple-600 block">Spotted Lanternflies</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Specialized protection for vineyards and wine-producing facilities. 
                Our OMRI organic compliant solutions safeguard your harvest and reputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    Protect My Vineyard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" asChild>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Wine Industry Expert
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwZXN0JTIwY29udHJvbHxlbnwwfHx8fDE3NTY1NzM5ODB8MA&ixlib=rb-4.1.0&q=85"
                alt="Professional vineyard protection"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wine Industry Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-red-100 text-red-800">Industry Challenge</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              The Spotted Lanternfly Threat to Wineries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spotted lanternflies pose a serious threat to vineyards, damaging vines and compromising wine quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vine Damage",
                description: "Direct feeding on grapevines weakens plants and reduces yield",
                impact: "Up to 40% yield loss",
                color: "red"
              },
              {
                title: "Honeydew Contamination",
                description: "Sticky secretions promote sooty mold growth on grapes",
                impact: "Quality degradation",
                color: "orange"
              },
              {
                title: "Harvest Disruption",
                description: "Swarming insects disrupt harvest operations and contaminate equipment",
                impact: "Operational delays",
                color: "yellow"
              },
              {
                title: "Tourism Impact",
                description: "Pest infestations affect visitor experience and outdoor events",
                impact: "Revenue loss",
                color: "purple"
              },
              {
                title: "Reputation Risk",
                description: "Pest problems can damage winery brand and customer perception",
                impact: "Brand protection",
                color: "blue"
              },
              {
                title: "Compliance Issues",
                description: "Regulatory requirements for pest management in wine production",
                impact: "Legal compliance",
                color: "green"
              }
            ].map((challenge, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${challenge.color}-600 to-${challenge.color}-700 rounded-lg flex items-center justify-center`}>
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  <CardDescription className="text-base">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`p-3 bg-${challenge.color}-50 rounded-lg`}>
                    <p className={`font-semibold text-${challenge.color}-800`}>Impact: {challenge.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Winery Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Wine Industry Solutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Specialized Vineyard Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed specifically for wine production facilities and vineyards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Grape,
                title: "Vine Protection Program",
                description: "Targeted treatment that protects grape vines without affecting wine quality",
                features: ["OMRI organic compliant", "No residue concerns", "Harvest-safe timing", "Quality preservation"]
              },
              {
                icon: Leaf,
                title: "Organic Solutions",
                description: "100% organic treatments that meet wine industry standards",
                features: ["Certified organic", "Natural ingredients", "Environmental safety", "Regulatory compliance"]
              },
              {
                icon: Calendar,
                title: "Seasonal Programs",
                description: "Year-round protection aligned with vineyard operations",
                features: ["Pre-harvest treatment", "Dormant season care", "Growing season monitoring", "Harvest protection"]
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Protection that maintains wine quality and terroir integrity",
                features: ["No taste impact", "Terroir preservation", "Quality standards", "Brand protection"]
              },
              {
                icon: Heart,
                title: "Tourism Protection",
                description: "Maintain visitor experience for wine tours and events",
                features: ["Event protection", "Visitor safety", "Aesthetic maintenance", "Experience quality"]
              },
              {
                icon: Zap,
                title: "Emergency Response",
                description: "Rapid response for critical harvest period infestations",
                features: ["24/7 availability", "Harvest season priority", "Same-day response", "Crisis management"]
              }
            ].map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
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

      {/* Wine Industry Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-800">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Vineyard Protection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized process ensures your vineyard is protected without compromising wine quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Vineyard Assessment",
                description: "Comprehensive evaluation of vineyard layout, grape varieties, and infestation risk"
              },
              {
                step: 2,
                title: "Treatment Planning",
                description: "Customized treatment plan aligned with harvest schedule and organic requirements"
              },
              {
                step: 3,
                title: "Organic Treatment",
                description: "Application of OMRI compliant treatments with no impact on wine quality"
              },
              {
                step: 4,
                title: "Ongoing Monitoring",
                description: "Continuous monitoring throughout growing season with harvest protection"
              }
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
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
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800">Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Winery Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from wineries we've helped protect their harvest and reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wineryReviews.map((review) => (
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
                      <Badge variant="secondary">Winery Owner</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Protect Your Vineyard Investment
          </h2>
          <p className="text-xl opacity-90">
            Don't let spotted lanternflies compromise your harvest. Our wine industry experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Get Vineyard Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Wine Expert
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ OMRI Organic Compliant ✓ No Wine Quality Impact ✓ Harvest Protection ✓ 24/7 Emergency Response
          </p>
        </div>
      </section>
    </div>
  );
};

export default WineryPage;