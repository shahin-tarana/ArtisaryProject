import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { artForms, categories, dailyChallenge, popularTutorials } from './data/artData';

const STORAGE_KEYS = {
  favorites: 'kalaverse-favorites',
  progress: 'kalaverse-progress',
  theme: 'kalaverse-theme',
  challenges: 'kalaverse-challenges'
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || 'light');
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || '[]');
    } catch {
      return [];
    }
  });
  const [completedChallenges, setCompletedChallenges] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.challenges) || '[]');
    } catch {
      return [];
    }
  });
  const [completedTutorials, setCompletedTutorials] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '{}');
    } catch {
      return {};
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(completedTutorials));
  }, [completedTutorials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.challenges, JSON.stringify(completedChallenges));
  }, [completedChallenges]);

  const toggleFavorite = (slug) => {
    setFavorites((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]
    );
  };

  const toggleTutorialComplete = (slug) => {
    setCompletedTutorials((current) => ({
      ...current,
      [slug]: !current[slug]
    }));
  };

  const toggleChallengeComplete = (id) => {
    setCompletedChallenges((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <>
      <main className="page-shell">
        <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))} favorites={favorites} />
        <Routes>
          <Route path="/" element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/explore" element={<ExplorePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/art/:slug" element={<ArtDetailPage favorites={favorites} toggleFavorite={toggleFavorite} toggleTutorialComplete={toggleTutorialComplete} completedTutorials={completedTutorials} />} />
          <Route path="/ai-assistant" element={<AiAssistantPage />} />
          <Route path="/mandala-studio" element={<MandalaStudioPage />} />
          <Route path="/challenges" element={<ChallengesPage completedChallenges={completedChallenges} toggleChallengeComplete={toggleChallengeComplete} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

function Header({ theme, onToggleTheme, favorites }) {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Explore', to: '/explore' },
    { label: 'AI Assistant', to: '/ai-assistant' },
    { label: 'Mandala Studio', to: '/mandala-studio' },
    { label: 'Challenges', to: '/challenges' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="KalaVerse home">
          <span className="brand-mark">K</span>
          <span>KalaVerse</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="ghost-button" onClick={onToggleTheme} aria-label="Toggle light and dark theme">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <Link to="/explore" className="chip-pill">
            Favorites {favorites.length}
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePage({ favorites, toggleFavorite }) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredArt = artForms.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % featuredArt.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredArt.length]);

  const searchSuggestions = useMemo(() => artForms.slice(0, 6), []);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Curated living traditions</span>
            <h1>Discover the Living Art of India.</h1>
            <p>
              Explore handcrafted painting, storytelling, mandalas, and crafts that preserve India’s vibrant creative heritage.
            </p>
            <div className="hero-actions">
              <a href="#art-collection" className="primary-button">Explore Art</a>
              <Link to="/ai-assistant" className="secondary-button">Ask AI</Link>
            </div>
            <div className="mini-stats">
              <div>
                <strong>12+</strong>
                <span>Art traditions</span>
              </div>
              <div>
                <strong>4.9</strong>
                <span>Community rating</span>
              </div>
              <div>
                <strong>30 min</strong>
                <span>Quick creative ritual</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="featured-panel">
              <img src={featuredArt[featuredIndex].image} alt={featuredArt[featuredIndex].name} />
              <div className="feature-badge">Featured today</div>
              <div className="feature-details">
                <h3>{featuredArt[featuredIndex].name}</h3>
                <p>{featuredArt[featuredIndex].region}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container primary-search-block" id="art-collection">
        <div className="search-panel">
          <label htmlFor="home-search">Search art forms</label>
          <div className="search-bar">
            <input id="home-search" placeholder="Type Madhubani, pottery, mandala..." />
            <Link to="/explore" className="primary-button small">Browse</Link>
          </div>
          <div className="search-suggestions">
            {searchSuggestions.map((art) => (
              <button key={art.slug} type="button" className="tag-button" onClick={() => window.location.assign(`/art/${art.slug}`)}>
                {art.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-head">
          <div>
            <span className="eyebrow">Collection</span>
            <h2>Featured art traditions</h2>
          </div>
          <Link to="/explore" className="text-link">View all</Link>
        </div>
        <div className="art-grid">
          {featuredArt.map((art) => (
            <ArtCard key={art.slug} art={art} isFavorite={favorites.includes(art.slug)} onToggleFavorite={toggleFavorite} />
          ))}
        </div>
      </section>

      <section className="container section-block highlight-panel">
        <div className="inspiration-card">
          <div>
            <span className="eyebrow">Daily inspiration</span>
            <h3>{dailyChallenge.title}</h3>
            <p>{dailyChallenge.prompt}</p>
          </div>
          <div className="challenge-badge">{dailyChallenge.level}</div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-head">
          <div>
            <span className="eyebrow">Explore by interest</span>
            <h2>Popular categories</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.filter((category) => category !== 'All').slice(0, 8).map((category) => (
            <div key={category} className="category-tile">
              <span>{category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-head">
          <div>
            <span className="eyebrow">Try a practice</span>
            <h2>Popular tutorials</h2>
          </div>
        </div>
        <div className="tutorial-list">
          {popularTutorials.map((tutorial) => (
            <div key={tutorial.key} className="tutorial-row">
              <div>
                <strong>{tutorial.title}</strong>
                <span>Gentle, beginner-friendly direction</span>
              </div>
              <Link to={`/art/${tutorial.key}`} className="secondary-button small">Open</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ExplorePage({ favorites, toggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredArt = useMemo(() => {
    const normalized = searchTerm.toLowerCase();
    const items = artForms.filter((art) => {
      const matchesSearch =
        art.name.toLowerCase().includes(normalized) ||
        art.region.toLowerCase().includes(normalized) ||
        art.description.toLowerCase().includes(normalized);
      const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return [...items].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'region') return a.region.localeCompare(b.region);
      return a.difficulty.localeCompare(b.difficulty);
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <section className="container page-section">
      <div className="section-head compact-head">
        <div>
          <span className="eyebrow">Explore</span>
          <h2>Find a craft to explore</h2>
        </div>
      </div>

      <div className="controls-panel">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search art forms, regions or styles"
          aria-label="Search art forms"
        />
        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} aria-label="Filter by category">
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort art forms">
          <option value="name">Sort by name</option>
          <option value="region">Sort by region</option>
          <option value="difficulty">Sort by difficulty</option>
        </select>
      </div>

      <div className="art-grid results-grid">
        {filteredArt.map((art) => (
          <ArtCard key={art.slug} art={art} isFavorite={favorites.includes(art.slug)} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </section>
  );
}

function ArtDetailPage({ favorites, toggleFavorite, completedTutorials, toggleTutorialComplete }) {
  const { slug } = useParams();
  const art = artForms.find((item) => item.slug === slug) || artForms[0];
  const location = useLocation();

  const isComplete = !!completedTutorials[art.slug];

  return (
    <section className="container page-section">
      <div className="detail-header">
        <div>
          <span className="eyebrow">Art detail</span>
          <h1>{art.name}</h1>
          <p>{art.region}</p>
        </div>
        <div className="detail-actions">
          <button className="primary-button" onClick={() => toggleFavorite(art.slug)}>
            {favorites.includes(art.slug) ? 'Saved to favorites' : 'Save to favorites'}
          </button>
          <button className="secondary-button" onClick={() => toggleTutorialComplete(art.slug)}>
            {isComplete ? 'Tutorial complete' : 'Mark tutorial complete'}
          </button>
          <Link to="/ai-assistant" state={{ artForm: art }} className="ghost-button dark-btn">
            Ask AI About This Art
          </Link>
        </div>
      </div>

      <div className="detail-gallery">
        {art.gallery.map((image, index) => (
          <img key={`${art.slug}-${index}`} src={image} alt={`${art.name} example ${index + 1}`} />
        ))}
      </div>

      <div className="detail-layout">
        <article className="detail-column main-copy">
          <div className="info-box">
            <h3>Historical background</h3>
            <p>{art.history}</p>
            <p>{art.significance}</p>
          </div>

          <div className="info-box">
            <h3>Beginner instructions</h3>
            <ol>
              {art.instructions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="info-box">
            <h3>Materials checklist</h3>
            <ul className="checklist">
              {art.materials.map((material) => (
                <li key={material}>
                  <label>
                    <input type="checkbox" defaultChecked={false} />
                    <span>{material}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="detail-column side-panel">
          <div className="meta-card">
            <h3>Quick facts</h3>
            <ul>
              <li><strong>Region:</strong> {art.region}</li>
              <li><strong>Difficulty:</strong> {art.difficulty}</li>
              <li><strong>Time:</strong> {art.time}</li>
              <li><strong>Traditional materials:</strong> {art.traditionalMaterials.join(', ')}</li>
            </ul>
          </div>

          <div className="meta-card">
            <h3>Related forms</h3>
            <div className="related-links">
              {art.related.map((slug) => {
                const relatedArt = artForms.find((form) => form.slug === slug);
                return relatedArt ? (
                  <Link key={relatedArt.slug} to={`/art/${relatedArt.slug}`}>
                    {relatedArt.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </aside>
      </div>

      <div className="source-flag">
        <strong>Source note:</strong> Historical and cultural context is presented as a general reference. AI suggestions are separate and should be treated as creative guidance, not authoritative cultural claims.
      </div>
    </section>
  );
}

function AiAssistantPage() {
  const location = useLocation();
  const selectedArt = location.state?.artForm || artForms[0];
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `I can help with ${selectedArt.name}. Ask about beginner steps, materials, or how it differs from another art tradition.`
    }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const suggestedPrompts = [
    `How do I start ${selectedArt.name}?`,
    `What materials are needed for ${selectedArt.name}?`,
    `Give me a 30-minute ${selectedArt.name} activity.`
  ];

  async function handleSend(promptOverride) {
    const finalPrompt = (promptOverride || input).trim();
    if (!finalPrompt || isSending) return;

    setMessages((current) => [...current, { role: 'user', text: finalPrompt }]);
    setInput('');
    setStatus('loading');
    setError('');
    setIsSending(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: finalPrompt, artForm: selectedArt.name })
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'The assistant could not answer that request.');
      }

      setMessages((current) => [...current, { role: 'assistant', text: result.reply }]);
      setStatus('success');
    } catch (err) {
      setError(err.message || 'Something went wrong while contacting the AI assistant.');
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  }

  const clearConversation = () => {
    setMessages([{ role: 'assistant', text: `I can help with ${selectedArt.name}. Ask about beginner steps, materials, or how it differs from another art tradition.` }]);
    setError('');
    setStatus('idle');
  };

  return (
    <section className="container page-section ai-section">
      <div className="section-head compact-head">
        <div>
          <span className="eyebrow">AI art guide</span>
          <h2>Ask about {selectedArt.name}</h2>
        </div>
        <button className="ghost-button" onClick={clearConversation}>Clear conversation</button>
      </div>

      <div className="chat-shell">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`msg-row ${message.role}`}>
              <div className="message-bubble" dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }} />
            </div>
          ))}
          {isSending && (
            <div className="msg-row assistant">
              <div className="message-bubble loading-bubble">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>

        <div className="prompt-row">
          {suggestedPrompts.map((prompt) => (
            <button key={prompt} type="button" className="tag-button" onClick={() => handleSend(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <div className="composer">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask the AI about materials, rituals, or beginner steps..."
            rows="3"
            aria-label="Ask the AI assistant"
          />
          <div className="composer-actions">
            <button className="secondary-button" type="button" onClick={() => handleSend()} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </button>
            <button className="ghost-button" type="button" onClick={clearConversation}>Reset</button>
          </div>
          {error && <p className="error-text">{error}</p>}
          {status === 'success' && <p className="success-text">The assistant responded successfully.</p>}
        </div>
      </div>
    </section>
  );
}

function MandalaStudioPage() {
  const canvasRef = useRef(null);
  const [symmetry, setSymmetry] = useState(8);
  const [brushSize, setBrushSize] = useState(4);
  const [color, setColor] = useState('#d76d3e');
  const [tool, setTool] = useState('brush');
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const devicePixelRatio = window.devicePixelRatio || 1;
    const width = 680;
    const height = 680;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(devicePixelRatio, devicePixelRatio);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.fillStyle = '#fff8ee';
    context.fillRect(0, 0, width, height);
    setIsReady(true);
  }, []);

  const renderStroke = (ctx, stroke, width, height) => {
    const startX = stroke.points[0].x;
    const startY = stroke.points[0].y;
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.beginPath();
    for (let segment = 0; segment < symmetry; segment += 1) {
      ctx.rotate((Math.PI * 2) / symmetry);
      ctx.beginPath();
      const initial = stroke.points[0];
      ctx.moveTo(initial.x - width / 2, initial.y - height / 2);
      stroke.points.forEach((point) => {
        ctx.lineTo(point.x - width / 2, point.y - height / 2);
      });
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.globalCompositeOperation = stroke.erase ? 'destination-out' : 'source-over';
      ctx.stroke();
    }
    ctx.restore();
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate((Math.PI * 2) / symmetry);
    ctx.restore();
  };

  const updateCanvas = (nextStrokes) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#fff8ee';
    ctx.fillRect(0, 0, width, height);

    nextStrokes.forEach((stroke) => {
      ctx.save();
      if (stroke.erase) {
        ctx.globalCompositeOperation = 'destination-out';
      }
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.translate(width / 2, height / 2);
      for (let i = 0; i < stroke.symmetry; i += 1) {
        ctx.rotate((Math.PI * 2) / stroke.symmetry);
        ctx.beginPath();
        const first = stroke.points[0];
        ctx.moveTo(first.x - width / 2, first.y - height / 2);
        stroke.points.forEach((point) => {
          ctx.lineTo(point.x - width / 2, point.y - height / 2);
        });
        ctx.stroke();
      }
      ctx.restore();
    });
  };

  useEffect(() => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    ctx.fillStyle = '#fff8ee';
    ctx.fillRect(0, 0, width, height);
    updateCanvas(history);
  }, [history, isReady, symmetry]);

  const getPointerPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  const handlePointerDown = (event) => {
    const point = getPointerPosition(event);
    const stroke = {
      color: tool === 'eraser' ? '#fff8ee' : color,
      size: brushSize,
      erase: tool === 'eraser',
      symmetry,
      points: [point]
    };
    setHistory((current) => [...current, stroke]);
    setRedoStack([]);
    setIsDrawing(true);
  };

  const handlePointerMove = (event) => {
    if (!isDrawing) return;
    const point = getPointerPosition(event);
    setHistory((current) => {
      const updated = [...current];
      const lastStroke = updated[updated.length - 1];
      lastStroke.points = [...lastStroke.points, point];
      return updated;
    });
  };

  const handlePointerUp = () => setIsDrawing(false);

  const handleUndo = () => {
    setHistory((current) => {
      if (!current.length) return current;
      const last = current[current.length - 1];
      setRedoStack((redo) => [...redo, last]);
      return current.slice(0, -1);
    });
  };

  const handleRedo = () => {
    setRedoStack((current) => {
      if (!current.length) return current;
      const last = current[current.length - 1];
      setHistory((previous) => [...previous, last]);
      return current.slice(0, -1);
    });
  };

  const clearCanvas = () => {
    setHistory([]);
    setRedoStack([]);
  };

  const downloadArtwork = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'kalaverse-mandala.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="container page-section">
      <div className="section-head compact-head">
        <div>
          <span className="eyebrow">Creative studio</span>
          <h2>Interactive mandala studio</h2>
        </div>
      </div>

      <div className="mandala-layout">
        <div className="tool-panel">
          <label>
            Symmetry
            <input type="range" min="4" max="16" value={symmetry} onChange={(event) => setSymmetry(Number(event.target.value))} />
            <span>{symmetry}</span>
          </label>
          <label>
            Brush size
            <input type="range" min="2" max="20" value={brushSize} onChange={(event) => setBrushSize(Number(event.target.value))} />
            <span>{brushSize}px</span>
          </label>
          <label>
            Color
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
          </label>
          <div className="tool-switcher">
            <button className={tool === 'brush' ? 'ghost-button active' : 'ghost-button'} onClick={() => setTool('brush')}>Brush</button>
            <button className={tool === 'eraser' ? 'ghost-button active' : 'ghost-button'} onClick={() => setTool('eraser')}>Eraser</button>
          </div>
          <div className="tool-actions">
            <button className="secondary-button" onClick={handleUndo} disabled={!history.length}>Undo</button>
            <button className="secondary-button" onClick={handleRedo} disabled={!redoStack.length}>Redo</button>
            <button className="ghost-button" onClick={clearCanvas}>Clear</button>
            <button className="primary-button" onClick={downloadArtwork}>Download PNG</button>
          </div>
        </div>

        <div className="canvas-wrap">
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="mandala-canvas"
          />
        </div>
      </div>
    </section>
  );
}

function ChallengesPage({ completedChallenges, toggleChallengeComplete }) {
  const challengeList = [
    { id: 'energy-lines', title: 'Beginner flow', prompt: 'Sketch a mandala with three repeating petals and a sunrise color palette.', level: 'Beginner' },
    { id: 'story-forms', title: 'Narrative shapes', prompt: 'Create a Warli-inspired scene of a market day using only circles, lines, and geometry.', level: 'Intermediate' },
    { id: 'ritual-surface', title: 'Advanced studio practice', prompt: 'Design a full Lipan-inspired border composition with mirrored symmetry and a calm palette.', level: 'Advanced' }
  ];

  return (
    <section className="container page-section">
      <div className="section-head compact-head">
        <div>
          <span className="eyebrow">Creative challenge</span>
          <h2>Daily practice board</h2>
        </div>
      </div>

      <div className="challenge-card">
        <div>
          <span className="eyebrow">Today’s prompt</span>
          <h3>{dailyChallenge.prompt}</h3>
        </div>
        <div className="challenge-badge">{dailyChallenge.level}</div>
      </div>

      <div className="challenge-grid">
        {challengeList.map((challenge) => (
          <div key={challenge.id} className="challenge-item">
            <div className="challenge-meta">
              <span>{challenge.level}</span>
              <strong>{challenge.title}</strong>
            </div>
            <p>{challenge.prompt}</p>
            <button className={completedChallenges.includes(challenge.id) ? 'primary-button' : 'secondary-button'} onClick={() => toggleChallengeComplete(challenge.id)}>
              {completedChallenges.includes(challenge.id) ? 'Completed' : 'Mark complete'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="container page-section rich-page">
      <span className="eyebrow">About</span>
      <h1>KalaVerse celebrates the living craft traditions of India.</h1>
      <p>
        This project was created to make India’s artistic heritage more accessible through guided discovery, interactive practice, and thoughtful AI support. It blends cultural storytelling with modern creative tools, while keeping the tone respectful and educational.
      </p>
      <p>
        Each detail page is designed to help users understand regional context, materials, and creative process. The goal is to support curiosity and craft practice without overstating historical certainty or replacing verified cultural knowledge.
      </p>
    </section>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please complete all fields before submitting.');
      setStatusMessage('');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Something went wrong while saving the message.');
      }

      setStatusMessage(result.message || 'Your message was saved locally. Configure email delivery in production to forward it automatically.');
      setError('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message || 'The contact form could not be submitted.');
      setStatusMessage('');
    }
  };

  return (
    <section className="container page-section contact-page">
      <div className="section-head compact-head">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Send a note</h2>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label className="full-width">
            Subject
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
          <label className="full-width">
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />
          </label>
        </div>
        {error && <p className="error-text">{error}</p>}
        {statusMessage && <p className="success-text">{statusMessage}</p>}
        <button type="submit" className="primary-button">Submit</button>
      </form>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="container page-section rich-page">
      <h1>Oops — this page is not in the gallery.</h1>
      <Link to="/" className="primary-button">Return home</Link>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>
          <h3>KalaVerse</h3>
          <p>Discovering the living art of India.</p>
        </div>
        <div className="footer-links">
          <Link to="/explore">Explore</Link>
          <Link to="/ai-assistant">AI Assistant</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

function ArtCard({ art, isFavorite, onToggleFavorite }) {
  return (
    <article className="art-card">
      <div className="image-wrap">
        <img src={art.image} alt={art.name} />
        <button className="favorite-button" onClick={() => onToggleFavorite(art.slug)} aria-label={`Favorite ${art.name}`}>
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
      <div className="card-body">
        <div className="card-head">
          <div>
            <h3>{art.name}</h3>
            <span>{art.region}</span>
          </div>
          <span className="tag">{art.category}</span>
        </div>
        <p>{art.description}</p>
        <div className="card-footer">
          <span>{art.difficulty}</span>
          <Link to={`/art/${art.slug}`} className="primary-button small">Learn more</Link>
        </div>
      </div>
    </article>
  );
}

function renderMarkdown(text = '') {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br />')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/^(.*)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p><strong/g, '<p><strong')
    .replace(/<\/strong><\/p>/g, '</strong>');
}

export default App;
