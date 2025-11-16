import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      {/* Small */}
      <Button title="Small" className="px-3 py-1.5 text-sm rounded-sm" />

      {/* Medium */}
      <Button title="Medium" className="px-4 py-2 rounded-md" />

      {/* Large */}

      <Button title="Large" className="px-6 py-3 text-lg rounded-full" />
    </div>
  );
};
export default Landing;
