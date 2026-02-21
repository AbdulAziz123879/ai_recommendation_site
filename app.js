const { useState } = React;

// Icon Components (simplified SVG)
const Icon = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    sparkles: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    menu: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
    chevronRight: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>,
    star: <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
    bookmark: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>,
    bookmarkFilled: <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>,
    dollar: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    search: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    arrowLeft: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
    check: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    zap: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    users: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    trending: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    x: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
  };
  return icons[name] || null;
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [homeSearch, setHomeSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [pricingFilter, setPricingFilter] = useState('All Prices');
  const [sortBy, setSortBy] = useState('rating');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getRecommendations = () => {
    let filtered = [...window.aiToolsDatabase];
    
    if (quizAnswers[0]) {
      filtered = filtered.filter(tool => 
        tool.industries.includes(quizAnswers[0])
      );
    }
    
    if (quizAnswers[2]) {
      filtered = filtered.filter(tool => 
        tool.experienceLevel.includes(quizAnswers[2])
      );
    }
    
    if (quizAnswers[3]) {
      if (quizAnswers[3] === 'free') {
        filtered = filtered.filter(tool => tool.pricing.toLowerCase().includes('free'));
      }
    }
    
    filtered.sort((a, b) => b.rating - a.rating);
    return filtered.slice(0, 6);
  };

  const handleQuizAnswer = (answer) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer };
    setQuizAnswers(newAnswers);
    
    if (quizStep < window.quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const recs = getRecommendations();
      setRecommendations(recs);
      setCurrentPage('recommendations');
      setQuizStep(0);
    }
  };

  const toggleBookmark = (toolId) => {
    if (bookmarks.includes(toolId)) {
      setBookmarks(bookmarks.filter(id => id !== toolId));
    } else {
      setBookmarks([...bookmarks, toolId]);
    }
  };

  const toggleCompare = (toolId) => {
    if (compareList.includes(toolId)) {
      setCompareList(compareList.filter(id => id !== toolId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, toolId]);
    }
  };

  const getFilteredTools = () => {
    let filtered = [...window.aiToolsDatabase];
    
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    if (pricingFilter !== 'All Prices') {
      if (pricingFilter === 'Free') {
        filtered = filtered.filter(tool => tool.pricing.toLowerCase().includes('free') && !tool.pricing.toLowerCase().includes('/mo') || tool.pricing.toLowerCase() === 'free');
      } else if (pricingFilter === 'Freemium') {
        filtered = filtered.filter(tool => tool.pricing.toLowerCase().includes('free') && tool.pricing.toLowerCase().includes('/mo'));
      } else if (pricingFilter === 'Paid') {
        filtered = filtered.filter(tool => !tool.pricing.toLowerCase().includes('free'));
      }
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.useCase.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.features.some(f => f.toLowerCase().includes(q)) ||
        tool.industries.some(i => i.toLowerCase().includes(q))
      );
    }
    
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return filtered;
  };

  // Navigation Component
  const Navigation = () => (
    <nav>
      <div className="nav-container">
        {currentPage !== 'home' && (
          <button 
            onClick={() => setCurrentPage('home')} 
            className="back-btn"
            aria-label="Go back"
          >
            <Icon name="arrowLeft" className="back-btn-icon" />
          </button>
        )}
        <div className="nav-logo" onClick={() => setCurrentPage('home')}>
          <Icon name="sparkles" className="nav-logo-icon" />
          <span className="nav-logo-text">AI Tools Finder</span>
        </div>
        
        <div className="nav-links">
          <button onClick={() => setCurrentPage('home')} className="nav-link">Home</button>
          <button onClick={() => setCurrentPage('browse')} className="nav-link">Browse Tools</button>
          <button onClick={() => setCurrentPage('about')} className="nav-link">About</button>
          <button onClick={() => setCurrentPage('blog')} className="nav-link">Resources</button>
          <button onClick={() => setCurrentPage('contact')} className="nav-link">Contact</button>
          <button onClick={() => setCurrentPage('quiz')} className="nav-cta">Take Quiz</button>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name="menu" />
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="mobile-menu-item">Home</button>
          <button onClick={() => { setCurrentPage('browse'); setMobileMenuOpen(false); }} className="mobile-menu-item">Browse Tools</button>
          <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="mobile-menu-item">About</button>
          <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="mobile-menu-item">Resources</button>
          <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="mobile-menu-item">Contact</button>
          <button onClick={() => { setCurrentPage('quiz'); setMobileMenuOpen(false); }} className="mobile-menu-cta">Take Quiz</button>
        </div>
      )}
    </nav>
  );

  // Tool Card Component
  const ToolCard = ({ tool, showCompare = false, keyProp }) => (
    <div key={keyProp || tool.id} className="tool-card">
      <div className="tool-header">
        <div className="tool-info">
          <div className="tool-logo">{tool.logo}</div>
          <div>
            <h3 className="tool-name">{tool.name}</h3>
            <span className="tool-category">{tool.category}</span>
          </div>
        </div>
        <button onClick={() => toggleBookmark(tool.id)} className="bookmark-btn">
          <Icon name={bookmarks.includes(tool.id) ? 'bookmarkFilled' : 'bookmark'} 
                className={bookmarks.includes(tool.id) ? 'text-purple' : ''} />
        </button>
      </div>
      
      <p className="tool-description">{tool.description}</p>
      
      <div className="tool-stats">
        <div className="rating">
          <Icon name="star" className="star-icon star-filled" />
          <span className="rating-value">{tool.rating}</span>
          <span className="rating-count">({tool.reviews})</span>
        </div>
        <div className="pricing">
          <Icon name="dollar" className="icon-sm" />
          <span className="pricing-value">{tool.pricing}</span>
        </div>
      </div>
      
      <div className="feature-tags">
        {tool.features.slice(0, 3).map((feature, idx) => (
          <span key={idx} className="feature-tag">{feature}</span>
        ))}
      </div>
      
      <div className="tool-actions">
        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
          Visit Tool
        </a>
        {showCompare && (
          <button
            onClick={() => toggleCompare(tool.id)}
            className={`compare-btn ${compareList.includes(tool.id) ? 'compare-btn-active' : 'compare-btn-inactive'}`}
          >
            {compareList.includes(tool.id) ? <Icon name="check" className="icon-sm" /> : 'Compare'}
          </button>
        )}
      </div>
    </div>
  );

  const HomePage = () => {
    const handleHomeSearch = (e) => {
      e.preventDefault();
      if (homeSearch.trim()) {
        setSearchQuery(homeSearch);
        setCurrentPage('browse');
      }
    };

    return (
    <div className="gradient-bg">
      <div className="max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="hero-title">Discover Your Perfect AI Tools</h1>
          <p className="hero-subtitle">
            Search our curated database of AI tools or answer a few questions to get personalized recommendations tailored to your needs.
          </p>
          
          <div className="hero-search-container magic-glow magic-glow-strong mb-12">
            <form onSubmit={handleHomeSearch} className="hero-search-form">
              <Icon name="search" className="hero-search-icon" />
              <input 
                type="text" 
                placeholder="Search by name, feature, use case..." 
                value={homeSearch}
                onChange={(e) => setHomeSearch(e.target.value)}
                className="hero-search-input"
              />
              <button type="submit" className="hero-search-btn">Search</button>
            </form>
          </div>

          <button onClick={() => setCurrentPage('quiz')} className="hero-cta">
            Start Quiz <Icon name="chevronRight" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-8 mb-16">
          <div className="feature-card magic-glow">
            <Icon name="zap" className="feature-icon text-purple" />
            <h3 className="feature-title">Smart Recommendations</h3>
            <p className="feature-description">Get personalized AI tool suggestions based on your specific needs and preferences</p>
          </div>
          <div className="feature-card magic-glow">
            <Icon name="users" className="feature-icon text-blue" />
            <h3 className="feature-title">Community Trusted</h3>
            <p className="feature-description">Read real reviews and ratings from thousands of AI tool users</p>
          </div>
          <div className="feature-card magic-glow">
            <Icon name="trending" className="feature-icon text-pink" />
            <h3 className="feature-title">Always Updated</h3>
            <p className="feature-description">Stay current with the latest AI tools and technologies in the market</p>
          </div>
        </div>
        
        <div className="card">
          <h2 className="section-title text-center">Featured AI Tools</h2>
          <div className="grid grid-cols-1 md-grid-cols-3 gap-6 mb-8">
            {window.aiToolsDatabase.slice(0, 6).map(tool => (
              ToolCard({ tool, showCompare: true, keyProp: tool.id })
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => setCurrentPage('browse')} className="btn-link">
              Browse All Tools <Icon name="chevronRight" className="icon-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };

  // Quiz Page
  const QuizPage = () => (
    <div className="gradient-bg page-section">
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="mb-8">
            <div className="quiz-header mb-4">
              <h2 className="quiz-title">Find Your Perfect AI Tools</h2>
              <span className="quiz-progress-text">
                {quizStep + 1} / {window.quizQuestions.length}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((quizStep + 1) / window.quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="quiz-question">
              {window.quizQuestions[quizStep].question}
            </h3>
            <div className="quiz-options">
              {window.quizQuestions[quizStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizAnswer(option.value)}
                  className="quiz-option"
                >
                  <div className="quiz-option-icon">{option.icon}</div>
                  <div className="quiz-option-label">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
          
          {quizStep > 0 && (
            <button onClick={() => setQuizStep(quizStep - 1)} className="quiz-back-btn">
              <Icon name="arrowLeft" className="icon-sm" /> Back
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Recommendations Page
  const RecommendationsPage = () => (
    <div className="gradient-bg page-section">
      <div className="max-w-7xl px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Your Personalized Recommendations</h1>
          <p className="section-subtitle">Based on your preferences, here are the best AI tools for you</p>
          <button onClick={() => setCurrentPage('quiz')} className="btn-link">Retake Quiz</button>
        </div>

        {compareList.length > 0 && (
          <div className="compare-banner">
            <span className="compare-banner-text">{compareList.length} tool(s) selected for comparison</span>
            <button onClick={() => setCurrentPage('compare')} className="compare-banner-btn">
              Compare Now
            </button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-6 mb-12">
          {recommendations.map(tool => (
            ToolCard({ tool, showCompare: true, keyProp: tool.id })
          ))}
        </div>
        
        {recommendations.length === 0 && (
          <div className="empty-state">
            <p className="empty-state-text">No recommendations yet. Take the quiz to get started!</p>
            <button onClick={() => setCurrentPage('quiz')} className="btn btn-primary mt-4">
              Take Quiz
            </button>
          </div>
        )}
        
        <div className="card text-center">
          <h3 className="text-lg font-semibold mb-2">Want to explore more?</h3>
          <p className="text-gray mb-4">Check out our complete directory of AI tools</p>
          <button onClick={() => setCurrentPage('browse')} className="btn btn-primary">
            Browse All Tools
          </button>
        </div>
      </div>
    </div>
  );

  // Browse Page
  const BrowsePage = () => {
    const filteredTools = getFilteredTools();
    
    return (
      <div className="min-h-screen page-section">
        <div className="max-w-7xl px-4">
          <h1 className="section-title">Browse AI Tools</h1>
          
          <div className="filter-section">
            <div className="filter-grid">
              <form onSubmit={(e) => e.preventDefault()} className="search-input-wrapper">
                <Icon name="search" className="search-icon" />
                <input
                  type="text"
                  placeholder="Search tools, features, use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="search-clear-btn"
                    aria-label="Clear search"
                  >
                    <Icon name="x" className="icon-xs" />
                  </button>
                )}
              </form>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {window.categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select
                value={pricingFilter}
                onChange={(e) => setPricingFilter(e.target.value)}
                className="filter-select"
              >
                <option value="All Prices">All Prices</option>
                <option value="Free">Free Only</option>
                <option value="Freemium">Freemium (Free + Premium)</option>
                <option value="Paid">Paid Only</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
          
          {compareList.length > 0 && (
            <div className="compare-banner">
              <span className="compare-banner-text">{compareList.length} tool(s) selected for comparison</span>
              <button onClick={() => setCurrentPage('compare')} className="compare-banner-btn">
                Compare Now
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              ToolCard({ tool, showCompare: true, keyProp: tool.id })
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="empty-state">
              <p className="empty-state-text">No tools found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Compare Page
  const ComparePage = () => {
    const compareTools = window.aiToolsDatabase.filter(tool => compareList.includes(tool.id));
    
    const renderRatingStars = (rating) => {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      return (
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i} 
              name="star" 
              className={`star-icon ${i < fullStars ? 'star-filled' : i === fullStars && hasHalfStar ? 'star-half' : 'star-empty'}`} 
            />
          ))}
        </div>
      );
    };
    
    return (
      <div className="min-h-screen page-section compare-page-bg">
        <div className="max-w-7xl px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="section-title mb-2">Compare AI Tools</h1>
                <p className="text-gray">Side-by-side comparison of {compareTools.length} selected tool{compareTools.length !== 1 ? 's' : ''}</p>
              </div>
              <button onClick={() => setCompareList([])} className="btn-link">
                Clear All
              </button>
            </div>
          
          {compareTools.length === 0 ? (
            <div className="empty-state">
              <Icon name="sparkles" className="empty-state-icon" />
              <p className="empty-state-text">No tools selected for comparison</p>
              <p className="empty-state-subtext">Select up to 3 tools from the browse page to compare them side-by-side</p>
              <button onClick={() => setCurrentPage('browse')} className="btn btn-primary mt-4">
                Browse Tools
              </button>
            </div>
          ) : (
            <div className="compare-layout">
              <main className="compare-main flex-1 min-w-0">
                <div className="compare-table-wrapper">
                  <table className="compare-table">
                    <thead>
                      <tr>
                        <th className="compare-feature-col">Feature</th>
                        {compareTools.map(tool => (
                          <th key={tool.id} className="compare-tool-col">
                            <div className="compare-tool-header">
                              <div className="compare-tool-logo-wrapper">
                                <div className="compare-tool-icon">{tool.logo}</div>
                              </div>
                              <div className="compare-tool-info">
                                <div className="compare-tool-name">{tool.name}</div>
                                <div className="compare-tool-category">{tool.category}</div>
                              </div>
                              <button onClick={() => toggleCompare(tool.id)} className="compare-remove-btn" title="Remove from comparison">
                                <span>Remove</span>
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    
                    <tbody id="toc-overview">
                      <tr className="compare-row-highlight">
                        <td className="compare-feature-label">
                          <Icon name="star" className="compare-feature-icon" />
                          <span>Rating & Reviews</span>
                        </td>
                        {compareTools.map(tool => (
                          <td key={tool.id} className="compare-cell">
                            <div className="compare-rating-section">
                              {renderRatingStars(tool.rating)}
                              <div className="compare-rating-value">{tool.rating} / 5.0</div>
                              <div className="compare-rating-count">{tool.reviews.toLocaleString()} reviews</div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                    
                    <tbody id="toc-pricing">
                      <tr>
                        <td className="compare-feature-label">
                          <Icon name="dollar" className="compare-feature-icon" />
                          <span>Pricing</span>
                        </td>
                        {compareTools.map(tool => (
                          <td key={tool.id} className="compare-cell">
                            <div className="compare-pricing-badge">
                              {tool.pricing}
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                    
                    <tbody id="toc-features">
                      <tr>
                        <td className="compare-feature-label">
                          <Icon name="sparkles" className="compare-feature-icon" />
                          <span>Key Features</span>
                        </td>
                        {compareTools.map(tool => (
                          <td key={tool.id} className="compare-cell">
                            <ul className="compare-features-list">
                              {tool.features.map((feature, idx) => (
                                <li key={idx} className="compare-feature-item">
                                  <Icon name="check" className="compare-check-icon" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>

                    <tbody id="toc-audience">
                        <tr className="compare-row-highlight">
                          <td className="compare-feature-label">
                            <Icon name="zap" className="compare-feature-icon" />
                            <span>Use Case</span>
                          </td>
                          {compareTools.map(tool => (
                            <td key={tool.id} className="compare-cell">
                              <div className="compare-use-case">{tool.useCase}</div>
                            </td>
                          ))}
                        </tr>
                        
                        <tr>
                          <td className="compare-feature-label">
                            <Icon name="users" className="compare-feature-icon" />
                            <span>Experience Level</span>
                          </td>
                          {compareTools.map(tool => (
                            <td key={tool.id} className="compare-cell">
                              <div className="compare-badges">
                                {tool.experienceLevel.map((level, idx) => (
                                  <span key={idx} className={`compare-badge compare-badge-${level}`}>
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                  </span>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                        
                        <tr className="compare-row-highlight">
                          <td className="compare-feature-label">
                            <Icon name="trending" className="compare-feature-icon" />
                            <span>Industries</span>
                          </td>
                          {compareTools.map(tool => (
                            <td key={tool.id} className="compare-cell">
                              <div className="compare-badges">
                                {tool.industries.map((industry, idx) => (
                                  <span key={idx} className="compare-badge compare-badge-industry">
                                    {industry.charAt(0).toUpperCase() + industry.slice(1)}
                                  </span>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr className="compare-row-action">
                          <td className="compare-feature-label">Action</td>
                          {compareTools.map(tool => (
                            <td key={tool.id} className="compare-cell">
                              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="compare-visit-btn">
                                <span>Visit Tool</span>
                                <Icon name="chevronRight" className="icon-sm" />
                              </a>
                            </td>
                          ))}
                        </tr>
                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          )}
        </div>
      </div>
    );
  };

  // About Page
  const AboutPage = () => (
    <div className="gradient-bg page-section">
      <div className="max-w-4xl px-4">
        <h1 className="section-title text-center">About AI Tools Finder</h1>
        
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray mb-4">
            AI Tools Finder was created to help people navigate the rapidly growing world of artificial intelligence tools. 
            With hundreds of AI solutions available, finding the right tool for your specific needs can be overwhelming.
          </p>
          <p className="text-gray mb-4">
            Our platform simplifies this process by providing personalized recommendations based on your industry, use case, 
            experience level, and budget. We believe everyone should have access to the AI tools that can transform their work 
            and boost their productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-6 mb-8">
          <div className="card text-center">
            <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>🎯</div>
            <h3 className="font-bold text-lg mb-2">Personalized</h3>
            <p className="text-gray text-sm">Tailored recommendations for your needs</p>
          </div>
          <div className="card text-center">
            <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>✨</div>
            <h3 className="font-bold text-lg mb-2">Curated</h3>
            <p className="text-gray text-sm">Hand-picked, quality AI tools</p>
          </div>
          <div className="card text-center">
            <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>🚀</div>
            <h3 className="font-bold text-lg mb-2">Updated</h3>
            <p className="text-gray text-sm">Always current with latest tools</p>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flexShrink: 0, width: '2rem', height: '2rem', background: '#7c3aed', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>1</div>
              <div>
                <h3 className="font-semibold mb-1">Take the Quiz</h3>
                <p className="text-gray text-sm">Answer a few simple questions about your needs and preferences</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flexShrink: 0, width: '2rem', height: '2rem', background: '#7c3aed', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>2</div>
              <div>
                <h3 className="font-semibold mb-1">Get Recommendations</h3>
                <p className="text-gray text-sm">Receive personalized AI tool suggestions matched to your criteria</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flexShrink: 0, width: '2rem', height: '2rem', background: '#7c3aed', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>3</div>
              <div>
                <h3 className="font-semibold mb-1">Explore & Compare</h3>
                <p className="text-gray text-sm">Browse our directory, compare tools, and find your perfect match</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Blog Page
  const BlogPage = () => (
    <div className="min-h-screen page-section">
      <div className="max-w-7xl px-4">
        <h1 className="section-title text-center">Resources & Guides</h1>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
          {[
            {
              title: "Getting Started with AI Tools",
              category: "Beginner Guide",
              description: "A comprehensive introduction to AI tools and how to choose the right ones for your needs",
              date: "Feb 10, 2026"
            },
            {
              title: "AI for Content Creators",
              category: "Industry Guide",
              description: "Discover the best AI tools for writing, image generation, and video editing",
              date: "Feb 8, 2026"
            },
            {
              title: "Coding with AI Assistants",
              category: "Developer Guide",
              description: "How AI coding tools can boost your development workflow and productivity",
              date: "Feb 5, 2026"
            },
            {
              title: "AI Tools for Marketing",
              category: "Business Guide",
              description: "Leverage AI to create compelling marketing campaigns and optimize your strategy",
              date: "Feb 3, 2026"
            },
            {
              title: "Free vs Paid AI Tools",
              category: "Comparison",
              description: "Understanding the differences and deciding which option is right for you",
              date: "Jan 30, 2026"
            },
            {
              title: "AI Ethics and Best Practices",
              category: "Industry Insights",
              description: "Using AI tools responsibly and understanding their limitations",
              date: "Jan 28, 2026"
            }
          ].map((article, idx) => (
            <div key={idx} className="blog-card">
              <span className="blog-category">{article.category}</span>
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-description">{article.description}</p>
              <div className="blog-footer">
                <span className="blog-date">{article.date}</span>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="gradient-bg page-section">
      <div className="max-w-2xl px-4">
        <h1 className="section-title text-center">Get in Touch</h1>
        
        <div className="card">
          <p className="text-gray mb-8 text-center">
            Have questions, suggestions, or want to submit a tool? We'd love to hear from you!
          </p>
          
          <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            
            <div>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            
            <div>
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Submit a Tool</option>
                <option>Report an Issue</option>
                <option>Partnership Opportunity</option>
              </select>
            </div>
            
            <div>
              <label>Message</label>
              <textarea rows="6" placeholder="Tell us what's on your mind..." />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
              Send Message
            </button>
          </form>
        </div>
        
        <div className="contact-grid mt-8">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-info">hello@aitoolsfinder.com</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3 className="contact-title">Community</h3>
            <p className="contact-info">Join our Discord</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🐦</div>
            <h3 className="contact-title">Twitter</h3>
            <p className="contact-info">@AIToolsFinder</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer Component
  const Footer = () => (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Icon name="sparkles" className="footer-logo-icon" />
          <span className="footer-logo-text">AI Tools Finder</span>
        </div>
        <p className="footer-description">Discover the perfect AI tools for your needs</p>
        <p className="footer-copyright">© 2026 AI Tools Finder. All rights reserved.</p>
      </div>
    </footer>
  );

  // Render current page
  return (
    <div>
      {Navigation()}
      
      {currentPage === 'home' && HomePage()}
      {currentPage === 'quiz' && QuizPage()}
      {currentPage === 'recommendations' && RecommendationsPage()}
      {currentPage === 'browse' && BrowsePage()}
      {currentPage === 'compare' && ComparePage()}
      {currentPage === 'about' && AboutPage()}
      {currentPage === 'blog' && BlogPage()}
      {currentPage === 'contact' && ContactPage()}
      
      {Footer()}
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
