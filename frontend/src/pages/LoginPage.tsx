import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { loginUser } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import logo from "../assets/main-logo.png"

export default function LoginPage() {
    const {login} = useAuth();
    const [passwordShown, setPasswordShown] = useState(false)
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        phone_number: "",
        password: ""
    });
    const navigate = useNavigate();
    const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
        const response = await loginUser(user);
        if (response) {
            login(response?.data?.token);
            navigate(location.state?.from.pathname || "/");
        }
    } catch (error: any) {
        if (error.response && error.response.data) {
            const serverMessage = error.response.data.message;
            setMessage(serverMessage || "Login failed");
        } else 
            setMessage("Error connection to Server")

    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="grid text-center min-h-screen items-center p-8 bg-main-second text-txt-col">
      <div className="mx-auto max-w-[24rem] w-full ">
         
        <div className="flex flex-col items-center w-full">
          <img className="w-45 h-auto" src={logo} alt="BarberOs Logo" />
          
          <p className="mb-5  font-normal text-sm">
            Enter your email and password to sign in
          </p>
        </div>
        <p className="mb- text-red-400 font-normal text-sm">
          {message}
        </p>
        <form onSubmit={handleSubmit} className="text-left space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              value={user.phone_number}
              onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
              placeholder="06 0000-0000"
              className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-medium ">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value})}
              placeholder="********"
              className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordShown(!passwordShown)}
              className="absolute right-3 top-10 hover:text-gold cursor-pointer"
            >
              {passwordShown ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
            </button>
          </div>

          <Button type="submit" label={loading == false?"Sign In": "Waiting..."} className="w-full"/>

          <div className="flex justify-end mt-2">
            <a href="#" className="text-sm font-medium hover:underline">Forgot password?</a>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-2 border border-slate-300 py-3  hover:bg-slate-50 hover:text-main-second transition-all cursor-pointer">
            <img src="https://www.material-tailwind.com/logos/logo-google.png" alt="google" className="h-5 w-5" />
            <span className="font-medium text-sm">Sign in with Google</span>
          </button>

          <p className="text-center text-sm  mt-6">
            Not registered? <a href="/register" className="text-gold font-bold hover:underline">Create account</a>
          </p>
        </form>
      </div>
    </section>
  );
}