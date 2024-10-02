import { title } from "@/components/primitives";

export default function FeedbackPage() {
  return (
    <div className="text-center p-4">
      <h1 className="tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9">Feedback</h1>
      <iframe
        src="https://tally.so/embed/3EDr7L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        style={{ border: "none" }}
      />
    </div>
  );
}
