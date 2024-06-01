import { useEffect, useState } from "react";
import { useGetEmployeesQuery } from "../services/employeeManagerApi";

interface HeroTitleProps {
    title: string;
    subtitle: string;
}

function HeroTitle({ title, subtitle }: HeroTitleProps) {
    const { data } = useGetEmployeesQuery();


    return (

        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{data?.toString() ?? "Loading"}</p>
        </div>
    );
}

export default HeroTitle;