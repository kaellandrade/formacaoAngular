import express, { Request, Response } from 'express';
import cors from 'cors';
import webpush, { PushSubscription } from 'web-push';

const app = express();
const PORT = process.env.PORT || 3000;

// TODO: criar env para isso (calma, sei que isso não deve ser commitado em projetos reais)
const VAPID_PUBLIC_KEY = 'BMexNJTVBkBXv--ln5ocfldslhyXzj0CY5hrp1MJjEZ0_cY6XH0hgk2F9kLLS-1tYnqOamNRtv_RAwXylF7Htn8';
const VAPID_PRIVATE_KEY = 'mZJajsyo0AkIB-B8d8FvlmxxnvBnFqdICjAY_EmJO1Y';

webpush.setVapidDetails('mailto:mikael.java@gmail.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

app.use(cors());
app.use(express.json());

const subscriptions: PushSubscription[] = [];
app.post('/subscribe', (req: Request, res: Response) => {

  const subscription = req.body;
  subscriptions.push(subscription);

  res.status(201).json({});
});

app.post('/send-notification', async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const notifications = subscriptions.map(subscription =>
    webpush.sendNotification(subscription, JSON.stringify({ title, body }))
  );

  try {
    await Promise.all(notifications);
    res.status(200).json({ message: 'Notifiçãoes enviadas com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar notificações: ', error);
    res.status(500).json({ error: 'Falha ao enviar notificação' });
  }

});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});