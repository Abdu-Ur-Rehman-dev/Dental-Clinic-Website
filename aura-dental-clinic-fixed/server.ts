import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini SDK with User-Agent telemetry
  const apiKey = process.env.GEMINI_API_KEY || '';
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API Route: AI Smile Consultation & Custom Treatment Planner
  app.post('/api/ai/smile-consultation', async (req, res) => {
    try {
      const { goals, concerns, budgetPreference, timeline } = req.body;

      const prompt = `You are the Lead Cosmetic Dentist and Director of Aesthetic Architecture at AURA DENTAL CLINIC (a ultra-luxury boutique dental institute).
A patient is requesting a personalized virtual smile design assessment.

Patient Profile:
- Aesthetic Goals: ${goals || 'Radiant white smile, natural symmetry'}
- Dental Concerns: ${concerns || 'Minor discoloration, desire alignment'}
- Investment Level: ${budgetPreference || 'Signature Luxury'}
- Preferred Timeline: ${timeline || '1-3 months'}

Generate a sophisticated, highly encouraging personalized aesthetic roadmap in valid JSON format only:
{
  "personalizedGreeting": "Warm greeting addressing their aesthetic aspirations",
  "recommendedTreatments": [
    {
      "name": "Treatment Name (e.g. Master Porcelain Veneers, Laser Teeth Whitening, Digital Invisible Aligners)",
      "description": "Short elegant description of why this fits their goals",
      "timeframe": "Estimated duration e.g. 2 visits / 2 weeks"
    }
  ],
  "estimatedInvestmentRange": "$X,XXX - $XX,XXX USD",
  "expectedOutcomes": [
    "Outcome bullet 1",
    "Outcome bullet 2",
    "Outcome bullet 3"
  ],
  "expertClinicalNote": "Thoughtful, reassuring advice on maintaining ceramic vitality and oral wellness"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        },
      });

      const jsonText = response.text || '{}';
      const parsed = JSON.parse(jsonText);

      return res.json({
        success: true,
        consultation: parsed,
      });
    } catch (error: any) {
      console.error('AI Consultation error:', error);
      return res.status(500).json({
        success: false,
        error: 'Unable to generate AI consultation at this time.',
      });
    }
  });

  // API Route: Real-time Appointment Handler
  app.post('/api/appointments', (req, res) => {
    const { name, phone, email, date, service, message } = req.body;

    if (!name || !phone || !email || !date || !service) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Phone, Email, Date, Service).',
      });
    }

    const referenceCode = 'AURA-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    return res.json({
      success: true,
      message: 'Your VIP appointment request has been reserved.',
      referenceCode,
      appointment: {
        name,
        email,
        phone,
        date,
        service,
        message: message || 'None',
        status: 'Confirmed - Concierge Call Pending',
      },
    });
  });

  // Vite Integration for Dev / Static serving for Prod
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`Luxury Dental Clinic Server listening on port ${PORT}`);
  });
}

startServer();
