import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg hover:opacity-90 transition-all"
        >
          <Home size={20} />
          <span className="font-semibold">Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
