import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  AlertTriangle, 
  Eye, 
  Calendar, 
  Target, 
  Shield,
  Phone,
  Search,
  Clock,
  CheckCircle,
  ArrowRight,
  Microscope,
  TreePine
} from 'lucide-react';
import LocalSEO from '../components/LocalSEO';
import PhoneTracking from '../components/PhoneTracking';
import { companyInfo } from '../mock';

const ReproductionPage = () => {
  const eggMassStages = [
    {
      stage: "Egg Mass Formation",
      timing: "September - November",
      description: "Adult females lay 30-50 eggs in protective mud-like masses on various surfaces",
      image: "https://images.unsplash.com/photo-1615507131862-e142f9975d7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      criticalInfo: "Each female can produce multiple egg masses containing 1,000+ eggs total",
      locations: ["Tree bark", "Stone surfaces", "Outdoor furniture", "Vehicles", "Buildings", "Playground equipment"]
    },
    {
      stage: "Winter Dormancy", 
      timing: "December - April",
      description: "Eggs remain dormant through winter, protected by the waxy outer coating",
      image: "https://images.unsplash.com/photo-1649020507268-4e35c886d57d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      criticalInfo: "This is the MOST CRITICAL time for elimination - destroying egg masses prevents spring emergence",
      locations: ["Hidden under bark", "Protected crevices", "Outdoor storage areas", "Less visible surfaces"]
    },
    {
      stage: "Spring Emergence",
      timing: "May - June", 
      description: "Nymphs emerge from egg masses and immediately begin feeding and dispersing",
      image: "https://images.unsplash.com/photo-1724430157180-82c141c57abc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      criticalInfo: "Once emerged, population explodes exponentially - prevention window has closed",
      locations: ["Spreading to host plants", "Tree canopies", "Garden areas", "Commercial properties"]
    }
  ];

  const inspectionGuide = [
    {
      title: "Visual Identification",
      icon: Eye,
      description: "Learn to spot egg masses before they hatch",
      details: [
        "Gray-brown waxy coating covering eggs",
        "1-2 inches long, oval-shaped masses", 
        "Muddy, putty-like appearance when fresh",
        "Often mistaken for old chewing gum",
        "May appear cracked or weathered over winter"
      ]
    },
    {
      title: "Inspection Timing",
      icon: Calendar,
      description: "Critical windows for effective egg mass detection",
      details: [
        "October-November: Fresh egg masses most visible",
        "December-February: Winter inspection critical period",
        "March-April: Final opportunity before hatching",
        "Weekly inspections during peak laying season",
        "Post-storm inspections for displaced masses"
      ]
    },
    {
      title: "Target Locations",
      icon: Search,
      description: "Where to focus your inspection efforts",
      details: [
        "Tree bark and crevices (especially smooth bark)",
        "Outdoor furniture and equipment",
        "Vehicles and trailers",
        "Building foundations and siding", 
        "Playground and recreational equipment",
        "Stone walls and retaining walls"
      ]
    },
    {
      title: "Professional Assessment",
      icon: Microscope,
      description: "Why expert identification is crucial",
      details: [
        "Distinguish from similar-looking substances",
        "Identify viable vs. destroyed masses",
        "Locate hidden or hard-to-reach masses",
        "Assess infestation severity levels",
        "Develop targeted elimination strategy"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <LocalSEO 
        page="reproduction"
        title="Spotted Lanternfly Reproduction & Egg Mass Inspection | Nassau County, Suffolk County"
        description="Complete guide to spotted lanternfly reproduction, egg mass identification, and prevention in Nassau County, Suffolk County & Long Island. Professional egg mass elimination services."
        keywords="spotted lanternfly reproduction, lanternfly egg masses Nassau County, egg mass inspection Suffolk County, lanternfly breeding cycle Long Island, egg mass elimination Dix Hills"
        canonicalUrl="https://thelanternflyguy.com/reproduction"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <Badge className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-2">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Critical Reproduction Information
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Spotted Lanternfly Reproduction:
              <span className="text-red-400 block">Why Egg Mass Inspection is Critical</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Understanding spotted lanternfly reproduction cycles and identifying egg masses before they hatch 
              is the most effective prevention strategy. Learn from Nassau County and Suffolk County's leading experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  <Target className="mr-2 h-5 w-5" />
                  Schedule Egg Mass Inspection
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-400 text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <PhoneTracking
                  phoneNumber={companyInfo.phone}
                  trackingId="reproduction-hero-phone"
                  className="flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Response: {companyInfo.phone}
                </PhoneTracking>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Timeline Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800">Reproduction Timeline</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              The Critical 12-Month Reproduction Cycle
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understanding when and where spotted lanternflies reproduce is essential for effective prevention and control.
            </p>
          </div>

          <div className="space-y-12">
            {eggMassStages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-slate-700/80 backdrop-blur-sm border border-slate-600 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={stage.image}
                      alt={`Spotted Lanternfly ${stage.stage}`}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-slate-900/80 text-white backdrop-blur-sm text-lg px-4 py-2">
                        Stage {index + 1}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">{stage.stage}</h3>
                        <Badge variant="outline" className="text-slate-300 border-slate-400 px-3 py-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {stage.timing}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {stage.description}
                      </p>
                      
                      <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/30">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-red-300 mb-2">Critical Information</p>
                            <p className="text-red-100 text-sm">{stage.criticalInfo}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-3">Common Locations:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {stage.locations.map((location, locIndex) => (
                            <div key={locIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-300 text-sm">{location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Guide Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Professional Inspection Guide</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              How to Inspect for Spotted Lanternfly Egg Masses
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn the professional techniques our Nassau County and Suffolk County experts use 
              to identify and assess egg mass infestations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inspectionGuide.map((guide, index) => (
              <Card key={index} className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <guide.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{guide.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guide.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Inspection Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-100 text-yellow-800">Expert Assessment</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Why Professional Egg Mass Inspection is Essential
              </h2>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg">
                  <strong className="text-white">Early Detection Saves Thousands:</strong> One missed egg mass can produce 
                  30-50 lanternflies, each capable of laying multiple egg masses the following season.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Expert Identification:</strong> Our Nassau County and Suffolk County 
                  specialists can distinguish viable egg masses from old, weathered, or already-hatched masses.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Complete Property Assessment:</strong> We inspect all potential 
                  breeding sites, including hard-to-reach areas that property owners typically miss.
                </p>
                <p className="text-lg">
                  <strong className="text-white">Prevention Strategy:</strong> Targeted elimination during the egg stage 
                  is 90% more cost-effective than treating active infestations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">90%</div>
                  <div className="text-slate-300 text-sm">Cost Reduction</div>
                  <div className="text-slate-400 text-xs">vs. Active Treatment</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">1,500+</div>
                  <div className="text-slate-300 text-sm">Eggs Prevented</div>
                  <div className="text-slate-400 text-xs">Per Eliminated Mass</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707871424922-fc5c7a1e1060?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw2fHx0cmVlJTIwZGFtYWdlfGVufDB8fHx8MTc1NjU3NDAxNHww&ixlib=rb-4.1.0&q=85"
                alt="Professional egg mass inspection"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Service Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Professional Egg Mass Inspection Services
            </h2>
            <p className="text-xl text-slate-300">
              Serving Long Island with specialized spotted lanternfly reproduction expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                area: "Nassau County",
                description: "Complete egg mass inspection and elimination services throughout Nassau County",
                highlights: ["Residential Properties", "Commercial Buildings", "Municipal Facilities", "Educational Institutions"]
              },
              {
                area: "Suffolk County", 
                description: "Professional spotted lanternfly reproduction control across Suffolk County",
                highlights: ["Vineyard Protection", "Agricultural Properties", "Residential Communities", "Business Districts"]
              },
              {
                area: "Dix Hills & Surrounding Areas",
                description: "Specialized local services for Dix Hills and neighboring Long Island communities",
                highlights: ["Heritage Tree Protection", "HOA Communities", "Luxury Properties", "Emergency Response"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-xl bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto">
                    <TreePine className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.area}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-200 text-sm">{highlight}</span>
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
      <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white border-white/30">Time-Sensitive Action Required</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Don't Wait - Inspect for Egg Masses Now!
            </h2>
            <p className="text-xl text-red-100">
              The window for effective egg mass elimination is closing. Contact Nassau County and Suffolk County's 
              leading spotted lanternfly reproduction experts today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                <Search className="mr-2 h-5 w-5" />
                Schedule Emergency Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <PhoneTracking
                phoneNumber={companyInfo.phone}
                trackingId="reproduction-cta-phone"
                className="flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {companyInfo.phone}
              </PhoneTracking>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-6 text-red-200">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Emergency Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReproductionPage;