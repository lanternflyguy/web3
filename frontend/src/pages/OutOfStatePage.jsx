import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle, Truck, Building, Grape, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const OutOfStatePage = () => {
  const affectedStates = [
    {
      state: 'Pennsylvania',
      severity: 'Critical',
      municipalities: 15,
      wineries: 45,
      description: 'Ground zero of the spotted lanternfly invasion with extensive agricultural damage.'
    },
    {
      state: 'New Jersey',
      severity: 'High',
      municipalities: 12,
      wineries: 30,
      description: 'Rapidly spreading infestation threatening vineyards and urban forests.'
    },
    {
      state: 'Delaware',
      severity: 'High',
      municipalities: 8,
      wineries: 15,
      description: 'Established populations affecting agriculture and municipalities.'
    },
    {
      state: 'Maryland',
      severity: 'Moderate',
      municipalities: 10,
      wineries: 25,
      description: 'Emerging threat with confirmed populations in multiple counties.'
    },
    {
      state: 'Virginia',
      severity: 'Moderate',
      municipalities: 8,
      wineries: 35,
      description: 'Growing concern for wine industry and municipal properties.'
    },
    {
      state: 'Connecticut',
      severity: 'Emerging',
      municipalities: 6,
      wineries: 20,
      description: 'Early detection phase requiring immediate intervention.'
    }
  ];

  const services = [
    {
      title: 'Municipal Emergency Response',
      description: 'Rapid deployment teams for cities and counties facing spotted lanternfly crises',
      features: ['24-48 hour deployment', 'Multi-county coverage', 'Emergency task forces', 'Public education programs']
    },
    {
      title: 'Winery Protection Programs',
      description: 'Specialized vineyard treatments to protect grape crops and wine production',
      features: ['OMRI organic certified', 'Harvest-safe applications', 'Season-long protection', 'Minimal impact on operations']
    },
    {
      title: 'Large-Scale Operations',
      description: 'Coordinated treatments for extensive properties and multiple locations',
      features: ['Fleet deployment', 'Trained local crews', 'Equipment staging', 'Progress reporting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Out-of-State Spotted Lanternfly Control | Municipal & Winery Services | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly control services for out-of-state municipalities and wineries. Emergency response available in PA, NJ, DE, MD, VA, CT." />
        <meta name="keywords" content="spotted lanternfly Pennsylvania, municipal pest control, winery protection, out of state pest management, emergency response" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/out-of-state" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Truck className="h-12 w-12 text-yellow-400 mr-4" />
              <Shield className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Out-of-State <span className="text-yellow-400">Emergency Response</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional spotted lanternfly control for municipalities and wineries outside New York. 
              We deploy our expert teams and patent-pending BT Gen 2 technology wherever the crisis demands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Request Emergency Deployment</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(631) 727-0489">Emergency Hotline: (631) 727-0489</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Crisis Map */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Spotted Lanternfly Crisis Map</h2>
              <p className="text-slate-300 text-lg">States currently under threat and our deployment capabilities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {affectedStates.map((state, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold">{state.state}</CardTitle>
                      <Badge 
                        className={`${
                          state.severity === 'Critical' ? 'bg-red-600' :
                          state.severity === 'High' ? 'bg-orange-600' :
                          state.severity === 'Moderate' ? 'bg-yellow-600' :
                          'bg-blue-600'
                        }`}
                      >
                        {state.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{state.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 text-blue-400 mr-2" />
                        <span className="text-sm">{state.municipalities} Municipalities at Risk</span>
                      </div>
                      <div className="flex items-center">
                        <Grape className="h-4 w-4 text-purple-400 mr-2" />
                        <span className="text-sm">{state.wineries} Wineries Threatened</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Specialized Out-of-State Services</h2>
              <p className="text-slate-300 text-lg">Tailored solutions for large-scale municipal and agricultural operations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                    <p className="text-slate-300">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Municipal Services */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Municipal Emergency Services</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Crisis Response Teams</h3>
                      <p className="text-slate-300">Rapid deployment of expert technicians and equipment for municipal emergencies affecting public spaces, parks, and infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Building className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Multi-County Coordination</h3>
                      <p className="text-slate-300">Coordinated treatments across county lines with unified management and reporting for regional spotted lanternfly control.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Public Education Programs</h3>
                      <p className="text-slate-300">Community workshops and educational programs to help residents identify and report spotted lanternfly infestations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Municipal Service Packages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="font-medium text-white">Emergency Response (24-48 hrs)</span>
                    <span className="text-yellow-400 font-bold">$5,000-$15,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="font-medium text-white">County-Wide Program</span>
                    <span className="text-yellow-400 font-bold">$25,000-$75,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="font-medium text-white">Multi-County Coordination</span>
                    <span className="text-yellow-400 font-bold">$50,000-$150,000</span>
                  </div>
                  <div className="text-center mt-6">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2" asChild>
                      <Link to="/contact">Get Municipal Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Winery Services */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Winery Protection Packages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="font-medium text-white">Small Vineyard (1-10 acres)</span>
                    <span className="text-yellow-400 font-bold">$2,000-$8,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="font-medium text-white">Medium Vineyard (10-50 acres)</span>
                    <span className="text-yellow-400 font-bold">$8,000-$25,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="font-medium text-white">Large Vineyard (50+ acres)</span>
                    <span className="text-yellow-400 font-bold">$25,000-$75,000</span>
                  </div>
                  <div className="bg-green-800 p-4 rounded mt-4">
                    <p className="text-green-100 text-sm font-medium">🍇 OMRI Organic Certified - Safe for Wine Production</p>
                  </div>
                  <div className="text-center mt-6">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2" asChild>
                      <Link to="/contact">Protect Your Vineyard</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Winery & Vineyard Protection</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Grape className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Harvest-Safe Applications</h3>
                      <p className="text-slate-300">OMRI certified organic treatments that protect grape crops without affecting wine quality or production schedules.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Season-Long Protection</h3>
                      <p className="text-slate-300">Our BT Gen 2 sterilization technology provides 2-3 seasons of protection, covering multiple harvest cycles.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Wine Industry Expertise</h3>
                      <p className="text-slate-300">Specialized knowledge of vineyard operations, minimal disruption to tourism, and protection of valuable grape varieties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Rapid Deployment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Emergency Call</h3>
                <p className="text-slate-400 text-sm">24/7 hotline for crisis situations</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Site Assessment</h3>
                <p className="text-slate-400 text-sm">Remote and on-site evaluation within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Team Deployment</h3>
                <p className="text-slate-400 text-sm">Equipment and crew mobilization within 48 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Treatment & Follow-up</h3>
                <p className="text-slate-400 text-sm">Comprehensive treatment with ongoing monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Don't Let Spotted Lanternflies Devastate Your Community</h2>
            <p className="text-xl text-red-100 mb-8">
              Every day of delay means exponential growth in infestation. Our emergency response teams are ready to deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Request Emergency Response</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3" asChild>
                <a href="tel:(631) 727-0489">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Hotline: (631) 727-0489
                </a>
              </Button>
            </div>
            <p className="text-red-200 mt-6 text-sm">
              Available for deployment in PA, NJ, DE, MD, VA, CT and expanding nationwide
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OutOfStatePage;