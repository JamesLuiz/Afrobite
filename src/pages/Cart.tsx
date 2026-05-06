import { ArrowLeft, Minus, Plus, PlusCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = () => {
    return (
        <div className="bg-background text-on-background font-body-md min-h-screen pb-24 md:pb-0 pt-16">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest border-b border-surface-variant shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                    <Link to="/restaurant" className="hover:opacity-80 transition-opacity">
                        <ArrowLeft className="text-primary w-6 h-6" />
                    </Link>
                    <h1 className="text-primary font-serif font-black text-2xl">AfroBite</h1>
                </div>
                <h2 className="font-h3 text-lg tracking-tight text-on-surface">Your Cart</h2>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                    A
                </div>
            </header>

            <main className="max-w-screen-md mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg">
                <section className="flex flex-col gap-stack-md">
                    <div className="flex items-center gap-gutter bg-surface-container-lowest p-unit rounded-lg shadow-sm border border-outline-variant/20">
                        <div className="w-24 h-24 rounded bg-surface-variant flex-shrink-0 overflow-hidden">
                            <img alt="Jollof" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="font-h3 text-h3 text-on-surface">Jollof Rice & Chicken</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">Includes fried plantains</p>
                            <p className="font-label-bold text-label-bold text-primary">£14.50</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center bg-surface-container-high rounded-full overflow-hidden border border-outline-variant">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant"><Minus className="w-4 h-4" /></button>
                                <span className="font-label-bold text-label-bold w-6 text-center">2</span>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant"><Plus className="w-4 h-4" /></button>
                            </div>
                            <button className="font-label-sm text-label-sm text-error hover:underline">Remove</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-gutter bg-surface-container-lowest p-unit rounded-lg shadow-sm border border-outline-variant/20">
                        <div className="w-24 h-24 rounded bg-surface-variant flex-shrink-0 overflow-hidden">
                            <img alt="Suya" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&q=80" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="font-h3 text-h3 text-on-surface">Beef Suya Skewers</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">Spicy peanut rub</p>
                            <p className="font-label-bold text-label-bold text-primary">£8.00</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center bg-surface-container-high rounded-full overflow-hidden border border-outline-variant">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant"><Minus className="w-4 h-4" /></button>
                                <span className="font-label-bold text-label-bold w-6 text-center">1</span>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant"><Plus className="w-4 h-4" /></button>
                            </div>
                            <button className="font-label-sm text-label-sm text-error hover:underline">Remove</button>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 font-label-bold text-label-bold text-secondary border border-secondary rounded-lg py-3 hover:bg-secondary-container transition-colors mt-stack-sm">
                        <PlusCircle className="w-5 h-5" /> Add more items
                    </button>
                </section>

                <section className="bg-surface-container-lowest p-container-padding rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/20 flex flex-col gap-stack-md">
                    <h2 className="font-h2 text-h2 text-on-surface border-b border-surface-variant pb-2">Order Summary</h2>
                    <div className="flex flex-col gap-stack-sm">
                        <div className="flex justify-between items-center font-body-md text-body-md text-on-surface">
                            <span>Subtotal</span><span>£37.00</span>
                        </div>
                        <div className="flex justify-between items-center font-body-md text-body-md text-on-surface">
                            <span>Delivery Fee</span><span>£2.99</span>
                        </div>
                        <div className="flex justify-between items-center font-body-md text-body-md text-on-surface">
                            <span>Service Fee</span><span>£1.50</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center font-h3 text-h3 text-on-surface border-t border-surface-variant pt-stack-sm mt-stack-sm">
                        <span>Total</span><span className="text-primary">£41.49</span>
                    </div>
                    <Link to="/checkout" className="w-full bg-primary text-on-primary font-label-bold text-label-bold py-4 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-stack-md">
                        Go to Checkout <ArrowRight className="w-5 h-5" />
                    </Link>
                </section>
            </main>
        </div>
    );
};
