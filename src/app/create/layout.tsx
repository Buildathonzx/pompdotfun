import Header from "@/components/Header";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#141118] text-white">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
