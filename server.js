import app from './app.js';
import {config} from "dotenv";

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
