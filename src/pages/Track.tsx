import { MapPin, Check, ChefHat, Bike, Home as HomeIcon, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Track = () => {
    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col relative pb-8 pt-16">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
                <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <MapPin className="text-primary w-6 h-6" fill="currentColor" />
                    <span className="font-h3 text-h3 text-primary tracking-tight">AfroBite</span>
                </Link>
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label-bold text-primary">A</div>
            </header>

            <main className="flex-grow flex flex-col relative z-10 w-full max-w-screen-md mx-auto">
                <div className="relative w-full h-[40vh] bg-surface-container-highest overflow-hidden z-0 shadow-sm">
                    <img alt="Map Route" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                            <Bike className="text-primary w-6 h-6" />
                        </div>
                    </div>
                    <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-surface-container-lowest">
                            <HomeIcon className="text-on-primary w-5 h-5" fill="currentColor" />
                        </div>
                    </div>
                </div>

                <div className="bg-surface-container-lowest flex-grow -mt-6 rounded-t-3xl shadow-sm z-20 px-container-padding py-stack-lg relative flex flex-col gap-stack-lg">
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-surface-variant rounded-full"></div>
                    
                    <div className="text-center">
                        <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wide mb-unit">Estimated Arrival</p>
                        <h1 className="font-h1 text-h1 text-on-surface">20 - 25 Min</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Arriving at 19:45</p>
                    </div>

                    <div className="bg-surface p-stack-md rounded-xl border border-surface-container-high shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center z-10">
                                    <Check className="text-on-secondary-container w-4 h-4" />
                                </div>
                                <div className="w-0.5 h-12 bg-secondary-container -my-1 z-0"></div>
                            </div>
                            <div className="pb-6 pt-1">
                                <h3 className="font-label-bold text-label-bold text-on-surface">Order Received</h3>
                                <p className="font-label-sm text-label-sm text-on-surface-variant">We have received your order.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center z-10">
                                    <ChefHat className="text-on-secondary-container w-4 h-4" />
                                </div>
                                <div className="w-0.5 h-12 bg-secondary-container -my-1 z-0"></div>
                            </div>
                            <div className="pb-6 pt-1">
                                <h3 className="font-label-bold text-label-bold text-on-surface">Preparing</h3>
                                <p className="font-label-sm text-label-sm text-on-surface-variant">The kitchen is preparing your food.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
                                    <Bike className="text-on-primary w-4 h-4" />
                                </div>
                                <div className="w-0.5 h-12 bg-surface-variant -my-1 z-0"></div>
                            </div>
                            <div className="pb-6 pt-1">
                                <h3 className="font-label-bold text-label-bold text-primary">Out for Delivery</h3>
                                <p className="font-label-sm text-label-sm text-on-surface-variant">Your rider is on the way.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center z-10 border border-outline-variant">
                                    <HomeIcon className="text-on-surface-variant w-4 h-4" />
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="font-label-bold text-label-bold text-on-surface-variant">Arrived</h3>
                                <p className="font-label-sm text-label-sm text-on-surface-variant">Enjoy your meal!</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-surface-container-lowest shadow-sm bg-surface-variant flex items-center justify-center font-h3 text-on-surface text-xl">
                                K
                            </div>
                            <div>
                                <h3 className="font-h3 text-[20px] leading-tight text-on-surface">Kwame</h3>
                                <div className="flex items-center gap-1 mt-1 text-tertiary-container">
                                    <Star className="w-4 h-4" fill="currentColor" />
                                    <span className="font-label-bold text-label-bold text-on-surface-variant">4.9</span>
                                    <span className="font-label-sm text-label-sm text-on-surface-variant">(120+ deliveries)</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                            <Phone className="w-5 h-5" fill="currentColor" />
                        </button>
                    </div>

                    <div className="mt-stack-sm text-center">
                        <p className="font-body-md text-body-md text-on-surface-variant">Order #AB-9824 • Jollof Express</p>
                    </div>
                </div>
            </main>
        </div>
    );
};
