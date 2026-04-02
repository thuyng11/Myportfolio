import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Education</h1>
        <p className="text-lg text-muted-foreground">
          Academic background and achievements
        </p>
      </div>

      {/* Main Education Card */}
      <div className="bg-card rounded-2xl border-2 border-primary/30 shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <GraduationCap size={32} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">University of California, Irvine</h2>
              <div className="flex items-center gap-2 text-foreground/80">
                <Calendar size={16} />
                <span>September 2023 - June 2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Data Science</h3>
            <p className="text-muted-foreground">Minor in Health Informatics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-primary" size={20} />
                <span className="font-semibold">GPA</span>
              </div>
              <p className="text-3xl font-bold text-primary">3.90 / 4.00</p>
            </div>

            <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-secondary" size={20} />
                <span className="font-semibold">Honor</span>
              </div>
              <p className="text-lg font-semibold">Dean's Honor List</p>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Machine Learning',
                'Statistical Analysis',
                'Data Structures & Algorithms',
                'Database Management',
                'Health Informatics',
                'Data Visualization',
                'AI & Deep Learning',
                'Clinical Decision Support',
                'Programming in Python',
                'Medical Data Science',
              ].map((course, index) => (
                <div
                  key={index}
                  className="p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20"
                >
                  <span className="text-foreground">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-card border-2 border-primary/20 rounded-lg text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold mb-1">Data Science</h4>
                <p className="text-sm text-muted-foreground">Analytics & Visualization</p>
              </div>
              <div className="p-4 bg-card border-2 border-secondary/20 rounded-lg text-center hover:border-secondary transition-colors">
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="font-semibold mb-1">Health Informatics</h4>
                <p className="text-sm text-muted-foreground">Clinical Applications</p>
              </div>
              <div className="p-4 bg-card border-2 border-accent/20 rounded-lg text-center hover:border-accent transition-colors">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-semibold mb-1">AI/ML</h4>
                <p className="text-sm text-muted-foreground">Model Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
