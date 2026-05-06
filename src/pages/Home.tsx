import { Link } from 'react-router-dom';
import { Store, ShoppingBasket, Truck, Locate } from 'lucide-react';

export const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-container-padding pb-section-gap">
            <section className="mt-stack-lg mb-section-gap">
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex items-center justify-center bg-inverse-surface">
                    <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                    <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                        <h1 className="font-h1 text-h1 text-on-primary mb-stack-md">Taste the Rich Heritage of Africa.</h1>
                        <p className="font-body-lg text-body-lg text-surface-container-lowest mb-stack-lg opacity-90">Premium African groceries and authentic restaurant meals delivered straight to your door in minutes.</p>
                        
                        <div className="bg-surface-container-lowest p-2 rounded-xl flex items-center shadow-lg max-w-md mx-auto transform transition-transform focus-within:scale-[1.02]">
                            <Locate className="text-primary ml-2 mr-2 w-6 h-6" />
                            <input type="text" className="flex-grow bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface placeholder-on-surface-variant outline-none py-3" placeholder="Enter your UK postcode, e.g. SW1A" />
                            <Link to="/nearby" className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary-container transition-colors shadow-sm">Find Food</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-section-gap">
                <h2 className="font-h2 text-h2 text-on-surface mb-stack-md">Explore by Cuisine</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                    {[
                        { title: 'Nigerian', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
                        { title: 'Ethiopian', img: 'https://images.unsplash.com/photo-1634586450650-8446daaeabdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
                        { title: 'Caribbean', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
                    ].map(cuisine => (
                        <div key={cuisine.title} className="group cursor-pointer relative h-48 rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${cuisine.img}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-stack-sm w-full">
                                <div className="bg-surface-container-lowest/90 backdrop-blur-sm inline-block px-3 py-1 rounded-full mb-1">
                                    <span className="font-label-bold text-label-bold text-secondary">{cuisine.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <Link to="/search" className="group cursor-pointer relative h-48 rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container bg-primary-container flex items-center justify-center text-center p-4">
                        <div>
                            <Store className="text-on-primary w-10 h-10 mb-2 mx-auto" />
                            <h3 className="font-h3 text-h3 text-on-primary">View All<br />Cuisines</h3>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="mb-section-gap bg-surface-container-low rounded-xl p-stack-lg border border-surface-container">
                <div className="text-center mb-stack-lg">
                    <h2 className="font-h2 text-h2 text-on-surface">How AfroBite Works</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2">Premium flavors delivered with modern efficiency.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
                    <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 bg-primary-fixed rounded-xl flex items-center justify-center mb-stack-md shadow-sm">
                            <Store className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="font-h3 text-h3 text-on-surface mb-2">Discover Local Gems</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Browse curated menus from the finest African grocers and restaurants in your area.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 bg-primary-fixed rounded-xl flex items-center justify-center mb-stack-md shadow-sm">
                            <ShoppingBasket className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="font-h3 text-h3 text-on-surface mb-2">Select Your Feast</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Choose from fresh ingredients or hot meals, prepared with authentic heritage recipes.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 bg-primary-fixed rounded-xl flex items-center justify-center mb-stack-md shadow-sm">
                            <Truck className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="font-h3 text-h3 text-on-surface mb-2">Fast Delivery</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Track your order in real-time as it arrives at your doorstep, fresh and ready to enjoy.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
