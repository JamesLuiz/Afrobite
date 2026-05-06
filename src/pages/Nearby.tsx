import { Star, MapPin, Search as SearchIcon, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RESTAURANTS = [
  { id: 1, name: 'Mama Put Kitchen', rating: '4.8', tags: 'Authentic Nigerian • Jollof • Suya', time: '20-30 mins', delivery: '£2.49 delivery', distance: '1.2 miles away', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80', open: true },
  { id: 2, name: 'Lalibela Flavors', rating: '4.9', tags: 'Ethiopian • Injera • Vegan Friendly', time: '35-45 mins', delivery: '£1.99 delivery', distance: '2.5 miles away', img: 'https://images.unsplash.com/photo-1634586450650-8446daaeabdb?w=800&q=80', open: true },
  { id: 3, name: 'Accra Grill Spot', rating: '4.6', tags: 'Ghanaian • Grill • Street Food', time: 'Opens at 5PM', delivery: '£3.50 delivery', distance: '3.8 miles away', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', open: false }
];

export const Nearby = () => {
  const FILTERS = ['Cuisine', 'Rating', 'Delivery Time', 'Dietary', 'Price'];
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <div className="max-w-[1200px] mx-auto px-container-padding py-stack-md">
      <section className="mb-stack-lg">
        <div className="relative mb-stack-md">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-background placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" placeholder="Search for restaurants..." type="text" />
        </div>
        <div className="flex gap-unit overflow-x-auto pb-2 hide-scrollbar snap-x">
          {FILTERS.map((f) => (
            <button 
                key={f} 
                onClick={() => setActiveFilter(activeFilter === f ? '' : f)}
                className={`snap-start shrink-0 px-4 py-2 border rounded-full font-label-bold text-label-bold transition-all active:scale-95 shadow-sm ${activeFilter === f ? 'bg-primary-container text-on-primary-container border-primary font-bold' : 'bg-surface-container-lowest text-on-surface border-outline-variant hover:bg-surface-container-low'}`}
            >
                {f} {activeFilter === f && '↓'}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-h2 text-h2 text-on-background mb-stack-md">Nearby Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {RESTAURANTS.map(r => (
            <Link key={r.id} to="/restaurant" className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant hover:shadow-lg transition-all group flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={r.img} />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className={`px-2 py-1 bg-surface-container-lowest font-label-bold text-label-sm rounded-md shadow-sm flex items-center gap-1 ${r.open ? 'text-secondary' : 'text-on-surface-variant'}`}>
                    <span className={`w-2 h-2 rounded-full ${r.open ? 'bg-secondary' : 'bg-outline-variant'}`}></span> {r.open ? 'Open Now' : 'Closed'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-on-primary">
                  <span className={`font-label-bold text-label-sm px-2 py-1 rounded backdrop-blur-sm ${r.open ? 'bg-primary/90' : 'bg-surface-variant/90 text-on-surface-variant'}`}>{r.time}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-h3 text-h3 text-on-background leading-tight">{r.name}</h3>
                    <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-md">
                      <Star className="text-[16px] text-tertiary-container w-4 h-4" fill="currentColor" />
                      <span className="font-label-bold text-label-sm text-on-background">{r.rating}</span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">{r.tags}</p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-3 border-t border-surface-variant">
                  <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                    <Bike className="w-4 h-4" /> {r.delivery}
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                    <MapPin className="w-4 h-4" /> {r.distance}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
