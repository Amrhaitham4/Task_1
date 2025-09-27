import express from 'express';
import morgan from 'morgan';
import perkRoutes from './routes/perks.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/perks', perkRoutes);
//app.listen(4000, () => console.log('Server running on port 4000'));\\


// Not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

export default app;
