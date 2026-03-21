import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Users, Briefcase, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';
import PageIntroOverlay from '../src/components/PageIntroOverlay';

export default function Market() {
  const skillDemandData = [
    { name: 'JavaScript', demand: 78, growth: 8 },
    { name: 'Python', demand: 65, growth: 12 },
    { name: 'React', demand: 62, growth: 15 },
    { name: 'AWS', demand: 58, growth: 18 },
    { name: 'Docker', demand: 48, growth: 14 },
    { name: 'Machine Learning', demand: 55, growth: 22 }
  ];

  const salaryTrends = [
    { month: 'Jan', frontend: 58000, backend: 62000, fullstack: 68000 },
    { month: 'Feb', frontend: 59000, backend: 61000, fullstack: 67000 },
    { month: 'Mar', frontend: 58500, backend: 63000, fullstack: 69000 },
    { month: 'Apr', frontend: 59500, backend: 62500, fullstack: 68500 },
    { month: 'May', frontend: 60000, backend: 64000, fullstack: 70000 },
    { month: 'Jun', frontend: 59800, backend: 63500, fullstack: 69500 }
  ];

  const jobDistribution = [
    { name: 'Frontend', value: 32, color: '#B45309' },
    { name: 'Backend', value: 28, color: '#92400E' },
    { name: 'Full-Stack', value: 24, color: '#78350F' },
    { name: 'DevOps', value: 12, color: '#D97706' },
    { name: 'Data Science', value: 4, color: '#F59E0B' }
  ];

  const topCompanies = [
    { name: 'Google', openings: 127, avgSalary: '$92,000', growth: '+8%' },
    { name: 'Microsoft', openings: 98, avgSalary: '$88,500', growth: '+5%' },
    { name: 'Amazon', openings: 145, avgSalary: '$85,000', growth: '+10%' },
    { name: 'Meta', openings: 75, avgSalary: '$95,000', growth: '+3%' },
    { name: 'Apple', openings: 65, avgSalary: '$90,500', growth: '+6%' }
  ];

  const marketInsights = [
    {
      title: 'AI/ML Skills Growing',
      description: 'Machine Learning roles have increased by 22% in the last 6 months',
      trend: 'up',
      impact: 'High'
    },
    {
      title: 'Remote Work Stabilized',
      description: 'Remote-friendly positions account for 42% of all tech job postings',
      trend: 'up',
      impact: 'Medium'
    },
    {
      title: 'Cloud Skills Premium',
      description: 'Cloud-certified professionals earn 18% more than non-certified peers',
      trend: 'up',
      impact: 'High'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <PageIntroOverlay title="Market" subtitle="Real-Time Job Intelligence" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Market <span className="text-amber-700">Intelligence</span>
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl mb-6">
              Access real data on tech job market trends, salary analytics, and skill demand. Make informed decisions about your career with 
              intelligence from actual job postings. These are realistic numbers that reflect what entry-level developers can actually expect.
            </p>
            <div className="h-px bg-amber-200 w-32 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Active Job Openings</p>
                  <p className="text-2xl font-bold text-amber-900">8,450</p>
                  <p className="text-sm text-amber-700 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +6% this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Avg. Entry Salary</p>
                  <p className="text-2xl font-bold text-amber-900">$58,500</p>
                  <p className="text-sm text-amber-700 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +4% YoY
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Hiring Companies</p>
                  <p className="text-2xl font-bold text-amber-900">745</p>
                  <p className="text-sm text-amber-700 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +3% this week
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Remote Roles</p>
                  <p className="text-2xl font-bold text-amber-900">42%</p>
                  <p className="text-sm text-amber-700 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +7% this year
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6 text-amber-900">Skill Demand & Growth</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillDemandData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="demand" fill="#92400E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-6 text-amber-900">Salary Trends (6 Months)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salaryTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="frontend" stroke="#B45309" strokeWidth={3} />
                  <Line type="monotone" dataKey="backend" stroke="#92400E" strokeWidth={3} />
                  <Line type="monotone" dataKey="fullstack" stroke="#D97706" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6 text-amber-900">Job Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={jobDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {jobDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {jobDistribution.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-amber-950">{item.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="lg:col-span-2">
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6 text-amber-900">Top Hiring Companies</h2>
                <div className="space-y-4">
                  {topCompanies.map((company, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{company.name[0]}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-amber-950">{company.name}</h3>
                          <p className="text-sm text-amber-700">{company.openings} openings</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-amber-900">{company.avgSalary}</p>
                        <p className="text-sm text-amber-700">{company.growth}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          <GlassCard>
            <h2 className="text-xl font-semibold mb-6 text-amber-900">Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-amber-50 border border-amber-200 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-amber-950">{insight.title}</h3>
                    <div className="flex items-center space-x-1">
                      {insight.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-amber-700" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-amber-600" />
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${insight.impact === 'High'
                          ? 'bg-amber-700/20 text-amber-700'
                          : 'bg-amber-600/20 text-amber-600'
                        }`}>
                        {insight.impact}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-amber-800">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}