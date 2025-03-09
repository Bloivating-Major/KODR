import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js'; // user routes
import homeRoutes from './routes/home.routes.js'; // home routes



const app = express();

// Middleware for logging requests

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', homeRoutes);
app.use('/users', userRoutes);

export default app;