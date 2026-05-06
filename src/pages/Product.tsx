import { ArrowLeft, Star, Flame, Utensils, PlusCircle, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppState } from '../context/AppState';

export const Product = () => {
    const { menu, addToCart } = useAppState();
    const [qty, setQty] = useState(1);
    const product = menu[0];

    if (!product) {
        return <div className="p-8">Select a restaurant first.</div>;
    }
    
    return (
        <div className="bg-background text-on-background font-body-md text-body-md antialiased pb-32 min-h-screen">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest/80 backdrop-blur-sm">
                <Link to="/restaurant" className="text-on-surface hover:opacity-80 transition-opacity">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                    A
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto">
                <section className="relative w-full h-[350px] md:h-[450px]">
                    <img alt={product.name} className="w-full h-full object-cover" src={product.imageUrl} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </section>

                <section className="px-container-padding py-stack-lg md:px-12 bg-surface rounded-t-[32px] -mt-8 relative z-10 shadow-[0px_-4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-stack-md mb-stack-lg">
                        <div>
                            <h1 className="font-h1 text-h1 text-on-surface mb-stack-sm leading-tight">{product.name}</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance">
                                {product.description}
                            </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                            <span className="font-h2 text-h2 text-primary">£{product.price.toFixed(2)}</span>
                            <div className="flex items-center gap-unit mt-unit">
                                <Star className="text-secondary w-5 h-5" fill="currentColor" />
                                <span className="font-label-bold text-label-bold text-on-surface">4.9</span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">(128 reviews)</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-stack-lg border-t border-outline-variant/30 pt-stack-lg">
                        <div>
                            <h3 className="font-h3 text-h3 text-on-surface mb-stack-md flex items-center gap-unit">
                                <Flame className="text-primary w-5 h-5" /> Spice Level
                            </h3>
                            <div className="grid grid-cols-3 gap-gutter">
                                {['Mild', 'Medium', 'Hot'].map(spice => (
                                    <label key={spice} className="cursor-pointer group">
                                        <input type="radio" name="spice" value={spice.toLowerCase()} defaultChecked={spice === 'Mild'} className="peer sr-only" />
                                        <div className="border border-outline-variant rounded-lg p-stack-md text-center peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary transition-colors flex flex-col items-center">
                                            <span className="font-label-bold text-label-bold">{spice}</span>
                                            {spice === 'Hot' && <Flame className="w-4 h-4 text-error mt-1" />}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-h3 text-h3 text-on-surface mb-stack-md flex items-center gap-unit">
                                <Utensils className="text-secondary w-5 h-5" /> Portion Size
                            </h3>
                            <div className="flex flex-col gap-unit">
                                <label className="flex items-center justify-between p-stack-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                                    <div className="flex items-center gap-stack-md">
                                        <input type="radio" name="portion" value="regular" defaultChecked className="text-primary focus:ring-primary h-5 w-5 accent-primary" />
                                        <span className="font-body-md text-body-md text-on-surface">Regular</span>
                                    </div>
                                    <span className="font-body-md text-body-md text-on-surface-variant">Standard</span>
                                </label>
                                <label className="flex items-center justify-between p-stack-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                                    <div className="flex items-center gap-stack-md">
                                        <input type="radio" name="portion" value="large" className="text-primary focus:ring-primary h-5 w-5 accent-primary" />
                                        <span className="font-body-md text-body-md text-on-surface">Large Sharing Platter</span>
                                    </div>
                                    <span className="font-body-md text-body-md text-primary">+£6.00</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-h3 text-h3 text-on-surface mb-stack-md flex items-center gap-unit">
                                <PlusCircle className="text-secondary w-5 h-5" /> Extras
                            </h3>
                            <div className="flex flex-col gap-unit">
                                {[
                                    { id: 'extra', label: 'Extra Yaji Spice', price: '+£1.00' },
                                    { id: 'jollof', label: 'Side of Jollof Rice', price: '+£4.50' },
                                    { id: 'plantain', label: 'Fried Plantain', price: '+£3.00' },
                                ].map(addon => (
                                    <label key={addon.id} className="flex items-center justify-between p-stack-md bg-surface-container-low rounded-lg cursor-pointer border border-transparent hover:border-outline-variant">
                                        <div className="flex items-center gap-stack-md">
                                            <input type="checkbox" name="addons" value={addon.id} className="text-primary focus:ring-primary rounded h-5 w-5 accent-primary" />
                                            <span className="font-body-md text-body-md text-on-surface">{addon.label}</span>
                                        </div>
                                        <span className="font-body-md text-body-md text-on-surface-variant">{addon.price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </form>
                </section>
            </main>

            <div className="fixed bottom-0 md:bottom-6 left-0 w-full z-40 px-container-padding py-stack-md bg-surface border-t border-surface-variant md:bg-transparent md:border-none md:max-w-[1200px] md:left-1/2 md:-translate-x-1/2">
                <div className="bg-surface-container-highest max-w-2xl mx-auto rounded-xl shadow-[0px_8px_30px_rgba(0,0,0,0.1)] p-stack-sm flex items-center justify-between">
                    <div className="flex items-center gap-stack-md px-stack-md">
                        <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm hover:opacity-80">
                            <Minus className="w-5 h-5" />
                        </button>
                        <span className="font-h3 text-h3 text-on-surface w-8 text-center">{qty}</span>
                        <button type="button" onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm hover:opacity-80">
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                    <Link onClick={() => addToCart(product, qty)} to="/cart" className="bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold px-stack-lg py-stack-md rounded-lg flex items-center gap-unit transition-colors">
                        <ShoppingCart className="w-5 h-5" /> Add - £{(product.price * qty).toFixed(2)}
                    </Link>
                </div>
            </div>
        </div>
    );
};
