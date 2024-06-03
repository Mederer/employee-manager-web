import HeroTitle from "./HeroTitle";

function HomeScreen() {
    return (
        <div className="mx-auto hover:scale-105 transition-transform">
            <HeroTitle title="Employee Manager" subtitle="Manage your employees with ease" />
            <div className="text-center mt-4">"Recommended by experts"</div>
            <div>Hi Seb</div>
        </div>
    );
}

export default HomeScreen;