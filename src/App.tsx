import { useState } from 'react';
import { Button } from './components/ui/button';
import { CaptureIcon, UnderstandIcon, ReconnectIcon } from './components/SolutionIcons';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing'>('home');

  if (currentPage === 'pricing') {
    return <PricingPage onNavigate={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F5F1 100%)' }}>
      {/* Header with glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20" style={{ boxShadow: '0 4px 24px rgba(124, 111, 214, 0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <div style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
            Osmio
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
              Testimonials
            </a>
            <button 
              onClick={() => setCurrentPage('pricing')}
              className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
            >
              Pricing
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-[#6b6b6b] hover:text-[#1a1a1a]"
              asChild
            >
              <a href="https://app.osmio.fr/login">Sign in</a>
            </Button>
            <Button 
              className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-6 shadow-lg shadow-purple-500/20"
              asChild
            >
              <a href="https://app.osmio.fr/signup">Start Free</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20"
        style={{
          background:
            'radial-gradient(1000px 600px at 80% -10%, rgba(124, 111, 214, 0.08), transparent 60%)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div 
                className="mb-6 inline-block px-4 py-2 rounded-full backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(238, 233, 255, 0.8), rgba(238, 233, 255, 0.4))',
                  color: '#1a1a1a', 
                  fontSize: '14px', 
                  fontWeight: 500,
                  border: '1px solid rgba(124, 111, 214, 0.1)'
                }}
              >
                Connection deserves care.
              </div>
              
              <h1 
                style={{ 
                  fontSize: '56px',
                  lineHeight: '1.1',
                  fontFamily: 'Georgia, serif',
                  color: '#1a1a1a',
                  marginBottom: '24px',
                  fontWeight: 400
                }}
              >
                Every relationship deserves remembering.
              </h1>
              
              <p 
                className="mb-8"
                style={{ 
                  fontSize: '18px',
                  color: '#6b6b6b',
                  lineHeight: '1.6'
                }}
              >
                Osmio helps you stay close to what truly matters — by capturing who you meet, what you share, and when hearts drift apart.
                <br /><br />
                Because connection isn't something to manage — it's something to nurture.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button 
              size="lg"
              className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-8 shadow-xl shadow-purple-500/25 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
              style={{ fontSize: '16px', padding: '24px 32px' }}
              asChild
            >
                  <a href="https://app.osmio.fr/signup" aria-label="Start free on Osmio">👉 Start Free — Bring Someone Back to Mind</a>
            </Button>
                
            <Button 
              size="lg"
              variant="outline"
                  className="border-2 border-black/10 rounded-full px-8 backdrop-blur-sm hover:bg-[#7C6FD6] hover:text-white hover:border-[#7C6FD6]/40"
              style={{ fontSize: '16px', padding: '24px 32px' }}
              asChild
            >
                  <a href="https://app.osmio.fr/login" aria-label="Book a demo">💼 Book a Demo</a>
            </Button>
              </div>

              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                No credit card. Just connection.
              </p>

              {/* Social proof */}
              <div className="mt-8 opacity-80">
                <div className="text-xs uppercase tracking-wide text-[#6b6b6b] mb-3">Trusted by folks from</div>
                <div className="flex flex-wrap items-center gap-6 text-[#a0a0a0]">
                  <span style={{ fontWeight: 600 }}>Stripe</span>
                  <span style={{ fontWeight: 600 }}>Figma</span>
                  <span style={{ fontWeight: 600 }}>Notion</span>
                  <span style={{ fontWeight: 600 }}>Sequoia</span>
                </div>
              </div>
            </div>

            {/* Hero card with crystalline background */}
            <div className="relative">
              <div 
                className="relative rounded-2xl p-6 backdrop-blur-2xl overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  boxShadow: '0 20px 60px rgba(124, 111, 214, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                {/* Background removed */}

                {/* Contact list */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 p-3 hover:bg-white/40 rounded-lg transition-all cursor-pointer backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontWeight: 500, color: '#1a1a1a' }}>Sarah Chen</span>
                        <span className="text-xs text-[#6b6b6b]">· Product Manager at Stripe</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]">Met at TechCrunch. Interested in our API...</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 hover:bg-white/40 rounded-lg transition-all cursor-pointer backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontWeight: 500, color: '#1a1a1a' }}>Marcus Johnson</span>
                        <span className="text-xs text-[#6b6b6b]">· VC at Sequoia</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]">Follow up about Series A...</p>
                    </div>
                  </div>

                  <div 
                    className="flex items-center gap-3 p-3 rounded-lg border backdrop-blur-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(155, 142, 227, 0.1))',
                      borderColor: 'rgba(124, 111, 214, 0.3)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontWeight: 500, color: '#1a1a1a' }}>Elena Rodriguez</span>
                        <span className="text-xs text-[#6b6b6b]">· Designer at Figma</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]">Shared design resources. Coffee next week?</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 hover:bg-white/40 rounded-lg transition-all cursor-pointer backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontWeight: 500, color: '#1a1a1a' }}>James Park</span>
                        <span className="text-xs text-[#6b6b6b]">· Founder at Notion</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]">Discussed partnership opportunities...</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 hover:bg-white/40 rounded-lg transition-all cursor-pointer backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontWeight: 500, color: '#1a1a1a' }}>Aisha Patel</span>
                        <span className="text-xs text-[#6b6b6b]">· CEO at Slack</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]">Wants intro to our head of sales...</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification with glass effect */}
              <div 
                className="absolute -right-4 top-20 rounded-xl p-4 max-w-[280px] backdrop-blur-xl"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                  boxShadow: '0 10px 30px rgba(124, 111, 214, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm" style={{ fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>
                      Sarah Chen just posted
                    </p>
                    <p className="text-xs text-[#6b6b6b]">
                      "Excited to announce our new API features..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with gradient */}
      <section 
        className="py-32"
        style={{ 
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 248, 255, 0.9) 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 
              className="mb-8"
              style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                fontWeight: 400
              }}
            >
              Why we lose touch.
            </h2>
            
            <div 
              className="space-y-6"
              style={{ 
                fontSize: '20px',
                color: '#6b6b6b',
                lineHeight: '1.8'
              }}
            >
              <p>We don't lose people because we stop caring.<br />
              We lose them because life keeps moving.</p>
              
              <p>Our calendars fill. Our inboxes overflow.<br />
              Conversations blur, even the ones that meant something.</p>
              
              <p className="pt-6">
                You tell yourself you'll reach out —<br />
                but the moment passes.
              </p>
              
              <p 
                className="pt-8"
                style={{ 
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#7C6FD6'
                }}
              >
                Osmio exists to make sure it doesn't.
              </p>

              <p className="pt-2">
                So your connections stay alive, in work and in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32" style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 
              className="mb-6"
              style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                fontWeight: 400
              }}
            >
              Meet your Relationship Intelligence Companion.
            </h2>
            <p 
              style={{ 
                fontSize: '20px',
                color: '#6b6b6b',
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Osmio blends empathy and AI to help you stay genuinely connected.
              <br />
              It remembers context, emotion, and timing —
              <br />
              so your next message feels real, not robotic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-xl group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
              }}
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <CaptureIcon />
              </div>
              <h3 className="mb-3 text-center" style={{ fontSize: '24px', fontWeight: 600, color: '#1a1a1a' }}>
                Capture
              </h3>
              <p className="text-center" style={{ color: '#6b6b6b', lineHeight: '1.6', marginBottom: '16px' }}>
                Add or import people effortlessly from messages, calls, or meetings.
              </p>
              <p className="text-center" style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                "Every connection starts with a story — not a spreadsheet."
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-xl group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
              }}
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <UnderstandIcon />
              </div>
              <h3 className="mb-3 text-center" style={{ fontSize: '24px', fontWeight: 600, color: '#1a1a1a' }}>
                Understand
              </h3>
              <p className="text-center" style={{ color: '#6b6b6b', lineHeight: '1.6', marginBottom: '16px' }}>
                Osmio builds evolving profiles based on tone, memories, and key moments.
              </p>
              <p className="text-center" style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                "See your relationships grow — not just your contact list."
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-xl group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
              }}
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <ReconnectIcon />
              </div>
              <h3 className="mb-3 text-center" style={{ fontSize: '24px', fontWeight: 600, color: '#1a1a1a' }}>
                Reconnect
              </h3>
              <p className="text-center" style={{ color: '#6b6b6b', lineHeight: '1.6', marginBottom: '16px' }}>
                Get gentle, timely nudges when it's time to reach out.
              </p>
              <p className="text-center" style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                "Because care feels best when it's effortless."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with gradient */}
      <section 
        id="features" 
        className="py-32"
        style={{ 
          background: 'linear-gradient(180deg, rgba(250, 248, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 
              className="mb-6"
              style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                fontWeight: 400
              }}
            >
              More than memory. Meaning.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="rounded-2xl p-8 transition-all hover:shadow-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                Smart Capture
              </h3>
              <p className="mb-4" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Keep every meaningful encounter remembered.
              </p>
              <p style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                Relief
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 transition-all hover:shadow-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                AI-Powered Insights
              </h3>
              <p className="mb-4" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Understand the rhythm and depth of your relationships.
              </p>
              <p style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                Clarity
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 transition-all hover:shadow-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                Evolving Profiles
              </h3>
              <p className="mb-4" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Feel in tune with your people — naturally.
              </p>
              <p style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                Trust
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 transition-all hover:shadow-xl hover:border-[#7C6FD6]/40 backdrop-blur-md"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
                border: '2px solid rgba(124, 111, 214, 0.2)',
                boxShadow: '0 8px 32px rgba(124, 111, 214, 0.12)'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                  Osmio Copilot 🤖
                </h3>
                <span className="bg-[#7C6FD6] text-white text-xs px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="mb-4" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Chat with Osmio about your network — get thoughtful prompts.
              </p>
              <p style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                Empowerment
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 transition-all hover:shadow-xl hover:border-[#7C6FD6]/40 backdrop-blur-md"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
                border: '2px solid rgba(124, 111, 214, 0.2)',
                boxShadow: '0 8px 32px rgba(124, 111, 214, 0.12)'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                  Smart Lists
                </h3>
                <span className="bg-[#7C6FD6] text-white text-xs px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="mb-4" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Focus on your mentors, collaborators, and friends.
              </p>
              <p style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                Serenity
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 transition-all hover:shadow-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                Constellation View
              </h3>
              <p className="mb-4" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Watch your network come alive — and notice who's drifting.
              </p>
              <p style={{ fontSize: '14px', color: '#7C6FD6', fontStyle: 'italic' }}>
                Awe
              </p>
            </div>
          </div>

          <p 
            className="text-center mt-12"
            style={{ 
              fontSize: '18px',
              color: '#6b6b6b',
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}
          >
            Osmio turns information into intimacy — and reminders into rituals of care.
          </p>
        </div>
      </section>

      {/* Copilot Section */}
      <section className="py-32" style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Chat UI Mock */}
            <div className="relative">
              <div 
                className="rounded-2xl p-8 backdrop-blur-xl"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                  boxShadow: '0 20px 60px rgba(124, 111, 214, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-black/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C6FD6] to-[#9B8EE3] flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white">🤖</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#1a1a1a' }}>Osmio Copilot</div>
                    <div style={{ fontSize: '12px', color: '#6b6b6b' }}>Your relational memory</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div 
                      className="px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] backdrop-blur-sm"
                      style={{ background: 'rgba(247, 245, 241, 0.8)' }}
                    >
                      <p style={{ color: '#1a1a1a', fontSize: '15px' }}>
                        Who haven't I reached out to in a while?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div 
                      className="text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-lg shadow-purple-500/20"
                      style={{ background: 'linear-gradient(135deg, #7C6FD6, #9B8EE3)' }}
                    >
                      <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                        You haven't connected with Sarah in 3 weeks. She mentioned wanting to discuss the new project. Want to reach out?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div 
                      className="px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] backdrop-blur-sm"
                      style={{ background: 'rgba(247, 245, 241, 0.8)' }}
                    >
                      <p style={{ color: '#1a1a1a', fontSize: '15px' }}>
                        Summarize my last chat with Amélie.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div 
                      className="text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-lg shadow-purple-500/20"
                      style={{ background: 'linear-gradient(135deg, #7C6FD6, #9B8EE3)' }}
                    >
                      <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                        Amélie was excited about the team workshop. She shared some concerns about work-life balance. Overall tone: reflective and open.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <div 
                className="mb-4 inline-block px-4 py-2 rounded-full backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(238, 233, 255, 0.8), rgba(238, 233, 255, 0.4))',
                  color: '#1a1a1a', 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(124, 111, 214, 0.1)'
                }}
              >
                A CALM MIND FOR YOUR CONNECTIONS
              </div>
              
              <h2 
                className="mb-6"
                style={{ 
                  fontSize: '42px',
                  lineHeight: '1.2',
                  fontFamily: 'Georgia, serif',
                  color: '#1a1a1a',
                  fontWeight: 400
                }}
              >
                Meet Osmio Copilot — your relational memory in conversation.
              </h2>
              
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '18px',
                  color: '#6b6b6b',
                  lineHeight: '1.6'
                }}
              >
                Ask, reflect, and reconnect — instantly.
              </p>

              <div className="space-y-3 mb-8">
                <p style={{ fontSize: '16px', color: '#1a1a1a' }}>
                  💬 "Who haven't I reached out to in a while?"
                </p>
                <p style={{ fontSize: '16px', color: '#1a1a1a' }}>
                  💬 "Summarize my last chat with Amélie."
                </p>
                <p style={{ fontSize: '16px', color: '#1a1a1a' }}>
                  💬 "Which connections feel distant lately?"
                </p>
              </div>

              <p 
                className="mb-8"
                style={{ 
                  fontSize: '16px',
                  color: '#6b6b6b',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}
              >
                Osmio Copilot reads your notes, tone, and past reflections —
                and offers context with emotional intelligence.
                <br /><br />
                It's not an assistant. It's awareness.
              </p>

              <Button 
                size="lg"
                className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-8 shadow-xl shadow-purple-500/25"
              >
                💬 Try Osmio Copilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases with gradient */}
      <section 
        className="py-32"
        style={{ 
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 248, 255, 0.9) 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 
              className="mb-6"
              style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                fontWeight: 400
              }}
            >
              For those who care about staying connected.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Independent Creators */}
            <div className="group">
              <div className="mb-8 flex justify-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all group-hover:shadow-lg backdrop-blur-sm"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(230, 230, 230, 0.4), rgba(240, 240, 240, 0.2))',
                    border: '1px solid rgba(200, 200, 200, 0.1)'
                  }}
                >
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center" style={{ fontSize: '22px', fontWeight: 600, color: '#1a1a1a' }}>
                Independent Creators & Founders
              </h3>
              <p className="mb-4 text-center" style={{ fontSize: '18px', fontWeight: 500, color: '#7C6FD6' }}>
                "Build genuine relationships — not pipelines."
              </p>
              <p className="text-center" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Osmio helps you stay close to your mentors, partners, and supporters — with care and rhythm.
              </p>
            </div>

            {/* Coaches & Leaders */}
            <div className="group">
              <div className="mb-8 flex justify-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all group-hover:shadow-lg backdrop-blur-sm"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(230, 230, 230, 0.4), rgba(240, 240, 240, 0.2))',
                    border: '1px solid rgba(200, 200, 200, 0.1)'
                  }}
                >
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center" style={{ fontSize: '22px', fontWeight: 600, color: '#1a1a1a' }}>
                Coaches & Leaders
              </h3>
              <p className="mb-4 text-center" style={{ fontSize: '18px', fontWeight: 500, color: '#7C6FD6' }}>
                "Lead with empathy, grow with awareness."
              </p>
              <p className="text-center" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Osmio helps you keep emotional context alive across clients and collaborators.
              </p>
            </div>

            {/* Teams & Collectives */}
            <div className="group">
              <div className="mb-8 flex justify-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all group-hover:shadow-lg backdrop-blur-sm"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(230, 230, 230, 0.4), rgba(240, 240, 240, 0.2))',
                    border: '1px solid rgba(200, 200, 200, 0.1)'
                  }}
                >
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-center" style={{ fontSize: '22px', fontWeight: 600, color: '#1a1a1a' }}>
                Teams & Collectives
              </h3>
              <p className="mb-4 text-center" style={{ fontSize: '18px', fontWeight: 500, color: '#7C6FD6' }}>
                "Create a culture of presence."
              </p>
              <p className="text-center" style={{ color: '#6b6b6b', lineHeight: '1.6' }}>
                Shared insights and rituals make staying connected a natural part of your rhythm.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-8 shadow-xl shadow-purple-500/25"
              asChild
            >
              <a href="https://app.osmio.fr/signup">👉 Start Free</a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-black/10 rounded-full px-8 backdrop-blur-sm hover:bg-[#7C6FD6] hover:text-white hover:border-[#7C6FD6]/40"
              asChild
            >
              <a href="https://app.osmio.fr/login">💼 Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Flow */}
      <section className="py-32" style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 
              className="mb-6"
              style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                fontWeight: 400
              }}
            >
              From moments to meaning.
            </h2>
            <p 
              style={{ 
                fontSize: '18px',
                color: '#6b6b6b',
                lineHeight: '1.6'
              }}
            >
              From first hello to long-term trust — Osmio keeps your relationships alive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1-2 */}
            <div className="space-y-8">
              <div 
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(124, 111, 214, 0.05))' }}
                  >
                    <span style={{ color: '#7C6FD6', fontWeight: 600 }}>1</span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 600, color: '#1a1a1a' }}>
                      Add a connection
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.5' }}>
                      Import from your calendar, messages, or add manually
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(124, 111, 214, 0.05))' }}
                  >
                    <span style={{ color: '#7C6FD6', fontWeight: 600 }}>2</span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 600, color: '#1a1a1a' }}>
                      Leave a note or reflection
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.5' }}>
                      Capture what matters about this person and your conversation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3-4 */}
            <div className="space-y-8">
              <div 
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(124, 111, 214, 0.05))' }}
                  >
                    <span style={{ color: '#7C6FD6', fontWeight: 600 }}>3</span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 600, color: '#1a1a1a' }}>
                      Osmio builds their profile
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.5' }}>
                      Context and memories evolve over time, automatically
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(124, 111, 214, 0.05))' }}
                  >
                    <span style={{ color: '#7C6FD6', fontWeight: 600 }}>4</span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 600, color: '#1a1a1a' }}>
                      Chat with Copilot
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.5' }}>
                      Ask questions and get thoughtful insights about your network
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5-6 */}
            <div className="space-y-8">
              <div 
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(124, 111, 214, 0.05))' }}
                  >
                    <span style={{ color: '#7C6FD6', fontWeight: 600 }}>5</span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 600, color: '#1a1a1a' }}>
                      Smart Lists evolve
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.5' }}>
                      Your network organizes itself based on what matters to you
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(124, 111, 214, 0.15), rgba(124, 111, 214, 0.05))' }}
                  >
                    <span style={{ color: '#7C6FD6', fontWeight: 600 }}>6</span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 600, color: '#1a1a1a' }}>
                      You reconnect at the right time
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.5' }}>
                      Gentle reminders help you reach out when it matters most
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p 
            className="text-center mt-12"
            style={{ 
              fontSize: '18px',
              color: '#6b6b6b',
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}
          >
            Osmio works quietly in the background — so you can show up fully in the foreground.
          </p>
        </div>
      </section>

      {/* Testimonials with storytelling style */}
      <section 
        id="testimonials" 
        className="py-32"
        style={{ 
          background: 'linear-gradient(180deg, rgba(250, 248, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 
              className="mb-6 inline-block relative"
              style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                fontWeight: 400
              }}
            >
              <span className="relative">
                Stories of connection.
                <svg 
                  className="absolute -bottom-2 left-0 w-full animate-draw-line" 
                  height="6" 
                  viewBox="0 0 300 6"
                  style={{ animation: 'drawLine 2s ease-out forwards' }}
                >
                  <path 
                    d="M0,3 Q75,0 150,3 T300,3" 
                    stroke="#7C6FD6" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    style={{ 
                      strokeDasharray: 300,
                      strokeDashoffset: 300,
                      animation: 'drawLine 2s ease-out forwards'
                    }}
                  />
                </svg>
              </span>
            </h2>
          </div>

          <style>{`
            @keyframes drawLine {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-lg group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '18px',
                  color: '#1a1a1a',
                  lineHeight: '1.7',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic'
                }}
              >
                "Osmio doesn't just remind me who to follow up with — it reminds me why they matter."
              </p>
              <div>
                <div style={{ fontWeight: 600, color: '#1a1a1a' }}>Sophie M.</div>
                <div style={{ fontSize: '14px', color: '#6b6b6b' }}>Founder</div>
              </div>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-lg group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '18px',
                  color: '#1a1a1a',
                  lineHeight: '1.7',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic'
                }}
              >
                "It's like a CRM if it actually cared."
              </p>
              <div>
                <div style={{ fontWeight: 600, color: '#1a1a1a' }}>Malik R.</div>
                <div style={{ fontSize: '14px', color: '#6b6b6b' }}>Leadership Coach</div>
              </div>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-lg group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(247, 245, 241, 0.8), rgba(247, 245, 241, 0.5))',
                border: '1px solid rgba(124, 111, 214, 0.05)'
              }}
            >
              <p 
                className="mb-6"
                style={{ 
                  fontSize: '18px',
                  color: '#1a1a1a',
                  lineHeight: '1.7',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic'
                }}
              >
                "We've made Osmio a team ritual — and it changed how we relate."
              </p>
              <div>
                <div style={{ fontWeight: 600, color: '#1a1a1a' }}>Amélie D.</div>
                <div style={{ fontSize: '14px', color: '#6b6b6b' }}>Head of People</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 
            className="mb-6"
            style={{ 
              fontSize: '48px',
              lineHeight: '1.2',
              fontFamily: 'Georgia, serif',
              color: '#FFFFFF',
              fontWeight: 400
            }}
          >
            Strong relationships don't just happen.
          </h2>
          
          <p 
            className="mb-8"
            style={{ 
              fontSize: '24px',
              color: '#F7F5F1',
              lineHeight: '1.4'
            }}
          >
            They grow — one thoughtful moment at a time.
          </p>

          <p 
            className="mb-10"
            style={{ 
              fontSize: '18px',
              color: '#F7F5F1',
              opacity: 0.8
            }}
          >
            Start now. Osmio helps you stay connected to the people who matter —
            with context, care, and calm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-8 shadow-2xl shadow-purple-500/40"
              style={{ fontSize: '16px', padding: '24px 32px' }}
              asChild
            >
              <a href="https://app.osmio.fr/signup">👉 Start Free — Begin Your Journey</a>
            </Button>
            <Button 
              size="lg"
              className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-8 shadow-2xl shadow-purple-500/40"
              style={{ fontSize: '16px', padding: '24px 32px' }}
              asChild
            >
              <a href="https://app.osmio.fr/signup">👉 Start Free — Begin Your Journey</a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] rounded-full px-8 backdrop-blur-sm"
              style={{ fontSize: '16px', padding: '24px 32px' }}
            >
              💬 Book a Demo for Teams
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                Osmio
              </div>
              <p className="text-sm text-[#6b6b6b] mb-4">
                Understand the people who matter.
              </p>
              <p className="text-xs text-[#6b6b6b] italic">
                Designed with empathy. Built for connection.
              </p>
            </div>
            
            <div>
              <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>Product</div>
              <div className="space-y-3">
                <a href="#features" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Features</a>
                <button 
                  onClick={() => setCurrentPage('pricing')}
                  className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]"
                >
                  Pricing
                </button>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Updates</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>Company</div>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">About</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Blog</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Contact</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>Legal</div>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Privacy</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Terms</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Security</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 text-center">
            <p className="text-sm text-[#6b6b6b]">© 2025 Osmio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PricingPage({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F5F1' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20" style={{ boxShadow: '0 4px 24px rgba(124, 111, 214, 0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <button 
            onClick={onNavigate}
            style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}
          >
            Osmio
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={onNavigate} className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
              Features
            </button>
            <button onClick={onNavigate} className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
              Testimonials
            </button>
            <button className="text-[#1a1a1a]">
              Pricing
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-[#6b6b6b] hover:text-[#1a1a1a]"
            >
              Sign in
            </Button>
            <Button 
              className="bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full px-6 shadow-lg shadow-purple-500/20"
            >
              Start Free
            </Button>
          </div>
        </div>
      </header>

      {/* Pricing Content */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h1 
              style={{ 
                fontSize: '56px',
                lineHeight: '1.1',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                marginBottom: '20px',
                fontWeight: 400
              }}
            >
              Choose how you grow.
            </h1>
            <p 
              style={{ 
                fontSize: '18px',
                color: '#6b6b6b',
                lineHeight: '1.6'
              }}
            >
              Start where you are. Grow at your own rhythm — from personal reflection to shared culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Free */}
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
              }}
            >
              <div className="mb-6">
                <h3 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '8px'
                  }}
                >
                  Personal Start
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span style={{ fontSize: '40px', fontWeight: 600, color: '#1a1a1a' }}>Free</span>
                </div>
                <p className="text-[#6b6b6b]" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                  Stay close to your top 5 people.
                </p>
              </div>

              <Button 
                variant="outline"
                className="w-full mb-8 border-2 border-black/10 rounded-full backdrop-blur-sm hover:bg-[#7C6FD6] hover:text-white hover:border-[#7C6FD6]/40"
                asChild
              >
                <a href="https://app.osmio.fr/signup">Start Free</a>
              </Button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Up to 5 contacts</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Basic profiles</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Manual reminders</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Mobile access</span>
                </div>
              </div>
            </div>

            {/* Plus */}
            <div 
              className="rounded-2xl p-8 backdrop-blur-md transition-all hover:shadow-2xl relative"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                border: '2px solid rgba(124, 111, 214, 0.3)',
                boxShadow: '0 20px 40px rgba(124, 111, 214, 0.15)'
              }}
            >
              <div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#7C6FD6] text-white px-4 py-1 rounded-full text-sm shadow-lg"
              >
                Popular
              </div>
              
              <div className="mb-6">
                <h3 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '8px'
                  }}
                >
                  Plus
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span style={{ fontSize: '40px', fontWeight: 600, color: '#1a1a1a' }}>€9</span>
                  <span className="text-[#6b6b6b]">/mo</span>
                </div>
                <p className="text-[#6b6b6b]" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                  Unlock Smart Lists & Copilot access.
                </p>
              </div>

              <Button 
                className="w-full mb-8 bg-[#7C6FD6] hover:bg-[#6B5EC5] text-white rounded-full shadow-lg shadow-purple-500/25"
                asChild
              >
                <a href="https://app.osmio.fr/signup">Upgrade</a>
              </Button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Unlimited contacts</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">AI Copilot access 🤖</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Smart Lists</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Auto reminders</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">AI insights</span>
                </div>
              </div>
            </div>

            {/* Pro */}
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
              }}
            >
              <div className="mb-6">
                <h3 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '8px'
                  }}
                >
                  Pro
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span style={{ fontSize: '40px', fontWeight: 600, color: '#1a1a1a' }}>€19</span>
                  <span className="text-[#6b6b6b]">/mo</span>
                </div>
                <p className="text-[#6b6b6b]" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                  Lead with empathy, scale with care.
                </p>
              </div>

              <Button 
                variant="outline"
                className="w-full mb-8 border-2 border-black/10 rounded-full backdrop-blur-sm hover:bg-[#7C6FD6] hover:text-white hover:border-[#7C6FD6]/40"
                asChild
              >
                <a href="https://app.osmio.fr/login">Explore Pro</a>
              </Button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Everything in Plus</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Advanced analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Constellation viz</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Priority support</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Email integration</span>
                </div>
              </div>
            </div>

            {/* Empathy OS */}
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 20px rgba(124, 111, 214, 0.08)'
              }}
            >
              <div className="mb-6">
                <h3 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '8px'
                  }}
                >
                  Empathy OS
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span style={{ fontSize: '40px', fontWeight: 600, color: '#1a1a1a' }}>Custom</span>
                </div>
                <p className="text-[#6b6b6b]" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                  Build collective rituals of connection.
                </p>
              </div>

              <Button 
                variant="outline"
                className="w-full mb-8 border-2 border-black/10 rounded-full backdrop-blur-sm hover:bg-[#7C6FD6] hover:text-white hover:border-[#7C6FD6]/40"
                asChild
              >
                <a href="https://app.osmio.fr/login">Book a Demo</a>
              </Button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Everything in Pro</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Team collaboration</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Shared insights</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Custom onboarding</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7C6FD6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">Success manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                Osmio
              </div>
              <p className="text-sm text-[#6b6b6b] mb-4">
                Understand the people who matter.
              </p>
              <p className="text-xs text-[#6b6b6b] italic">
                Designed with empathy. Built for connection.
              </p>
            </div>
            
            <div>
              <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>Product</div>
              <div className="space-y-3">
                <button onClick={onNavigate} className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Features</button>
                <button className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Pricing</button>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Updates</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>Company</div>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">About</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Blog</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Contact</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>Legal</div>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Privacy</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Terms</a>
                <a href="#" className="block text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Security</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 text-center">
            <p className="text-sm text-[#6b6b6b]">© 2025 Osmio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
