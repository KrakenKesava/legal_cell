import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        placeholder="Search Case No, Recipient"
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
