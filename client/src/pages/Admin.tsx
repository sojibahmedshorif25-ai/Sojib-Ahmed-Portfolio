import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, LayoutDashboard, Briefcase, FileText, MessageSquare, Star, Award, Settings, BarChart2, LogOut, Eye, Edit2, Trash2 } from 'lucide-react';

const ADMIN_PASSWORD = 'sojib@admin2026';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'blog', label: 'Blog Posts', icon: FileText },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'testimonials', label: 'Testimonials', icon: Star },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const mockStats = [
  { label: 'Total Views', value: '1,247', change: '+12%', color: '#7C3AED' },
  { label: 'Unique Visitors', value: '384', change: '+8%', color: '#06B6D4' },
  { label: 'Contact Messages', value: '23', change: '+5', color: '#10B981' },
  { label: 'GitBranch Stars', value: '26', change: '+3', color: '#F59E0B' },
];

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError('Incorrect password. Access denied.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative"
      style={{ background: '#050508' }}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/2 w-96 h-96 orb orb-violet opacity-15 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-10 w-full max-w-sm relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
            <Lock size={22} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Admin Access</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">Sojib Ahmed Portfolio CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 uppercase tracking-wider">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] outline-none focus:ring-1 focus:ring-[rgba(124,58,237,0.5)]"
              style={{ background: 'var(--color-surface-2)', border: `1px solid ${error ? '#EF4444' : 'var(--color-border)'}` }}
              autoComplete="current-password"
            />
            {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
          </div>
          <motion.button
            type="submit"
            disabled={loading || !password}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            className="btn-primary w-full justify-center disabled:opacity-50"
            id="admin-login-btn"
          >
            {loading ? (
              <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Verifying...</>
            ) : (
              <><Lock size={15} />Access Dashboard</>
            )}
          </motion.button>
        </form>

        <p className="text-center text-xs text-[var(--color-text-secondary)] mt-6">
          This page is not indexed by search engines.
        </p>
      </motion.div>
    </div>
  );
}

function Dashboard() {
  const [activeNav, setActiveNav] = useState('overview');

  return (
    <div className="min-h-screen flex" style={{ background: '#050508' }}>
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-[rgba(124,58,237,0.15)]"
        style={{ background: 'var(--color-surface)' }}>
        {/* Logo */}
        <div className="p-6 border-b border-[rgba(124,58,237,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>SA</div>
            <div>
              <div className="text-sm font-bold text-[var(--color-text-primary)]">Admin Panel</div>
              <div className="text-xs text-[var(--color-text-secondary)]">Sojib Portfolio CMS</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveNav(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                activeNav === id
                  ? 'text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(124,58,237,0.08)]'
              }`}
              style={activeNav === id ? { background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.15))' } : {}}
              id={`admin-nav-${id}`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[rgba(124,58,237,0.1)]">
          <button
            onClick={() => window.location.reload()}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-red-400 hover:bg-red-400/10 transition-all"
            id="admin-logout"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNav}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeNav === 'overview' && (
              <div>
                <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Dashboard Overview</h1>
                <p className="text-[var(--color-text-secondary)] mb-8">Welcome back, Sojib! 👋</p>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {mockStats.map(stat => (
                    <div key={stat.label} className="card p-5">
                      <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">{stat.label}</div>
                      <div className="text-xs text-[#10B981] mt-1 font-medium">{stat.change} this month</div>
                    </div>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="card p-6">
                  <h2 className="text-sm font-bold text-[var(--color-text-primary)] mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: 'Add Project', icon: Briefcase, action: () => setActiveNav('projects') },
                      { label: 'New Blog Post', icon: FileText, action: () => setActiveNav('blog') },
                      { label: 'View Messages', icon: MessageSquare, action: () => setActiveNav('messages') },
                      { label: 'View Portfolio', icon: Eye, action: () => window.open('/', '_blank') },
                    ].map(({ label, icon: Icon, action }) => (
                      <button
                        key={label}
                        onClick={action}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-[rgba(124,58,237,0.08)] transition-all border border-transparent hover:border-[rgba(124,58,237,0.2)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      >
                        <Icon size={20} />
                        <span className="text-xs font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeNav !== 'overview' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {navItems.find(n => n.id === activeNav)?.label}
                  </h1>
                  <button className="btn-primary text-sm py-2" id={`admin-add-${activeNav}`}>
                    + Add New
                  </button>
                </div>

                <div className="card p-6">
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {activeNav === 'messages' ? (
                      "Contact form submissions will appear here. Connect the backend to see real messages."
                    ) : activeNav === 'analytics' ? (
                      "Visitor analytics and page views will be displayed here with Recharts."
                    ) : activeNav === 'settings' ? (
                      "Portfolio settings — update bio, social links, contact info, and availability status."
                    ) : (
                      `Manage your ${navItems.find(n => n.id === activeNav)?.label.toLowerCase()} here. Connect to the MongoDB backend to enable full CRUD operations.`
                    )}
                  </p>

                  {activeNav === 'projects' && (
                    <div className="mt-6 space-y-3">
                      {['InvestProp AI', 'Job Finder', 'Pet Adoption Platform'].map(name => (
                        <div key={name} className="flex items-center justify-between p-4 rounded-xl"
                          style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">{name}</span>
                          <div className="flex gap-2">
                            <button className="p-1.5 rounded-lg hover:bg-[rgba(124,58,237,0.1)] text-[#8B5CF6] transition-all"><Eye size={14} /></button>
                            <button className="p-1.5 rounded-lg hover:bg-[rgba(6,182,212,0.1)] text-[#06B6D4] transition-all"><Edit2 size={14} /></button>
                            <button className="p-1.5 rounded-lg hover:bg-red-400/10 text-red-400 transition-all"><Trash2 size={14} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin-auth') === 'true';
  });

  const handleLogin = () => {
    sessionStorage.setItem('admin-auth', 'true');
    setIsAuthenticated(true);
  };

  return isAuthenticated ? <Dashboard /> : <LoginForm onLogin={handleLogin} />;
}
