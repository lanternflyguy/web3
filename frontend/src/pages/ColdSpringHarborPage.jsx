import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const ColdSpringHarborPage = () => {
  return (
    <>
      <Helmet>
        <title>Spotted Lanternfly Control Cold Spring Harbor NY | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly removal and control services in Cold Spring Harbor, NY. Expert pest management for harbor community properties." />
        <meta name="keywords" content="spotted lanternfly Cold Spring Harbor NY, pest control Cold Spring Harbor, lanternfly removal Nassau County, Cold Spring Harbor exterminator" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/cold-spring-harbor" />
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
              Spotted Lanternfly Control in <span className="text-yellow-400">Cold Spring Harbor, NY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional spotted lanternfly elimination services for Cold Spring Harbor residents and businesses. 
              Protect your harbor community property with our patent-pending BT Gen 2 sterilization technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Free Cold Spring Harbor Assessment</Link>
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
            <h2 className="text-4xl font-bold text-white mb-8">Serving Cold Spring Harbor & Harbor Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Harbor Community Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Specialized knowledge of Cold Spring Harbor's unique coastal challenges and historic community needs.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-400 mx-auto" />
                  <CardTitle>Rapid Harbor Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Same-day service available for Cold Spring Harbor properties with emergency infestations.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Proven Harbor Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">100+ successful treatments in Long Island harbor communities with guaranteed satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Cold Spring Harbor */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Cold Spring Harbor Spotted Lanternfly Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Harbor Residential Properties</h3>
                    <p className="text-slate-300">Complete property protection for Cold Spring Harbor homes and coastal landscapes, including mature tree preservation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Harbor Commercial Properties</h3>
                    <p className="text-slate-300">Business-friendly treatments for Cold Spring Harbor marinas, shops, and waterfront businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Emergency Harbor Response</h3>
                    <p className="text-slate-300">24/7 emergency services for severe infestations threatening Cold Spring Harbor properties.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Patent-Pending BT Gen 2</h3>
                    <p className="text-slate-300">Advanced sterilization technology providing 2-3 seasons of protection for Cold Spring Harbor properties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marine-Safe Treatments</h3>
                    <p className="text-slate-300">OMRI certified organic solutions safe for families, pets, and the Cold Spring Harbor marine environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Harbor Soil Treatment</h3>
                    <p className="text-slate-300">Long-lasting soil applications providing 6-8 months of protection for Cold Spring Harbor coastal landscapes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Cold Spring Harbor Property</h2>
            <p className="text-xl text-red-100 mb-8">
              Don't let spotted lanternflies damage your Cold Spring Harbor landscape. Contact our harbor specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Harbor Service</Link>
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

export default ColdSpringHarborPage;