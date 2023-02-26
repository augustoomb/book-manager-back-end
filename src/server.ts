import app from './app';

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
const server = app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`))

export default server;
