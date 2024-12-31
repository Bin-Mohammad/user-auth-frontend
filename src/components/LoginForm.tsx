
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { NavLink } from "react-router"
import { logInSchema } from '../zodSchemas/schema'
import { ChangeEvent, useState } from "react"
import { z, ZodError } from 'zod'
import { makeErrorString } from "@/lib/utils"
import { toast, Bounce } from "react-toastify"
import { useNavigate } from "react-router"
import { PasswordInput } from "./ui/PasswordInput"
import { LoadingButton } from "./LoadingButton"


const LoginForm = () => {

    const navigate = useNavigate();

    // form initial values 
    const initialValues = {
        email: '',
        password: ''
    };
    const [formData, setFormData] = useState({
        ...initialValues
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

    // onSubmit handler
    async function handleFormSubmit(e: any) {
        setIsLoading(true);
        try {

            // prevent default behaviour
            e.preventDefault();

            // clone state data
            const logInData = { ...formData };

            // validate logInData
            const parsedLoginData = logInSchema.parse(logInData);


            // In Case Of successfull validation, send data to server
            const { success, message, data, errorDetails } = await sendLoginData(parsedLoginData);

            // check for errors
            if (!success && errorDetails) {
                // show error toast
                toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setErrors({ ...errorDetails });
                return;
            }

            // When user have successfully logged in 
            // jwt will be stored in httpOnly cookies via backend itself

            // Clear Errors
            setErrors({});

            // show success toast
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })

            toast.info('Redirecting in 3s to homepage...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })

            // redirecting to homepage
            setTimeout(() => {
                navigate('/'); // Redirect after 3 seconds
            }, 3000); // 3000ms = 3s

        } catch (error) {
            // handle errors here
            if (error instanceof ZodError) {
                setIsLoading(false);
                const fieldErrors = error.flatten().fieldErrors;
                const stringErrors = makeErrorString(fieldErrors);
                setErrors({ ...stringErrors });

                // show error toast
                toast.error('Validation Errors', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                return;
            }
            setIsLoading(false)
            // console.log('error is:'. error.message);
            toast.error('Something went wrong. Please try again!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;

        }
    }



    // onChange handler
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    type LoginData = z.infer<typeof logInSchema>

    // function to send login data to backend
    async function sendLoginData(logInData: LoginData) {
        try {

            const loginUrl = import.meta.env.VITE_LOGIN_URL;
            if (!loginUrl) {
                throw new Error("LOGIN_URL is not defined in environment variables.");
            }
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(logInData),
            });
            const data = await response.json();

            // check for existance
            console.log('data: ', data);

            return data;


        } catch (error) {
            // handle errors gracefully
            console.log('error:', error.message);
        }
    }


    return (
        <section className="section auth-section bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <div className="login mt-10">
                    <Card className="mx-auto max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-3xl">Login</CardTitle>
                            <CardDescription>Enter your information to login to your account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="me@example.com"
                                    required
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={(e) => handleOnChange(e)} />
                                <span className="error-text">{errors.email}</span>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                {/* <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => handleOnChange(e)}
                                    autoComplete="off"
                                /> */}
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required={true}
                                    value={formData.password}
                                    onChange={(e) => handleOnChange(e)}
                                    autoComplete="off"
                                />
                                <span className="error-text">{errors.password}</span>
                            </div>
                            <LoadingButton className="w-full" onClick={(e) => handleFormSubmit(e)} loading={isLoading}>
                                {isLoading ? "Submitting" : 'Login'}
                            </LoadingButton>
                        </CardContent>
                        <CardFooter className="text-center">
                            <NavLink to={'/signup'} className='hover:underline'>Don't have account? Create new one</NavLink>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default LoginForm