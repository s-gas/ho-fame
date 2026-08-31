interface RecipeProps {
  name: string;
};

const Recipe = ({ name }: RecipeProps) => {
  return (
    <div className="border-b py-2">
      <h2>{name}</h2>
    </div>
  );
};

export default Recipe;
