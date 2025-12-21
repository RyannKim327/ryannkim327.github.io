import Card from "./../components/card";

export default function Screen() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Card className="flex flex-col">
          <span className="text-sm">Greetings I am</span>
          <span className="text-2xl">Ryann Kim Sesgundo</span>
        </Card>
      </div>
    </div>
  );
}
