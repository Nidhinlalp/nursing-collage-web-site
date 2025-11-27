import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Target, Eye, Heart, Award, Building, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import campusImage from '@assets/generated_images/college_campus_aerial_view.png';
import principalImage from '/dr-vilasini.png';

const institutionalInfo = [
  { key: 'Affiliation', value: 'Kerala University of Health Sciences (KHSU), Thrissur' },
  { key: 'Recognition', value: 'Indian Nursing Council (INC) & Kerala Nurses and Midwives Council (KNMC)' },
  { key: 'Parent Institution', value: 'Ithis Medicity Institute of Higher Education & Research' },
  { key: 'Type', value: 'Private Nursing College (Government Approved)' },
  { key: 'Location', value: 'Malappuram, Kerala - A Healthcare Hub' },
];

const coreValues = [
  { name: 'Academic Excellence', desc: 'Commitment to highest educational standards' },
  { name: 'Compassion', desc: 'Caring for every patient and colleague' },
  { name: 'Integrity', desc: 'Ethical conduct in all endeavors' },
  { name: 'Responsibility', desc: 'Accountable to profession and society' },
  { name: 'Innovation', desc: 'Embracing modern healthcare practices' },
  { name: 'Holistic Development', desc: 'Nurturing personal and professional growth' },
];

export default function About() {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.1);

  return (
    <main data-testid="page-about">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${campusImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-about-title">
            About IET College of Nursing
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Dedicated to prepare skilled and compassionate nursing professionals with strong ethical values.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-college-desc">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Shaping Future Guardians of Health</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The IET College Of Nursing Is Dedicated To Prepare Skilled And Compassionate Nursing Professionals With Strong Ethical Values And Commitment To Excellence In Healthcare. The Institution Nurtures A Spirit Of Discipline, Responsibility, And Integrity, Empowering Students To Meet The Challenges Of The Ever-evolving Medical Field.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our College is Equipped With Modern Infrastructure, Advanced Teaching And Learning Facilities, And A Team Of Highly Qualified Faculty Members. The College Offers Comprehensive Undergraduate Nursing Programs Focused On Academic Excellence And Professional Competence.
            </p>
          </div>
        </div>
      </section>

      <section ref={missionRef} className="py-16 md:py-24 bg-muted/30" data-testid="section-mission-vision">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className={`hover-elevate ${missionVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-blue-700">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated to prepare skilled and compassionate nursing professionals with strong ethical values and commitment to excellence in healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className={`hover-elevate ${missionVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-teal-700">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To nurture excellence in nursing education, empowering students to lead healthcare transformation with integrity, compassion, and innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Heart className="h-6 w-6 text-red-500" />
              <h3 className="text-2xl font-semibold">Core Values</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {coreValues.map((value, idx) => (
                <Card key={idx} className="hover-elevate">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1">{value.name}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-principal-message">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-20"></div>
                  <Avatar className="h-48 w-48 mx-auto ring-4 ring-background shadow-xl">
                    <AvatarImage src={principalImage} alt="Dr. Vilasini. C" className="object-cover" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Dr. Vilasini. C</h3>
                  <p className="text-primary font-medium">Principal, PhD(Nursing)</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <Badge variant="secondary" className="mb-4">Principal's Message</Badge>
                <h2 className="text-3xl font-bold mb-6">Learning with heart, serving with soul.</h2>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/10" />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It Is With Immense Pride And Joy That I Welcome You To IET College Of Nursing, Malappuram - a Center Of Excellence Committed To Shaping The Future Guardians Of Health And Healing. Nursing Is Not Just A Career; It Is A Calling Of Compassion And Courage, Where Knowledge Meets Kindness And Care Becomes A Sacred Duty.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    At IET, We Inspire Our Students To Grow Into Skilled, Confident, And Value-oriented Professionals Who Can Serve Humanity With Dedication And Dignity. Our Institution Blends Academic Brilliance With Moral Strength, Modern Facilities With Personal Mentorship, And Scientific Learning With A Spiritual Touch Preparing Nurses Who Can Lead, Heal, And Transform Lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-institutional-info">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Overview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Institutional Information</h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {institutionalInfo.map((info, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="p-2 rounded-full bg-primary/10 shrink-0 w-fit">
                    {index === 0 && <Award className="h-5 w-5 text-primary" />}
                    {index === 1 && <Award className="h-5 w-5 text-primary" />}
                    {index === 2 && <Building className="h-5 w-5 text-primary" />}
                    {index === 3 && <Building className="h-5 w-5 text-primary" />}
                    {index === 4 && <Target className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground block">{info.key}</span>
                    <span className="font-medium text-foreground">{info.value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
