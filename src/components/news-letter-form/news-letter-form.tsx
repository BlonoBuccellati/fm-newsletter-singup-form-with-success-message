"use client";
import Image from "next/image";
import { IconList } from "@/assets";
import { Button } from "@/components/ui/button";

import InputEmailWithLabel from "@/components/news-letter-form/input-email-with-label";

const Title = () => {
  return <h1 className="typo-header">Stay updated!</h1>;
};

const DescriptionItem = ({ message }: { message: string }) => {
  return (
    <li className="flex gap-200">
      <IconList />
      <p>{message}</p>
    </li>
  );
};
const NewsLetterDescription = () => {
  return (
    <div className="space-y-300">
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="space-y-100">
        <DescriptionItem message="Product discovery and building what matters" />
        <DescriptionItem message="Measuring to ensure updates are a success" />
        <DescriptionItem message="And much more!" />
      </ul>
    </div>
  );
};

const Form = () => {
  return (
    <div className="tablet:space-y-200 tablet:pb-0 space-y-300 pt-200 pb-400">
      <InputEmailWithLabel />
      <Button>Subscribe to monthly newsletter</Button>
    </div>
  );
};
const NewsLetterForm = () => {
  //  sing up form
  return (
    <form className="tablet:p-500 tablet:rounded-2xl desktop:flex desktop:flex-row-reverse desktop:max-w-fit desktop:p-400 desktop:gap-800 desktop:space-y-0 relative mx-auto max-w-[608px] space-y-500 bg-white">
      <picture>
        <source
          media="(min-width:1440px)"
          srcSet="assets/illustration-sign-up-desktop.svg"
        />
        <Image
          width={40}
          height={40}
          alt=""
          src="assets/illustration-sign-up-mobile.svg"
          className="tablet:rounded-2xl tablet:object-fill desktop:mb-0 mx-auto mb-500 w-full object-cover"
        />
      </picture>
      {/* content */}
      <div className="tablet:max-w-full desktop:w-[70%] desktop:max-w-[376px] desktop:h-auto desktop:my-auto mx-auto max-w-[90%] space-y-300">
        <Title />
        <NewsLetterDescription />
        <Form />
      </div>
    </form>
  );
};

export default NewsLetterForm;
