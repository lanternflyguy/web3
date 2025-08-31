import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, TrendingDown, DollarSign, Clock } from 'lucide-react';

const DamageShowcase = () => {
  const damageTypes = [
    {
      category: "Tree & Landscape Damage",
      severity: "Critical",
      description: "Spotted lanternflies cause devastating damage to trees through excessive sap feeding, leading to tree stress, dieback, and eventual death.",
      image: "https://images.unsplash.com/photo-1707871424922-fc5c7a1e1060?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw2fHx0cmVlJTIwZGFtYWdlfGVufDB8fHx8MTc1NjU3NDAxNHww&ixlib=rb-4.1.0&q=85",
      impacts: [
        "Excessive sap bleeding from feeding wounds",
        "Sooty mold growth from honeydew secretions", 
        "Branch dieback and canopy thinning",
        "Complete tree mortality in severe cases"
      ],
      financialImpact: "$300,000+ per mature heritage tree replacement"
    },
    {
      category: "Vineyard & Agricultural Losses",
      severity: "Severe", 
      description: "Wine industry faces devastating losses as spotted lanternflies attack grapevines, compromising fruit quality and entire harvest seasons.",
      image: "https://images.unsplash.com/photo-1681181753416-0cee566156b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw2fHx2aW5leWFyZCUyMGRhbWFnZXxlbnwwfHx8fDE3NTY1NzQwMjR8MA&ixlib=rb-4.1.0&q=85",
      impacts: [
        "Direct feeding damage to grape clusters",
        "Honeydew contamination affects wine quality",
        "Reduced yield and harvest disruption",
        "Tourist experience degradation"
      ],
      financialImpact: "40% yield loss potential per season"
    },
    {
      category: "Commercial Property Impact",
      severity: "High",
      description: "Business properties suffer both aesthetic and operational challenges when spotted lanternfly infestations create unsanitary conditions.",
      image: "https://images.unsplash.com/photo-1621672596111-51cb2273aca2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw3fHx0cmVlJTIwZGFtYWdlfGVufDB8fHx8MTc1NjU3NDAxNHww&ixlib=rb-4.1.0&q=85",
      impacts: [
        "Sticky honeydew on surfaces and equipment",
        "Swarming insects disrupting operations",
        "Landscape deterioration affecting curb appeal",
        "Potential health code violations"
      ],
      financialImpact: "Property value decline up to 15%"
    },
    {
      category: "Ecosystem Disruption",
      severity: "Moderate",
      description: "Beyond direct damage, spotted lanternflies disrupt entire ecosystems, affecting native species and ecological balance.",
      image: "https://images.pexels.com/photos/6156577/pexels-photo-6156577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      impacts: [
        "Native species displacement",
        "Altered plant community composition",
        "Cascading effects on wildlife",
        "Long-term ecological imbalance"
      ],
      financialImpact: "Ecosystem restoration costs $50,000+ per acre"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-600 text-white';
      case 'Severe': return 'bg-orange-600 text-white';
      case 'High': return 'bg-yellow-600 text-white';
      default: return 'bg-blue-600 text-white';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-2">
            Damage Assessment
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            The True Cost of
            <span className="text-red-600 block">Spotted Lanternfly Damage</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the extensive damage caused by spotted lanternfly infestations 
            helps property owners recognize the critical importance of professional intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {damageTypes.map((damage, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={damage.image}
                  alt={damage.category}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getSeverityColor(damage.severity)}>
                    {damage.severity} Impact
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl text-slate-900">{damage.category}</CardTitle>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {damage.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <TrendingDown className="h-4 w-4 text-red-600 mr-2" />
                    Primary Damage Indicators
                  </h4>
                  <ul className="space-y-2">
                    {damage.impacts.map((impact, impactIndex) => (
                      <li key={impactIndex} className="flex items-start space-x-2 text-slate-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 mb-1">Financial Impact</p>
                      <p className="text-red-700 text-sm">{damage.financialImpact}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-4">Prevention is Your Best Investment</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  The cost of professional spotted lanternfly management is minimal compared to 
                  the devastating financial and ecological damage these invasive pests can cause. 
                  Our professional service protects your most valuable assets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-slate-300 text-sm">Damage Prevention Rate</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-slate-300 text-sm">Emergency Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DamageShowcase;