export default function Portfolio({ params }: any) {
  console.log('params', params);

  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      <h1>You are now visiting project portfolio</h1>
    </div>
  );
}
