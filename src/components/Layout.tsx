import React from 'react';
import { Activity } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex min-h-[calc(100vh-4rem-4.5rem)]">
        <aside className="w-64 border-r h-[calc(100vh-4rem)] p-4 hidden lg:block bg-background">
          <nav className="space-y-2">
            <div className="px-3 py-2 text-sm font-semibold text-foreground">Leagues</div>
            {['NBA', 'NFL', 'MLB', 'NHL'].map((league) => (
              <a
                key={league}
                href="#"
                className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary text-foreground"
              >
                {league}
              </a>
            ))}
            <div className="px-3 py-2 mt-6 text-sm font-semibold text-foreground">Quick Filters</div>
            {['Live Games', 'Favorites', 'Recent'].map((filter) => (
              <a
                key={filter}
                href="#"
                className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary text-foreground"
              >
                {filter}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      <footer className="border-t py-4 bg-background w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Sports Stats. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                API Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}