'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  ArrowRight,
  Sparkles,
  Target,
  Brain,
  Globe,
  Users,
  CheckCircle2,
  MapPin,
  Calendar,
  Mail,
  Instagram,
  Facebook,
  Send,
  Shield,
  BarChart3,
  TrendingUp,
  ClipboardCheck,
  Megaphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { MOBILITIES } from '@/lib/mobilities';

// Home Page
export function HomePage() {
  const features = [
    { icon: Heart, title: 'Self-Stigma Awareness', description: 'Increase understanding and recognition of self-stigma among youth workers, helping them identify and address internalized negative beliefs.' },
    { icon: Brain, title: 'MBTW Therapies', description: 'Mindfulness-Based Therapies including MBAT and ACT to provide youth workers with practical tools for managing stress.' },
    { icon: Sparkles, title: 'AI Digital Tools', description: 'Innovative AI-powered digital applications designed to support stakeholders in addressing mental health challenges.' },
    { icon: Globe, title: 'Transnational Collaboration', description: 'Partners from Poland, Spain, North Macedonia, Turkey, and Curaçao working together for greater impact.' },
  ];

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center gradient-hero pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-tsst-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-tsst-accent/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Erasmus+ Youth Project</span>
              </div>
              
              <h1 className="heading-xl text-gradient mb-6">Tackling Self Stigma Together</h1>
              
              <p className="text-xl md:text-2xl text-tsst-text-muted leading-relaxed mb-8">
                Empowering youth workers across Europe through mental health awareness, evidence-based therapies, and innovative digital tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-primary">
                  <Link href="/objectives">Explore Our Mission <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <Link href="/partners">Meet Our Partners</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-tsst-border">
                <div><div className="text-3xl md:text-4xl font-bold text-tsst-primary-dark">6</div><div className="text-sm text-tsst-text-muted mt-1">Partner Countries</div></div>
                <div><div className="text-3xl md:text-4xl font-bold text-tsst-primary-dark">2+</div><div className="text-sm text-tsst-text-muted mt-1">Therapy Types</div></div>
                <div><div className="text-3xl md:text-4xl font-bold text-tsst-primary-dark">AI</div><div className="text-sm text-tsst-text-muted mt-1">Digital Tools</div></div>
                <div><div className="text-3xl md:text-4xl font-bold text-tsst-primary-dark">EU</div><div className="text-sm text-tsst-text-muted mt-1">Funded Project</div></div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/images/hero-illustration.svg" 
                alt="TSST - Supportive community illustration" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8">Why This Project Matters</h2>
            
            <Card className="card-highlight mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-tsst-text mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-tsst-primary-dark" />
                      The Challenge
                    </h3>
                    <p className="body-sm mb-4">
                      Mental health problems affect around <strong>84 million people in the EU</strong>, and these figures have only worsened since the COVID-19 pandemic. The pandemic has placed additional pressures on mental health, especially among young people.
                    </p>
                    <p className="body-sm">
                      According to the New EU Approach to Mental Health (June 2023), <strong>1 in 6 people</strong> are affected by mental health problems, costing <strong>€600 billion every year</strong>.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-tsst-text mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-tsst-primary-dark" />
                      Our Response
                    </h3>
                    <p className="body-sm mb-4">
                      Self-stigma is associated with negative impacts on self-esteem, self-efficacy, hope, personal relationships, and psychological health (Gerlinger et al., 2013).
                    </p>
                    <p className="body-sm">
                      TSST promotes participant youth workers' mental health and boosts their coping strategies with self-stigma through MBTW activities during the 24-month project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="border-l-4 border-tsst-primary-dark pl-6">
              <p className="body-md italic text-tsst-text">
                "Mental health is as important to our wellbeing as physical health. Our European approach, the first of its kind, puts mental health on par with physical health and outlines everything we do to make sure support is accessible and affordable to all who need it."
              </p>
              <p className="text-sm text-tsst-text-muted mt-2">— Ursula von der Leyen, President of the European Commission, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Who We Serve</h2>
            <p className="body-lg max-w-2xl mx-auto">Our project is designed to create direct impact for youth workers while generating broader benefits for the entire youth work ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Card className="card lg:col-span-2">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary-dark to-tsst-primary flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="heading-sm">Direct Target Group</h3>
                        <span className="badge mt-1">Primary Focus</span>
                      </div>
                    </div>
                    <p className="body-md mb-4">
                      Youth workers in participant organizations between ages <strong>25 and 40</strong>, with a focus on including disadvantaged groups like immigrants and refugees from Ukraine and other countries.
                    </p>
                    <div className="bg-tsst-card rounded-xl p-4 mb-4">
                      <p className="body-sm">
                        <strong>Impact:</strong> Youth workers frequently act as mentors, counselors, and role models. Understanding self-stigma gives them the information and abilities to create compassionate relationships while addressing emotional difficulties.
                      </p>
                    </div>
                    <p className="body-sm text-tsst-text-muted">
                      According to the EU, mental health issues cost more than <strong>4% of GDP</strong> across EU countries (over €600 billion/year). Well-trained youth workers contribute to reducing these costs.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary to-tsst-accent flex items-center justify-center">
                        <Globe className="w-6 h-6 text-tsst-text" />
                      </div>
                      <div>
                        <h3 className="heading-sm">Indirect Target Group</h3>
                        <span className="badge-accent mt-1">Secondary Benefit</span>
                      </div>
                    </div>
                    <p className="body-md mb-4">
                      Young people and other youth workers at local, national, and international youth centres who will be involved in dissemination activities.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                        <span className="body-sm">Involved in local events, social media, and the AI digital output</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                        <span className="body-sm">Receive support from knowledgeable youth workers who can identify signs of self-stigmatization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                        <span className="body-sm">Encouraged to seek assistance and build resilience through self-acceptance techniques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="hidden lg:block self-center">
              <img
                src="/images/target-groups.svg"
                alt="Target groups illustration showing youth workers and young people"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EU 5th Youth Goal */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Aligned with EU 5th Youth Goal</h2>
            <p className="body-lg mb-8">
              <strong>Mental Health & Wellbeing</strong> — One of the priority goals is to fight stigma about mental health issues by developing awareness programmes.
            </p>
            <p className="body-md">
              TSST leads to more resilience, self-acceptance, and a more positive attitude on life among youth workers. They will not only overcome self-stigma but also better handle life's difficulties and have higher quality of life.
            </p>
          </div>
        </div>
      </section>

      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What We Do</h2>
            <p className="body-lg max-w-2xl mx-auto">Our comprehensive approach combines evidence-based therapies, innovative technology, and transnational collaboration.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="card group">
                <CardContent className="flex items-start gap-5 p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-tsst-primary-dark" />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">{feature.title}</h3>
                    <p className="body-md">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-tsst-text text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Whether you are a youth worker, organization, or supporter, there are many ways to get involved with TSST.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-secondary">
                <Link href="/contact">Get in Touch <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 bg-transparent text-white font-medium rounded-xl transition-all duration-200 hover:bg-white/10">
                <Link href="/activities">Explore Activities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Objectives Page
export function ObjectivesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Our Goals</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Objectives & Outcomes</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              TSST is built on three concrete objectives designed to create lasting positive change in youth worker mental health, aligned with EU priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="card-highlight mb-12">
              <CardContent className="p-8">
                <h2 className="heading-md mb-6">Understanding Self-Stigma</h2>
                <p className="body-md mb-4">
                  According to Hilbert et al. (2015), self-stigma <em>"involves negative beliefs about the self, strong negative feelings, for example of self-hate and shame, as well as putting oneself at a disadvantage, for example through social withdrawal."</em>
                </p>
                <p className="body-md mb-4">
                  Self-stigma affects all aspects of life, limiting access to employment and housing, harming social relationships, and reducing self-esteem. Research shows that self-stigma can negatively affect a variety of mental health issues and psychosocial consequences (Wu & Berry, 2018; Papadopoulos & Brennan, 2015).
                </p>
                <div className="border-l-4 border-tsst-primary-dark pl-6 mt-6">
                  <p className="body-md italic text-tsst-text">
                    "Mental health is as important to our wellbeing as physical health. Our European approach, the first of its kind, puts mental health on par with physical health and outlines everything we do to make sure support is accessible and affordable to all who need it."
                  </p>
                  <p className="text-sm text-tsst-text-muted mt-2">— Ursula von der Leyen, President of the European Commission, 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objective 1 */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block">
              <img 
                src="/images/self-stigma-awareness.svg" 
                alt="Self-stigma awareness illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <Card className="card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-tsst-primary-dark" />
                  </div>
                  <span className="text-4xl font-bold text-tsst-primary/20">01</span>
                </div>
                <h3 className="heading-sm mb-4">Promote Self-Stigma Awareness</h3>
                <span className="badge mb-6">O1</span>
                <p className="body-md mb-6">
                  Our first objective is to promote self-stigma awareness among youth workers. To enable this, each partner conducts the Self-Stigma of Depression Scale (SSDS) developed by Barney, L. J., Griffiths, K. M., Christensen, H., & Jorm, A. F. (2010) to identify self-stigma levels among participating youth workers.
                </p>
                <div className="bg-tsst-card rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Evaluation Method</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">SSDS pre-test at project beginning to establish baseline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">SSDS post-test after all Learning, Teaching, and Training Activities (LTTAs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Difference between pre-test and post-test will be evaluated by partner organizations</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-tsst-text-muted">Addresses EU Priority:</span>
                  <span className="badge">Physical & Mental Health, Wellbeing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objective 2 */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-tsst-primary-dark" />
                  </div>
                  <span className="text-4xl font-bold text-tsst-primary/20">02</span>
                </div>
                <h3 className="heading-sm mb-4">Encourage Self-Care Through MBTW</h3>
                <span className="badge mb-6">O2</span>
                <p className="body-md mb-6">
                  Our second objective is to encourage youth workers to focus on their own mental wellbeing by implementing self-care strategies via Mindfulness-Based and Third Wave Therapies (MBTW). Youth workers will be involved in workshops, dramas, and group works themed by two kinds of MBTW therapy methods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-tsst-card rounded-xl p-5">
                    <h4 className="font-semibold text-tsst-text mb-2">Mindfulness-Based Art Therapy (MBAT)</h4>
                    <p className="body-sm">Unifies art therapy and mindfulness techniques, giving people a sense of control by letting them know they may accept their experience or change how they react to particular traits and circumstances.</p>
                  </div>
                  <div className="bg-tsst-card rounded-xl p-5">
                    <h4 className="font-semibold text-tsst-text mb-2">Acceptance and Commitment Therapy (ACT)</h4>
                    <p className="body-sm">Helps individuals accept difficult emotions and commit to values-based action, promoting psychological flexibility and resilience.</p>
                  </div>
                </div>
                <div className="bg-tsst-highlight/30 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Evaluation Methods</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Kahoot activity on the last day of each LTT to evaluate training comprehension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Final Self & Peer Evaluation Google Form at each LTT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Semi-structured interviews at project end</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-tsst-text-muted">Addresses EU Priority:</span>
                  <span className="badge">Physical & Mental Health, Wellbeing</span>
                </div>
              </CardContent>
            </Card>
            <div className="hidden lg:block">
              <img 
                src="/images/mbtw-therapy.svg" 
                alt="MBTW Therapy - MBAT and ACT illustration" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objective 3 */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block">
              <img 
                src="/images/ai-digital-tools.svg" 
                alt="AI Digital Tools illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <Card className="card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-tsst-primary-dark" />
                  </div>
                  <span className="text-4xl font-bold text-tsst-primary/20">03</span>
                </div>
                <h3 className="heading-sm mb-4">Create AI-Powered Digital Tools</h3>
                <span className="badge mb-6">O3</span>
                <p className="body-md mb-6">
                  Our third objective is to create an AI application as a digital output to share with stakeholders. This AI application will include a mechanism where users may describe their ongoing mental health issues, and the system will respond with artificial intelligence guidance based on MBTW therapy methods.
                </p>
                <div className="bg-tsst-card rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Development Process</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Youth workers will enhance the AI output under guidance of IT experts from each partner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Assessment by IT experts: Ilhan Özdemir (Turkey), Jesús Ureña (Spain), Claudia Szostok (Poland), Niki Elena SELSER (Curaçao), Darko Cvetkoski (North Macedonia)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                      <span className="body-sm">Project management via ASANA software to track development tasks</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-tsst-highlight/30 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-tsst-text mb-2">Dissemination</h4>
                  <p className="body-sm">The AI application will be shared with local, national, and international stakeholders, on the project's social media accounts and webpage to improve the recognition of this digital youth work.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-tsst-text-muted">Addresses EU Priority:</span>
                  <span className="badge">Quality, Innovation & Recognition of Youth Work</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EU Alignment */}
      <section className="section bg-tsst-primary-dark text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Aligned with EU Priorities</h2>
            <p className="text-lg text-white/80 mb-8">
              All three objectives address the priority of increasing quality, innovation and recognition of youth work, as well as physical and mental health and wellbeing.
            </p>
            <Button asChild className="btn-secondary">
              <Link href="/activities">Explore Our Activities <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Activities Page
