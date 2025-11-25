import { ThemeToggle } from "@/main/components/ui/theme-toggle";
import { Toaster } from "@/shadcn/components/ui/sonner";
import { GlobalProvider } from "@/main/wrappers/global-provider";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      {children}
      <ThemeToggleButton />
      <Toaster position="top-right" />
    </GlobalProvider>
  );
};

const ThemeToggleButton = () => {
  return (
    <div className="fixed bottom-16 right-10 flex justify-center">
      <ThemeToggle />
    </div>
  );
};
