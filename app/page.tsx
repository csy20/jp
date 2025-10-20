'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Youtube, 
  Facebook, 
  Instagram,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Package,
  Home as HomeIcon,
  Sun,
  Moon
} from 'lucide-react'

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const stats = [
    { label: 'Expert Guidance', value: 'Trusted', icon: TrendingUp },
    { label: 'Happy Customers', value: '1000+', icon: Users },
    { label: 'Clothing Items', value: '5000+', icon: Package },
    { label: 'Fashion Trends', value: '100+', icon: Star }
  ]

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@sitasonitrend?si=gt1VUQfxfp_QCnbW',
      icon: Youtube,
      color: 'hover:text-red-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sitasoni.in?igsh=MXQ0Y25sOXJ2YXd1Zg==',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1ARaNmyZRu/',
      icon: Facebook,
      color: 'hover:text-blue-500'
    }
  ]

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const DockerNavigation = () => (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ${
      isDark ? 'bg-gray-900/80' : 'bg-white/80'
    } backdrop-blur-md rounded-full px-6 py-3 shadow-2xl border ${
      isDark ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className="flex items-center space-x-8">
        {/* Home */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`p-2 rounded-full transition-colors duration-300 ${
            isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          title="Home"
        >
          <HomeIcon className="w-5 h-5" />
        </button>

        {/* Social Icons */}
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            } ${social.color}`}
            title={social.name}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}

        {/* Separator */}
        <div className={`w-px h-6 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-300 ${
            isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen w-full transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    } relative`}>
      {/* Dark Theme - Midnight Mist */}
      {isDark && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `,
          }}
        />
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-24">
        <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-left">
              <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Jageshwar Sahu
              </h1>
              <p className={`text-xl md:text-2xl mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Premium Cloth Merchant • Fashion Expert
              </p>
              
              <p className={`text-lg mb-8 leading-relaxed max-w-xl ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                SITASONI Trend, led by Jageshwar Sahu, curates premium fabrics and contemporary
                designs tailored to every celebration. From timeless classics to modern
                statement pieces, we deliver exceptional fashion solutions with personalised
                service across Nawagarh, Chhattisgarh.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className={`p-4 rounded-xl ${
                    isDark ? 'bg-white/10 border border-white/20' : 'bg-white/80 border border-gray-200'
                  } backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 mb-2 ${
                      isDark ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                    <div className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{stat.value}</div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://sitasoni.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Visit Our Store <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Right - Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src="/jaggu_profile.jpeg"
                  alt="Jageshwar Sahu Profile"
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute inset-0 ${
                  isDark ? 'bg-gradient-to-t from-purple-900/20 to-transparent' : 'bg-gradient-to-t from-blue-900/20 to-transparent'
                }`}></div>
              </div>
              {/* Floating Elements */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full ${
                isDark ? 'bg-purple-500/20' : 'bg-purple-500/30'
              } animate-pulse`}></div>
              <div className={`absolute -bottom-4 -left-4 w-12 h-12 rounded-full ${
                isDark ? 'bg-pink-500/20' : 'bg-pink-500/30'
              } animate-pulse delay-1000`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className={`py-8 px-4 border-t ${
        isDark ? 'border-white/10 bg-black/60' : 'border-gray-200 bg-white/80'
      } backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Jageshwar Sahu</h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>SITASONI Trend - Quality Fashion Since Years</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:support@sitasoni.in"
                className={`${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-300`}
              >
                support@sitasoni.in
              </a>
              <span className={`${isDark ? 'text-gray-600' : 'text-gray-400'}`}>•</span>
              <a 
                href="tel:+917024367848"
                className={`${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-300`}
              >
                +91 7024367848
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className={`mt-6 pt-6 border-t ${
            isDark ? 'border-white/10' : 'border-gray-200'
          } text-center ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          } text-sm`}>
            <p>&copy; 2025 Jageshwar Sahu. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Docker Navigation - Bottom */}
      <DockerNavigation />
    </div>
  )
}
