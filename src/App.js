import React, { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome. I am here to support you in your healing journey. How are you feeling today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Thank you for sharing that with me. Remember to breathe and be kind to yourself as we explore this together.' 
      }]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#d4af37', minHeight: '100vh', padding: '20px', fontFamily: 'serif' }}>
      <header style={{ textAlign: 'center', borderBottom: '1px solid #d4af37', paddingBottom: '20px', marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold', letterSpacing: '2px', fontSize: '24px' }}>ATOMIC SILENCE</div>
        <p style={{ fontStyle: 'italic', color: '#fff' }}>The Sacred Space for Emotional Rebuilding</p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#111', borderRadius: '15px', padding: '20px', boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' }}>
        <h2 style={{ textAlign: 'center', color: '#d4af37', fontSize: '1.2rem' }}>💬 Healing Conversations with your AI Counselor</h2>
        
        <div style={{ height: '300px', overflowY: 'auto', marginBottom: '20px', padding: '10px', border: '1px solid #333', borderRadius: '10px' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ marginBottom: '15px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
              <span style={{ backgroundColor: msg.role === 'user' ? '#d4af37' : '#222', color: msg.role === 'user' ? '#000' : '#fff', padding: '8px 12px', borderRadius: '10px', display: 'inline-block', maxWidth: '80% '}}>
                {msg.content}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none' }}
            placeholder="Share what is on your heart..."
          />
          <button onClick={handleSend} style={{ backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
            SEND
          </button>
        </div>
      </div>
      
      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', color: '#666' }}>
        Part of the Atomic Silence Healing Protocol
      </footer>
    </div>
  );
};

export default App;