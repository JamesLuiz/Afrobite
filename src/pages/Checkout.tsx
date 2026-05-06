import { ArrowLeft, Clock, MapPin, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout = () => {
    return (
        <div className="bg-background text-on-background font-body-md pt-[80px] pb-[100px] md:pb-[40px] px-container-padding min-h-screen">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest border-b border-surface-variant shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                    <Link to="/cart" className="hover:opacity-80 transition-opacity">
                        <ArrowLeft className="text-primary w-6 h-6" />
                    </Link>
                </div>
                <h1 className="text-primary font-serif font-black text-2xl">Checkout</h1>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                    A
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-stack-lg items-start mt-6">
                <div className="w-full md:w-2/3 flex flex-col gap-stack-lg">
                    <div className="flex items-center justify-between w-full px-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-bold">1</div>
                            <span className="font-label-sm text-on-surface-variant mt-2 text-center">Delivery</span>
                        </div>
                        <div className="flex-1 h-px bg-surface-container-highest mx-4 mt-[-20px]"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-bold">2</div>
                            <span className="font-label-sm text-on-surface-variant mt-2 text-center">Payment</span>
                        </div>
                        <div className="flex-1 h-px bg-surface-container-highest mx-4 mt-[-20px]"></div>
                        <div className="flex flex-col items-center opacity-50">
                            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label-bold">3</div>
                            <span className="font-label-sm text-on-surface-variant mt-2 text-center">Review</span>
                        </div>
                    </div>

                    <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-highest flex flex-col gap-stack-md">
                        <h2 className="font-h3 text-h3 text-on-background">Delivery Details</h2>
                        <div className="w-full h-[150px] bg-surface-dim rounded-lg overflow-hidden relative mb-2 border border-surface-container-highest">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')" }}></div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-surface-container-lowest/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                                <Clock className="text-primary w-4 h-4" />
                                <span className="font-label-bold text-on-background">Est. 30-45 mins</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-label-bold text-on-surface-variant">Delivery Address</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant w-5 h-5" />
                                    <input type="text" className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-surface-container-highest rounded-lg font-body-md text-on-background outline-none focus:border-primary" defaultValue="123 Brick Lane, Spitalfields" />
                                </div>
                                <div className="w-full md:w-1/3 relative">
                                    <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-surface-container-highest rounded-lg font-body-md text-on-background outline-none focus:border-primary" defaultValue="E1 6AN" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-label-bold text-on-surface-variant">Delivery Instructions (Optional)</label>
                            <textarea className="w-full px-4 py-3 bg-surface-container-low border border-surface-container-highest rounded-lg font-body-md text-on-background outline-none focus:border-primary resize-none h-[80px]" placeholder="e.g. Leave at reception"></textarea>
                        </div>
                    </section>

                    <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-highest flex flex-col gap-stack-md">
                        <h2 className="font-h3 text-h3 text-on-background">Payment Method</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <label className="relative flex flex-col p-4 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer transition-colors">
                                <input type="radio" name="payment" value="card" defaultChecked className="absolute right-4 top-4 text-primary accent-primary" />
                                <CreditCard className="text-primary mb-2 w-6 h-6" />
                                <span className="font-label-bold text-on-background">Card</span>
                                <span className="font-label-sm text-on-surface-variant mt-1">**** 4242</span>
                            </label>
                            
                            <label className="relative flex flex-col p-4 border border-surface-container-highest rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                                <input type="radio" name="payment" value="applepay" className="absolute right-4 top-4 accent-primary" />
                                <Lock className="text-on-surface-variant mb-2 w-6 h-6" />
                                <span className="font-label-bold text-on-background">Apple Pay</span>
                            </label>
                            
                            <label className="relative flex flex-col p-4 border border-surface-container-highest rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                                <input type="radio" name="payment" value="paypal" className="absolute right-4 top-4 accent-primary" />
                                <CreditCard className="text-on-surface-variant mb-2 w-6 h-6" />
                                <span className="font-label-bold text-on-background">PayPal</span>
                            </label>
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            <div className="relative">
                                <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant w-5 h-5" />
                                <input type="text" className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-surface-container-highest rounded-lg font-body-md text-on-background outline-none focus:border-primary" placeholder="Card Number" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-surface-container-highest rounded-lg font-body-md text-on-background outline-none focus:border-primary" placeholder="MM/YY" />
                                <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-surface-container-highest rounded-lg font-body-md text-on-background outline-none focus:border-primary" placeholder="CVC" />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="w-full md:w-1/3 flex flex-col gap-stack-lg md:sticky md:top-[100px]">
                    <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-highest flex flex-col gap-stack-md">
                        <h2 className="font-h3 text-h3 text-on-background border-b border-surface-container-highest pb-4">Order Summary</h2>
                        <div className="flex flex-col gap-4 py-2">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-md overflow-hidden bg-surface-variant">
                                        <img alt="Jollof" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=100&q=80" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-label-bold text-on-background">Classic Jollof Meal</span>
                                        <span className="font-label-sm text-on-surface-variant">x1 • Medium Spice</span>
                                    </div>
                                </div>
                                <span className="font-label-bold text-on-background">£14.50</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-md overflow-hidden bg-surface-variant">
                                        <img alt="Suya" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&q=80" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-label-bold text-on-background">Beef Suya Skewers</span>
                                        <span className="font-label-sm text-on-surface-variant">x2 • Extra Onion</span>
                                    </div>
                                </div>
                                <span className="font-label-bold text-on-background">£12.00</span>
                            </div>
                        </div>
                        
                        <div className="h-px bg-surface-container-highest w-full my-2"></div>
                        
                        <div className="flex gap-2">
                            <input type="text" className="w-full px-4 py-2 bg-surface-container-low border border-surface-container-highest rounded-lg outline-none focus:border-primary" placeholder="Promo Code" />
                            <button className="px-4 py-2 border-2 border-secondary text-secondary font-label-bold rounded-lg hover:bg-secondary hover:text-white transition-colors">Apply</button>
                        </div>
                        
                        <div className="h-px bg-surface-container-highest w-full my-2"></div>

                        <div className="flex flex-col gap-2 font-body-md">
                            <div className="flex justify-between text-on-surface-variant"><span>Subtotal</span><span>£26.50</span></div>
                            <div className="flex justify-between text-on-surface-variant"><span>Delivery Fee</span><span>£2.50</span></div>
                            <div className="flex justify-between text-on-surface-variant"><span>Service Fee</span><span>£1.00</span></div>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-surface-container-highest">
                                <span className="font-h3 text-h3 text-on-background">Total</span>
                                <span className="font-h3 text-h3 text-primary">£30.00</span>
                            </div>
                        </div>

                        <Link to="/track" className="w-full mt-6 bg-primary text-on-primary font-label-bold py-4 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2">
                            <Lock className="w-5 h-5" /> Place Order • £30.00
                        </Link>
                        <p className="font-label-sm text-center text-on-surface-variant mt-2">By placing this order, you agree to our Terms & Conditions.</p>
                    </section>
                </div>
            </main>
        </div>
    );
};
