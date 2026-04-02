import { Link } from 'react-router';
import { GraduationCap, Briefcase, Award, Code2, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../../assets/8e0256a36d00a3561fcfa184b612454891f55cc6.png';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="inline-block mb-6">
          <img 
            src={profilePhoto} 
            alt="Thuy Nguyen" 
            className="w-32 h-32 rounded-full object-cover border-4 border-gradient-to-br from-primary via-secondary to-accent"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Thuy Nguyen
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
          Data Science • Health Informatics • AI/ML
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-4 text-foreground/80">
          B.S. Data Science student at UC Irvine with a passion for leveraging data and AI to solve challenges.
          Dean's Honor List • 3.90 GPA
        </p>
        <div className="mb-8 p-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg max-w-2xl mx-auto border-2 border-primary/30">
          <p className="text-lg font-semibold text-foreground">
            🚀 Actively seeking full-time positions and internship opportunities in Data Science, AI/ML, and Health Informatics
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/thuyng11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="http://www.linkedin.com/in/thuynguyenvm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:thuyn18@uci.edu"
            className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
        <Link
          to="/education"
          className="group p-6 bg-card rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <GraduationCap size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-muted-foreground">UC Irvine • Data Science</p>
        </Link>

        <Link
          to="/experience"
          className="group p-6 bg-card rounded-xl border-2 border-secondary/20 hover:border-secondary hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Briefcase size={28} className="text-secondary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-muted-foreground">4+ positions in data & AI</p>
        </Link>

        <Link
          to="/leadership"
          className="group p-6 bg-card rounded-xl border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Award size={28} className="text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Leadership</h3>
          <p className="text-muted-foreground">WICS External Affairs</p>
        </Link>

        <Link
          to="/projects"
          className="group p-6 bg-card rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Code2 size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-muted-foreground">Healthcare ML & Analytics</p>
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">3.90</div>
            <div className="text-foreground">GPA • Dean's Honor List</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20">
            <div className="text-4xl font-bold text-secondary mb-2">4+</div>
            <div className="text-foreground">Professional Positions</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">2</div>
            <div className="text-foreground">Conference Presentations</div>
          </div>
        </div>
      </section>
    </div>
  );
}