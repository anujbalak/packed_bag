import { reset } from "../db/populate.js"

const resetDefaults = async (req, res) => {
    await reset();
    res.redirect('/')
}

export { resetDefaults}