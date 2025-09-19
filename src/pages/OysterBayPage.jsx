import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const OysterBayPage = () => {
  return (
    <>
      <Helmet>
        <title>Spotted Lanternfly Control Oyster Bay NY | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly removal and control services in Oyster Bay, NY. Expert pest management for residential and commercial properties." />
        <meta name="keywords" content="spotted lanternfly Oyster Bay NY, pest control Oyster Bay, lanternfly removal Nassau County, Oyster Bay exterminator" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/oyster-bay" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <MapPin className="h-12 w-12 text-yellow-400 mr-4" />
              <Shield className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Spotted Lanternfly Control in <span className="text-yellow-400">Oyster Bay, NY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional spotted lanternfly elimination services for Oyster Bay residents and businesses. 
              Protect your waterfront property with our patent-pending PPMP sterilization technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Free Oyster Bay Assessment</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">Call (516) 870-8356</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Serving Oyster Bay & Waterfront Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Waterfront Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Specialized knowledge of coastal spotted lanternfly challenges and waterfront property protection.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-400 mx-auto" />
                  <CardTitle>Rapid Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Same-day service available for Oyster Bay properties with emergency infestations.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">100+ successful treatments in Nassau County waterfront communities with guaranteed satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Oyster Bay */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Oyster Bay Spotted Lanternfly Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Waterfront Properties</h3>
                    <p className="text-slate-300">Specialized protection for Oyster Bay waterfront homes and estates, including coastal landscape preservation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Commercial Properties</h3>
                    <p className="text-slate-300">Business-friendly treatments for Oyster Bay marinas, restaurants, and commercial waterfront operations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Emergency Response</h3>
                    <p className="text-slate-300">24/7 emergency services for severe infestations threatening Oyster Bay waterfront properties.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">PPMP (Preventative Pest Management Procedure)</h3>
                    <p className="text-slate-300">Advanced sterilization technology providing 2-3 seasons of protection for Oyster Bay properties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Organic Treatments</h3>
                    <p className="text-slate-300">OMRI certified organic solutions safe for families, pets, and the Oyster Bay marine environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Soil Treatment System</h3>
                    <p className="text-slate-300">Long-lasting soil applications providing 6-8 months of protection for Oyster Bay coastal landscapes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Oyster Bay */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Why Oyster Bay Chooses The Lantern Fly Guys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Coastal Specialists</h3>
                <p className="text-slate-300 mb-6">
                  We understand Oyster Bay's unique waterfront environment and the specific challenges coastal properties face 
                  with spotted lanternfly infestations.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  Our patent-pending PPMP sterilization technology is perfectly suited for protecting Oyster Bay's 
                  valuable waterfront properties and mature coastal landscapes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Environmental Responsibility</h3>
                <p className="text-slate-300 mb-6">
                  Our treatments are designed to protect both your property and the sensitive Oyster Bay marine ecosystem, 
                  using EPA-registered, environmentally responsible methods.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Guaranteed Results</h3>
                <p className="text-slate-300">
                  We stand behind our work with comprehensive warranties, ensuring your Oyster Bay waterfront property 
                  remains protected from spotted lanternfly infestations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Oyster Bay Property Today</h2>
            <p className="text-xl text-red-100 mb-8">
              Don't let spotted lanternflies damage your valuable Oyster Bay waterfront landscape. Contact our coastal specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Oyster Bay Service</Link>
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

export default OysterBayPage;