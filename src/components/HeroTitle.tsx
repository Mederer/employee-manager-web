interface HeroTitleProps {
    title: string;
    subtitle: string;
}

function HeroTitle({ title, subtitle }: HeroTitleProps) {
    return (

        <div className="text-center">
            <h1 className="text-xl font-semibold">{title}</h1>
            <h2 className="text-sm">{subtitle}</h2>
        </div>
    );
}

export default HeroTitle;