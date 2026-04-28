import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Deep Dive: نجمع البيانات لإرسالها للـ NestJS لاحقاً
    console.log("Registering with:", { fullName, email, password });
  };

  return (
    <section className="grid text-center min-h-screen items-center p-8 bg-slate-50">
      <div className="mx-auto max-w-[24rem] w-full">
        <h3 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h3>
        <p className="mb-8 text-slate-600 font-normal text-lg">
          Join our Barber Shop today
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-5">
          {/* Full Name Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-900">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-900">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@mail.com"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-slate-900">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-all cursor-pointer shadow-lg shadow-slate-200">
            Sign Up
          </button>

          <p className="text-center text-sm text-slate-600 mt-6">
            Already have an account?{" "}
            <button 
              type="button"
              onClick={() => navigate("/login")}
              className="font-bold text-slate-900 hover:underline cursor-pointer"
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}