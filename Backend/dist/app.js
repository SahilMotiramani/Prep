"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// Connect to MongoDB
mongoose_1.default.connect('mongodb+srv://shivpratikhande2017:FHtSBYVTlt01ZZJb@ecom.rbqx7.mongodb.net/')
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error("failed to connect", err));
// Use routes
app.use('/auth', authRoutes_1.default);
app.use('/user', userRoutes_1.default);
app.use("/admin", adminRoutes_1.default);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
