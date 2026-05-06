import { Star, MapPin, Search as SearchIcon, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppState } from '../context/AppState';

export const Nearby = () => {
  const { restaurants, loadRestaurants, selectRestaurant } = useAppState();
  const FILTERS = ['Cuisine', 'Rating', 'Delivery Time'];
  const [activeFilter, setActiveFilter] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    void loadRestaurants();
  }, []);

  const onSearch = (value: string) => {
    setQuery(value);
    void loadRestaurants(value);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-container-padding py-stack-md">
      <section className="mb-stack-lg">
        <div className="relative mb-stack-md">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input value={query} onChange={(e) => onSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-background placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" placeholder="Search for restaurants..." type="text" />
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
          {restaurants.map(r => (
            <Link key={r.id} onClick={() => void selectRestaurant(r.id)} to="/restaurant" className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant hover:shadow-lg transition-all group flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={r.img} />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-lowest font-label-bold text-label-sm rounded-md shadow-sm flex items-center gap-1 text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Open Now
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-on-primary">
                  <span className="font-label-bold text-label-sm px-2 py-1 rounded backdrop-blur-sm bg-primary/90">{r.eta}</span>
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
                  <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">{r.cuisines.join(' • ')}</p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-3 border-t border-surface-variant">
                  <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                    <Bike className="w-4 h-4" /> £{r.deliveryFee.toFixed(2)} delivery
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                    <MapPin className="w-4 h-4" /> {r.distance} away
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
