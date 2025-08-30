import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  Home,
  Building,
  Users,
  MapPin,
  Zap,
  Leaf,
  Phone,
  ArrowRight
} from 'lucide-react';
import { services, technologyFeatures, companyInfo } from '../mock';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">Professional Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive Spotted Lanternfly
              <span className="text-blue-600 block">Elimination Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential properties to large-scale municipal projects, we provide 
              tailored solutions using our revolutionary patent-pending BT Gen 2 technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon === 'Home' ? Home :
                                   service.icon === 'Building' ? Building :
                                   service.icon === 'Users' ? Users :
                                   service.icon === 'MapPin' ? MapPin :
                                   service.icon === 'Zap' ? Zap : Shield;
              
              return (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              How We Eliminate Spotted Lanternflies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step process ensures complete elimination and long-term protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Property Inspection",
                description: "Comprehensive evaluation to identify infestation levels and risk areas",
                icon: "🔍"
              },
              {
                step: 2,
                title: "Custom Treatment Plan",
                description: "Tailored strategy based on property conditions and infestation severity",
                icon: "📋"
              },
              {
                step: 3,
                title: "Patent-Pending BT Gen 2 Application",
                description: "Deploy our patent-pending elimination system with precision",
                icon: "🎯"
              },
              {
                step: 4,
                title: "BioCertified Protection",
                description: "Transform trees into living sentinels for ongoing protection",
                icon: "🌳"
              },
              {
                step: 5,
                title: "Monitoring & Maintenance",
                description: "Regular monitoring to ensure continued effectiveness",
                icon: "📊"
              },
              {
                step: 6,
                title: "Follow-up Assessment",
                description: "Post-treatment evaluation and additional recommendations",
                icon: "✅"
              }
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Advanced Technology</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Revolutionary Treatment Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
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

      {/* Pest Control Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Additional Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Complete Pest Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond spotted lanternflies, we provide comprehensive pest control services for all your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Bees & Wasps", "Ants", "Mosquitoes", "Ticks", "Fleas", "Roaches", 
              "Crickets", "Carpenter Ants", "Rodent Control", "Integrated Pest Management",
              "Commercial Properties", "Government Contracts"
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-medium text-gray-900">{service}</p>
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
            Ready to Eliminate Spotted Lanternflies?
          </h2>
          <p className="text-xl opacity-90">
            Contact us today for a free property assessment and customized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;