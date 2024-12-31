import { ChangeEvent, FormEvent, SetStateAction, useEffect, useState } from 'react';
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { LoadingButton } from '@/components/LoadingButton'
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { chapterSchema, CreateChapter } from '@/zodSchemas/schema';
import { setErrorMap, ZodError } from 'zod';
import { generateNameHandler, makeErrorString } from '@/lib/utils';
import { Chapter } from '../ChaptersList';
import { getRegisteredUrl } from '@/hooks/useQuery';


interface ChapterFormProps {
    isModalOpen: boolean,
    setIsModalOpen: (prevState: boolean) => void,
    updateChapter?: Chapter
}

const ChapterForm = ({ isModalOpen, setIsModalOpen, updateChapter }: ChapterFormProps) => {


    if (!updateChapter) {
        console.log('namespace: Create Chapter');
    }


    // handle new chapter creation
    const initialValues = {
        name: '',
        title: '',
        description: '',
        isPublished: true,
    };

    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);





    // formSubmit handler
    function handleFormSubmit(e: any) {
        // prevent default behaviour
        e.preventDefault();

        try {
            // generate nameHandler
            const nameHandler = generateNameHandler(formData.name);
            // get Form Data and validate
            const data = { ...formData, name: nameHandler };

            // apply validation here
            const parsedData = chapterSchema.parse(data);

            // setErrors to null:
            setFormErrors({});





            // send data to backedn
            return;


        } catch (error) {
            // handle errors gracefully
            if (error instanceof ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                console.log('fieldErrors:', fieldErrors);
                const stringErrors = makeErrorString(fieldErrors);
                setFormErrors(stringErrors);
            }
        }
    }

    // onChange Handler
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {

        // get required things
        let { name, value } = e.target;

        // update state
        setFormData({
            ...formData,
            [name]: value
        });

    }

    // onCheckedChange Handler for shadcn checkboxes
    function handleOnCheckedChange(isChecked: boolean) {
        // update state 
        setFormData({
            ...formData,
            isPublished: isChecked
        });
    }


    // create new chapter handler
    async function name(chapter : CreateChapter) {
        try {
            const apiUrl = getRegisteredUrl({url : 'GET_ALL_CHAPTERS'});
            // const response = await fetch();
        } catch (error) {
            
        }
    }







    // handle useEffect
    useEffect(() => {
        if (updateChapter) {
            console.log('namespace: Update Chapter');
            const { title, name, description, isPublished } = updateChapter;
            const data = {
                title, name, description, isPublished
            };
            // ger neccesary things from updateChapter

            // update state with updateChapter data
            setFormData({ ...updateChapter });
            return;
        }
    }, [updateChapter]);
    return (
        <div className='chapter-form'>
            <Dialog open={isModalOpen} >
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setIsModalOpen(true)}>Create</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{updateChapter ? `Update ${updateChapter.title}` : "Create New Chapter"} </DialogTitle>
                        <DialogDescription>
                            Fill details for {updateChapter ? `${updateChapter.title}` : "new"} chapter and save it to the database.
                        </DialogDescription>
                    </DialogHeader>
                    <Separator />
                    <div className="space-y-4" >
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" dir='rtl' name='title' placeholder="باب کا نام جیسا کہ، عبادات" required
                                value={formData.title}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <span className="error-text">{formErrors.title}</span>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" dir='rtl' name='description' placeholder="باب کے متعلق مختصر سی تفصیل۔۔۔" required
                                value={formData.description}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <span className="error-text">{formErrors.description}</span>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name_handler">Name Handler</Label>
                            <Input id="name_handler" name='name' placeholder="ibadaat" required
                                value={formData.name}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <span className="error-text">{formErrors.name}</span>
                        </div>
                        <div className="flex items-center space-x-2 space-y-2 gap-2 ">
                            <Checkbox
                                id="isPublished"
                                name='isPublished'
                                checked={formData.isPublished}
                                onCheckedChange={handleOnCheckedChange}
                            />
                            <Label
                                htmlFor="isPublished"
                                className='m-0'
                                style={{ margin: 0 }}>
                                Publish Chapter Now
                            </Label>
                        </div>
                    </div>
                    <DialogFooter className='mt-4 '>
                        <div className='flex items-center justify-end gap-4'>

                            <Button variant={'outline'} onClick={() => setIsModalOpen(false)}>Cancel</Button>
                            <LoadingButton
                                loading={isFormSubmitting}
                                onClick={(e) => handleFormSubmit(e)}
                                className="w-full">
                                {isFormSubmitting ?
                                    (
                                        <div className="loader h-8 w-8 animate-spin text-white dark:text-gray-400"></div>
                                    ) : (
                                        `${updateChapter ? "Update" : "Create"}`
                                    )
                                }
                            </LoadingButton>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default ChapterForm