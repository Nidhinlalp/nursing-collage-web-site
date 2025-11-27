import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

export default function WelcomeSection() {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section ref={ref} className="py-16 md:py-24 bg-background" data-testid="section-welcome">
            <div className="container mx-auto px-4">
                <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="text-welcome-title">
                        Welcome to Excellence
                    </h2>

                    <div className="relative p-8 md:p-12 bg-muted/30 rounded-2xl border border-border">
                        <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-6 relative z-10">
                            "IET College of Nursing is a center of excellence committed to shaping future guardians of health and healing. Nursing is not just a career; it is a calling of compassion and courage, where knowledge meets kindness and care becomes a sacred duty."
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <div className="text-left">
                                <div className="font-bold text-foreground">Dr. Vilasini. C, PhD(Nursing)</div>
                                <div className="text-sm text-primary">Principal, IETNC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