export function ActivitiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Project Timeline & Mobilities</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Project Timeline & Mobilities</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              Key milestones and mobilities throughout the 24-month project. Click a mobility for more details and media.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Mobilities roadmap */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {MOBILITIES.map((m, index) => (
                <Link
                  key={m.slug}
                  href={`/activities/mobilities/${m.slug}`}
                  className="flex gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsst-primary-dark rounded-lg -m-2 p-2"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full flex-shrink-0',
                        m.variant === 'primary-dark' && 'bg-tsst-primary-dark',
                        m.variant === 'primary' && 'bg-tsst-primary',
                        m.variant === 'accent' && 'bg-tsst-accent'
                      )}
                    />
                    {index < MOBILITIES.length - 1 && (
                      <div className="w-0.5 flex-1 bg-tsst-border mt-2 min-h-[24px]" />
                    )}
                  </div>
                  <div className={cn('pb-6', index === MOBILITIES.length - 1 && 'pb-0')}>
                    <span className={cn('badge mb-2', m.variant === 'accent' && 'badge-accent')}>{m.dateLabel}</span>
                    <h4 className="font-semibold text-tsst-text mb-1 group-hover:text-tsst-primary-dark transition-colors">{m.title}</h4>
                    <p className="body-sm">{m.shortDescription}</p>
                    <span className="inline-block mt-2 text-xs text-tsst-primary-dark font-medium">View details & media →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-tsst-text text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tsst-accent text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Digital Innovation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Digital Tools</h2>
              <p className="text-lg text-white/80 mb-6">
                BYC leads the development of innovative AI applications for mental health support, guided by Ilhan Ozdemir, an experienced android developer and AI expert.
              </p>
              <ul className="space-y-3">
                {['User-friendly interface for youth workers', 'AI-assisted mental health recommendations', 'Accessible self-assessment tools', 'Privacy-focused design principles', 'MBTW therapy method integration'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-tsst-primary to-tsst-accent flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-tsst-text" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">TSST Digital App</h3>
                <p className="text-white/70 text-center text-sm mb-4">AI-powered companion for youth worker mental health support</p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white/80">In Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Partners Page
export function PartnersPage() {
  const partners = [
    { 
      id: 'gaszo', 
      name: 'GASZO', 
      country: 'Poland', 
      role: 'Project Coordinator', 
      color: 'from-red-500 to-red-600',
      description: 'GASZO is in charge of planning online meetings according to the Gantt Chart. Daily work is based on social inclusion and active participation.',
      responsibilities: [
        'Online kick-off meeting (October 2024)',
        '3 online follow-up meetings (March 2025, December 2025, March 2026)',
        'Interim report meeting (September 2025)',
        'Final report meeting (September 2026)',
        'Transnational Project Meeting in Poland (January 2025)',
        'LTTA arrangements coordination'
      ]
    },
    { 
      id: 'xanadu', 
      name: 'Xanadu Art', 
      country: 'North Macedonia', 
      role: 'MBAT Workshops & 1st LTTA Host', 
      color: 'from-red-600 to-red-700',
      description: 'Xanadu Art will host the 1st LTTA activities in June 2025, contributing Mindfulness-Based Art Therapy (MBAT) workshops.',
      responsibilities: [
        'Host 1st LTTA in June 2025',
        'Arrange MBAT workshops and trainings',
        'Provide seminars on mindfulness and art therapy',
        'Support participant youth workers\' mental health via MBAT',
        'Leverage team experience in mindfulness-based approaches'
      ]
    },
    { 
      id: 'sonrie', 
      name: 'Sonríe a Europa', 
      country: 'Spain', 
      role: 'ACT Workshops & 2nd LTTA Host', 
      color: 'from-yellow-500 to-yellow-600',
      description: 'Sonríe a Europa will host the second LTTA in September 2025, arranging Acceptance and Commitment Therapy (ACT) workshops.',
      responsibilities: [
        'Host 2nd LTTA in September 2025',
        'Arrange Acceptance and Commitment Therapy workshops',
        'Leverage experience in Erasmus+ mental wellbeing projects',
        'Collaborate with local stakeholder Giralda Psychotherapy Center'
      ]
    },
    { 
      id: 'byc', 
      name: 'BYC', 
      country: 'Turkey', 
      role: 'AI Development & Digital Tools', 
      color: 'from-red-500 to-red-600',
      description: 'BYC is responsible for Work Package 3, creating the AI application digital output. Led by Ilhan Ozdemir, an android developer and AI expert.',
      responsibilities: [
        'Arrange workshops to create AI app digital tool',
        'Include MBTW therapy methods for daily youth worker usage',
        'Led by Ilhan Ozdemir (Android developer, AI expert)',
        'Project management via ASANA software'
      ]
    },
    { 
      id: 'aseac', 
      name: 'ASEAC', 
      country: 'Curaçao', 
      role: 'Kick-off Meeting Host', 
      color: 'from-blue-500 to-blue-600',
      description: 'ASEAC will host the kick-off meeting in January 2025 and arrange 3 days of activities, facilitating active participation of all project team members.',
      responsibilities: [
        'Host kick-off meeting (January 2025)',
        'Arrange 3 days of project activities',
        'Facilitate active participation of all team members',
        'Support cross-cultural collaboration'
      ]
    },
    { 
      id: 'giralda', 
      name: 'Giralda Center', 
      country: 'Spain', 
      role: 'Expert Support', 
      color: 'from-yellow-500 to-orange-500',
      description: 'Giralda Psychotherapy Center is a local stakeholder supporting Sonríe a Europa, offering psychotherapeutic assistance and expertise.',
      responsibilities: [
        'Provide psychotherapeutic assistance during LTTAs',
        'Support ACT workshop implementation',
        'Offer expert mental health guidance',
        'Contribute to project evaluation and quality assurance'
      ]
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Our Consortium</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Project Partners</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              TSST brings together six organizations from five countries, each contributing unique expertise to tackle self-stigma and promote mental wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Transnational Value */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block">
              <img 
                src="/images/partnership.svg" 
                alt="Transnational partnership map showing 6 partners across 5 countries" 
                className="w-full"
              />
            </div>
            <Card className="card-highlight">
              <CardContent className="p-8">
                <h2 className="heading-md mb-6">Benefits of Transnational Cooperation</h2>
                <p className="body-md mb-4">
                  According to European Commission research, friends and family are particularly important as sources of support, and networks should include youth workers, teachers, and mental health specialists. Our transnational partnership brings diverse cultural, social, and psychological perspectives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-tsst-text mb-2">Cultural Relevance</h4>
                    <p className="body-sm">Partners from various backgrounds achieve a more comprehensive understanding of self-stigma, resulting in more successful strategies and culturally suitable interventions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tsst-text mb-2">Best Practices</h4>
                    <p className="body-sm">Tap into best practices of partner organisations and adapt them to each partner's own context, enhancing project effectiveness.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tsst-text mb-2">Global Advocacy</h4>
                    <p className="body-sm">Strengthen advocacy efforts at international level, leading to policy changes and increased awareness of self-stigma.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tsst-text mb-2">UN SDG Alignment</h4>
                    <p className="body-sm">Support UN Sustainable Development Goal 3 (Good Health and Wellbeing) and EU 5th Youth Goal (Mental Health and Wellbeing).</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Details */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Partner Responsibilities</h2>
            <p className="body-lg max-w-2xl mx-auto">Each partner contributes unique expertise and responsibilities to achieve our shared objectives.</p>
          </div>

          <div className="space-y-8">
            {partners.map((p) => (
              <Card key={p.id} className="card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                          <span className="text-2xl font-bold text-white">{p.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-tsst-text">{p.name}</h3>
                          <p className="text-sm text-tsst-text-muted">{p.country}</p>
                        </div>
                      </div>
                      <span className="badge">{p.role}</span>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="body-md mb-4">{p.description}</p>
                      <div className="bg-tsst-card rounded-xl p-5">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {p.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-tsst-primary flex-shrink-0 mt-0.5" />
                              <span className="body-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Responsibilities */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-8">Shared Partner Responsibilities</h2>
            <Card className="card">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary-dark flex-shrink-0 mt-0.5" />
                    <span className="body-md">Inform project participants, locals, and institutions of other partners about project objectives, scope, and expected results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary-dark flex-shrink-0 mt-0.5" />
                    <span className="body-md">Ensure project visibility and dissemination through social media and local networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary-dark flex-shrink-0 mt-0.5" />
                    <span className="body-md">Develop action lists to avoid potential problems and ensure smooth project implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary-dark flex-shrink-0 mt-0.5" />
                    <span className="body-md">Produce digital content and distribute through project's social media accounts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-tsst-primary-dark text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
            <p className="text-lg text-white/80 mb-8">We are always open to new partnerships and opportunities to expand our impact.</p>
            <Button asChild className="btn-secondary">
              <Link href="/contact">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Results Page
export function ResultsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              <span>Impact Assessment</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Results & Evaluation</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              We employ rigorous evaluation methods to measure our impact on youth worker mental health and ensure project objectives are achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation Illustration */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="hidden lg:block mb-12">
            <img 
              src="/images/evaluation.svg" 
              alt="Evaluation methods illustration showing SSDS, Kahoot, interviews, and ASANA tracking" 
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <Card className="card mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center">
                      <ClipboardCheck className="w-7 h-7 text-tsst-primary-dark" />
                    </div>
                    <span className="badge">O1 Evaluation</span>
                  </div>
                  <h3 className="heading-sm">Self-Stigma Awareness</h3>
                  <p className="text-sm text-tsst-text-muted mt-2">SSDS Pre/Post Testing</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="body-md mb-4">
                    TSST's first objective is to promote self-stigma awareness among youth workers. Each partner conducts the Self-Stigma of Depression Scale (SSDS) developed by Barney, L. J., Griffiths, K. M., Christensen, H., & Jorm, A. F. (2010).
                  </p>
                  <div className="bg-tsst-card rounded-xl p-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Evaluation Process</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-tsst-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-tsst-primary-dark">1</span>
                        </div>
                        <span className="body-sm"><strong>Pre-test:</strong> Conducted at project beginning to establish baseline self-stigma levels</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-tsst-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-tsst-primary-dark">2</span>
                        </div>
                        <span className="body-sm"><strong>Post-test:</strong> Conducted after all LTTAs to measure improvement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-tsst-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-tsst-primary-dark">3</span>
                        </div>
                        <span className="body-sm"><strong>Analysis:</strong> Partner organizations evaluate the difference between pre and post tests</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Objective 2 Evaluation */}
          <Card className="card mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-tsst-primary-dark" />
                    </div>
                    <span className="badge">O2 Evaluation</span>
                  </div>
                  <h3 className="heading-sm">MBTW Implementation</h3>
                  <p className="text-sm text-tsst-text-muted mt-2">Multiple Assessment Methods</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="body-md mb-4">
                    TSST's second objective is to encourage youth workers to focus on their own mental wellbeing through MBTW therapies. Multiple evaluation methods are used to assess the effectiveness of workshops and training activities.
                  </p>
                  <div className="bg-tsst-card rounded-xl p-6 mb-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Evaluation Methods</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                        <span className="body-sm"><strong>Kahoot Activity:</strong> On the last day of each LTT, questions about the 5-day training evaluate comprehension among participant youth workers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                        <span className="body-sm"><strong>Final Self & Peer Evaluation:</strong> Google Form at each LTT including questions about arrangements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                        <span className="body-sm"><strong>Semi-Structured Interviews:</strong> At project end to evaluate direct increase in self-stigma awareness</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-tsst-highlight/30 rounded-xl p-5">
                    <h4 className="font-semibold text-tsst-text mb-2">Interview Questions Include:</h4>
                    <ul className="space-y-2 body-sm">
                      <li>• How do you think self-stigma affects individuals' attitudes, beliefs, and behaviors regarding mental health?</li>
                      <li>• Can you share personal insights from your experiences with MBTW therapy methods (MBAT and ACT)?</li>
                      <li>• What coping mechanisms do you use to address self-stigma and promote self-acceptance?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Objective 3 Evaluation */}
          <Card className="card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary/20 to-tsst-primary-dark/20 flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-tsst-primary-dark" />
                    </div>
                    <span className="badge">O3 Evaluation</span>
                  </div>
                  <h3 className="heading-sm">AI Application</h3>
                  <p className="text-sm text-tsst-text-muted mt-2">Expert Assessment</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="body-md mb-4">
                    TSST's third objective is to create an AI application as a digital output. The app includes a mechanism where users describe their mental health issues, and the system responds with AI guidance based on MBTW therapy methods.
                  </p>
                  <div className="bg-tsst-card rounded-xl p-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Assessment Team</h4>
                    <p className="body-sm mb-4">The AI application will be assessed by IT experts from partner organizations:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-tsst-primary-dark mt-2" />
                        <span className="body-sm"><strong>Turkey:</strong> Ilhan Özdemir</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-tsst-primary-dark mt-2" />
                        <span className="body-sm"><strong>Spain:</strong> Jesús Ureña</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-tsst-primary-dark mt-2" />
                        <span className="body-sm"><strong>Poland:</strong> Claudia Szostok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-tsst-primary-dark mt-2" />
                        <span className="body-sm"><strong>Curaçao:</strong> Niki Elena SELSER</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-tsst-primary-dark mt-2" />
                        <span className="body-sm"><strong>North Macedonia:</strong> Darko Cvetkoski</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 p-4 bg-tsst-highlight/30 rounded-xl">
                    <p className="body-sm"><strong>Project Management:</strong> ASANA software is used to break down project work into manageable tasks and track development progress.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monitoring */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Project Monitoring</h2>
            <p className="body-lg">Three monitoring and follow-up virtual meetings during the project length serve to properly monitor implementation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-tsst-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-tsst-primary-dark" />
                </div>
                <h3 className="font-semibold text-tsst-text mb-2">Follow-up 1</h3>
                <p className="body-sm text-tsst-text-muted">March 2025</p>
              </CardContent>
            </Card>
            <Card className="card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-tsst-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-tsst-primary-dark" />
                </div>
                <h3 className="font-semibold text-tsst-text mb-2">Follow-up 2</h3>
                <p className="body-sm text-tsst-text-muted">December 2025</p>
              </CardContent>
            </Card>
            <Card className="card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-tsst-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-tsst-primary-dark" />
                </div>
                <h3 className="font-semibold text-tsst-text mb-2">Follow-up 3</h3>
                <p className="body-sm text-tsst-text-muted">March 2026</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-tsst-text text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Long-term Impact</h2>
            <p className="text-lg text-white/80 mb-8">Creating lasting change in youth worker mental health across Europe.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Sustainable Practices', desc: 'Self-care integrated into professional practice' },
                { title: 'Sector Awareness', desc: 'Increased recognition of mental health challenges' },
                { title: 'Policy Influence', desc: 'Findings inform future EU policies' },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Dissemination Page
export function DisseminationPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <Megaphone className="w-4 h-4" />
              <span>Sharing Our Work</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Dissemination & Events</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              We are committed to sharing our progress, results, and resources with local, national, and international stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Within Partnership */}
      <section className="section bg-white">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Within Our Partnership</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card">
              <CardContent className="p-8">
                <p className="body-md mb-6">
                  At virtual Transnational Project Meetings, partners collaborate to prepare a comprehensive project presentation including the project's kind, goals, timeline, primary tasks, anticipated outcomes, and partner nations. This presentation is shared with each partner organization.
                </p>
                <div className="bg-tsst-card rounded-xl p-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-tsst-text-muted mb-4">Evaluation Results Sharing</h4>
                  <p className="body-sm">During subsequent online meetings, findings from pre-tests, post-tests, Kahoot activities, and Final Self & Peer Evaluation forms are discussed to assess achievement and inform continuous improvement.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Community */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">In Our Local Communities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card">
              <CardContent className="p-8">
                <h3 className="heading-sm mb-4">Regional Outreach</h3>
                <p className="body-md mb-4">
                  Each partner will present the project at their regional youth centers and governmental/non-governmental youth organizations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                    <span className="body-sm">Project news on each partner's website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                    <span className="body-sm">Coverage in regional newspapers and television networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tsst-primary flex-shrink-0 mt-0.5" />
                    <span className="body-sm">Local events organized for community engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card">
              <CardContent className="p-8">
                <h3 className="heading-sm mb-4">Key Annual Events</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-tsst-card rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary-dark to-tsst-primary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tsst-text">Erasmus Days</h4>
                      <p className="body-sm text-tsst-text-muted">October</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-tsst-card rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary to-tsst-accent flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-tsst-text" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tsst-text">World Health Month</h4>
                      <p className="body-sm text-tsst-text-muted">April</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-tsst-card rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-accent to-tsst-highlight flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-tsst-text" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tsst-text">Mental Health Awareness Week</h4>
                      <p className="body-sm text-tsst-text-muted">May</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wider Public */}
      <section className="section bg-white">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">In the Wider Public</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card mb-8">
              <CardContent className="p-8">
                <p className="body-md mb-6">
                  Partners are part of a vibrant global network of organizations working on international projects. They can distribute project results among their networks and provide housing for volunteers while employing social media platforms for efficient connection with target audiences.
                </p>
                <div className="bg-tsst-highlight/30 rounded-xl p-6">
                  <h4 className="font-semibold text-tsst-text mb-3">BYC Digital Expertise</h4>
                  <p className="body-sm mb-4">
                    BYC, the Turkish partner, maintains two social media experts, a designer, and a site and social media management team for managing partner projects' online distribution.
                  </p>
                  <p className="body-sm">
                    <strong>Channels:</strong> Websites, 50+ Facebook groups, EPALE, Erasmus+ Project Results, SALTO, and other national websites.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-tsst-text">Instagram</h3>
                  </div>
                  <p className="body-sm mb-4">TSST project team will create Instagram account to share posts about project implementation, mental health awareness issues, and dissemination activities.</p>
                  <p className="body-sm text-tsst-text-muted">Each partner will add followers and reach youth workers and young people.</p>
                </CardContent>
              </Card>

              <Card className="card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-tsst-text">Facebook</h3>
                  </div>
                  <p className="body-sm mb-4">Facebook page will share the AI digital output, LTTA reels, videos, and photos to disseminate our project to a wider public.</p>
                  <p className="body-sm text-tsst-text-muted">Content also shared on SALTO Youth and personal social accounts.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="section gradient-subtle">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Target Groups for Dissemination</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary-dark to-tsst-primary flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tsst-text">Primary Target</h3>
                    <span className="badge mt-1">Direct</span>
                  </div>
                </div>
                <p className="body-md">
                  Youth workers in participant organizations (ages 25-40), with focus on including disadvantaged groups like immigrants and refugees from Ukraine and other countries.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary to-tsst-accent flex items-center justify-center">
                    <Globe className="w-6 h-6 text-tsst-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tsst-text">Secondary Target</h3>
                    <span className="badge-accent mt-1">Indirect</span>
                  </div>
                </div>
                <p className="body-md">
                  Young people and other youth workers at local, national, and international youth centres involved in dissemination activities, local events, social media, and the AI digital output.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Long-term Dissemination */}
      <section className="section bg-tsst-primary-dark text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Long-term Dissemination</h2>
            <p className="text-lg text-white/80 mb-8">
              Project social media accounts and webpage will remain active for two years after the project's end. The AI application will continue to be available as a consultation tool for mental health support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">Social Media</h3>
                <p className="text-white/70 text-sm">Active for 2 years post-project</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">AI Application</h3>
                <p className="text-white/70 text-sm">Continued consultation access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Contact Page
export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Contact Us</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              We would love to hear from you. Reach out for partnership opportunities or general inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-lg mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <Card className="card bg-tsst-highlight/30 border-tsst-accent">
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-tsst-primary-dark mx-auto mb-4" />
                    <h3 className="font-semibold text-tsst-text mb-2">Thank You!</h3>
                    <p className="body-sm">We will get back to you as soon as possible.</p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-2" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-2" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required className="mt-2" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" required className="mt-2" rows={5} placeholder="Tell us how we can help you..." />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox id="privacy" required />
                    <Label htmlFor="privacy" className="text-sm text-tsst-text-muted font-normal">
                      I agree to the processing of my personal data in accordance with the Privacy Policy. *
                    </Label>
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full md:w-auto">
                    Send Message <Send className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
            
            <div className="space-y-6">
              <Card className="card bg-tsst-card border-tsst-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tsst-primary-dark to-tsst-primary flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tsst-text">GASZO</h3>
                      <p className="text-sm text-tsst-text-muted">Project Coordinator</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-tsst-primary flex-shrink-0" />
                      <span className="body-sm">Poland, EU</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-tsst-primary flex-shrink-0" />
                      <a href="mailto:info@tsst.eu" className="body-sm text-tsst-primary-dark hover:underline">info@tsst.eu</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-tsst-text mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="https://instagram.com/tsst_project" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="https://facebook.com/tsstproject" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Privacy Page
export function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tsst-primary/10 text-tsst-primary-dark text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Data Protection</span>
            </div>
            <h1 className="heading-xl text-gradient mb-6">Privacy Policy</h1>
            <p className="text-xl text-tsst-text-muted leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="body-lg text-tsst-text-muted mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="heading-sm mb-4">1. Introduction</h2>
                <p className="body-md">
                  TSST - Tackling Self Stigma Together is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                </p>
              </section>

              <section>
                <h2 className="heading-sm mb-4">2. Data Controller</h2>
                <div className="bg-tsst-card rounded-xl p-6">
                  <p className="font-medium text-tsst-text">GASZO</p>
                  <p className="body-sm text-tsst-text-muted">Project Coordinator</p>
                  <p className="body-sm text-tsst-text-muted mt-2">Poland, EU</p>
                  <p className="body-sm text-tsst-text-muted mt-2">Email: <a href="mailto:info@tsst.eu" className="text-tsst-primary-dark hover:underline">info@tsst.eu</a></p>
                </div>
              </section>

              <section>
                <h2 className="heading-sm mb-4">3. Your Rights</h2>
                <p className="body-md mb-4">Under GDPR, you have the right to:</p>
                <ul className="space-y-2">
                  {['Access your personal data', 'Request correction of inaccurate data', 'Request deletion of your data', 'Object to processing'].map((right) => (
                    <li key={right} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-tsst-primary-dark mt-2 flex-shrink-0" />
                      <span className="body-md">{right}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

