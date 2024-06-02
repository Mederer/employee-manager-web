import HeroTitle from "./HeroTitle";

function HomeScreen() {
    return (
        <div className="mx-auto group">
            <HeroTitle title="Employee Manager" subtitle="Manage your employees with ease" />
            <div className="text-center mt-4 group-hover:scale-105 transition-transform"><q>Recommended by experts</q><cite>- someone probably</cite></div>
        </div>
    );
}

export default HomeScreen;