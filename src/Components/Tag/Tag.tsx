import "./Tag.css";

type tagProps = {
  label: string;
};

export default function Tag({ label }: tagProps) {
  return <div className="tag">{label}</div>;
}
