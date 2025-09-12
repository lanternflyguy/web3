import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Star, CheckCircle, DollarSign, Users, Building, Grape, MapPin, Clock, Award, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const residentialPackages = [
    {
      name: "Basic Residential",
      size: "Up to 1/4 acre",
      initial: "$350 - $450",
      followup: "$250 - $350",
      features: ["Property inspection", "Targeted treatment", "30-day warranty"],
      icon: Shield,
      popular: false
    },
    {
      name: "Standard Residential",
      size: "1/4 to 1/2 acre",
      initial: "$450 - $650",
      followup: "$350 - $450",
      features: ["Full property treatment", "Heritage tree protection", "60-day warranty"],
      icon: Star,
      popular: true
    },
    {
      name: "Premium Residential",
      size: "1/2 to 1 acre",
      initial: "$650 - $950",
      followup: "$450 - $650",
      features: ["Comprehensive treatment", "Soil application", "Season-long protection"],
      icon: Award,
      popular: false
    },
    {
      name: "Estate Protection",
      size: "1+ acres",
      initial: "$950 - $1,500",
      followup: "$650 - $950",
      features: ["Full estate coverage", "Quarterly monitoring", "VIP service"],
      icon: Building,
      popular: false
    }
  ];

  const commercialPackages = [
    {
      name: "Small Commercial",
      size: "Up to 5,000 sq ft",
      initial: "$500 - $800",
      monthly: "$300 - $500",
      features: ["Business-friendly scheduling", "Minimal disruption"]
    },
    {
      name: "Medium Commercial",
      size: "5,000 - 20,000 sq ft",
      initial: "$800 - $1,500",
      monthly: "$500 - $800",
      features: ["Staff training", "Detailed reporting"]
    },
    {
      name: "Large Commercial",
      size: "20,000+ sq ft",
      initial: "$1,500 - $3,000",
      monthly: "$800 - $1,500",
      features: ["Comprehensive management", "Compliance documentation"]
    },
    {
      name: "Industrial/Manufacturing",
      size: "Large facilities",
      initial: "$2,000 - $5,000",
      monthly: "$1,000 - $2,500",
      features: ["Safety protocols", "24/7 support", "Minimal downtime"]
    }
  ];

  const hoaPackages = [
    {
      name: "Small HOA Communities",
      size: "10-25 homes",
      cost: "$2,500 - $4,000",
      perHome: "$100 - $160",
      features: ["Bulk pricing", "Community education", "Board reporting"]
    },
    {
      name: "Medium HOA Communities",
      size: "25-75 homes",
      cost: "$4,000 - $8,000",
      perHome: "$80 - $130",
      features: ["Resident workshops", "Detailed reporting", "Preventive programs"]
    },
    {
      name: "Large HOA Communities",
      size: "75+ homes",
      cost: "$8,000 - $15,000",
      perHome: "$60 - $110",
      features: ["Full community management", "Ongoing education", "Priority service"]
    }
  ];

  const specializedTreatments = [
    {
      name: "Patent-Pending BT Gen 2 Sterilization",
      residential: "+$200 - $400 premium",
      commercial: "+$400 - $800 premium",
      large: "+$800 - $1,500 premium",
      description: "2-3 season protection with cutting-edge technology"
    },
    {
      name: "Organic Residual Application",
      small: "$300 - $500",
      medium: "$500 - $800",
      large: "$800 - $1,500",
      description: "OMRI certified products, family-safe application"
    },
    {
      name: "Soil Treatment System",
      perSqFt: "$150 - $300 per 1,000 sq ft",
      rootZone: "$200 - $400 per tree",
      fullProperty: "$500 - $2,000",
      description: "6-8 month protection, soil health improvement"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - The Lantern Fly Guys | Professional Spotted Lanternfly Control Long Island</title>
        <meta name="description" content="Transparent pricing for professional spotted lanternfly control services. Residential, commercial, HOA, and vineyard treatments in Nassau & Suffolk County." />
        <meta name="keywords" content="spotted lanternfly removal cost, pest control pricing Long Island, lanternfly treatment rates Nassau County" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <DollarSign className="h-16 w-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional spotted lanternfly control services with upfront pricing. 
              No hidden fees, no surprises - just effective pest management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">Call (516) 870-8356</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Residential Packages */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Residential Services</h2>
              <p className="text-slate-300 text-lg">Comprehensive lanternfly protection for your home and property</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {residentialPackages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <Card key={index} className={`bg-slate-800 border-slate-700 text-white relative ${pkg.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 font-semibold">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <IconComponent className="h-12 w-12 text-yellow-400" />
                      </div>
                      <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                      <CardDescription className="text-slate-400">{pkg.size}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-yellow-400 mb-2">{pkg.initial}</div>
                        <div className="text-sm text-slate-300">Initial Treatment</div>
                        <div className="text-lg font-semibold text-white mt-2">{pkg.followup}</div>
                        <div className="text-sm text-slate-300">Follow-up Treatments</div>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Commercial Services</h2>
              <p className="text-slate-300 text-lg">Professional pest management for businesses and facilities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commercialPackages.map((pkg, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="text-slate-400">{pkg.size}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-lg font-bold text-yellow-400 mb-1">{pkg.initial}</div>
                      <div className="text-sm text-slate-300 mb-3">Initial Treatment</div>
                      <div className="text-lg font-bold text-yellow-400 mb-1">{pkg.monthly}</div>
                      <div className="text-sm text-slate-300">Monthly Service</div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
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

        {/* HOA Community Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">HOA Community Services</h2>
              <p className="text-slate-300 text-lg">Bulk pricing and community-wide protection programs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hoaPackages.map((pkg, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Users className="h-12 w-12 text-yellow-400" />
                    </div>
                    <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="text-slate-400">{pkg.size}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{pkg.cost}</div>
                      <div className="text-sm text-slate-300 mb-2">Community Treatment</div>
                      <div className="text-lg font-semibold text-white">{pkg.perHome}</div>
                      <div className="text-sm text-slate-300">Per Home Cost</div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
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

        {/* Specialized Treatments */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Specialized Treatments</h2>
              <p className="text-slate-300 text-lg">Advanced pest control solutions with premium technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specializedTreatments.map((treatment, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{treatment.name}</CardTitle>
                    <CardDescription className="text-slate-400">{treatment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {treatment.residential && (
                        <div>
                          <span className="text-sm text-slate-300">Residential: </span>
                          <span className="font-semibold text-yellow-400">{treatment.residential}</span>
                        </div>
                      )}
                      {treatment.commercial && (
                        <div>
                          <span className="text-sm text-slate-300">Commercial: </span>
                          <span className="font-semibold text-yellow-400">{treatment.commercial}</span>
                        </div>
                      )}
                      {treatment.large && (
                        <div>
                          <span className="text-sm text-slate-300">Large Properties: </span>
                          <span className="font-semibold text-yellow-400">{treatment.large}</span>
                        </div>
                      )}
                      {treatment.small && (
                        <div>
                          <span className="text-sm text-slate-300">Small Properties: </span>
                          <span className="font-semibold text-yellow-400">{treatment.small}</span>
                        </div>
                      )}
                      {treatment.medium && (
                        <div>
                          <span className="text-sm text-slate-300">Medium Properties: </span>
                          <span className="font-semibold text-yellow-400">{treatment.medium}</span>
                        </div>
                      )}
                      {treatment.perSqFt && (
                        <div>
                          <span className="text-sm text-slate-300">Per 1,000 sq ft: </span>
                          <span className="font-semibold text-yellow-400">{treatment.perSqFt}</span>
                        </div>
                      )}
                      {treatment.rootZone && (
                        <div>
                          <span className="text-sm text-slate-300">Root Zone: </span>
                          <span className="font-semibold text-yellow-400">{treatment.rootZone}</span>
                        </div>
                      )}
                      {treatment.fullProperty && (
                        <div>
                          <span className="text-sm text-slate-300">Full Property: </span>
                          <span className="font-semibold text-yellow-400">{treatment.fullProperty}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Winery Services */}
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader className="text-center">
                  <Grape className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">Winery & Vineyard Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-yellow-400">Small (1-5 acres)</div>
                      <div className="text-sm text-slate-300">$1,500 - $3,000 initial</div>
                      <div className="text-sm text-slate-300">$300 - $600 per acre</div>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400">Medium (5-20 acres)</div>
                      <div className="text-sm text-slate-300">$3,000 - $8,000 initial</div>
                      <div className="text-sm text-slate-300">$250 - $500 per acre</div>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400">Large (20+ acres)</div>
                      <div className="text-sm text-slate-300">$8,000 - $20,000 initial</div>
                      <div className="text-sm text-slate-300">$200 - $400 per acre</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Municipal Services */}
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">Municipal Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-yellow-400">Parks & Recreation</div>
                      <div className="text-sm text-slate-300">Small: $1,000 - $2,500</div>
                      <div className="text-sm text-slate-300">Large: $6,000 - $15,000</div>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400">Municipal Buildings</div>
                      <div className="text-sm text-slate-300">City Halls: $500 - $1,500</div>
                      <div className="text-sm text-slate-300">Schools: $1,000 - $3,000</div>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400">Contract Discounts</div>
                      <div className="text-sm text-slate-300">Annual: 10-20% off</div>
                      <div className="text-sm text-slate-300">Multi-year: 15-25% off</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Services */}
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-yellow-400">24/7 Emergency Response</div>
                      <div className="text-sm text-slate-300">After hours: +50% surcharge</div>
                      <div className="text-sm text-slate-300">Weekends: +25% surcharge</div>
                      <div className="text-sm text-slate-300">Holidays: +100% surcharge</div>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-400">Crisis Management</div>
                      <div className="text-sm text-slate-300">Rapid deployment: $500-$1,000 fee</div>
                      <div className="text-sm text-slate-300">Large infestations: $2,000-$5,000+</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Factors That Affect Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Property Size</div>
                    <div className="text-slate-300 text-sm">Larger properties require more materials and time</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Infestation Severity</div>
                    <div className="text-slate-300 text-sm">Heavy infestations need more intensive treatment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Property Access</div>
                    <div className="text-slate-300 text-sm">Difficult access areas may require premium pricing</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Treatment Type</div>
                    <div className="text-slate-300 text-sm">Specialized treatments command premium rates</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Urgency</div>
                    <div className="text-slate-300 text-sm">Emergency and rush services include surcharges</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Geographic Location</div>
                    <div className="text-slate-300 text-sm">Travel distance and area demographics</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Seasonal Demand</div>
                    <div className="text-slate-300 text-sm">Peak season may have higher rates</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Volume Discounts</div>
                    <div className="text-slate-300 text-sm">Bulk services get reduced per-unit pricing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Special Offers & Discounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">New Customer Special</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">20% OFF</div>
                  <p className="text-red-100 mb-4">First-time customers save 20% on initial treatment</p>
                  <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold" asChild>
                    <Link to="/contact">Claim Discount</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 border-yellow-400 text-slate-900">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Early Bird Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">15% OFF</div>
                  <p className="text-yellow-900 mb-4">Book treatments January-March for spring savings</p>
                  <Button className="bg-slate-900 text-white hover:bg-slate-800 font-semibold" asChild>
                    <Link to="/contact">Schedule Early</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Protect Your Property?</h2>
            <p className="text-xl text-red-100 mb-8">
              Get a free, no-obligation quote for professional spotted lanternfly control services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (516) 870-8356
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;