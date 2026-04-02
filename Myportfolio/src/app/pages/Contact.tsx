import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Let's connect and explore opportunities to collaborate
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-primary/5 border border-primary/20 rounded-lg hover:shadow-md transition-all">
                <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:thuyn18@uci.edu" className="text-muted-foreground hover:text-primary">
                    thuyn18@uci.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/5 border border-secondary/20 rounded-lg hover:shadow-md transition-all">
                <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+19499925236" className="text-muted-foreground hover:text-secondary">
                    (949) 992-5236
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-accent/5 border border-accent/20 rounded-lg hover:shadow-md transition-all">
                <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Irvine, California</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/thuyng11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-primary hover:bg-primary/80 rounded-lg transition-all hover:scale-105"
              >
                <Github size={24} />
                <span className="font-semibold">GitHub</span>
              </a>
              <a
                href="http://www.linkedin.com/in/thuynguyenvm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-105"
              >
                <Linkedin size={24} />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Reach Out Message */}
          <div className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">Let's Connect!</h3>
            <p className="text-foreground/80 mb-2">
              Please feel free to reach out through email or connect with me on LinkedIn.
            </p>
            <p className="text-muted-foreground text-sm">
              I'm always open to discussing new opportunities, collaborations, and interesting projects.
            </p>
          </div>

          {/* Availability */}
          <div className="p-6 bg-card border-2 border-secondary/20 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Open to Opportunities In:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Data Science & Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                <span>Machine Learning & AI Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Health Informatics & Digital Health</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Backend Software Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                <span>Research Collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}