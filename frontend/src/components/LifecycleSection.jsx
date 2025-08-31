import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, Clock, Target, Shield } from 'lucide-react';

const LifecycleSection = () => {
  const lifecycleStages = [
    {
      stage: "Egg Masses",
      timeline: "October - May",
      description: "Spotted lanternflies lay 30-50 eggs in mud-like masses on tree bark, stone, and outdoor equipment.",
      image: "https://images.unsplash.com/photo-1615507131862-e142f9975d7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      threat: "Hidden and often overlooked, allowing populations to explode",
      icon: Clock
    },
    {
      stage: "Early Nymphs",
      timeline: "May - July", 
      description: "Small black nymphs with white spots emerge and begin feeding on plant sap immediately.",
      image: "https://images.unsplash.com/photo-1724430157180-82c141c57abc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      threat: "Rapid multiplication and initial plant damage",
      icon: Target
    },
    {
      stage: "Late Nymphs",
      timeline: "July - September",
      description: "Nymphs develop red patches and increased mobility, spreading to new host plants.",
      image: "https://images.unsplash.com/photo-1649020507268-4e35c886d57d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      threat: "Peak feeding period causing maximum plant stress",
      icon: AlertTriangle
    },
    {
      stage: "Adults",
      timeline: "September - November",
      description: "Fully mature adults with distinctive spotted wings focus on mating and egg-laying.",
      image: "https://images.unsplash.com/photo-1615507131862-e142f9975d7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzcG90dGVkJTIwbGFudGVybmZseXxlbnwwfHx8fDE3NTY1NzM5NzR8MA&ixlib=rb-4.1.0&q=85",
      threat: "Reproduction ensures next year's infestation without intervention",
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-2">
            Educational Overview
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Understanding the
            <span className="text-red-600 block">Spotted Lanternfly Lifecycle</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Knowledge is power in pest management. Understanding each lifecycle stage enables 
            our specialists to deploy targeted interventions at optimal times for maximum effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {lifecycleStages.map((stage, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={stage.image}
                  alt={`Spotted Lanternfly ${stage.stage}`}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-slate-900/80 text-white backdrop-blur-sm">
                    Stage {index + 1}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <stage.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-slate-900">{stage.stage}</CardTitle>
                  <Badge variant="outline" className="text-slate-600 border-slate-300">
                    {stage.timeline}
                  </Badge>
                </div>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {stage.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 mb-1">Critical Threat</p>
                      <p className="text-red-700 text-sm">{stage.threat}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Intervention Required</h3>
            <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto">
              Each lifecycle stage requires specialized treatment protocols. Our patent-pending 
              BT Gen 2 system targets all stages simultaneously for complete elimination.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Complete Lifecycle Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-400" />
                <span>Targeted Treatment Protocols</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span>Optimal Timing Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;