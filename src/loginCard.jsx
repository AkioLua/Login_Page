import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkData = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setEmailError(!/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/.test(email));
    setPasswordError(!/.{8,}/.test(password));

    if (!emailError && !passwordError && checkbox) {
      navigate("/dashboard");
      console.log("Submited - all good");
    } else {
      console.log("Error on submit");
    }
  };

  return (
    <form
      className="min-h-screen flex items-center justify-center "
      onSubmit={checkData}
    >
      <div class="w-full max-w-sm bg-lime-200 rounded-xl shadow-lg md:w-1/2 transform duration-700 hover:translate-x-2 hover:-translate-y-2 pointer-events-none">
        <Card className="w-full max-w-sm transform duration-700 hover:-translate-x-3 hover:translate-y-3 pointer-events-auto">
          <CardHeader>
            <CardTitle>Connectez-vous à votre compte</CardTitle>
            <CardDescription>
              Entrez votre e-mail ci-dessous pour vous connecter à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className={`${emailError && "text-destructive"}`}
                >
                  Email
                </Label>
                <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${
                      emailError
                        ? "border-0 focus-visible:ring-0 shadow-none border-destructive focus-visible:ring-destructive"
                        : "border-0 focus-visible:ring-0 shadow-none"
                    }`}
                    required
                  />
                </div>

                {emailError && (
                  <p className="text-[0.8rem] text-destructive">
                    L'adresse e-mail est incorrecte.
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className={`${passwordError && "text-destructive"}`}
                  >
                    Mots de passe
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
                <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                  <LockIcon className="h-5 w-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="abcde34!"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${
                      passwordError
                        ? "border-0 focus-visible:ring-0 shadow-none border-destructive focus-visible:ring-destructive"
                        : "border-0 focus-visible:ring-0 shadow-none"
                    }`}
                  />
                  <button onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <p
                  className={`text-[0.8rem] ${
                    !passwordError
                      ? "text-muted-foreground"
                      : "text-destructive"
                  }`}
                >
                  Le mot de passe doit contenir au moins 8 caractères
                </p>
              </div>
              <div className="flex items-center space-x-2 duration-700 hover:scale-102">
                <Checkbox
                  checked={checkbox}
                  onCheckedChange={setCheckbox}
                  id="terms"
                  className={
                    submitted && !checkbox
                      ? "border-destructive ring-1 ring-destructive"
                      : ""
                  }
                />
                <label
                  htmlFor="terms"
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    submitted && !checkbox ? "text-destructive" : ""
                  }`}
                >
                  J'accepte les conditions générales d'utilisation.
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full duration-700 hover:scale-105"
            >
              Se connecter
            </Button>
            <Button
              variant="outline"
              className="w-full duration-700 hover:scale-105"
              onClick={() =>
                window.open("https://accounts.google.com/", "_blank")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Connexion avec Google
            </Button>
            <Button className="w-full underline" variant="link">
              Créer un compte
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}
