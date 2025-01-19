import {useForm} from "@mantine/form";
import {ToDoFormValues} from "../../../types/ToDoFormValues.ts";

export function useToDoForm()
{
    const form = useForm<ToDoFormValues>({
        mode: 'uncontrolled',
        initialValues: {
            title: '',
            content: '',
            done: false,
        },

        validate: {
            title: (value: string)=>{
                if(value.length<3){
                    return 'Title must be at least 3 characters long.';
                }
            },
            content: (value: string)=>{
                if(value.length<10){
                    return 'Content must be at least 10 characters long.';
                }
            }
        },
    });
    return form;
}