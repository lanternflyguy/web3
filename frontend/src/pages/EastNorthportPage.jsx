import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const EastNorthportPage = () => {
  return (
    <>
      <Helmet>
        <title>Spotted Lanternfly Control East Northport NY | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly removal and control services in East Northport, NY. Expert pest management for residential and commercial properties." />
        <meta name="keywords" content="spotted lanternfly East Northport NY, pest control East Northport, lanternfly removal Suffolk County, East Northport exterminator" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/east-northport" />
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
              Spotted Lanternfly Control in <span className="text-yellow-400">East Northport, NY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional spotted lanternfly elimination services for East Northport residents and businesses. 
              Protect your suburban property with our patent-pending BT Gen 2 sterilization technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Free East Northport Assessment</Link>
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
            <h2 className="text-4xl font-bold text-white mb-8">Serving East Northport & Suburban Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Suburban Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Deep knowledge of East Northport's suburban challenges and residential landscapes.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-400 mx-auto" />
                  <CardTitle>Rapid Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Same-day service available for East Northport properties with emergency infestations.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">100+ successful treatments in Suffolk County suburban communities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your East Northport Property</h2>
            <p className="text-xl text-red-100 mb-8">
              Don't let spotted lanternflies damage your East Northport landscape. Contact our Suffolk County experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule East Northport Service</Link>
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

export default EastNorthportPage;