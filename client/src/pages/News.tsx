import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Bell, ArrowRight, Clock } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: 'Management Quota Admission 2025-26',
        date: 'Nov 20, 2025',
        category: 'Admissions',
        summary: 'Applications are invited for Management Quota seats for B.Sc Nursing. Last date to apply is 26/11/2025.',
        important: true,
    },
    {
        id: 2,
        title: 'University Exam Notification',
        date: 'Nov 15, 2025',
        category: 'Academics',
        summary: 'KHSU First Year B.Sc Nursing Regular Examinations will commence from December 10th.',
        important: false,
    },
    {
        id: 3,
        title: 'College Arts Fest "Sargam 2025"',
        date: 'Nov 10, 2025',
        category: 'Events',
        summary: 'Annual arts festival scheduled for next week. Students are requested to register for events.',
        important: false,
    },
    {
        id: 4,
        title: 'Anti-Ragging Awareness Week',
        date: 'Nov 05, 2025',
        category: 'Campus',
        summary: 'A week-long awareness program on anti-ragging policies and legal consequences.',
        important: false,
    },
    {
        id: 5,
        title: 'Guest Lecture on Mental Health',
        date: 'Oct 28, 2025',
        category: 'Academics',
        summary: 'Dr. Suresh Kumar from NIMHANS will deliver a lecture on "Modern Challenges in Mental Health Nursing".',
        important: false,
    },
];

export default function News() {
    return (
        <main data-testid="page-news">
            <section className="relative h-[250px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
                <div className="relative z-10 text-center px-4">
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Updates</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-news-title">
                        News & Events
                    </h1>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Stay updated with the latest happenings at IET College of Nursing
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-16" data-testid="section-news-list">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid gap-6">
                        {newsItems.map((item) => (
                            <Card key={item.id} className={`hover-elevate transition-all ${item.important ? 'border-l-4 border-l-red-500' : ''}`}>
                                <div className="flex flex-col md:flex-row gap-6 p-6">
                                    <div className="md:w-32 shrink-0 flex flex-col items-center justify-center bg-muted rounded-lg p-4 text-center">
                                        <Calendar className="h-6 w-6 text-primary mb-2" />
                                        <span className="text-sm font-bold block">{item.date.split(' ')[0]}</span>
                                        <span className="text-2xl font-bold text-primary">{item.date.split(' ')[1].replace(',', '')}</span>
                                        <span className="text-xs text-muted-foreground">{item.date.split(' ')[2]}</span>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <Badge variant={item.important ? "destructive" : "secondary"}>
                                                {item.category}
                                            </Badge>
                                            {item.important && (
                                                <Badge variant="outline" className="text-red-500 border-red-200 animate-pulse">
                                                    <Bell className="h-3 w-3 mr-1" /> Important
                                                </Badge>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold hover:text-primary cursor-pointer transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {item.summary}
                                        </p>

                                        <div className="pt-2">
                                            <Button variant="ghost" className="p-0 h-auto text-primary font-semibold group hover:underline">
                                                Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg">Load More News</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
