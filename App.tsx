import React from 'react';
import { Github, Mail, Disc as Discord, Code2, Shield, Zap, Crown, Gem, Rocket, Users, Terminal, Coffee } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627856014754-2246bc5b8888?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-blue-500" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              WinClient
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Experience Minecraft like never before with our advanced modification client. 
            Built for winners, optimized for performance, designed for dominance.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
              Download Now
            </button>
            <button className="border-2 border-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-4">Premium Features</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Engineered for excellence, our features give you the competitive edge you need to dominate every game.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Undetectable Protection"
              description="State-of-the-art protection system with regular updates to keep you safe"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-500" />}
              title="Performance Boost"
              description="Optimized code for maximum FPS and minimal latency while using modifications"
            />
            <FeatureCard
              icon={<Code2 className="w-8 h-8 text-blue-500" />}
              title="Custom Modules"
              description="Extensive collection of customizable modules with advanced settings"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Select the perfect plan that matches your needs and dominate the game with our premium features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard
              icon={<Gem className="w-12 h-12 text-blue-500" />}
              title="Basic"
              price="9.99"
              features={[
                "Essential modifications",
                "24/7 Basic support",
                "Monthly updates",
                "Basic protection system",
                "Standard performance optimization"
              ]}
            />
            <PriceCard
              icon={<Crown className="w-12 h-12 text-yellow-500" />}
              title="Premium"
              price="19.99"
              features={[
                "Advanced modifications",
                "Priority support",
                "Weekly updates",
                "Enhanced protection system",
                "Advanced performance boost",
                "Custom modules",
                "Private Discord access"
              ]}
              highlighted={true}
            />
            <PriceCard
              icon={<Rocket className="w-12 h-12 text-blue-500" />}
              title="Ultimate"
              price="29.99"
              features={[
                "All premium modifications",
                "24/7 VIP support",
                "Daily updates",
                "Premium protection system",
                "Maximum performance boost",
                "Unlimited custom modules",
                "Private Discord with direct dev access",
                "Beta features access"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Meet the experts behind WinClient, dedicated to delivering the best Minecraft experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
              name="Alex Wright"
              role="Lead Developer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              name="Sarah Chen"
              role="Security Expert"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
              name="Michael Torres"
              role="UI Designer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              name="Emma Wilson"
              role="Support Lead"
            />
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Developer API</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Integrate WinClient into your own projects with our comprehensive API.
          </p>
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-500/20">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// WinClient API Example
const winClient = new WinClient('YOUR_API_KEY');

// Initialize custom module
await winClient.initModule({
  name: 'CustomAimbot',
  settings: {
    fov: 180,
    smooth: 0.5,
    prediction: true,
    targetPriority: 'distance'
  }
});

// Enable module with custom configuration
await winClient.enableModule('CustomAimbot', {
  silent: true,
  autoDisable: {
    timeout: 5000,
    onDeath: true
  }
});`}</code>
            </pre>
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                View Documentation
              </button>
              <button className="border border-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-500/20 transition-all flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Join Developer Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold">WinClient</h3>
              </div>
              <p className="text-gray-400">Premium Minecraft modifications for winners.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Discord className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">© 2025 WinClient. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-blue-500/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function PriceCard({ icon, title, price, features, highlighted = false }) {
  return (
    <div className={`rounded-lg p-8 ${
      highlighted 
        ? 'bg-gradient-to-b from-blue-600/50 to-cyan-600/50 border-2 border-blue-500' 
        : 'bg-gray-800/50 border border-blue-500/20'
    }`}>
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
      <p className="text-4xl font-bold text-center mb-6">${price}<span className="text-sm text-gray-400">/month</span></p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Shield className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all ${
        highlighted
          ? 'bg-white text-blue-600 hover:bg-gray-200'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function TeamMember({ image, name, role }) {
  return (
    <div className="text-center group">
      <div className="relative inline-block mb-4">
        <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-500/20 group-hover:ring-blue-500 transition-all" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}

export default App;