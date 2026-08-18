export default function Logo({ size }: { size?: number }) {
  return (
    <div className={`flex ${size ? "h-" + size : "h-250"} aspect-square gap-2 p-5`}>
      <span className="w-[calc(33.333%-1rem)] card"></span>
      <div className="flex flex-col items-center justify-between w-[calc(33.333%-1rem)] pt-[5%] gap-4">
        <span className="w-[calc(80%-1rem)] aspect-square rotate-45 card"></span>
        <span className="w-full h-[calc(66.666%-1rem)] card"></span>
      </div>
      <span className="w-[calc(33.333%-1rem)] card"></span>
    </div>
  )
}
