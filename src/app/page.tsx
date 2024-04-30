

function MyButton({ title }: { title: string }) {
  return (
    <button
      className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      Button
    </button>
    
  )
}

export default function Home() {
  return (
    <div>
      <h1 className="text-8xl">Hello World</h1>
      <MyButton title="I'm a button" />
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
    </div>
  );
}

