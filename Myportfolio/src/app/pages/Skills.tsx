import { Code2, Database, BarChart3, Brain, Wrench } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

export function Skills() {
  // Skill proficiency data
  const languageData = [
    { name: 'Python', proficiency: 95 },
    { name: 'SQL', proficiency: 90 },
    { name: 'R', proficiency: 85 },
    { name: 'TypeScript', proficiency: 75 },
    { name: 'C/C++', proficiency: 70 },
    { name: 'MATLAB', proficiency: 65 },
  ];

  const skillCategoryData = [
    { category: 'Data Analysis', value: 95 },
    { category: 'Machine Learning', value: 85 },
    { category: 'Backend Dev', value: 80 },
    { category: 'Database Design', value: 88 },
    { category: 'Cloud Computing', value: 75 },
    { category: 'Health Informatics', value: 90 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Technical expertise developed through academic and professional experience
        </p>
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 p-3 rounded-lg">
              <Code2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Languages</h3>
          </div>
          <div className="space-y-2">
            {['Python', 'SQL', 'R', 'C/C++', 'MATLAB', 'TypeScript'].map((lang, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/80">{lang}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-secondary/20 p-3 rounded-lg">
              <Wrench className="text-secondary" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Tools</h3>
          </div>
          <div className="space-y-2">
            {['Git', 'VSCode', 'RStudio', 'PostgreSQL', 'AWS S3', 'AWS EC2', 'PowerBI', 'Jupyter'].map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-accent/20 p-3 rounded-lg">
              <Brain className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Stats/ML</h3>
          </div>
          <div className="space-y-2">
            {['EDA', 'scikit-learn', 'Linear Regression', 'Logistic Regression', 'Statistical Analysis', 'Statistical Modeling'].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground/80">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visualizations */}
      <div className="space-y-8">
        {/* Language Proficiency Chart */}
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-primary" size={28} />
            <h2 className="text-2xl font-semibold">Programming Language Proficiency</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={languageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #a8c5e6',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="proficiency" fill="#a8c5e6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Category Radar Chart */}
        <div className="bg-card border-2 border-secondary/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-secondary" size={28} />
            <h2 className="text-2xl font-semibold">Skill Category Distribution</h2>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={skillCategoryData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="category" stroke="#6b7280" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
              <Radar
                name="Proficiency"
                dataKey="value"
                stroke="#ffd4e5"
                fill="#ffd4e5"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ffd4e5',
                  borderRadius: '8px',
                }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skill Application Areas */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Skill Application in Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Data Analysis & Visualization</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Analyzed surgical outcomes data using R (dplyr, tidyr, ggplot2)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Conducted LinkedIn performance analysis using Excel PivotTables
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Performed EDA on 10,000+ clinical appointments
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Machine Learning & AI</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-foreground/80">
                  Developed XGBoost models for patient no-show prediction (AUC = 0.732)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-foreground/80">
                  Built semantic search system using OpenAI embeddings
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-foreground/80">
                  Tuned LLM parameters improving response accuracy by 30%
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground/80">
                  Optimized PostgreSQL database schema reducing query time by 15%
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground/80">
                  Built AI knowledge assistant supporting 100+ medical residents
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground/80">
                  Developed proof-of-concept digital health platforms
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Health Informatics</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Analyzed surgical complications across 786 case records
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary mt-1">•</span>
                <span className="text-foreground/80">
                  Collaborated with clinicians on workflow analysis
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground/80">
                  Conducted stakeholder needs assessments for health platforms
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
