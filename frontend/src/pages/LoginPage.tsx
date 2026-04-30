import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { loginUser } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
    <section className="grid text-center min-h-screen items-center p-8 bg-slate-50">
      <div className="mx-auto max-w-[24rem] w-full">
        <h3 className="text-3xl font-bold text-slate-800 mb-2">Sign In</h3>
        <p className="mb-12 text-slate-600 font-normal text-lg">
          Enter your email and password to sign in
        </p>
        <p className="mb-5 text-red-400 font-normal text-md">
          {
            message
          }
        </p>
        <form onSubmit={handleSubmit} className="text-left space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-900">Your Phone Number</label>
            <input
              type="tel"
              value={user.phone_number}
              onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
              placeholder="06 0000-0000"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-slate-900">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value})}
              placeholder="********"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordShown(!passwordShown)}
              className="absolute right-3 top-[38px] text-slate-500 hover:text-slate-700 cursor-pointer"
            >
              {passwordShown ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
            </button>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-all cursor-pointer">
            {loading == false?"Sign In": "Waiting..."}
          </button>

          <div className="flex justify-end mt-2">
            <a href="#" className="text-sm font-medium text-slate-700 hover:underline">Forgot password?</a>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-2 border border-slate-300 py-3 rounded-lg hover:bg-slate-50 transition-all cursor-pointer">
            <img src="https://www.material-tailwind.com/logos/logo-google.png" alt="google" className="h-5 w-5" />
            <span className="text-slate-700 font-medium">Sign in with Google</span>
          </button>

          <p className="text-center text-sm text-slate-600 mt-6">
            Not registered? <a href="/register" className="font-bold text-slate-900 hover:underline">Create account</a>
          </p>
        </form>
      </div>
    </section>
  );
}