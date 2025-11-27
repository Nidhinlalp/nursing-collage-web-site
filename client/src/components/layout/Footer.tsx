import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];

const resources = [
  { href: '/downloads', label: 'Downloads' },
  { href: '/news', label: 'News & Events' },
  { href: '/policies', label: 'Policies' },
  { href: '/terms', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="section-footer">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="IETNC Logo" className="h-10 w-auto object-contain dark:brightness-0 dark:invert" />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              IET College of Nursing - Shaping the future of healthcare through excellence in nursing education.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <Button key={idx} variant="ghost" size="icon" className="h-9 w-9" data-testid={`button-social-${idx}`}>
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">IET College of Nursing, Malappuram - 676519</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+917902288866" className="text-muted-foreground hover:text-foreground">+91 7902288866</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:ietcollegeofnursing@gmail.com" className="text-muted-foreground hover:text-foreground">ietcollegeofnursing@gmail.com</a>
              </li>
            </ul>

            <h4 className="font-semibold text-foreground mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-9"
                data-testid="input-newsletter-email"
              />
              <Button size="icon" className="shrink-0" data-testid="button-newsletter-submit">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p data-testid="text-copyright">© 2025 IET College of Nursing. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/policies" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
