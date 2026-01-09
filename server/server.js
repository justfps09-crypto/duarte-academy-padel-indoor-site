import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reservasRoutes from './routes/reservas.js';
import contactosRoutes from './routes/contactos.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://duarte-gym.netlify.app', 'https://www.duarte-gym.pt']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API Duarte Gym — Padel Academy',
    versao: '1.0.0',
    status: 'Online',
    endpoints: {
      reservas: '/api/reservas',
      contactos: '/api/contactos',
      horarios: '/api/reservas/horarios-disponiveis'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/reservas', reservasRoutes);
app.use('/api/contactos', contactosRoutes);

app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    erro: 'Endpoint não encontrado'
  });
});

app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).json({
    sucesso: false,
    erro: 'Erro interno do servidor'
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Servidor a correr em http://localhost:${PORT}`);
  console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`\n📚 Endpoints disponíveis:`);
  console.log(`   GET  /`);
  console.log(`   GET  /api/health`);
  console.log(`   POST /api/reservas`);
  console.log(`   GET  /api/reservas`);
  console.log(`   GET  /api/reservas/horarios-disponiveis`);
  console.log(`   POST /api/contactos`);
  console.log(`   GET  /api/contactos\n`);
});

export default app;
