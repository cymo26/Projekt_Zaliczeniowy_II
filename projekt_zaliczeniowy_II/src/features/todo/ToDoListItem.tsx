import {ToDoType} from "../../types/ToDoType.ts";
import {Card, Image, Text} from "@mantine/core";
import {FC, memo} from "react";

interface ToDoListItemProps
{
    item: ToDoType;
}

export const ToDoListItem: FC<ToDoListItemProps> = memo(({item}) =>{
    return (
        <Card shadow="sm">
            <Card.Section>
                <Image
                    src="https://placehold.co/400x200"
                    h={200}
                    alt={"No way!"}
                />
            </Card.Section>
            <Text fw={500} size ="lg" mt ="md">
                {item.title}
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>
        </Card>
    )
});