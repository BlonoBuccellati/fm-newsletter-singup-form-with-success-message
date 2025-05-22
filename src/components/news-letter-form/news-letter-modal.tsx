import { IconSuccess } from "@/assets";
import { Button } from "../ui/button";

interface NewsLetterModalProps {
  address: string;
  onClose: () => void;
}
const NewsLetterModal = ({ address, onClose }: NewsLetterModalProps) => {
  return (
    // コンテナ
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-700">
      {/* modalカード */}
      <section className="tablet:max-w-[504px] tablet:rounded-[36px] w-full bg-white">
        <div className="tablet:justify-normal tablet:min-h-auto tablet:p-800 tablet:space-y-400 tablet:max-w-full mx-auto flex min-h-screen max-w-[90%] flex-col justify-between pt-[149px] pb-800">
          <div className="space-y-400">
            <IconSuccess />
            <h1 className="typo-header">
              Thanks for <br />
              subscribing!
            </h1>
            <p className="max-w-[72%]">
              A confirmation email has been sent to <b>{address}</b>. Please
              open it and click the button inside to confirm your subscription
            </p>
          </div>
          <Button onClick={onClose}>Dismiss message</Button>
        </div>
      </section>
    </div>
  );
};

export default NewsLetterModal;
