import { Edit, ChevronRight, LogOut, CreditCard, Bell, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppState } from '../context/AppState';

export const Profile = () => {
    const { user, orders, logout } = useAppState();
    return (
        <div className="max-w-[1200px] mx-auto px-container-padding py-stack-lg flex flex-col gap-section-gap pb-24 md:pb-0">
            <section className="flex flex-col items-center justify-center gap-stack-md bg-surface-container-lowest p-stack-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-surface-variant border-4 border-white shadow-sm flex items-center justify-center text-4xl text-primary font-serif">
                   A
                </div>
                <div className="text-center">
                    <h2 className="font-h2 text-h2 text-on-surface">{user?.fullName ?? 'Guest User'}</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">{user?.email ?? 'Please sign in'}</p>
                </div>
                <button className="bg-surface-variant text-primary font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 flex items-center gap-2">
                    <Edit className="w-4 h-4" /> Edit Profile
                </button>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <section className="md:col-span-8 flex flex-col gap-stack-md">
                    <h3 className="font-h3 text-h3 text-on-surface">Past Orders</h3>
                    <div className="flex flex-col gap-stack-sm">
                        {orders.map((order) => (
                        <div key={order.id} className="bg-surface-container-lowest p-container-padding rounded-xl shadow-sm border border-surface-variant flex flex-col sm:flex-row gap-gutter justify-between items-start sm:items-center">
                            <div className="flex gap-gutter items-center">
                                <div className="w-16 h-16 rounded-lg bg-surface-variant overflow-hidden flex-shrink-0">
                                    <img alt="Lagos Spice Kitchen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&q=80" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-label-bold text-label-bold text-on-surface">Order #{order.id.slice(0, 8)}</h4>
                                    <p className="font-label-sm text-label-sm text-on-surface-variant">{new Date(order.createdAt).toLocaleString()}</p>
                                    <p className="font-body-md text-body-md text-on-surface mt-1">{order.status}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                                <span className="font-label-bold text-label-bold text-on-surface">£{order.total.toFixed(2)}</span>
                                <button className="w-full sm:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-4 py-2 rounded-lg hover:bg-primary-container transition-colors active:scale-95 shadow-sm">
                                    Reorder
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>

                <section className="md:col-span-4 flex flex-col gap-stack-md">
                    <h3 className="font-h3 text-h3 text-on-surface">Account Settings</h3>
                    <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant overflow-hidden">
                        {[
                            { icon: CreditCard, label: 'Payment Methods' },
                            { icon: MapPin, label: 'Saved Addresses' },
                            { icon: Bell, label: 'Notifications' },
                        ].map((item, i, arr) => (
                            <div key={item.label} className={`flex items-center gap-gutter p-container-padding hover:bg-surface-container-low transition-colors cursor-pointer group ${i < arr.length - 1 ? 'border-b border-surface-variant' : ''}`}>
                                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span className="font-body-lg text-body-lg text-on-surface flex-grow">{item.label}</span>
                                <ChevronRight className="text-on-surface-variant w-5 h-5" />
                            </div>
                        ))}
                    </div>
                    <Link onClick={logout} to="/login" className="mt-stack-sm flex items-center justify-center gap-2 p-container-padding rounded-xl border border-error text-error hover:bg-error-container transition-colors active:scale-95 font-label-bold text-label-bold">
                        <LogOut className="w-5 h-5" /> Log Out
                    </Link>
                </section>
            </div>
        </div>
    );
};
