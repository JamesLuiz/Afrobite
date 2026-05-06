import { Mail, Lock, EyeOff, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { useAppState } from '../context/AppState';

export const Login = () => {
    const navigate = useNavigate();
    const { login, register, loading } = useAppState();
    const [isLogin, setIsLogin] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('');
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await register(fullName, email, password);
            }
            navigate('/nearby');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Authentication failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-section-gap px-container-padding bg-background">
            <main className="w-full max-w-md mx-auto bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-highest overflow-hidden">
                <div className="pt-stack-lg pb-stack-md px-container-padding flex flex-col items-center text-center border-b border-surface-container-low">
                    <div className="w-20 h-20 rounded-DEFAULT mb-stack-sm bg-primary text-on-primary flex items-center justify-center font-serif text-3xl font-bold shadow-sm">
                        AB
                    </div>
                    <h1 className="font-h1 text-h1 text-primary">AfroBite</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-stack-sm text-balance">
                        {isLogin ? 'Welcome back. Please enter your details.' : 'Create an account to get started.'}
                    </p>
                </div>

                <div className="px-container-padding pt-stack-md">
                    <div className="flex bg-surface-container-low rounded-lg p-1">
                        <button 
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 font-label-bold text-label-bold rounded-DEFAULT shadow-sm text-center transition-colors ${isLogin ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-background'}`}>
                            Login
                        </button>
                        <button 
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 font-label-bold text-label-bold rounded-DEFAULT text-center transition-colors ${!isLogin ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-background'}`}>
                            Sign Up
                        </button>
                    </div>
                </div>

                <form className="p-container-padding flex flex-col gap-stack-md" onSubmit={onSubmit}>
                    {!isLogin && (
                        <div className="flex flex-col gap-stack-sm">
                            <label className="font-label-bold text-label-bold text-on-surface" htmlFor="name">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 pointer-events-none" />
                                <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" id="name" className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-background focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/50" placeholder="Enter your full name" required={!isLogin} />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-stack-sm">
                        <label className="font-label-bold text-label-bold text-on-surface" htmlFor="email">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 pointer-events-none" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-background focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/50" placeholder="Enter your email" required />
                        </div>
                    </div>

                    <div className="flex flex-col gap-stack-sm">
                        <div className="flex justify-between items-center">
                            <label className="font-label-bold text-label-bold text-on-surface" htmlFor="password">Password</label>
                            {isLogin && <a href="#" className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors">Forgot password?</a>}
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 pointer-events-none" />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="w-full pl-10 pr-10 py-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-background focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/50" placeholder="••••••••" required />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-background">
                                <EyeOff className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-error text-sm">{error}</p>}

                    <button type="submit" disabled={loading} className="w-full mt-stack-sm py-3 bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold rounded-DEFAULT shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-60">
                        {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="w-5 h-5" />
                    </button>

                    <div className="relative flex items-center py-stack-md">
                        <div className="flex-grow border-t border-surface-container-highest"></div>
                        <span className="flex-shrink-0 mx-4 text-on-surface-variant font-label-sm text-label-sm">Or continue with</span>
                        <div className="flex-grow border-t border-surface-container-highest"></div>
                    </div>

                    <div className="flex flex-col gap-stack-sm">
                        <button type="button" className="w-full py-3 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-on-background font-label-bold text-label-bold rounded-DEFAULT transition-all active:scale-95 flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                            Google
                        </button>
                        <button type="button" className="w-full py-3 bg-on-background text-surface-container-lowest hover:bg-on-background/90 font-label-bold text-label-bold rounded-DEFAULT transition-all active:scale-95 flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.24-.77 3.65-.77 1.55.05 2.76.62 3.54 1.59-3.17 1.63-2.6 5.86.37 7.03-.78 1.9-1.87 3.55-2.64 4.32zM12.03 7.25C11.83 3.93 14.86 1 17.89 1c.29 3.55-3.22 6.44-5.86 6.25z"/></svg>
                            Apple
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};
