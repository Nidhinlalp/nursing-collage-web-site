import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/placements', label: 'Placements' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="IETNC Logo" className="h-10 w-auto object-contain dark:brightness-0 dark:invert" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={location === link.href ? 'secondary' : 'ghost'}
                  size="sm"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+919876543210" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2" data-testid="button-call">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">+91 98765 43210</span>
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Link href="/admissions" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-primary to-accent" data-testid="button-apply-now">
                Apply Now
              </Button>
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                      <Button
                        variant={location === link.href ? 'secondary' : 'ghost'}
                        className="w-full justify-start text-lg"
                        data-testid={`link-mobile-${link.label.toLowerCase().replace(' ', '-')}`}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Link href="/admissions" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent" data-testid="button-mobile-apply">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
