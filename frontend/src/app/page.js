import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="p-6 max-w-sm w-full">
        <CardContent>
          <h1 className="text-xl font-bold mb-4 bg-red-500  text-red-500">
            Hello Tailwind v4 + shadcn/ui
          </h1>
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </main>
  );
}
