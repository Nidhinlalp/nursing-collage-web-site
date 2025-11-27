import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldAlert, BookOpen, Clock, Shirt, Gavel } from 'lucide-react';

export default function Policies() {
    return (
        <main data-testid="page-policies">
            <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-red-900 to-red-700">
                <div className="relative z-10 text-center px-4">
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Rules & Regulations</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-policies-title">
                        College Policies
                    </h1>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Guidelines to ensure a disciplined and safe learning environment
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-16" data-testid="section-policies-content">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Anti-Ragging - High Priority */}
                    <Card className="mb-8 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <ShieldAlert className="h-8 w-8 text-red-600 dark:text-red-400" />
                                <div>
                                    <CardTitle className="text-red-700 dark:text-red-400">Zero Tolerance to Ragging</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="font-semibold text-red-800 dark:text-red-300">
                                Ragging is strictly prohibited in the college campus and hostel. It is a criminal offense as per the Supreme Court verdict.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                <li>Any student found guilty of ragging will be suspended or expelled immediately.</li>
                                <li>An FIR will be lodged with the local police.</li>
                                <li>Students must sign an anti-ragging undertaking at the time of admission.</li>
                                <li>Anti-Ragging Committee monitors the campus 24/7.</li>
                            </ul>
                            <div className="pt-4">
                                <p className="text-sm font-bold">Helpline: 1800-180-5522 (24x7 Toll Free)</p>
                                <p className="text-sm">Email: helpline@antiragging.in</p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Gavel className="h-5 w-5 text-primary" /> Code of Conduct
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="discipline">
                                        <AccordionTrigger>General Discipline</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                <li>Students must maintain high standards of discipline and etiquette.</li>
                                                <li>Respect towards faculty, staff, and fellow students is mandatory.</li>
                                                <li>Use of mobile phones is restricted in classrooms and clinical areas.</li>
                                                <li>Damaging college property will result in fines and disciplinary action.</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="id-cards">
                                        <AccordionTrigger>Identity Cards</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-sm text-muted-foreground">
                                                Students must wear their identity cards at all times within the campus and hospital premises. Loss of ID card must be reported immediately.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" /> Attendance Policy
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <Badge variant="outline" className="mt-0.5">Theory</Badge>
                                        <span>Minimum 80% attendance is required in theory classes to appear for university examinations.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Badge variant="outline" className="mt-0.5">Practical</Badge>
                                        <span>100% attendance is mandatory for clinical/practical hours. Missed hours must be compensated.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Badge variant="outline" className="mt-0.5">Leave</Badge>
                                        <span>Leave will only be granted for valid medical reasons or emergencies with prior permission from the Principal.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shirt className="h-5 w-5 text-primary" /> Uniform Code
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Students must wear the prescribed uniform which should be clean and ironed.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted rounded-lg">
                                        <h4 className="font-semibold mb-2">Female Students</h4>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            <li>Prescribed Churidar/Saree</li>
                                            <li>White Apron (Clinical)</li>
                                            <li>Black polished shoes</li>
                                            <li>Hair neatly tied up</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-muted rounded-lg">
                                        <h4 className="font-semibold mb-2">Male Students</h4>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            <li>Formal Shirt & Trousers</li>
                                            <li>White Apron (Clinical)</li>
                                            <li>Black formal shoes</li>
                                            <li>Clean shaven/Trimmed beard</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>
        </main>
    );
}
