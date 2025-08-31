import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Zap, 
  Shield, 
  Target, 
  Award,
  Phone,
  CheckCircle,
  ArrowRight,
  Beaker,
  Microscope,
  Atom,
  TrendingUp,
  Clock,
  Leaf,
  Building,
  Home
} from 'lucide-react';
import LocalSEO from '../components/LocalSEO';
import PhoneTracking from '../components/PhoneTracking';
import { companyInfo } from '../mock';

const SterilizationPage = () => {
  const sterilizationFeatures = [
    {
      title: "Reproductive Disruption",
      icon: Target,
      description: "Our BT Gen 2 system disrupts the spotted lanternfly reproductive cycle at the cellular level",
      benefits: [
        "Prevents successful mating behaviors",
        "Disrupts egg development process", 
        "Eliminates reproductive viability",
        "Breaks multi-generational infestation cycles"
      ],
      effectiveness: "95% reproductive disruption rate"
    },
    {
      title: "Biological Sterilization",
      icon: Microscope,
      description: "Advanced biological agents target spotted lanternfly reproductive systems without harming beneficial insects",
      benefits: [
        "Species-specific targeting mechanisms",
        "Non-toxic to pollinators and beneficial insects",
        "Environmentally safe application methods",
        "OMRI organic compliance maintained"
      ],
      effectiveness: "Zero impact on beneficial species"
    },
    {
      title: "Population Collapse Technology",
      icon: TrendingUp,
      description: "Strategic deployment creates cascading population reduction across entire infestation areas",
      benefits: [
        "Exponential population decline over 2-3 seasons",
        "Eliminates need for repeated treatments",
        "Cost-effective long-term solution",
        "Prevents re-infestation from treated areas"
      ],
      effectiveness: "85-90% population reduction year-over-year"
    }
  ];

  const technologyProcess = [
    {
      step: 1,
      title: "Precision Application",
      description: "Our certified technicians apply the patent-pending BT Gen 2 sterilization treatment to targeted areas",
      timeline: "Day 1-3",
      details: [
        "Professional property assessment and mapping",
        "Strategic application point identification", 
        "Precision delivery system deployment",
        "Environmental safety protocol implementation"
      ]
    },
    {
      step: 2,
      title: "Biological Integration",
      description: "The sterilization agents integrate with the local ecosystem, targeting only spotted lanternflies",
      timeline: "Week 1-2",
      details: [
        "Selective uptake by spotted lanternfly populations",
        "Reproductive system disruption begins",
        "Behavioral modification in adult insects",
        "Egg viability reduction initiates"
      ]
    },
    {
      step: 3,
      title: "Population Impact",
      description: "Treated spotted lanternflies lose reproductive capability, breaking the infestation cycle",
      timeline: "Month 1-3",
      details: [
        "Mating behavior disruption becomes evident",
        "Egg mass production significantly reduced",
        "Existing population begins natural decline",
        "New infestation prevention achieved"
      ]
    },
    {
      step: 4,
      title: "Long-term Control",
      description: "Sustained population reduction provides multi-year protection for your property",
      timeline: "Season 2-3",
      details: [
        "Dramatic population decline maintained",
        "Property protection without re-treatment",
        "Cost savings compared to traditional methods",
        "Environmental restoration and recovery"
      ]
    }
  ];

  const applicationMethods = [
    {
      method: "Tree Injection System",
      icon: Atom,
      description: "Direct injection into tree vascular systems for systemic protection",
      applications: ["Heritage trees", "High-value specimens", "Orchard protection", "Landscape trees"],
      advantages: ["Precise targeting", "Long-lasting protection", "Minimal environmental exposure", "Weather-resistant"]
    },
    {
      method: "Targeted Surface Application",
      icon: Target,
      description: "Strategic surface treatment of key breeding and feeding areas",
      applications: ["Building perimeters", "Outdoor furniture", "Playground equipment", "Vehicle storage"],
      advantages: ["Broad coverage", "Prevents egg laying", "Disrupts congregation sites", "Cost-effective"]
    },
    {
      method: "Soil Integration Treatment", 
      icon: Beaker,
      description: "Soil-based application for plant uptake and systemic distribution",
      applications: ["Garden areas", "Agricultural plots", "Vineyard rows", "Commercial landscaping"],
      advantages: ["Root uptake delivery", "Sustained release", "Weather protection", "Organic compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <LocalSEO 
        page="sterilization"
        title="Patent-Pending Spotted Lanternfly Sterilization | BT Gen 2 Technology Nassau County"
        description="Revolutionary spotted lanternfly sterilization using patent-pending BT Gen 2 technology. 95% reproductive disruption rate in Nassau County, Suffolk County & Long Island."
        keywords="spotted lanternfly sterilization, BT Gen 2 technology, lanternfly reproductive control Nassau County, patent pending pest control Suffolk County, biological sterilization Long Island"
        canonicalUrl="https://thelanternflyguy.com/sterilization"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Patent-Pending Innovation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Revolutionary Spotted Lanternfly
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
                Sterilization Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our patent-pending BT Gen 2 Enhanced Management System achieves 95% reproductive disruption, 
              eliminating spotted lanternfly populations through advanced biological sterilization in Nassau County, Suffolk County & Long Island.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Request Sterilization Treatment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-400 text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <PhoneTracking
                  phoneNumber={companyInfo.phone}
                  trackingId="sterilization-hero-phone"
                  className="flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Expert Consultation: {companyInfo.phone}
                </PhoneTracking>
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-slate-300">Reproductive Disruption</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">2-3</div>
                <div className="text-slate-300">Season Protection</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400">OMRI</div>
                <div className="text-slate-300">Organic Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">Advanced Technology</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              How BT Gen 2 Sterilization Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our patent-pending biological sterilization system targets spotted lanternfly reproduction 
              at the molecular level while preserving beneficial insects and ecosystem balance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sterilizationFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-slate-700/80 backdrop-blur-sm border border-slate-600 hover:shadow-purple-500/10 transition-all duration-300">
                <CardHeader className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20">
                    <div className="text-center">
                      <div className="font-semibold text-blue-300 text-sm mb-1">Proven Effectiveness</div>
                      <div className="text-blue-100 text-lg font-bold">{feature.effectiveness}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Treatment Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              4-Stage Sterilization Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our systematic approach ensures maximum effectiveness while maintaining environmental safety standards.
            </p>
          </div>

          <div className="space-y-8">
            {technologyProcess.map((process, index) => (
              <div key={index} className="relative">
                {index < technologyProcess.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
                )}
                
                <Card className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    <div className="md:col-span-1 p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-white">{process.step}</span>
                      </div>
                      <Badge className="bg-slate-600 text-slate-200">{process.timeline}</Badge>
                    </div>
                    
                    <div className="md:col-span-3 p-8">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">{process.title}</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">{process.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                          {process.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-200 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Methods */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-800">Application Methods</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Precision Delivery Systems
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Multiple application methods ensure optimal treatment effectiveness for every property type and situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600 hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{method.method}</CardTitle>
                  <CardDescription className="text-slate-300">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {method.applications.map((app, appIndex) => (
                        <div key={appIndex} className="text-sm text-slate-300 bg-slate-800/50 px-2 py-1 rounded">
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Advantages:</h4>
                    <ul className="space-y-2">
                      {method.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span className="text-slate-200 text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800">Environmental Safety</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                OMRI Organic Certified & Environmentally Safe
              </h2>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg">
                  <strong className="text-white">Complete Safety Profile:</strong> Our patent-pending sterilization 
                  technology is completely safe for humans, pets, beneficial insects, and the environment.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Selective Targeting:</strong> The BT Gen 2 system specifically 
                  targets spotted lanternfly reproductive systems without affecting pollinators, butterflies, or other beneficial species.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Regulatory Compliance:</strong> Full compliance with EPA, New York State, 
                  Nassau County, and Suffolk County environmental regulations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <Leaf className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="font-semibold text-green-400">OMRI Certified</div>
                  <div className="text-slate-300 text-sm">Organic Compliance</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="font-semibold text-blue-400">EPA Approved</div>
                  <div className="text-slate-300 text-sm">Federal Compliance</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwZXN0JTIwY29udHJvbHxlbnwwfHx8fDE3NTY1NzM5ODB8MA&ixlib=rb-4.1.0&q=85"
                alt="Environmental safety testing"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Service Coverage</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Patent-Pending Sterilization Services
            </h2>
            <p className="text-xl text-slate-300">
              Advanced BT Gen 2 sterilization technology available throughout Long Island
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                property: "Residential Properties",
                icon: Home,
                description: "Complete sterilization protection for homes and residential landscapes",
                features: ["Heritage tree protection", "Garden area treatment", "Property perimeter coverage", "Family-safe application"]
              },
              {
                property: "Commercial Properties",
                icon: Building,
                description: "Large-scale sterilization programs for businesses and commercial facilities",
                features: ["Business continuity maintained", "Employee safety priority", "Comprehensive coverage", "Regulatory compliance"]
              },
              {
                property: "Wineries & Vineyards",
                icon: Leaf,
                description: "Specialized sterilization for wine industry protection and OMRI compliance",
                features: ["Organic certification maintained", "Harvest protection guaranteed", "Vine health preserved", "Quality assurance protocols"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.property}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white border-white/30">Revolutionary Technology Available Now</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Experience Patent-Pending Sterilization Technology
            </h2>
            <p className="text-xl text-blue-100">
              Join Nassau County and Suffolk County property owners who've eliminated spotted lanternfly 
              infestations with our revolutionary BT Gen 2 sterilization system.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                <Zap className="mr-2 h-5 w-5" />
                Request Sterilization Treatment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <PhoneTracking
                phoneNumber={companyInfo.phone}
                trackingId="sterilization-cta-phone"
                className="flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Expert Consultation: {companyInfo.phone}
              </PhoneTracking>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-6 text-blue-200">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Patent-Pending Technology</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>OMRI Organic Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Multi-Season Protection</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SterilizationPage;