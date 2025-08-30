import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Shield, 
  Phone, 
  Star, 
  CheckCircle, 
  Zap, 
  Leaf, 
  Target, 
  Clock,
  Users,
  Building,
  Home,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { companyInfo, services, technologyFeatures, allReviews, statsData } from '../mock';

const HomePage = () => {
  const featuredReviews = allReviews.slice(0, 6);
  const averageRating = (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Premier Spotted Lanternfly Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Protect Your Property from 
                  <span className="text-green-600 block">Spotted Lanternflies</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced BT Gen 2 technology achieves 85-90% elimination with season-long protection. 
                  OMRI organic compliant and completely safe for families and pets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    Get Free Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50" asChild>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {companyInfo.phone}
                  </a>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">{averageRating}/5</span>
                  <span className="text-gray-600">({allReviews.length} reviews)</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">10,000+</span> Properties Protected
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1615507131862-e142f9975d7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Spotted Lanternfly on leaf"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon === 'Shield' ? Shield : 
                                   stat.icon === 'Target' ? Target :
                                   stat.icon === 'Clock' ? Clock : Leaf;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Revolutionary Technology</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Patent-Pending BT Gen 2 Enhanced Management System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our breakthrough technology transforms trees into natural protectors, 
              achieving unmatched spotted lanternfly elimination rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Comprehensive Solutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential properties to large-scale municipal projects, 
              we provide tailored spotted lanternfly elimination solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon === 'Home' ? Home :
                                   service.icon === 'Building' ? Building :
                                   service.icon === 'Users' ? Users :
                                   service.icon === 'MapPin' ? MapPin :
                                   service.icon === 'Zap' ? Zap : Shield;
              
              return (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800">Customer Success</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold">{averageRating}/5</span>
              <span className="text-gray-600">from {allReviews.length} verified reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{review.text}"</p>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.location}</p>
                      <Badge variant="secondary" className="text-xs">
                        {review.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/reviews">
                View All {allReviews.length} Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Protect Your Property?
          </h2>
          <p className="text-xl opacity-90">
            Don't let spotted lanternflies damage your landscape. Get started with our proven 
            elimination system and join thousands of satisfied customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Schedule Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ Free Property Assessment ✓ Same-Day Response ✓ 24/7 Emergency Service
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;