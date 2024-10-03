import { classNames } from "@/utils/appearence";

type CardProps = {
  children: React.ReactNode;
  classes?: { card?: string };
};

function Card({ children, classes }: CardProps) {
  return (
    <div className={classNames("bg-white p-4 shadow-md", classes?.card)}>
      {children}
    </div>
  );
}

export default Card;
