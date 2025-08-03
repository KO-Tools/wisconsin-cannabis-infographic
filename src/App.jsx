import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Building, Briefcase, Heart, Shield, Leaf } from 'lucide-react';
import './App.css';

const revenueData = [
  { state: 'Illinois', revenue: 445, color: '#0E5656' },
  { state: 'Michigan', revenue: 290, color: '#88AEAE' },
  { state: 'Minnesota', revenue: 180, color: '#F1F2F3' },
  { state: 'Wisconsin', revenue: 0, color: '#ef4444' }
];

const jobsData = [
  { category: 'Cultivation', jobs: 4500, color: '#0E5656' },
  { category: 'Manufacturing', jobs: 3200, color: '#88AEAE' },
  { category: 'Retail', jobs: 2800, color: '#F1F2F3' },
  { category: 'Testing/Labs', jobs: 1200, color: '#0E5656' },
  { category: 'Professional Services', jobs: 3300, color: '#88AEAE' }
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const goToNext = () => {
    if (currentPage < 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="infographic-container">
      {currentPage === 0 && (
        <div className="page page-1">
          <div className="wccr-logo">
            <img src="/wccr-light.png" alt="Wisconsin Coalition for Cannabis Reform" className="logo-image" />
          </div>
          <div className="infographic-header">
            <h1 className="main-title">Cannabis Legalization</h1>
            <h2 className="subtitle">Wisconsin's $300M Opportunity</h2>
            <p className="tagline">Economic Growth • Job Creation • Tax Revenue</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">$300M+</div>
              <div className="stat-label">Annual Tax Revenue</div>
              <div className="stat-description">
                Projected state revenue from cannabis sales, excise taxes, and licensing fees
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Direct Jobs Created</div>
              <div className="stat-description">
                High-paying positions across cultivation, manufacturing, retail, and professional services
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">$500M+</div>
              <div className="stat-label">Lost to Neighboring States</div>
              <div className="stat-description">
                Wisconsin residents currently spending cannabis dollars in Illinois, Michigan, and Minnesota
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">64%</div>
              <div className="stat-label">Public Support</div>
              <div className="stat-description">
                Wisconsin voters support cannabis legalization, including 58% of Republicans
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <h3 className="comparison-title">Wisconsin vs. Neighboring States</h3>
            <div className="revenue-bars">
              {revenueData.map((item) => (
                <div 
                  key={item.state} 
                  className={`revenue-item ${item.state === 'Wisconsin' ? 'wisconsin' : ''}`}
                >
                  <div className="revenue-state">{item.state}</div>
                  <div className="revenue-bar">
                    <div 
                      className="revenue-fill" 
                      style={{ 
                        width: item.state === 'Wisconsin' ? '5%' : `${(item.revenue / 445) * 100}%`,
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                  <div className="revenue-amount">
                    {item.state === 'Wisconsin' ? '$0' : `$${item.revenue}M`}
                  </div>
                </div>
              ))}
            </div>
            <div className="source-text">
              Source: State Revenue Departments, 2023-2024 data
            </div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-title">
                <DollarSign className="benefit-icon" />
                Economic Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <TrendingUp className="benefit-icon" />
                  $300M+ annual state revenue
                </li>
                <li className="benefit-item">
                  <Building className="benefit-icon" />
                  Boost local businesses and real estate
                </li>
                <li className="benefit-item">
                  <Briefcase className="benefit-icon" />
                  Reduce enforcement costs by $50M+
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Tourism revenue from neighboring states
                </li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="benefit-title">
                <Leaf className="benefit-icon" />
                Agricultural Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <DollarSign className="benefit-icon" />
                  $200M+ annual farm income potential
                </li>
                <li className="benefit-item">
                  <TrendingUp className="benefit-icon" />
                  Higher profit margins than traditional crops
                </li>
                <li className="benefit-item">
                  <Building className="benefit-icon" />
                  Year-round growing with indoor facilities
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Keep young farmers in Wisconsin
                </li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="benefit-title">
                <Heart className="benefit-icon" />
                Health & Social Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <Heart className="benefit-icon" />
                  64% reduction in opioid use
                </li>
                <li className="benefit-item">
                  <Shield className="benefit-icon" />
                  End discriminatory enforcement
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Expunge prior cannabis convictions
                </li>
                <li className="benefit-item">
                  <DollarSign className="benefit-icon" />
                  Reduce criminal justice costs
                </li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="benefit-title">
                <Shield className="benefit-icon" />
                Public Safety Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <Shield className="benefit-icon" />
                  Eliminate black market criminal activity
                </li>
                <li className="benefit-item">
                  <Heart className="benefit-icon" />
                  Quality control and safety testing
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Age verification and responsible use
                </li>
                <li className="benefit-item">
                  <Leaf className="benefit-icon" />
                  Regulated, tested products for consumers
                </li>
              </ul>
            </div>
          </div>

          <div className="page-indicator">Page 1 of 2</div>
        </div>
      )}

      {currentPage === 1 && (
        <div className="page page-2">
          <div className="wccr-logo">
            <img src="/wccr-dark.png" alt="Wisconsin Coalition for Cannabis Reform" className="logo-image" />
          </div>
          <div className="infographic-header">
            <h1 className="main-title">Job Creation & Industry Growth</h1>
            <h2 className="subtitle">Building Wisconsin's Cannabis Economy</h2>
            <p className="tagline">Sustainable • Regulated • Profitable</p>
          </div>

          <div className="chart-container">
            <div className="chart-title">Jobs Created by Industry Sector</div>
            <div className="jobs-chart-wrapper">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={jobsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={60}
                    dataKey="jobs"
                    label={({ category, jobs }) => `${category}: ${jobs.toLocaleString()}`}
                    labelLine={false}
                  >
                    {jobsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [value.toLocaleString(), 'Jobs']}
                    labelFormatter={(label) => `${label} Sector`}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="jobs-legend">
                {jobsData.map((item) => (
                  <div key={item.category} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="legend-text">
                      <strong>{item.category}:</strong> {item.jobs.toLocaleString()} jobs
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="source-text">
              Source: Economic impact studies from legal cannabis states (Colorado, California, Illinois)
            </div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-title">
                <DollarSign className="benefit-icon" />
                Economic Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <TrendingUp className="benefit-icon" />
                  $300M+ annual state revenue
                </li>
                <li className="benefit-item">
                  <Building className="benefit-icon" />
                  Boost local businesses and real estate
                </li>
                <li className="benefit-item">
                  <Briefcase className="benefit-icon" />
                  Reduce enforcement costs by $50M+
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Tourism revenue from neighboring states
                </li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="benefit-title">
                <Leaf className="benefit-icon" />
                Agricultural Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <DollarSign className="benefit-icon" />
                  $200M+ annual farm income potential
                </li>
                <li className="benefit-item">
                  <TrendingUp className="benefit-icon" />
                  Higher profit margins than traditional crops
                </li>
                <li className="benefit-item">
                  <Building className="benefit-icon" />
                  Year-round growing with indoor facilities
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Keep young farmers in Wisconsin
                </li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="benefit-title">
                <Heart className="benefit-icon" />
                Health & Social Benefits
              </div>
              <ul className="benefit-list">
                <li className="benefit-item">
                  <Heart className="benefit-icon" />
                  64% reduction in opioid use
                </li>
                <li className="benefit-item">
                  <Shield className="benefit-icon" />
                  End discriminatory enforcement
                </li>
                <li className="benefit-item">
                  <Users className="benefit-icon" />
                  Expunge prior cannabis convictions
                </li>
                <li className="benefit-item">
                  <DollarSign className="benefit-icon" />
                  Reduce criminal justice costs
                </li>
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h3 className="cta-title">The Time is Now</h3>
            <p className="cta-text">
              Wisconsin is surrounded by legal cannabis states. Every day we wait, 
              we lose millions in tax revenue, thousands of jobs, and the opportunity 
              to lead the Midwest in this growing industry.
            </p>
            <p className="cta-text">
              <strong>Contact your legislators today</strong> and urge them to support 
              cannabis legalization for Wisconsin's economic future.
            </p>
          </div>

          <div className="page-indicator">Page 2 of 2</div>
        </div>
      )}

        <div className="navigation">
          <button 
            onClick={goToPrevious} 
            disabled={currentPage === 0}
            className="nav-button"
          >
            ‹ Previous
          </button>
          <button 
            onClick={goToNext} 
            disabled={currentPage === 1}
            className="nav-button"
          >
            Next ›
          </button>
        </div>
    </div>
  );
}

export default App;