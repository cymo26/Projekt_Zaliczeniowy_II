import {useSearchParams} from "react-router-dom";
//import React from "react";
import { SimpleGrid} from "@mantine/core";
import {ToDoType} from "../../types/ToDoType.ts";
import {ToDoListItem} from "./ToDoListItem.tsx";

const data: ToDoType[] = [
    {
        id: 0,
        title: "Zrobić Zakupy",
        content: "Mleko, jajka, chleb",
        done: false
    },
    {
        id: 1,
        title: "Zrobić pranie",
        content: "Prać na drugiej stronie w 40C",
        done: false
    },
    {
        id: 2,
        title: "Zrobić obiad",
        content: "Makaron z sosem",
        done: true
    },
    {
        id: 3,
        title: "Zaliczyć przedmiot",
        content: "byłoby miło...",
        done: false
    }
]

export function ToDoList()
{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("key"));
    return (
        <div style={{width:'100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <ToDoListItem key = {item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}