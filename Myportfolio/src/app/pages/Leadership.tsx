import { Award, Users, Calendar, TrendingUp, Presentation, ExternalLink } from 'lucide-react';

export function Leadership() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership & Presentations</h1>
        <p className="text-lg text-muted-foreground">
          Community engagement and academic contributions
        </p>
      </div>

      {/* Leadership Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Award className="text-primary" size={28} />
          Leadership Roles
        </h2>
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
              <Users className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">External Affairs Specialist</h3>
              <p className="text-lg text-foreground/90 mb-2">
                Women in Informatics and Computer Science (WICS) @ UCI
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar size={16} />
                <span>December 2023 - Present</span>
              </div>
            </div>
          </div>

          <div className="ml-16">
            <p className="text-foreground/80 mb-4">
              Leading initiatives to connect students with industry professionals and foster a supportive community for women in tech.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Led a 5+ member team to partner with industry representatives and coordinate weekly events for 50+ attendees
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Established partnerships with leading tech companies to provide networking and career development opportunities
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">
                  Organized technical workshops, panel discussions, and career fairs to empower women in computing fields
                </span>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/posts/wics-uci_wics-x-cotality-on-march-2nd-wics-activity-7436564120751144960-vAUB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh71M0Bv4mJm542pMzxT22oEqfi9goZiiw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors font-semibold"
            >
              <ExternalLink size={16} />
              View Recent Event
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/50 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg text-center">
              <div className="text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Event Attendees</div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-1">Weekly</div>
              <div className="text-sm text-muted-foreground">Events Coordinated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Presentation className="text-secondary" size={28} />
          Conference Presentations
        </h2>
        <div className="space-y-6">
          {/* AMIA Presentation */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 hover:border-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                <TrendingUp className="text-secondary" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                    Podium Presenter
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Resident Workflow Reimagined: A Generative AI–Driven Chatbot to Improve Clinical Operations and Trainee Efficiency
                </h3>
                <div className="space-y-1 text-muted-foreground mb-4">
                  <p>AMIA Amplify Informatics Conference</p>
                  <p>Denver, Colorado • 2026</p>
                </div>
                <p className="text-foreground/80">
                  Presented research on implementing an AI-driven chatbot to enhance clinical workflows for medical residents, demonstrating significant improvements in operational efficiency and information retrieval.
                </p>
              </div>
            </div>
          </div>

          {/* UROP Presentation */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 hover:border-accent rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                    Poster Presenter
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Analyzing Integration Opportunities for Advanced Air Mobility Vehicles
                </h3>
                <div className="space-y-1 text-muted-foreground mb-4">
                  <p>UCI UROP Research Symposium 2025</p>
                  <p>Irvine, California • 2025</p>
                </div>
                <p className="text-foreground/80">
                  Presented data-driven analysis of integration pathways for advanced air mobility vehicles in urban transportation systems, leveraging transportation data analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="mt-12">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-center">Leadership Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🎤</div>
              <div className="font-semibold">National Conference Speaker</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">👥</div>
              <div className="font-semibold">Community Builder</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🌟</div>
              <div className="font-semibold">Student Leader</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}