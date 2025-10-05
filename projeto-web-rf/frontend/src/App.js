import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.on('rf_event', (event) => {
      setEvents((prev) => [event, ...prev]);
    });
    return () => socket.off('rf_event');
  }, []);

  return (
    <div>
      <h1>Dashboard RF</h1>
      <ul>
        {events.map((ev, idx) => (
          <li key={idx}>
            Emissor: {ev.emitterId} | Data/Hora: {new Date(ev.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
