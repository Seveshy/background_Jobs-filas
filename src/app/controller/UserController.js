export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name, 
            email,
            password,
        };

        // Adicionar job RegistratiobMail na fila

        return res.json(user);
    }
}