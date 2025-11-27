import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Terms() {
    return (
        <main data-testid="page-terms" className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-muted-foreground">Last updated: November 2025</p>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>1. Introduction</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            Welcome to the official website of IET College of Nursing. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
                        </p>
                        <p>
                            If you disagree with any part of these terms and conditions, please do not use our website.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>2. Intellectual Property Rights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            Unless otherwise stated, IET College of Nursing and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
                        </p>
                        <p>
                            You may view and/or print pages from https://ietnc.com for your own personal use subject to restrictions set in these terms and conditions.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>3. Restrictions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>You are specifically restricted from all of the following:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Publishing any website material in any other media without prior consent.</li>
                            <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
                            <li>Using this website in any way that is or may be damaging to this website.</li>
                            <li>Using this website in any way that impacts user access to this website.</li>
                            <li>Using this website contrary to applicable laws and regulations.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>4. Privacy Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            Your privacy is important to us. It is IET College of Nursing's policy to respect your privacy regarding any information we may collect from you across our website.
                        </p>
                        <p>
                            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>5. Disclaimer</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            The materials on IET College of Nursing's website are provided on an 'as is' basis. IET College of Nursing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                        <p>
                            Further, IET College of Nursing does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
