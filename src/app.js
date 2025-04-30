import  express  from "express";
import morgan from "morgan";
//Routes
import productRoutes from "./routes/products.routes"
import cors from 'cors';

const app= express();
//configuraciones
app.set("port",4000);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//Rputes
app.use("/api/products",productRoutes);

export default app;


