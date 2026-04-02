import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { useEffect } from 'react';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Thuy Nguyen - Data Science Portfolio',
      '/chat': 'Portfolio Chat | Thuy Nguyen',
      '/education': 'Education | Thuy Nguyen',
      '/experience': 'Experience | Thuy Nguyen',
      '/leadership': 'Leadership | Thuy Nguyen',
      '/skills': 'Skills | Thuy Nguyen',
      '/projects': 'Projects | Thuy Nguyen',
      '/contact': 'Contact | Thuy Nguyen',
    };

    document.title = pageTitles[location.pathname] || 'Thuy Nguyen';
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-primary/20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Thuy Nguyen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}