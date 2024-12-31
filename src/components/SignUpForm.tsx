
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from "react-router"
import { PasswordInput } from "./ui/PasswordInput"
import { useState, ChangeEvent } from "react"
import { toast, Bounce } from "react-toastify"
import { signUpSchema } from "@/zodSchemas/schema"
import { z, ZodError } from "zod"
import { makeErrorString } from "@/lib/utils"
import { LoadingButton } from "./LoadingButton"

const SignUpForm = () => {


    const navigate = useNavigate();


    // initial values
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({ ...initialValues });
    const [isLoading, setIsLoading] = useState(false);


    // onSubmit handler
    async function handleFormSubmit(e: any) {
        setIsLoading(true);
        try {

            // prevent default behaviour
            e.preventDefault();

            // clone state data
            const signupData = { ...formData };

            // validate signupData
            const parsedsignupData = signUpSchema.parse(signupData);


            // show success toast
            toast.success('Form Submitted Successfully!')
            return;
            // In Case Of successfull validation, send data to server
            const { success, message, data, errorDetails } = await sendSignupData(parsedsignupData);

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

    // handle onChange event
    // onChange handler
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    type LoginData = z.infer<typeof signUpSchema>

    // function to send login data to backend
    async function sendSignupData(logInData: LoginData) {
        try {
            const signupURL = import.meta.env.VITE_LOGIN_URL;
            if (!signupURL) {
                throw new Error("SIGNUP_URL is not defined in environment variables.");
            }
            const response = await fetch(signupURL, {
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
        <section className="section auth-section">
            <div className="container mx-auto">
                <div className="register">
                    <Card className="mx-auto max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-3xl">Register</CardTitle>
                            <CardDescription>Enter your information to create an account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="full-name">Username</Label>
                                <Input id="username" placeholder="John Doe" required
                                    value={formData.username}
                                    onChange={(e) => handleOnChange(e)}
                                />
                                <span className="error-text">{errors.username}</span>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="me@example.com" required
                                    value={formData.email}
                                    onChange={(e) => handleOnChange(e)}
                                />
                                <span className="error-text">{errors.email}</span>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput id="password" required placeholder='ae@4a!34'
                                    value={formData.password}
                                    onChange={(e) => handleOnChange(e)}
                                />
                                <span className="error-text">{errors.password}</span>
                            </div>
                            {/* <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <PasswordInput id="confirm-password" type="password" required/>
                            </div> */}
                            <LoadingButton
                                loading={isLoading}
                                onClick={(e) => handleFormSubmit(e)}
                                className="w-full">
                                {isLoading ? "Submitting..." : 'Register'}
                            </LoadingButton>
                        </CardContent>
                        <CardFooter className="text-center">
                            <NavLink to={'/login'} className='hover:underline'>Already have an account? Login here</NavLink>
                        </CardFooter>
                    </Card>
                </div>

            </div>
        </section>

    )
}

export default SignUpForm