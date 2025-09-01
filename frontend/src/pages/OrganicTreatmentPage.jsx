import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Droplets, 
  Shield, 
  Target, 
  Leaf,
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  TreePine,
  Layers,
  Beaker,
  Zap,
  AlertTriangle,
  Calendar,
  Building,
  Home
} from 'lucide-react';
import LocalSEO from '../components/LocalSEO';
import PhoneTracking from '../components/PhoneTracking';
import { companyInfo } from '../mock';

const OrganicTreatmentPage = () => {
  const treatmentMethods = [
    {
      title: "Organic Residual Application",
      icon: Droplets,
      description: "Professional organic pesticide application targeting adult spotted lanternflies with extended protection",
      details: [
        "OMRI certified organic pesticides",
        "Direct adult elimination within 24-48 hours",
        "2-4 week residual protection period",
        "Safe application around families and pets",
        "Weather-resistant formulations"
      ],
      effectiveness: "95% adult elimination rate",
      duration: "2-4 weeks residual protection",
      applications: ["Residential properties", "Commercial buildings", "Outdoor recreation areas", "Agricultural settings"]
    },
    {
      title: "Soil Treatment System",
      icon: Layers,
      description: "Advanced soil-based treatment providing systemic protection through plant root uptake",
      details: [
        "Root zone application for maximum uptake",
        "Systemic plant protection from within",
        "Season-long effectiveness (6-8 months)",
        "OMRI organic compliance maintained",
        "Environmental safety priority"
      ],
      effectiveness: "90% population reduction",
      duration: "6-8 months protection",
      applications: ["Tree protection", "Garden areas", "Landscaped properties", "Agricultural crops"]
    },
    {
      title: "Combination Treatment Protocol",
      icon: Target,
      description: "Strategic combination of residual and soil treatments for maximum effectiveness",
      details: [
        "Immediate adult elimination + long-term prevention",
        "Multi-stage application timeline",
        "Customized treatment schedule",
        "Comprehensive property protection",
        "Cost-effective integrated approach"
      ],
      effectiveness: "98% total elimination",
      duration: "Full season coverage",
      applications: ["High-value properties", "Commercial facilities", "Municipal contracts", "Premium service tier"]
    }
  ];

  const organicProducts = [
    {
      category: "Adult Elimination Products",
      icon: Zap,
      description: "Fast-acting organic pesticides specifically formulated for adult spotted lanternfly control",
      products: [
        {
          name: "Organic Pyrethrin Complex",
          source: "Chrysanthemum flower extract",
          action: "Rapid knockdown of adult insects",
          safety: "Safe for beneficial insects when dry",
          residual: "7-14 days"
        },
        {
          name: "Spinosad Organic Concentrate",
          source: "Naturally occurring soil bacterium",
          action: "Neurological disruption in target pests",
          safety: "Bee-safe when applied properly",
          residual: "14-21 days"
        },
        {
          name: "Neem Oil Professional Grade",
          source: "Azadirachtin from neem tree",
          action: "Growth disruption and feeding deterrent",
          safety: "Completely non-toxic to mammals",
          residual: "10-14 days"
        }
      ]
    },
    {
      category: "Soil Treatment Solutions",
      icon: Beaker,
      description: "Systemic organic treatments applied to soil for plant uptake and internal protection",
      products: [
        {
          name: "Beneficial Nematode Application",
          source: "Steinernema feltiae nematodes",
          action: "Biological control of soil-dwelling stages",
          safety: "Completely safe for all beneficial organisms",
          residual: "60-90 days active"
        },
        {
          name: "Organic Systemic Granules",
          source: "Plant-based active compounds",
          action: "Root uptake for internal plant protection",
          safety: "OMRI listed for organic production",
          residual: "120-180 days"
        },
        {
          name: "Mycorrhizal Enhancement Formula",
          source: "Beneficial soil fungi",
          action: "Improves plant health and natural resistance",
          safety: "Enhances soil ecosystem health",
          residual: "Permanent soil improvement"
        }
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Property Assessment & Planning",
      description: "Comprehensive evaluation of infestation levels and optimal treatment strategy",
      timeline: "Day 1",
      activities: [
        "Detailed property inspection and mapping",
        "Adult population density assessment", 
        "Soil condition and pH testing",
        "Environmental factor evaluation",
        "Customized treatment plan development"
      ]
    },
    {
      step: 2,
      title: "Organic Residual Application",
      description: "Professional application of OMRI certified pesticides for immediate adult elimination",
      timeline: "Day 2-3",
      activities: [
        "Weather condition optimization",
        "Precision application equipment setup",
        "Targeted spraying of adult congregation areas",
        "Residual protection establishment",
        "Safety protocol implementation"
      ]
    },
    {
      step: 3,
      title: "Soil Treatment Implementation",
      description: "Strategic soil treatment application for long-term systemic protection",
      timeline: "Day 4-7",
      activities: [
        "Root zone identification and preparation",
        "Organic soil amendment application",
        "Beneficial microorganism introduction",
        "Irrigation system optimization",
        "Monitoring equipment installation"
      ]
    },
    {
      step: 4,
      title: "Monitoring & Maintenance",
      description: "Ongoing assessment and treatment adjustment for optimal results",
      timeline: "Ongoing",
      activities: [
        "Weekly population monitoring",
        "Treatment effectiveness evaluation",
        "Soil health assessment",
        "Reapplication scheduling as needed",
        "Detailed progress reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <LocalSEO 
        page="organic-treatment"
        title="Organic Pesticide Residual Application | Spotted Lanternfly Adult Elimination Nassau County"
        description="Professional organic pesticide residual application and soil treatment for spotted lanternfly elimination in Nassau County, Suffolk County & Long Island. OMRI certified solutions."
        keywords="organic pesticide residual application Nassau County, spotted lanternfly adult elimination Suffolk County, organic soil treatment Long Island, OMRI certified pest control Dix Hills"
        canonicalUrl="https://thelanternflyguy.com/organic-treatment"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-semibold px-4 py-2">
              <Leaf className="h-4 w-4 mr-2" />
              OMRI Certified Organic Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Organic Pesticide Residual Application
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block">
                & Advanced Soil Treatment
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Professional organic pesticide application for immediate adult spotted lanternfly elimination 
              combined with advanced soil treatment systems providing season-long protection in Nassau County, Suffolk County & Long Island.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  <Droplets className="mr-2 h-5 w-5" />
                  Schedule Organic Treatment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-400 text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <PhoneTracking
                  phoneNumber={companyInfo.phone}
                  trackingId="organic-hero-phone"
                  className="flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Organic Specialist: {companyInfo.phone}
                </PhoneTracking>
              </Button>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 max-w-5xl mx-auto">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="font-semibold text-green-400">OMRI Certified</div>
                <div className="text-slate-300 text-sm">Organic Compliance</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="font-semibold text-blue-400">95% Effective</div>
                <div className="text-slate-300 text-sm">Adult Elimination</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="font-semibold text-purple-400">Family Safe</div>
                <div className="text-slate-300 text-sm">Non-Toxic Formula</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="font-semibold text-yellow-400">Long-Lasting</div>
                <div className="text-slate-300 text-sm">Season Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Treatment Options</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Professional Organic Treatment Methods
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive organic treatment solutions designed for immediate results 
              and long-term protection against spotted lanternfly infestations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {treatmentMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-slate-700/80 backdrop-blur-sm border border-slate-600 hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {method.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg border border-green-500/20">
                      <div className="text-center">
                        <div className="font-semibold text-green-300 text-sm mb-1">Effectiveness</div>
                        <div className="text-green-100 font-bold">{method.effectiveness}</div>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20">
                      <div className="text-center">
                        <div className="font-semibold text-blue-300 text-sm mb-1">Protection Duration</div>
                        <div className="text-blue-100 font-bold">{method.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Ideal Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {method.applications.map((app, appIndex) => (
                        <div key={appIndex} className="text-xs text-slate-300 bg-slate-800/50 px-2 py-1 rounded">
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organic Products Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Organic Product Portfolio</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              OMRI Certified Organic Products
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We exclusively use OMRI certified organic products that are safe for families, pets, 
              and beneficial insects while providing maximum effectiveness against spotted lanternflies.
            </p>
          </div>

          <div className="space-y-12">
            {organicProducts.map((category, catIndex) => (
              <div key={catIndex} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <category.icon className="h-8 w-8 text-green-400" />
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  <p className="text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.products.map((product, prodIndex) => (
                    <Card key={prodIndex} className="border-0 shadow-lg bg-slate-700/60 backdrop-blur-sm border border-slate-600">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">{product.name}</CardTitle>
                        <CardDescription className="text-slate-300">{product.source}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <span className="text-green-400 font-semibold text-sm">Action: </span>
                            <span className="text-slate-200 text-sm">{product.action}</span>
                          </div>
                          <div>
                            <span className="text-blue-400 font-semibold text-sm">Safety: </span>
                            <span className="text-slate-200 text-sm">{product.safety}</span>
                          </div>
                          <div>
                            <span className="text-purple-400 font-semibold text-sm">Residual: </span>
                            <span className="text-slate-200 text-sm">{product.residual}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-800">Professional Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              4-Stage Organic Treatment Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our systematic approach ensures maximum effectiveness while maintaining complete organic compliance and environmental safety.
            </p>
          </div>

          <div className="space-y-8">
            {applicationProcess.map((process, index) => (
              <div key={index} className="relative">
                {index < applicationProcess.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-green-500 to-blue-500 hidden md:block"></div>
                )}
                
                <Card className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    <div className="md:col-span-1 p-8 bg-gradient-to-br from-green-600/20 to-blue-600/20 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-white">{process.step}</span>
                      </div>
                      <Badge className="bg-slate-600 text-slate-200">{process.timeline}</Badge>
                    </div>
                    
                    <div className="md:col-span-3 p-8">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">{process.title}</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">{process.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                          {process.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-200 text-sm">{activity}</span>
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

      {/* Safety & Environmental Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800">Environmental Safety</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Complete Safety & Environmental Protection
              </h2>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg">
                  <strong className="text-white">OMRI Certified Organic:</strong> All products are certified by the 
                  Organic Materials Review Institute, ensuring complete compliance with organic standards.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Family & Pet Safe:</strong> Our organic treatments are completely 
                  non-toxic to humans, pets, and beneficial insects when properly applied.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Pollinator Protection:</strong> Formulations are specifically chosen 
                  to preserve bee, butterfly, and other beneficial insect populations.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Soil Health Enhancement:</strong> Our soil treatments actually improve 
                  soil health through beneficial microorganism introduction.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <Leaf className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="font-semibold text-green-400">100% Organic</div>
                  <div className="text-slate-300 text-sm">OMRI Certified</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="font-semibold text-blue-400">Pollinator Safe</div>
                  <div className="text-slate-300 text-sm">Bee Friendly</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwZXN0JTIwY29udHJvbHxlbnwwfHx8fDE3NTY1NzM5ODB8MA&ixlib=rb-4.1.0&q=85"
                alt="Organic treatment application"
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
              Organic Treatment Services
            </h2>
            <p className="text-xl text-slate-300">
              Professional organic pesticide and soil treatment services throughout Long Island
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                property: "Residential Properties",
                icon: Home,
                description: "Complete organic treatment for homes and residential landscapes",
                features: ["Family-safe applications", "Pet-friendly formulations", "Organic garden protection", "Lawn and landscape care"]
              },
              {
                property: "Commercial Properties",
                icon: Building,
                description: "Professional organic pest management for businesses and facilities",
                features: ["Employee safety priority", "Business continuity maintained", "Organic compliance standards", "Professional application"]
              },
              {
                property: "Agricultural & Specialty",
                icon: TreePine,
                description: "Specialized organic treatments for farms, wineries, and specialty crops",
                features: ["OMRI certification maintained", "Crop safety guaranteed", "Harvest protection", "Organic farming compliance"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white border-white/30">OMRI Certified Organic Solutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Protect Your Property with Organic Excellence
            </h2>
            <p className="text-xl text-green-100">
              Choose Nassau County and Suffolk County's leading organic spotted lanternfly treatment specialists. 
              Safe for families, pets, and the environment - effective against pests.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                <Droplets className="mr-2 h-5 w-5" />
                Schedule Organic Treatment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <PhoneTracking
                phoneNumber={companyInfo.phone}
                trackingId="organic-cta-phone"
                className="flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Organic Specialist: {companyInfo.phone}
              </PhoneTracking>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-6 text-green-200">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>OMRI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Family & Pet Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5" />
              <span>Pollinator Friendly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganicTreatmentPage;