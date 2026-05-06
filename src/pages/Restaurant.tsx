import { Star, Clock, Truck, MapPin, ArrowLeft, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppState } from '../context/AppState';

export const Restaurant = () => {
    const { selectedRestaurant, menu, cart, addToCart } = useAppState();
    const CATEGORIES = ['Main Dishes', 'Sides & Extras', 'Drinks', 'Desserts'];
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    if (!selectedRestaurant) {
        return <div className="p-8">Select a restaurant from Nearby first.</div>;
    }

    return (
        <div className="max-w-[1200px] mx-auto w-full md:pt-16 pb-24">
            <header className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest/80 backdrop-blur-md">
                <Link to="/nearby" className="flex items-center text-on-surface hover:opacity-80 transition-opacity">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </header>

            <section className="relative w-full h-[300px] md:h-[400px] bg-surface-variant">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${selectedRestaurant.imageUrl}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-container-padding flex flex-col justify-end pb-12">
                    <div className="flex items-center gap-stack-sm mb-stack-sm">
                        <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-bold text-label-bold rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span> Open Now
                        </span>
                        <span className="px-3 py-1 bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary font-label-bold text-label-bold rounded-full flex items-center gap-1">
                            <Star className="w-4 h-4" fill="currentColor" /> {selectedRestaurant.rating}
                        </span>
                    </div>
                    <h1 className="font-h1 text-h1 text-on-primary mb-stack-sm leading-tight">{selectedRestaurant.name}</h1>
                    <p className="font-body-md text-body-md text-on-primary/90 max-w-2xl">{selectedRestaurant.description}</p>
                    <div className="mt-stack-md flex flex-wrap gap-stack-md text-on-primary/80 font-label-sm text-label-sm">
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedRestaurant.eta}</div>
                        <div className="flex items-center gap-1"><Truck className="w-4 h-4" /> £{selectedRestaurant.deliveryFee.toFixed(2)} Delivery</div>
                        <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedRestaurant.distance} away</div>
                    </div>
                </div>
            </section>

            <div className="px-4 md:px-container-padding -mt-8 relative z-20">
                <div className="bg-background/95 backdrop-blur-md py-stack-md px-4 rounded-xl shadow-sm border border-surface-variant flex overflow-x-auto hide-scrollbar gap-stack-sm">
                    {CATEGORIES.map((cat) => (
                        <button 
                            key={cat} 
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-label-bold text-label-bold whitespace-nowrap transition-all active:scale-95 ${activeCategory === cat ? 'bg-primary-container text-on-primary-container shadow-md font-bold' : 'bg-surface-container text-on-surface hover:bg-surface-variant'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <section className="py-section-gap">
                    <h2 className="font-h2 text-h2 text-on-background mb-stack-lg">{activeCategory}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                        {menu.map(dish => (
                            <Link to="/product" key={dish.id} className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col group border border-surface-variant/50 hover:shadow-lg transition-shadow duration-300">
                                <div className="h-48 w-full relative overflow-hidden bg-surface-variant">
                                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${dish.imageUrl}')` }}></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-on-background/60 to-transparent"></div>
                                    {dish.isPopular && <div className="absolute top-2 right-2 px-2 py-1 bg-surface-container-lowest/90 backdrop-blur-sm rounded text-on-background font-label-bold text-label-bold">Popular</div>}
                                    {dish.isSpicy && <div className="absolute top-2 right-2 px-2 py-1 bg-error-container/90 backdrop-blur-sm rounded text-on-error-container font-label-bold text-label-bold">Spicy</div>}
                                </div>
                                <div className="p-container-padding flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-stack-sm gap-2">
                                        <h3 className="font-h3 text-h3 text-on-background leading-tight">{dish.name}</h3>
                                        <span className="font-body-lg text-body-lg text-primary font-semibold shrink-0">£{dish.price.toFixed(2)}</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">{dish.description}</p>
                                    <button type="button" onClick={(e) => { e.preventDefault(); addToCart(dish, 1); }} className="w-full h-12 bg-surface-container text-primary-container font-label-bold text-label-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary transition-colors">
                                        <Plus className="w-5 h-5" /> Add to Order
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            <div className="fixed bottom-0 md:bottom-8 left-0 w-full px-4 md:px-0 md:flex md:justify-center z-40 bg-surface/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 md:py-0 border-t border-surface-variant md:border-none pointer-events-none">
                <Link to="/cart" className="w-full md:w-auto md:min-w-[300px] h-14 bg-primary-container text-on-primary rounded-xl shadow-[0px_8px_24px_rgba(198,79,0,0.25)] flex items-center justify-between px-6 pointer-events-auto hover:bg-primary transition-colors active:scale-95 duration-200">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-on-primary/20 flex items-center justify-center font-label-bold text-label-bold">{cart.length}</div>
                        <span className="font-label-bold text-label-bold text-[16px] text-white">View Cart</span>
                    </div>
                    <span className="font-label-bold text-label-bold text-[16px] text-white">£{cartTotal.toFixed(2)}</span>
                </Link>
            </div>
        </div>
    );
};
