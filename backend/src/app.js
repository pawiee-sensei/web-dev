import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import recordRoutes from './routes/record.routes.js';
import nameRoutes from './routes/name.routes.js';
import personRoutes from './routes/person.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/names', nameRoutes);
app.use('/api/persons', personRoutes);

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
