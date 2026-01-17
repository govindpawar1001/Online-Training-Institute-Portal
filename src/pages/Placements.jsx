import React from 'react';
import Button from '../components/Button';
import { Briefcase, Award, TrendingUp } from 'lucide-react';

const companies = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
    { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" },
    { name: "Barclays", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///8Aru8Ar+kArO8Aqu4AqO5dwfKm2vcAqugAqOcArOji8/wApu6HzvXq9v32/P7S7Pt8y/S94/nI6Prg8vx0yPTp9v1Zv/JOvPK14Pif1/fW7vsqtPA8uPGT0/YApuc6uOtawe5rxu9RvPJHu+wotOuK0PKg2PQAoe1pxfN64l0/AAAIOUlEQVR4nO2aCXObOhDHsSVhwAc2+MAH1ElzPL7/F3zSriQknDZt4pn0vf5/M5liCcRqtZdEkwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4C+f16qtF+LN4fbhmWX4tv1qOP4inb8VUUzx+tSB/EI+zx4yU8tWC/BmU1l9ejaXkZdxomJ9mA9V8/PzZdJ+2YVNw/7G+ccdytrsIKcUlXZ7O+veax6/H93Gzfclys0vT5dC5ot4TPbQ/pRcp5cQMeI+Q+DrN8yvNc555nVSmcZBxIQPU5BiPsDbdahM2bVT4QLsO+/a9kmJCCKnMWFsafxFp1dBSs1Vpr4QQ8jD00ltbfbE66C434GL/CV1YHowiCvKYrbnMjGTbb8aN8lcv3CQinn9SS9N4CZuOMnpgEWixU4KEl6QYSepSdNeNbPRaWdlfF3r1oF5pnznTgNIOqD6nDsMrBZHpN7MYR+M7hRG/zqk1dyt3oGVovreC56qihd9RrwqN1qqpbSc83YXvTE2PnCyP1Uyv/ETN3fREP5ZtT88KtwBn81M0rnerHzJPl/SwcAPeava3YZUU5LTPdP1sLh8pCU2f3ET0uwT58rmlRQkNpeRpy9CjSCe0ZGdaXnEKVaLsr/IgFXkGWU43lm1pHcL97skOXDjTMkkj9s6M2NoBU9V+XBeWI8+9eFyfq2d7fa231XXKhjL37/fToikGbp2cWPRonWvpJ1OGRjAjlQyBaregf8h2ZmPhrP8pFyFI+c5samVtRoa3JMvDeJTf5oH1MC2yzF7RD3dd2IjSBH69MfpJgzHIF4y0QVtlWqyZk0JZ1JUaT57bqXmcdoz+RHQ/GQ5bFr3VXG3p2eGpUfz/AIMi3qR44NtaHw05eoR2rsOp5OU/R41ecfRA7y/jYMwTpHmdkxjjEstoAdhQyF51B6WsZO299E6U2c91wsGFQ77celHdWvk+UpqPGYldY2vlQx/NyeeRQAw1jtEJmZqsyAcHK9gI65LaOqzpnck1l8nd2L6nk4zvC/KKWeowtWq/1sbdicFXDKfBmCh7cN6ZxTP0kEupUWlHumYLWkc3Gie7WM9xEV7dBOgPc/5FnXj7rFs5ESr02YZmSXkysGBj8zYOkN/t6PIg3kq5nFbHumJdUyQLPNXGppMcokxKtiO/32vz+qs6IT/uU11X6rf3oZFrZZDIIo6SxsjJSc4XMwsbQt5OLzYmjAoL1jUntSG/co43/uLbuIrRReDnoysxf08nvCNccfHEOXcW+b1eJTJ641JB1UKlRLPrqWRTaSD9TXpxM41Cr9f1fORWPP+gTNGBZ8E5WzZ3Of35xRg7tzqh4lmoybDUuoc1UcXTaiZei7J1WuBFvtlC2p1AEzUdrK5JCUFY7mwxFAbVmi1l5NQfJn/HTDgXU2y/dN1SrztP0z2vzYNjL6cOXzq1djmjbERTH6cXA2WpKM5oXQuOQZsggyVueaJaSBvgxZV398g/13d08kJ31UO1sW0o91mlrLzoXNb5dSK5OXMqv939oU662PES8j174zjW0FbhJijxxnLYNXyGl58XbVntJ+PmznFesTXrRRT9kqAE4dea09CKl881Hn/kO0s52u5QAOt4YBEZINey4maIVcPvuj1w+G3WPw8oOd9Ftu3MkovJfrhkOMy5cW3BXdENbgtCMeetGNuL0dKThQUDB53deGvhmHHQe6vrN2EX0X9PgSquts0dznYijAsUKyicuo0rHYcMpyEuUdnZTqR9lEvON6qrg4jLW7vTtoE9VCu/8+2ydc3V22e0wZjzxkJ7UBaWtOuc2qa53YKYODcs1cHpxIt+aQ+bahcIu/VZiL3cjvODoyPeOgRHMsYleeCmPw3HDtw3tqmBbuRmH6bQ06+K4rUaIktePhXZ6loU7vikj9aRopzJnGYfNnhCmI1rn1y3oR7oaOqN2oqah0BgrCw4BomzMckyDBEOtpV30sksvyYPxXMS+E7xWubFrCz8MVsTxgE+7urYTIJCi7MxPxJsi09k+1x8VHymEFbhK7PkKo692uLCqLOJMnUki16gIKbO77ZFfirLLN/vo0olOebPydlnx0koBx+Lrlj00c7HRYtTEAgbsoLOD6QZlvL0z9xtAX2O3se6TuK98ST2s4sYcvtMTOLTrk/w8q32h0vWUKjNE2xO64uwZQB5RTjMyW3k7bmTXVo6Z7MnuLbiVEsyim0nlLmJShB3fFIaw4r9KzphiDfK2u18D4Xw+KT4w5R6+nWck7My6ab+Blvap8tlyidqytQq7TiHBNuZqFhhRfDWfslVhFDycjFfNMiP7CF/3/dpYwvlSMA02AfyFnqYuB5bXmbr/bze0evjLwqfUsuodPPRlahkmG/1hEwMMDXL6GiMvIpkl1GlsAlK382QZs2IZC9OUcJ/pYmLjCo4xTvGNQ6nPiGV/ZCxS+7GdVzOZi9B704Kh/ni9WLWdr/QvxZxnX6kuFDRFxczP9/B9fjGTsp9+hGq5ecvw/j2LaP6Qww67c290tdKK+WH05qZ3B7hfZxqVM4W06ACL5vU0S9n1jT6g/7ZjOr0nr5PrpLOdKaND6V75YKQ4dSaj4RKpna1z8P4lsOorltPzMxPXpZDYA71slU0nkjvqREj9XNoKdnDfUdP1g19AHOlVrldn+/5P1325/uO5+hy/wGjuLPC/7usHkkrRXa/497/AauXIpu+vn/fX8b4uxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwF/EvQhJhG96+/Z4AAAAASUVORK5CYII=" },
    { name: "Zensar", logo: "data:image/png;base64,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" },
    { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/1280px-Cognizant_logo_2022.svg.png" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1280px-SAP_2011_logo.svg.png" },
];

const students = [
    {
        name: "Pranav",
        company: "LinkedIn",
        package: "6 LPA",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Mrunal",
        company: "Lowes",
        package: "18.76 LPA",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Sakshi",
        company: "Amazon",
        package: "13.2 LPA",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Prasad Dhobale",
        company: "Amadeus",
        package: "13 LPA",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Avinash",
        company: "Avaya",
        package: "12.5 LPA",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Pratik",
        company: "Avaya",
        package: "12.5 LPA",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
];

const Placements = () => {
    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* 1. HERO BANNER */}
            <div className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                        alt="Placement Success"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
                        PLACEMENTS
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl font-light">
                        Discover our successful placement records and partner companies.
                    </p>
                    <div className="w-16 h-1.5 bg-blue-500 mt-6 rounded-full"></div>
                </div>
            </div>

            {/* 2. OUR STUDENTS PLACED AT (Companies Grid) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        Our Students <span className="text-green-600">Placed AT</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow duration-300 h-24"
                        >
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="max-h-12 max-w-[80%] object-contain filter hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. STUDENT ACHIEVEMENTS (Success Cards) */}
            <div className="bg-white py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                            Student <span className="text-green-600">Achievements</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {students.map((student, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                            >
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 z-0"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-50 rounded-tr-full -ml-10 -mb-10 z-0"></div>

                                <div className="relative z-10">
                                    <div className="w-full flex justify-center mb-6">
                                        <div className="relative">
                                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <img
                                                    src={student.image}
                                                    alt={student.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-2 rounded-full shadow-md">
                                                <Award size={20} className="text-slate-900" />
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{student.name}</h3>
                                    <p className="text-gray-500 text-sm font-medium mb-4">PLACED AT: <span className="font-bold text-blue-600 text-base">{student.company}</span></p>

                                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl py-3 px-6 inline-block shadow-blue-200 shadow-lg">
                                        <div className="text-2xl font-bold">{student.package}</div>
                                        <div className="text-[10px] opacity-90 tracking-wider">ANNUAL PACKAGE</div>
                                    </div>

                                    {/* Footer info mimicking the screenshot 'Congrats' card style */}
                                    <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between text-xs text-gray-400">
                                        <span>Linkcode Student</span>
                                        <span>Verified Placement</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placements;
