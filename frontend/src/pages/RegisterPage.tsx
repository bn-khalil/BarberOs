import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/AuthService";

export default function RegisterPage() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
	
	setLoading(true);

	const user = {
		first_name: first_name,
		last_name: last_name,
		phone_number: phone_number,
		password: password,
		role: "CUSTOMER",
	}

    try {
      const response = await registerUser(user);
      if (response) {
          localStorage.setItem("token", response.data.token);
          navigate("/login");
          setMessage("");
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
        <h3 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h3>
        <p className="mb-8 text-slate-600 font-normal text-lg">
          Join our Barber Shop today
        </p>
        <p className="mb-5 text-red-400 font-normal text-md">
          {message}
        </p>
        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-900">First Name</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              placeholder="first name"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

		 <div>
            <label className="block mb-2 text-sm font-medium text-slate-900">Last Name</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              placeholder="first name"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-900">Your Email</label>
            <input
              type="tel"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              placeholder="06 0000-0000"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

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

          <button onSubmit={handleSubmit} className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-all cursor-pointer shadow-lg shadow-slate-200">
			{loading ? "Waiting..." : "Sign Up"}
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