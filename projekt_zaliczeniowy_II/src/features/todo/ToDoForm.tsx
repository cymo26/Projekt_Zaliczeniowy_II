import {ToDoFormValues} from "../../types/ToDoFormValues.ts";
import {useToDoForm} from "./hooks/useToDoForm.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";

export function ToDoForm()
{
    const form = useToDoForm();
    const handleSubmit = (vals: ToDoFormValues)=>{
        console.log(vals);
    }
    return (
        <Paper shadow="xs" p="xl" >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                <TextInput
                    withAsterisk
                    label="Task Title"
                    placeholder="The right place for your task title!"
                    {...form.getInputProps('title')}
                />
                <Textarea
                    label="Task Description"
                    placeholder="The right place for your task description!"
                    {...form.getInputProps('content')}
                />
                <Checkbox
                    label="Is it done?"
                    {...form.getInputProps('done', {type: 'checkbox'})}
                />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
                </Stack>
            </form>
        </Paper>
    )
}