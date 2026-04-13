import { Code2, Database, TrendingUp, Calendar, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  technologies: string[];
  description: string[];
  highlights: string[];
  color: 'primary' | 'secondary' | 'accent';
  githubLink?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Data Science (Capstone Project)',
      period: 'March 2026 - Present',
      technologies: ['Python', 'numpy', 'pandas', 'matplotlib', 'scikit-learn', 'PostgreSQL'],
      description: [
        'Spearheaded data cleaning and preprocessing for 20,000+ surgical records, handling null values via median imputation and targeted deletion to ensure high data quality for predictive modeling.',
        'Conducted comprehensive Exploratory Data Analysis (EDA) using Python (NumPy, Pandas, Matplotlib, Missingno) to visualize 90+ feature distributions, target variables, and uncover key data trends.',
        'Developed and fine-tuned machine learning models (Logistic Regression, XGBoost, Hierarchical Clustering) using Scikit-Learn, analyzing error metrics and feature coefficients to achieve a high-performing AUC-ROC score of 0.81.', 
      ],
      highlights: [
        '20,000+ clinical data analyzed',
        '90+ features and targets visualized',
        '0.81 AUC ROC & feature engineering',
      ],
      color: 'secondary',
      githubLink: 'https://github.com/keerthana-girish/Empowered-PI',
    },
    {
      title: 'Chicago-crime Bayesian Analysis',
      period: 'February 2026 - March 2026',
      technologies: ['R', 'ggplot2', 'bayesrules', 'tidyverse'],
      description: [
        'Analyzed 3,000+ Chicago crime records across 77 community areas, aggregating theft incidents and temporal data to estimate neighborhood-level motor vehicle theft rates',
        'Developed a Bayesian Gamma–Poisson model in R to estimate daily theft rates and generate 5,000 posterior predictive simulations, quantifying short-term theft risk across neighborhoods',
        'Identified high-risk areas with >90% probability of at least one theft occurring on a given day, and validated model performance using posterior predictive checks comparing simulated and observed crime counts',
      ],
      highlights: [
        '3,000+ crime records analyzed',
        '5,000 posterior simulations',
        '>90% risk prediction accuracy',
      ],
      color: 'secondary',
      githubLink: 'https://github.com/thuyng11/chicago-crime-analysis/blob/main/final-writeup.pdf',
    },
    {
      title: 'Healthcare Analytics: Patient No-Show Prediction',
      period: 'April 2025 - June 2025',
      technologies: ['Python', 'XGBoost', 'Pandas', 'scikit-learn', 'EDA'],
      description: [
        'Performed exploratory data analysis on 10,000+ clinical appointments, identifying demographic and behavioral patterns associated with missed visits',
        'Developed XGBoost and logistic regression models for no-show prediction, achieving AUC = 0.732',
        'Generated feature importance analysis and visualizations to support data-driven scheduling strategies',
      ],
      highlights: [
        '10,000+ appointments analyzed',
        'AUC = 0.732 prediction accuracy',
        'Data-driven insights for healthcare operations',
      ],
      color: 'primary',
    },
  ];

  const getColorClasses = (color: 'primary' | 'secondary' | 'accent') => {
    const colors = {
      primary: {
        bg: 'bg-primary/5',
        border: 'border-primary/30',
        hoverBorder: 'hover:border-primary',
        iconBg: 'bg-primary/10',
        iconText: 'text-primary',
        badgeBg: 'bg-primary/20',
        badgeText: 'text-primary',
      },
      secondary: {
        bg: 'bg-secondary/5',
        border: 'border-secondary/30',
        hoverBorder: 'hover:border-secondary',
        iconBg: 'bg-secondary/10',
        iconText: 'text-secondary',
        badgeBg: 'bg-secondary/20',
        badgeText: 'text-secondary',
      },
      accent: {
        bg: 'bg-accent/5',
        border: 'border-accent/30',
        hoverBorder: 'hover:border-accent',
        iconBg: 'bg-accent/10',
        iconText: 'text-accent',
        badgeBg: 'bg-accent/20',
        badgeText: 'text-accent',
      },
    };
    return colors[color];
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Academic and research projects showcasing data science and ML expertise
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {projects.map((project, index) => {
          const colors = getColorClasses(project.color);
          return (
            <div
              key={index}
              className={`${colors.bg} border-2 ${colors.border} ${colors.hoverBorder} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${colors.iconBg} p-3 rounded-lg flex-shrink-0`}>
                  <Code2 className={colors.iconText} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar size={16} />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${colors.badgeBg} ${colors.badgeText} rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badgeBg} ${colors.badgeText} rounded-lg hover:opacity-80 transition-opacity font-semibold`}
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Project Details:</h4>
                  <ul className="space-y-2">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/50 rounded-lg border border-primary/10 text-center"
                    >
                      <p className="text-sm font-semibold">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Areas */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Project Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className={`inline-flex p-4 rounded-full bg-primary/20 mb-4`}>
              <Database className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Healthcare Analytics</h3>
            <p className="text-muted-foreground">
              Analyzing clinical data to improve patient outcomes and operational efficiency
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className={`inline-flex p-4 rounded-full bg-secondary/20 mb-4`}>
              <TrendingUp className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Predictive Modeling</h3>
            <p className="text-muted-foreground">
              Building ML models to predict healthcare events and optimize resource allocation
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className={`inline-flex p-4 rounded-full bg-accent/20 mb-4`}>
              <Code2 className="text-accent" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
            <p className="text-muted-foreground">
              Creating interactive dashboards and visualizations for data-driven decision making
            </p>
          </div>
        </div>
      </div>

      {/* Future Projects */}
      <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Future Project Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">🔬</div>
            <div>
              <h4 className="font-semibold">Clinical Decision Support Systems</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered tools to assist healthcare providers in diagnosis and treatment planning
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-secondary">🏥</div>
            <div>
              <h4 className="font-semibold">Population Health Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Large-scale data analysis to identify health trends and intervention opportunities
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-accent">🤖</div>
            <div>
              <h4 className="font-semibold">Natural Language Processing in Healthcare</h4>
              <p className="text-sm text-muted-foreground">
                Extracting insights from clinical notes and medical literature
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">📊</div>
            <div>
              <h4 className="font-semibold">Real-time Health Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                IoT and wearable device data analytics for continuous patient monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
