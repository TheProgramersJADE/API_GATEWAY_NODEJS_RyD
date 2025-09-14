class AuthController {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authApiUrl = process.env.AUTH_API_URL; // URL de la API de autenticación de .NET
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const response = await this.httpClient.post(`${this.authApiUrl}/login`, { username, password });
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response ? error.response.status : 500).json({ message: error.message });
        }
    }

    async register(req, res) {
        try {
            const { username, password } = req.body;
            const response = await this.httpClient.post(`${this.authApiUrl}/register`, { username, password });
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response ? error.response.status : 500).json({ message: error.message });
        }
    }
}

export default AuthController;