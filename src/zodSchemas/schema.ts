import { isValid, z } from 'zod'

export const signUpSchema = z.object({
    username: z.string().refine(
        (value) => {
            if (!value) {
                return { isValid: false, message: 'Username is required' }
            }
            if (value.length < 3) {
                return { isValid: false, message: 'username must be at least 3 characters' }
            }
            if (value.length > 25) {
                return { isValid: false, message: 'username must be at most 25 characters' }
            }
        },
        {
            message: (ctx) => ctx.message || 'Invalid Usrname'
        }
    ),
    // min(4, {message : 'username must be at least 4 characters'}),
    email: z.string().refine((value) => value !== '', { message: 'email is required' }),
    // .email({message : 'invalid email'}),
    password: z.string()
        .min(6, { message: 'passsword must be at least 6 characters long' })
        .max(25, { message: 'password must be at most 25 characters long' })
        .regex(/[A-Z]/, { message: 'password must contain at least one capital letter' })
        .regex(/[a-z]/, { message: 'password must contain at least one smaller letter' })
        .regex(/\d/, { message: 'password must contain at least one digit' })
        .regex(/[!@#$%^&*()_+?><]/, { message: 'password must contain at least one special character' })
});

export const logInSchema = z.object({
    email: z.string().email({ message: 'Invalid Email' }),
    password: z.string().min(6, { message: 'Invalid Password' })
});

// handle schemsa here with refinement()
// handle something here


/*

nikaha-talaq
str = nikha
str.


*/
// Fatawa Form Validations
export const chapterSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "name must be at least 3 characters long" }),
    title: z
        .string()
        .min(3, { message: "title must be at least three characters long" }),
    description: z
        .string()
        .min(10, { message: "description must be at least 30 characters long" })
        .max(300, { message: "description must be at most 300 characters long" }),
    isPublished: z.boolean(),
});

export type CreateChapter = z.infer<typeof chapterSchema>;