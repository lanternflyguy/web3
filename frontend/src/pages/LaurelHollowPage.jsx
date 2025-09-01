import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle, Crown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const LaurelHollowPage = () => {
  return (
    <>
      <Helmet>
        <title>Spotted Lanternfly Control Laurel Hollow NY | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly removal and control services in Laurel Hollow, NY. Premium pest management for luxury waterfront estates." />
        <meta name="keywords" content="spotted lanternfly Laurel Hollow NY, pest control Laurel Hollow, lanternfly removal Nassau County, Laurel Hollow estate exterminator" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/laurel-hollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Crown className="h-12 w-12 text-yellow-400 mr-4" />
              <Shield className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Spotted Lanternfly Control in <span className="text-yellow-400">Laurel Hollow, NY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Exclusive spotted lanternfly elimination services for Laurel Hollow's waterfront estates and luxury properties. 
              Protect your prestigious coastal landscape with our patent-pending BT Gen 2 sterilization technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Free Laurel Hollow Estate Assessment</Link>
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
            <h2 className="text-4xl font-bold text-white mb-8">Serving Laurel Hollow's Exclusive Waterfront Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Crown className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Waterfront Estate Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Specialized expertise in protecting Laurel Hollow's luxury waterfront estates and coastal properties.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-400 mx-auto" />
                  <CardTitle>Discreet Coastal Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Professional, discreet treatments that protect both your property and the sensitive marine environment.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Premium Coastal Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Uncompromising quality and results for Laurel Hollow's most discerning waterfront clients.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Laurel Hollow */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Laurel Hollow Waterfront Estate Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Luxury Waterfront Estates</h3>
                    <p className="text-slate-300">Comprehensive protection for Laurel Hollow's exclusive waterfront estates, including coastal landscape preservation and harbor views.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marine-Conscious Treatments</h3>
                    <p className="text-slate-300">Specialized treatments that protect your property while preserving Laurel Hollow's pristine marine ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">VIP Emergency Response</h3>
                    <p className="text-slate-300">Priority emergency services with immediate response for Laurel Hollow waterfront estate infestations.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Patent-Pending BT Gen 2</h3>
                    <p className="text-slate-300">Our most advanced sterilization technology providing 2-3 seasons of premium protection for Laurel Hollow estates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marine-Safe Organic Treatments</h3>
                    <p className="text-slate-300">Highest-grade OMRI certified organic solutions, completely safe for families, pets, and Laurel Hollow's marine environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Coastal Soil Management</h3>
                    <p className="text-slate-300">Specialized coastal soil treatment systems providing extended protection for Laurel Hollow's valuable waterfront landscapes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Laurel Hollow Waterfront Estate</h2>
            <p className="text-xl text-red-100 mb-8">
              Your Laurel Hollow waterfront estate deserves the finest coastal protection. Contact our waterfront specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Waterfront Service</Link>
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

export default LaurelHollowPage;