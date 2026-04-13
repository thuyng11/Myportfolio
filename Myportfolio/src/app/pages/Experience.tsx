import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
  color: 'primary' | 'secondary' | 'accent';
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Data Analyst (Capstone Project)',
      organization: 'UCI School of ICS & UCI School of Medicine, Department of Surgery',
      location: 'Irvine, CA',
      period: 'March 2026 - Present',
      responsibilities: [
        'Spearheaded data cleaning and preprocessing for 20,000+ surgical records, handling null values via median imputation and targeted deletion to ensure high data quality for predictive modeling.',
        'Conducted comprehensive Exploratory Data Analysis (EDA) using Python (NumPy, Pandas, Matplotlib, Missingno) to visualize feature distributions, target variables, and uncover key data trends.',
        'Developed and fine-tuned machine learning models (Logistic Regression, XGBoost, Hierarchical Clustering) using Scikit-Learn, analyzing error metrics and feature coefficients to achieve a high-performing AUC-ROC score of 0.81.' 
      ],
      color: 'primary',
    },
    {
      title: 'PHIT (Public Health Informatics & Technology) Intern',
      organization: "Children's Hospital of Orange County (CHOC)",
      location: 'Orange, CA',
      period: 'December 2025 - Present',
      responsibilities: [
        'Conducted needs assessment with 3+ stakeholders to define product requirements and prioritize MVP scope',
        'Optimized PostgreSQL database schema through normalization, reducing average query response time by 15%',
        'Built a proof-of-concept digital health platform supporting asthma/obesity programs across OC and San Diego',
        'Delivered findings reports and poster presentation to executives and clinical stakeholders',
      ],
      color: 'secondary',
    },
    {
      title: 'Backend Software Developer',
      organization: 'UCI School of Medicine, Division of General Internal Medicine & Primary Care',
      location: 'Irvine, CA',
      period: 'September 2025 - Present',
      responsibilities: [
        'Developed an embedding-based semantic search system using OpenAI embeddings and vector search to improve access to 10+ clinical training materials',
        'Analyzed 300+ query logs to tune LLM parameters and improve response accuracy by 30%',
        'Optimized retrieval and generation parameters, reducing system response time by 40%',
        'Built an AI knowledge assistant supporting clinical information retrieval for 100+ medical residents, improving operational efficiency by 35%',
        'Collaborated with clinicians to conduct user testing and workflow analysis',
      ],
      color: 'accent',
    },
    {
      title: 'Student Analyst',
      organization: 'UCI Institute of Transportation Studies (ITS)',
      location: 'Irvine, CA',
      period: 'September 2024 - December 2025',
      responsibilities: [
        'Analyzed 2020–2024 LinkedIn performance using Excel (PivotTables, lookup functions) to identify content trends and peak engagement',
        'Developed and presented a posting strategy and schedule that increased engagement rate by 39.7%',
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
      },
      secondary: {
        bg: 'bg-secondary/5',
        border: 'border-secondary/30',
        hoverBorder: 'hover:border-secondary',
        iconBg: 'bg-secondary/10',
        iconText: 'text-secondary',
      },
      accent: {
        bg: 'bg-accent/5',
        border: 'border-accent/30',
        hoverBorder: 'hover:border-accent',
        iconBg: 'bg-accent/10',
        iconText: 'text-accent',
      },
    };
    return colors[color];
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h1>
        <p className="text-lg text-muted-foreground">
          Professional roles in data science, AI, and health informatics
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const colors = getColorClasses(exp.color);
          return (
            <div
              key={index}
              className={`${colors.bg} border-2 ${colors.border} ${colors.hoverBorder} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${colors.iconBg} p-3 rounded-lg flex-shrink-0`}>
                  <Briefcase className={colors.iconText} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-lg text-foreground/90 mb-2">{exp.organization}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 ml-16">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-muted-foreground mt-1.5">•</span>
                    <span className="text-foreground/80">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Impact Summary */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 text-center">
          <div className="text-3xl font-bold text-primary mb-2">40%</div>
          <div className="text-sm text-foreground">Response Time Reduction</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">39.7%</div>
          <div className="text-sm text-foreground">Engagement Increase</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20 text-center">
          <div className="text-3xl font-bold text-accent mb-2">35%</div>
          <div className="text-sm text-foreground">Efficiency Improvement</div>
        </div>
      </div>
    </div>
  );
}
