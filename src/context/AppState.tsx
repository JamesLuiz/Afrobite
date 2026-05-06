import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { apiRequest } from '../lib/api';

type User = { id: string; email: string; fullName: string };
type Restaurant = {
  id: string;
  name: string;
  description: string;
  rating: number;
  deliveryFee: number;
  eta: string;
  distance: string;
  imageUrl: string;
  cuisines: string[];
};
type Product = {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isPopular?: boolean;
  isSpicy?: boolean;
};
type CartItem = { product: Product; quantity: number };
type Order = { id: string; total: number; status: string; createdAt: string };

type AppStateType = {
  token: string | null;
  user: User | null;
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  menu: Product[];
  cart: CartItem[];
  orders: Order[];
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loadRestaurants: (query?: string) => Promise<void>;
  selectRestaurant: (restaurantId: string) => Promise<void>;
  addToCart: (product: Product, quantity: number) => void;
  updateQty: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  checkout: (deliveryAddress: string, notes?: string) => Promise<string>;
  cartSubtotal: number;
};

const AppStateContext = createContext<AppStateType | null>(null);
const STORAGE_KEY = 'afrobite_token';

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem(STORAGE_KEY));
  const [user, setUser] = useState<User | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void loadRestaurants();
  }, []);

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }
    void apiRequest<User>('/users/me', { token })
      .then(setUser)
      .catch(() => logout());
  }, [token]);

  const persistToken = (nextToken: string | null) => {
    setToken(nextToken);
    if (nextToken) localStorage.setItem(STORAGE_KEY, nextToken);
    else localStorage.removeItem(STORAGE_KEY);
  };

  const loadRestaurants = async (query?: string) => {
    const list = await apiRequest<Restaurant[]>(
      query ? `/restaurants?q=${encodeURIComponent(query)}` : '/restaurants',
    );
    setRestaurants(list);
  };

  const selectRestaurant = async (restaurantId: string) => {
    const detail = await apiRequest<(Restaurant & { menu: Product[] }) | null>(
      `/restaurants/${restaurantId}`,
    );
    if (!detail) return;
    setSelectedRestaurant(detail);
    setMenu(detail.menu);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const result = await apiRequest<{ token: string; user: User }>('/auth/login', {
        method: 'POST',
        body: { email, password },
      });
      persistToken(result.token);
      setUser(result.user);
    } finally {
      setLoading(false);
    }
  };

  const register = async (fullName: string, email: string, password: string) => {
    setLoading(true);
    try {
      const result = await apiRequest<{ token: string; user: User }>('/auth/register', {
        method: 'POST',
        body: { fullName, email, password },
      });
      persistToken(result.token);
      setUser(result.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    persistToken(null);
    setUser(null);
    setOrders([]);
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [...current, { product, quantity }];
    });
  };

  const updateQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((current) =>
      current.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((item) => item.product.id !== productId));
  };

  const checkout = async (deliveryAddress: string, notes?: string) => {
    if (!token || !selectedRestaurant || cart.length === 0) {
      throw new Error('Missing checkout details');
    }
    const order = await apiRequest<Order>('/orders', {
      method: 'POST',
      token,
      body: {
        restaurantId: selectedRestaurant.id,
        deliveryAddress,
        notes,
        items: cart.map((item) => ({ productId: item.product.id, quantity: item.quantity })),
      },
    });
    setCart([]);
    const list = await apiRequest<Order[]>('/orders/me', { token });
    setOrders(list);
    return order.id;
  };

  const cartSubtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart],
  );

  const value: AppStateType = {
    token,
    user,
    restaurants,
    selectedRestaurant,
    menu,
    cart,
    orders,
    loading,
    login,
    register,
    logout,
    loadRestaurants,
    selectRestaurant,
    addToCart,
    updateQty,
    removeFromCart,
    checkout,
    cartSubtotal,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error('useAppState must be used inside AppStateProvider');
  return context;
}
