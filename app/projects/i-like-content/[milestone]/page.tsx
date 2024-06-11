
export default function Page({ params }: { params: { milestone: string } }) {
    return (
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-white">Milestone {params.milestone}</h1>
      </div>
    );
  }
