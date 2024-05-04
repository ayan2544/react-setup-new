import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="font-bold md:hidden  text-sky-600 dark:text-white ">
          React E-commerce
        </h1>
        <Button className="px-8  bg-orange-950">Click</Button>
        <Switch />
      </div>
    </div>
  );
};

export default Home;
