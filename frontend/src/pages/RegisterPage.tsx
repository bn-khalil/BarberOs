import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/AuthService";
import Button from "../components/Button";
import logo from "../assets/main-logo.png"

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
    <section className="grid text-center min-h-screen items-center p-8 bg-main-second text-txt-col">
      <div className="mx-auto max-w-[24rem] w-full">
        <div className="flex flex-col items-center w-full">
            <img className="w-45 h-auto" src={logo} alt="BarberOs Logo" />
            <p className=" mt-2 mb-2 font-normal text-md">
              Create an account and Join our BarberOs today
            </p>
          </div>
        <p className="mb-5 mt-2 text-red-400 font-normal text-md">
          {message}
        </p>
        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              placeholder="first name"
              className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
              required
            />
          </div>

		 <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              placeholder="first name"
              className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="tel"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              placeholder="06 0000-0000"
              className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <Button type="submit" label={loading == false?"Register": "Waiting..."} className="w-full"/>
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <button 
              type="button"
              onClick={() => navigate("/login")}
              className="font-bold hover:underline cursor-pointer text-gold"
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}