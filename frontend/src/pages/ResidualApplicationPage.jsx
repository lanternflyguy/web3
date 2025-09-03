import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Leaf, CheckCircle, Star, Phone, Mail, MapPin, Spray, Users, Heart, Home, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const ResidualApplicationPage = () => {
  const serviceTowns = [
    'Plainview NY', 'Cold Spring Harbor NY', 'Syosset NY', 'Bellmore NY', 'Dix Hills NY',
    'Manhattan NY', 'Laurel Hollow NY', 'Hicksville NY', 'Huntington NY', 'Huntington Bay NY',
    'Lloyd Neck NY', 'Jamaica Estates NY', 'Upper Brookville NY', 'Muttontown NY', 'Locust Valley NY'
  ];

  const pricingOptions = [
    {
      name: 'Residual Misting Only',
      size: 'Up to 1/2 acre',
      price: '$275 - $425',
      features: ['High-powered misting system', 'Adult knockdown treatment', 'OMRI organic certified', '30-day residual protection']
    },
    {
      name: 'Misting + Soil Injection',
      size: 'Up to 1/2 acre', 
      price: '$485 - $725',
      features: ['Complete dual-action treatment', 'Adult elimination + prevention', 'Extended protection', '60-day warranty'],
      popular: true
    },
    {
      name: 'Premium Estate Misting',
      size: '1/2 - 2 acres',
      price: '$625 - $1,250',
      features: ['Estate-wide coverage', 'Multiple application zones', 'Priority scheduling', 'Season-long monitoring']
    },
    {
      name: 'Commercial Misting',
      size: 'Commercial properties',
      price: '$450 - $1,850',
      features: ['Business-friendly scheduling', 'Minimal disruption', 'Comprehensive coverage', 'Documentation provided']
    }
  ];

  const safetyFeatures = [
    {
      icon: Heart,
      title: 'Child Safe',
      description: 'EPA registered organic formula completely safe around children and play areas'
    },
    {
      icon: Users,
      title: 'Pet Friendly',
      description: 'Non-toxic to dogs, cats, and other pets - they can return to treated areas immediately'
    },
    {
      icon: Leaf,
      title: 'Landscape Safe',
      description: 'OMRI organic certified - will not harm ornamental plants, flowers, or vegetables'
    },
    {
      icon: Home,
      title: 'Property Safe',
      description: 'No staining or damage to outdoor furniture, vehicles, or building surfaces'
    }
  ];

  return (
    <>
      <Helmet>
        <title>High-Powered Misting Residual Application | Adult Spotted Lanternfly Knockdown | NY Premier Service</title>
        <meta name="description" content="Professional high-powered misting residual application for adult spotted lanternfly knockdown in Plainview, Cold Spring Harbor, Syosset, Dix Hills NY. OMRI organic, EPA registered, safe for pets and children." />
        <meta name="keywords" content="spotted lanternfly misting Plainview NY, adult knockdown Cold Spring Harbor, residual application Syosset, organic pest control Dix Hills, lanternfly removal Manhattan NY, high powered misting Huntington" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/residual-application" />
        
        {/* Local SEO Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "High-Powered Misting Residual Application",
            "description": "Professional spotted lanternfly adult knockdown service using high-powered misters with organic, EPA registered chemicals",
            "provider": {
              "@type": "LocalBusiness",
              "name": "The Lantern Fly Guys Inc",
              "telephone": "+15167250672",
              "email": "chris@lanternflyguy.com",
              "url": "https://www.thelanternflyguys.com",
              "areaServed": serviceTowns.map(town => ({
                "@type": "City",
                "name": town,
                "containedInPlace": {
                  "@type": "State", 
                  "name": "New York"
                }
              }))
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "$275-$1850",
              "availability": "InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Spray className="h-16 w-16 text-yellow-400 mr-4" />
              <Zap className="h-20 w-20 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              High-Powered <span className="text-yellow-400">Misting</span> Residual Application
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4">
              Adult Spotted Lanternfly <span className="text-red-400">Knockdown</span> Treatment
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              New York's Premier #1 Spotted Lanternfly Removal Service. OMRI Organic Certified, EPA Registered chemicals 
              safe for pets, children, and ornamental landscapes. Call the Best to Rid Your Pest!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Misting Service</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(516) 725-0672">Call (516) 725-0672</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Premium Service Coverage Areas</h2>
              <p className="text-slate-300 text-lg">Professional misting services throughout Nassau & Suffolk County</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {serviceTowns.map((town, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 text-center">
                  <CardContent className="p-4">
                    <MapPin className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">{town}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Badge className="bg-red-600 text-white px-6 py-2 text-lg">
                🏆 New York's #1 Spotted Lanternfly Removal Service
              </Badge>
            </div>
          </div>
        </section>

        {/* Misting Technology */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">High-Powered Misting Technology</h2>
              <p className="text-slate-300 text-lg">Advanced equipment for maximum adult lanternfly knockdown effectiveness</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Professional Grade Equipment</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Spray className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Ultra-Fine Misting System</h4>
                      <p className="text-slate-300">High-pressure misting creates ultra-fine droplets for maximum coverage and adult insect contact. Superior penetration into foliage and hiding spots.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Instant Knockdown Action</h4>
                      <p className="text-slate-300">Immediate adult elimination on contact with 30-day residual protection. Stops reproduction cycles and prevents new infestations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Precision Application</h4>
                      <p className="text-slate-300">Targeted application minimizes chemical use while maximizing effectiveness. Professional equipment ensures even coverage.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Treatment Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="text-white font-medium">Droplet Size</span>
                    <span className="text-yellow-400 font-bold">10-50 microns</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="text-white font-medium">Coverage Rate</span>
                    <span className="text-yellow-400 font-bold">2,000-5,000 sq ft/hr</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="text-white font-medium">Knockdown Time</span>
                    <span className="text-yellow-400 font-bold">Immediate</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="text-white font-medium">Residual Protection</span>
                    <span className="text-yellow-400 font-bold">30 days</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-700 p-4 rounded">
                    <span className="text-white font-medium">Re-entry Time</span>
                    <span className="text-green-400 font-bold">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Organic Certification */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">OMRI Organic Certified & EPA Registered</h2>
              <p className="text-slate-300 text-lg">100% Safe for Families, Pets & Ornamental Landscapes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="bg-slate-700 border-slate-600 text-white text-center">
                    <CardHeader>
                      <IconComponent className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-12 bg-green-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-100 mb-2">EPA REGISTERED</div>
                  <div className="text-green-200">New York State Approved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-100 mb-2">OMRI CERTIFIED</div>
                  <div className="text-green-200">Organic Materials Review Institute</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-100 mb-2">ZERO RE-ENTRY</div>
                  <div className="text-green-200">Safe Immediate Return</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Options & Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Misting Service Options & Pricing</h2>
              <p className="text-slate-300 text-lg">Flexible solutions - Use alone or combine with soil injection for maximum protection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingOptions.map((option, index) => (
                <Card key={index} className={`bg-slate-800 border-slate-700 text-white relative ${option.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                  {option.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 font-semibold">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <DollarSign className="h-12 w-12 text-yellow-400" />
                    </div>
                    <CardTitle className="text-xl font-bold">{option.name}</CardTitle>
                    <div className="text-slate-400">{option.size}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{option.price}</div>
                      <div className="text-sm text-slate-300">Initial Treatment</div>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
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

        {/* Combination Treatments */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Maximum Protection: Misting + Soil Injection</h2>
              <p className="text-slate-300 text-lg">Combine both treatments for complete adult elimination and long-term prevention</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Spray className="h-8 w-8 mr-3" />
                    Misting Only
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span>Immediate adult knockdown</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span>30-day residual protection</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span>Surface and foliage coverage</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span>Quick application process</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Shield className="h-8 w-8 mr-3" />
                    Misting + Soil Injection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-2" />
                      <span>Complete adult elimination</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-2" />
                      <span>6-8 month soil protection</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-2" />
                      <span>Root zone treatment</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-2" />
                      <span>Maximum prevention</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Why New York Chooses The Lantern Fly Guys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">#1 Rated in New York</h3>
                <p className="text-slate-300 mb-6">
                  Premier spotted lanternfly removal service with the highest customer satisfaction rates. 
                  Professional equipment, organic solutions, and guaranteed results.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Advanced Misting Technology</h3>
                <p className="text-slate-300">
                  State-of-the-art high-powered misting systems deliver superior coverage and immediate knockdown 
                  of adult spotted lanternflies with extended residual protection.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">100% Safe & Organic</h3>
                <p className="text-slate-300 mb-6">
                  OMRI certified organic, EPA registered chemicals that are completely safe for children, pets, 
                  and ornamental landscapes. Zero re-entry time required.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Local NY Expertise</h3>
                <p className="text-slate-300">
                  Deep knowledge of Long Island's unique landscape and spotted lanternfly challenges. 
                  Serving Nassau and Suffolk County with pride since day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Call the Best to Rid Your Pest!</h2>
            <p className="text-xl text-red-100 mb-8">
              New York's Premier #1 Spotted Lanternfly Removal Service. Professional misting treatments 
              with immediate results and extended protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Misting Service</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3" asChild>
                <a href="tel:(516) 725-0672">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (516) 725-0672
                </a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-red-200">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-red-200">Emergency Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Licensed</div>
                <div className="text-red-200">Insured & Bonded</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResidualApplicationPage;