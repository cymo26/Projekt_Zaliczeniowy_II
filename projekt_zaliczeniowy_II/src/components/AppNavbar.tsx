
import {IconList, IconPencil} from "@tabler/icons-react";
import {NavLink} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export function AppNavbar() {
    const navigate = useNavigate();
    return (
        <div>
            <NavLink onClick={()=>navigate("/todo")}
                href="#required-for-focus"
                label="Lista ToDo"
                leftSection={<IconList size={16} stroke={1.5} />}
            />
            <NavLink onClick={()=>navigate("/todo/new")}
                href="#required-for-focus"
                label="Dodaj do listy"
                leftSection={<IconPencil size={16} stroke={1.5} />}
            />

        </div>
    )
}