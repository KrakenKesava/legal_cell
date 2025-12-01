import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function Filters({ onFilterChange, onClear }) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [caseType, setCaseType] = useState([]);
  const [status, setStatus] = useState([]);

  // 🔥 Dynamic filtering: Runs automatically on ANY filter change
  useEffect(() => {
    onFilterChange({
      dateFrom,
      dateTo,
      caseType,
      status
    });
  }, [dateFrom, dateTo, caseType, status]);

  const toggle = (val, setter, current) => {
    if (current.includes(val)) setter(current.filter((x) => x !== val));
    else setter([...current, val]);
  };

  const clearAll = () => {
    setDateFrom("");
    setDateTo("");
    setCaseType([]);
    setStatus([]);
    onClear();
  };

  return (
    <Card className="p-4 space-y-4">

      <Button className="w-full">Add Case</Button>

      {/* Date Range */}
      <div>
        <p className="font-semibold text-sm">Date Filing</p>

        <Input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="mt-2"
        />

        <Input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="mt-3"
        />
      </div>

      <Separator />

      {/* Case Type */}
      <p className="font-semibold text-sm">Case Type</p>

      <div className="space-y-2">
        {["AO", "WP"].map((type) => (
          <label className="flex items-center gap-2 cursor-pointer" key={type}>
            <Checkbox
              checked={caseType.includes(type)}
              onCheckedChange={() => toggle(type, setCaseType, caseType)}
            />
            {type}
          </label>
        ))}
      </div>

      <Separator />

      {/* Status Filter */}
      <p className="font-semibold text-sm">Case Status</p>

      <div className="space-y-2">
        {["Pending", "Disposed", "Dismissed"].map((s) => (
          <label className="flex items-center gap-2 cursor-pointer" key={s}>
            <Checkbox
              checked={status.includes(s)}
              onCheckedChange={() => toggle(s, setStatus, status)}
            />
            {s}
          </label>
        ))}
      </div>

      {/* Optional Clear All link */}
      <Button variant="outline" onClick={clearAll} className="w-full mt-4">
        Reset Filters
      </Button>

    </Card>
  );
}
