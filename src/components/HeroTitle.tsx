import { useEffect, useState } from "react";

interface HeroTitleProps {
    title: string;
    subtitle: string;
}

function HeroTitle({ title, subtitle }: HeroTitleProps) {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    useEffect(() => {
        (async function () {
            const response = await fetch("/api/employeequeryhandler");
            const data = await response.json();
            setName(data.name);
            setAge(parseInt(data.age) ?? -1);
        })();
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}

export default HeroTitle;