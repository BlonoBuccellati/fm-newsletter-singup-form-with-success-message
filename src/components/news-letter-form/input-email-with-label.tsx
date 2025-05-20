import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputEmailWithLabel = () => {
  return (
    <div className="space-y-100">
      <Label htmlFor="email" className="typo-3-regular block">
        Email address
      </Label>
      {/* focus:outline-noneでデフォルトの枠を消す */}
      <Input
        type="email"
        id="email"
        placeholder="email@company.com"
        className="placeholder-gray border-gray w-full rounded-lg border px-300 py-200 focus:border-blue-800 focus:outline-none"
      />
    </div>
  );
};

export default InputEmailWithLabel;
