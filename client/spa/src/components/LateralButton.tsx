import { Link } from "react-router-dom";

interface LateralButtonProps {
  text: string;
  icon: React.ReactNode;
  path: string;
  active: boolean;
}
export function LateralButton(props: LateralButtonProps) {
  return (
    <>
      <Link
        to={props.path}
        className={
          props.active ? "text-purple font-bold" : "text-black dark:text-white"
        }
      >
        {props.icon}
        {props.text}
      </Link>
    </>
  );
}
