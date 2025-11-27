import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, GraduationCap, User } from 'lucide-react';
import principalImage from '/dr-vilasini.png';

const leadership = [
    { name: 'Dr. Vilasini. C', designation: 'Principal', qualification: 'PhD (Nursing)', image: principalImage },
    { name: 'Prof. Anitha', designation: 'Vice Principal', qualification: 'M.Sc Nursing', image: principalImage },
];

const teachingFaculty = [
    { name: 'Mrs. Deepa K', designation: 'Professor', dept: 'Medical Surgical Nursing' },
    { name: 'Mrs. Smitha P', designation: 'Associate Professor', dept: 'Community Health Nursing' },
    { name: 'Mr. Rajesh M', designation: 'Assistant Professor', dept: 'Mental Health Nursing' },
    { name: 'Mrs. Sajitha R', designation: 'Assistant Professor', dept: 'Child Health Nursing' },
    { name: 'Ms. Reshma T', designation: 'Lecturer', dept: 'OBG Nursing' },
    { name: 'Ms. Karthika S', designation: 'Lecturer', dept: 'Nursing Foundations' },
    { name: 'Mrs. Bindu V', designation: 'Tutor', dept: 'Clinical Instructor' },
    { name: 'Ms. Arya K', designation: 'Tutor', dept: 'Clinical Instructor' },
    { name: 'Ms. Sruthi M', designation: 'Tutor', dept: 'Clinical Instructor' },
    { name: 'Ms. Keerthi P', designation: 'Tutor', dept: 'Clinical Instructor' },
];

const nonTeachingStaff = [
    { name: 'Mr. Suresh K', designation: 'Administrative Officer' },
    { name: 'Mrs. Leela M', designation: 'Librarian' },
    { name: 'Mr. Ravi P', designation: 'Office Superintendent' },
    { name: 'Mrs. Mini S', designation: 'Accountant' },
    { name: 'Mr. Babu T', designation: 'Clerk' },
    { name: 'Mrs. Shyla K', designation: 'Lab Assistant' },
];

export default function Faculty() {
    return (
        <main data-testid="page-faculty">
            <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-accent">
                <div className="relative z-10 text-center px-4">
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Our Team</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-faculty-title">
                        Faculty & Staff
                    </h1>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Dedicated professionals committed to excellence in nursing education
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-16" data-testid="section-faculty-list">
                <div className="container mx-auto px-4">

                    {/* Leadership Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-center mb-8">College Leadership</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {leadership.map((leader, idx) => (
                                <Card key={idx} className="text-center hover-elevate border-primary/20">
                                    <CardContent className="pt-6">
                                        <Avatar className="h-32 w-32 mx-auto mb-4 ring-4 ring-primary/10">
                                            <AvatarImage src={leader.image} alt={leader.name} />
                                            <AvatarFallback>{leader.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                                        <p className="font-semibold">{leader.designation}</p>
                                        <p className="text-sm text-muted-foreground">{leader.qualification}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <Tabs defaultValue="teaching" className="max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="teaching" className="gap-2">
                                <GraduationCap className="h-4 w-4" /> Teaching Faculty
                            </TabsTrigger>
                            <TabsTrigger value="non-teaching" className="gap-2">
                                <Users className="h-4 w-4" /> Non-Teaching Staff
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="teaching">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {teachingFaculty.map((staff, idx) => (
                                    <Card key={idx} className="hover-elevate">
                                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                            <div className="p-2 rounded-full bg-primary/10">
                                                <User className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{staff.name}</h4>
                                                <Badge variant="outline" className="text-xs">{staff.designation}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">Dept: {staff.dept}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="non-teaching">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {nonTeachingStaff.map((staff, idx) => (
                                    <Card key={idx} className="hover-elevate">
                                        <CardHeader className="flex flex-row items-center gap-4">
                                            <div className="p-2 rounded-full bg-accent/10">
                                                <Users className="h-5 w-5 text-accent" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{staff.name}</h4>
                                                <p className="text-sm text-muted-foreground">{staff.designation}</p>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}
