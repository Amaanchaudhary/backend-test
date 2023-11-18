import UserModals from "../modals/User.modals.js"

export const Register = async (req, res) => {
    // res.send("Hello from register");
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) return res.status(500).json({ success: false, message: "All fields are mandatory" })

        const user = new UserModals({
            name,
            email,
            password
        })

        await user.save()

        return res.status(201).json({ success: true, message: "Registration Successfull", user })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const Login = async (req, res) => {
    // res.send("hello from login")
    try {
        const { email, password } = req.body

        if (!email || !password) return res.status(400).json({ success: false, message: "All Fields are mandatory" });

        const user = await UserModals.findOne({ email })

        if (!user) return res.status(400).json({ success: false, message: "Email not matched" });

        if (user.password == password) {
            return res.status(200).json({ success: true, messsage: "login Succcessfull", user })
        }
        else {
            return res.status(401).json({ success: false, messsage: "password not match"})
        }
    }catch (error) {
    res.status(400).json({ success: false, message: error.message })
}
}