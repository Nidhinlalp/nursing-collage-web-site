import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, FileCheck, Book } from 'lucide-react';

const downloads = [
    {
        category: 'Admissions',
        items: [
            { title: 'Application Form 2025-26', size: '1.2 MB', type: 'PDF', icon: FileText },
            { title: 'College Prospectus', size: '4.5 MB', type: 'PDF', icon: Book },
            { title: 'Fee Structure Breakdown', size: '0.8 MB', type: 'PDF', icon: FileText },
        ]
    },
    {
        category: 'Academic',
        items: [
            { title: 'B.Sc Nursing Syllabus (INC)', size: '2.4 MB', type: 'PDF', icon: Book },
            { title: 'Academic Calendar 2025', size: '0.5 MB', type: 'PDF', icon: FileText },
            { title: 'Exam Guidelines', size: '0.6 MB', type: 'PDF', icon: FileText },
        ]
    },
    {
        category: 'Legal & Compliance',
        items: [
            { title: 'Anti-Ragging Affidavit', size: '0.4 MB', type: 'PDF', icon: FileCheck },
            { title: 'Code of Conduct', size: '0.7 MB', type: 'PDF', icon: FileText },
            { title: 'Hostel Rules & Regulations', size: '0.5 MB', type: 'PDF', icon: FileText },
        ]
    }
];

export default function Downloads() {
    return (
        <main data-testid="page-downloads">
            <section className="relative h-[250px] flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900">
                <div className="relative z-10 text-center px-4">
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Resources</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-downloads-title">
                        Downloads
                    </h1>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Access important documents, forms, and academic resources
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-16" data-testid="section-downloads-list">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid gap-8">
                        {downloads.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-2xl font-bold mb-6 border-b pb-2">{section.category}</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {section.items.map((item, iIdx) => {
                                        const Icon = item.icon;
                                        return (
                                            <Card key={iIdx} className="hover-elevate group cursor-pointer">
                                                <CardContent className="p-6 flex items-start gap-4">
                                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                                                        <Icon className="h-6 w-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold mb-1 line-clamp-1" title={item.title}>{item.title}</h3>
                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                                            <Badge variant="outline" className="text-[10px] h-5">{item.type}</Badge>
                                                            <span>{item.size}</span>
                                                        </div>
                                                        <Button variant="outline" size="sm" className="w-full h-8 text-xs gap-2">
                                                            <Download className="h-3 w-3" /> Download
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
