import { useTypewriter } from "react-simple-typewriter";
const TypeScript = () => {
  const [text] = useTypewriter({
    words: [
      "Drive Your Dreams Today!",
      "Your Next Car Awaits You.",
    ],
    loop: 0,
  });
  return (
    <div className="h-14 text-center text-2xl lg:text-4xl font-bold py-10 ">
      Explore Cars:{" "}
      <span className="text-2xl lg:text-4xl text-red-500 font-bold">{text}</span>
    </div>
  );
};

export default TypeScript;
