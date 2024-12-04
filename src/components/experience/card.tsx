const names = [
    { name: "SeeBiz", id: 1 },
    { name: "Ekkel Ai", id: 2 },
    { name: "Burnt Brains", id: 3 },
    { name: "4xPortal", id: 4 },
    { name: "Michael", id: 5 },
  ];
  
  export default function Card () {
    return (
      <div className="flex items-center gap-[18rem] overflow-hidden px-6">
        {names.map((item) => (
          <div
            key={item.id}
            className="p-36 bg-blue-500 rounded-lg text-2xl text-white"
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };