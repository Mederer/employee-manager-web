interface HeroTitleProps {
    title: string;
    subtitle: string;
}

function HeroTitle({ title, subtitle }: HeroTitleProps) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
}

export default HeroTitle;