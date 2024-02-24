import { config } from "dotenv";
const result = config();
if (result.error) {
    throw result.error;
}
export default{
   host: process.env.DB_HOST || "",
   database: process.env.DB_NAME  || "",
   user: process.env.DB_USER || "",
   password: process.env.DB_PASSWORD || "",
};

