import HeroTitle from "./HeroTitle";

function HomeScreen() {
  return (
    <div className="mx-auto transition-transform hover:scale-105">
      <HeroTitle
        title="Employee Manager"
        subtitle="Manage your employees with ease"
      />
      <div className="mt-4 text-center">"Recommended by experts"</div>
    </div>
  );
}

export default HomeScreen;
