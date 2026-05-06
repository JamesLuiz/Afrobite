import { Search as SearchIcon, SlidersHorizontal, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Search = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-container-padding pt-stack-md md:pt-stack-lg flex flex-col gap-stack-lg">
      <section className="flex flex-col gap-stack-sm">
        <h1 className="font-h1 text-h1 text-on-background">Discover African Flavors</h1>
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon className="text-on-surface-variant w-5 h-5" />
          </div>
          <input className="w-full h-14 pl-12 pr-4 bg-surface-container-low border border-outline-variant rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" placeholder="Search for jollof, injera, restaurants..." type="text" />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button className="bg-surface-container hover:bg-surface-container-high p-2 rounded-full transition-colors">
              <SlidersHorizontal className="text-on-surface-variant w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Popular Searches</h2>
        <div className="flex flex-wrap gap-unit">
          {['Nigerian Jollof', 'Ethiopian Injera', 'Suya Spice', 'Ghanaian Kelewele', 'South African Braai'].map((s) => (
            <button key={s} className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-bold text-label-sm hover:opacity-80 transition-opacity whitespace-nowrap">{s}</button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <div className="flex justify-between items-end">
          <h2 className="font-h2 text-h2 text-on-background">Exclusive Offers</h2>
          <button className="text-primary font-label-bold text-label-bold hover:underline">See All</button>
        </div>
        <div className="flex overflow-x-auto gap-gutter pb-4 snap-x hide-scrollbar">
          <div className="min-w-[280px] md:min-w-[320px] h-48 rounded-xl overflow-hidden relative shadow-[0px_4px_20px_rgba(0,0,0,0.05)] snap-start group cursor-pointer">
            <img alt="Promo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
              <span className="bg-primary text-on-primary font-label-bold text-label-sm px-2 py-1 rounded w-max mb-2 uppercase">20% Off</span>
              <h3 className="font-h3 text-h3 text-white leading-tight">Lagos Weekend Feast</h3>
              <p className="font-body-md text-body-md text-white/80 line-clamp-1">Valid until Sunday on orders over £30</p>
            </div>
          </div>
          <div className="min-w-[280px] md:min-w-[320px] h-48 rounded-xl overflow-hidden relative shadow-[0px_4px_20px_rgba(0,0,0,0.05)] snap-start group cursor-pointer">
            <img alt="Promo 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1634586450650-8446daaeabdb?w=600&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
              <span className="bg-secondary text-on-primary font-label-bold text-label-sm px-2 py-1 rounded w-max mb-2 uppercase">Free Delivery</span>
              <h3 className="font-h3 text-h3 text-white leading-tight">Taste of Addis</h3>
              <p className="font-body-md text-body-md text-white/80 line-clamp-1">First order from select Ethiopian spots</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm mb-section-gap">
        <h2 className="font-h2 text-h2 text-on-background">New on AfroBite</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link to="/restaurant" className="md:col-span-2 rounded-xl overflow-hidden relative shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group cursor-pointer h-64 md:h-auto">
            <img alt="Highlight" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-bold text-label-sm text-white uppercase tracking-wider">Open Now</span>
              </div>
              <h3 className="font-h2 text-h2 text-white">The Suya Spot Premium</h3>
              <p className="font-body-md text-body-md text-white/80 mt-1 flex items-center gap-1">Authentic Nigerian BBQ • 4.8 <Star className="w-4 h-4 text-tertiary-fixed" fill="currentColor" /></p>
            </div>
          </Link>
          <div className="flex flex-col gap-gutter">
             <div className="rounded-xl overflow-hidden relative shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group cursor-pointer h-32 md:h-full flex-1">
               <img alt="Small 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                 <h3 className="font-h3 text-h3 text-white text-lg leading-tight">Safari Salads</h3>
                 <p className="font-body-md text-label-sm text-white/80 mt-1">Healthy Fusion</p>
               </div>
             </div>
             <div className="rounded-xl overflow-hidden relative shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group cursor-pointer h-32 md:h-full flex-1">
               <img alt="Small 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                 <h3 className="font-h3 text-h3 text-white text-lg leading-tight">Mama's Kitchen</h3>
                 <p className="font-body-md text-label-sm text-white/80 mt-1">Comfort Food</p>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
