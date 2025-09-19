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
  ArrowRight,
  Award,
  TreePine,
  Search,
  Calendar,
  MessageSquare,
  BookOpen,
  FileText
} from 'lucide-react';
import { companyInfo, services, technologyFeatures, allReviews, statsData } from '../mock';
import LifecycleSection from '../components/LifecycleSection';
import DamageShowcase from '../components/DamageShowcase';
import LocalSEO from '../components/LocalSEO';
import PhoneTracking from '../components/PhoneTracking';

const HomePage = () => {
  const featuredReviews = allReviews.slice(0, 6);
  const averageRating = (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1);

  return (
    <div className="min-h-screen">
      <LocalSEO page="home" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-slate-600/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 hover:from-red-200 hover:to-orange-200 border-red-200 font-semibold px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Professional Spotted Lanternfly Specialists
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Complete Property Protection from 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 block">
                    Spotted Lanternflies
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Advanced patent-pending PPMP technology achieves 85-90% elimination with season-long protection. 
                  OMRI organic compliant and completely safe for families and pets. Trusted by thousands of satisfied customers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                  <Link to="/contact">
                    <Shield className="mr-3 h-5 w-5" />
                    Free Assessment
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-slate-400 text-white hover:bg-white/10 hover:border-slate-300 transition-all duration-300" asChild>
                  <PhoneTracking
                    phoneNumber={companyInfo.phone}
                    trackingId="hero-phone-button"
                    className="flex items-center"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    {companyInfo.phone}
                  </PhoneTracking>
                </Button>
              </div>

              {/* Premium Social Proof */}
              <div className="flex items-center space-x-12 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-white text-lg">{averageRating}/5 Customer Rating</div>
                    <div className="text-slate-300 text-sm">({allReviews.length} verified reviews)</div>
                  </div>
                </div>
                <div className="text-slate-300">
                  <div className="font-bold text-white text-lg">1,000+</div>
                  <div className="text-sm">Properties Protected & Counting</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1615507131862-e142f9975d7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Spotted Lanternfly Threat"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-slate-200"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-slate-900/10 rounded-3xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl z-20">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">85-90%</div>
                  <div className="text-xs">Elimination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1,000+", label: "Properties Protected & Counting", icon: Shield },
              { number: "85-90%", label: "Elimination Success Rate", icon: Target },
              { number: "24/7", label: "Emergency Response", icon: Clock },
              { number: "100%", label: "Organic Certified", icon: Leaf }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 font-semibold px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Revolutionary Technology
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              PPMP (Preventative Pest Management Procedure) Enhanced Management System
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our breakthrough technology transforms trees into natural protectors, 
              achieving unmatched spotted lanternfly elimination rates with complete safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {technologyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                <CardHeader className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-slate-300 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-200 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Education Section */}
      <LifecycleSection />

      {/* Damage Showcase Section */}
      <DamageShowcase />

      {/* Premium Services Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-semibold px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Comprehensive Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Services for Every Property Type
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From residential homes to large commercial properties, 
              we provide tailored spotted lanternfly elimination solutions for every need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon === 'Home' ? Home :
                                   service.icon === 'Building' ? Building :
                                   service.icon === 'Users' ? Users :
                                   service.icon === 'MapPin' ? MapPin :
                                   service.icon === 'Zap' ? Zap :
                                   service.icon === 'Target' ? Target :
                                   service.icon === 'TreePine' ? TreePine :
                                   service.icon === 'Search' ? Search :
                                   service.icon === 'Calendar' ? Calendar :
                                   service.icon === 'MessageSquare' ? MessageSquare :
                                   service.icon === 'BookOpen' ? BookOpen :
                                   service.icon === 'FileText' ? FileText :
                                   service.icon === 'Leaf' ? Leaf : Shield;
              
              return (
                <Card key={service.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-700/80 backdrop-blur-sm border border-slate-600 group">
                  <CardHeader className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-base text-slate-300 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-200 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-slate-400 text-slate-200 hover:bg-red-600/20 hover:border-red-400 hover:text-red-300 transition-all duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 font-semibold px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Client Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-white">{averageRating}/5</span>
              <span className="text-xl text-slate-300">from {allReviews.length} verified customers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-slate-700/90 backdrop-blur-sm border border-slate-600">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {review.service}
                      </Badge>
                    </div>
                    <p className="text-slate-200 italic leading-relaxed text-lg">"{review.text}"</p>
                    <div className="space-y-2 border-t border-slate-200 pt-4">
                      <p className="font-bold text-white text-lg">{review.name}</p>
                      <p className="text-slate-300">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="border-2 border-slate-400 text-slate-200 hover:bg-slate-700/50 hover:border-slate-300 px-8 py-6">
              <Link to="/reviews">
                View All {allReviews.length} Customer Reviews
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 border-red-500/30 font-semibold px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Complete Property Protection
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Protect Your Property?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Don't let spotted lanternflies damage your property and landscape. Join thousands of satisfied 
              customers who trust our proven elimination system and professional service.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-12 py-7 shadow-2xl hover:shadow-red-500/25 transition-all duration-300" asChild>
              <Link to="/contact">
                <Shield className="mr-3 h-6 w-6" />
                Schedule Free Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-12 py-7 backdrop-blur-sm transition-all duration-300" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-3 h-6 w-6" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-12 pt-8 text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Complimentary Assessment</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Same-Day Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;