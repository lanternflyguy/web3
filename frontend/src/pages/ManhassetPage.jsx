import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const ManhassetPage = () => {
  return (
    <>
      <Helmet>
        <title>Spotted Lanternfly Control Manhasset NY | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly removal and control services in Manhasset, NY. Expert pest management for residential and commercial properties." />
        <meta name="keywords" content="spotted lanternfly Manhasset NY, pest control Manhasset, lanternfly removal Nassau County, Manhasset exterminator" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/manhasset" />
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
              Spotted Lanternfly Control in <span className="text-yellow-400">Manhasset, NY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional spotted lanternfly elimination services for Manhasset residents and businesses. 
              Protect your property with our patent-pending BT Gen 2 sterilization technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Free Manhasset Assessment</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(631) 727-0489">Call (631) 727-0489</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Serving Manhasset & Surrounding Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Local Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Deep knowledge of Manhasset's specific spotted lanternfly challenges and local ecosystem.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-400 mx-auto" />
                  <CardTitle>Rapid Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Same-day service available for Manhasset properties with emergency infestations.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">100+ successful treatments in Nassau County with guaranteed satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Manhasset */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Manhasset Spotted Lanternfly Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Residential Properties</h3>
                    <p className="text-slate-300">Complete property protection for Manhasset homes and estates, including heritage tree preservation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Commercial Properties</h3>
                    <p className="text-slate-300">Business-friendly treatments that minimize disruption to your Manhasset commercial operations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Emergency Response</h3>
                    <p className="text-slate-300">24/7 emergency services for severe infestations threatening Manhasset properties.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Patent-Pending BT Gen 2</h3>
                    <p className="text-slate-300">Advanced sterilization technology providing 2-3 seasons of protection for Manhasset properties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Organic Treatments</h3>
                    <p className="text-slate-300">OMRI certified organic solutions safe for families, pets, and the Manhasset environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Soil Treatment System</h3>
                    <p className="text-slate-300">Long-lasting soil applications providing 6-8 months of protection for Manhasset landscapes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Manhasset */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Why Manhasset Chooses The Lantern Fly Guys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Local Nassau County Experts</h3>
                <p className="text-slate-300 mb-6">
                  We understand Manhasset's unique landscape, from waterfront properties to established neighborhoods. 
                  Our local expertise ensures targeted, effective treatments.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  Our patent-pending BT Gen 2 sterilization technology represents the cutting edge of spotted lanternfly control, 
                  offering superior protection for Manhasset properties.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Comprehensive Approach</h3>
                <p className="text-slate-300 mb-6">
                  From initial inspection to ongoing monitoring, we provide complete spotted lanternfly management 
                  tailored to your Manhasset property's specific needs.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Guaranteed Results</h3>
                <p className="text-slate-300">
                  We stand behind our work with comprehensive warranties and guarantees, ensuring your Manhasset 
                  property remains protected from spotted lanternfly infestations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Manhasset Property Today</h2>
            <p className="text-xl text-red-100 mb-8">
              Don't let spotted lanternflies damage your Manhasset landscape. Contact our local experts for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Manhasset Service</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3" asChild>
                <a href="tel:(631) 727-0489">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (631) 727-0489
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManhassetPage;