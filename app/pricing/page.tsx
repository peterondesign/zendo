import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <p className="mt-10">
        Support my app by getting a lifetime deal for $20, use this link:{" "}
        <a className="text-cyan-600 underline" href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl" target="_blank" rel="noopener noreferrer">
          https://buy.stripe.com/6oE4iHeaX4P85hK4gl
        </a>
        . 
        
        <br></br>
        <br></br>
        All the amazing features will work on all your devices (browser, desktop app, phone, tablet, etc.), and it will cost $8 every month (if you don't get the lifetime deal now). If you want any new features, vote here:{" "}
        <a className="text-cyan-600 underline" href="/feedback" target="_blank" rel="noopener noreferrer">
          https://tally.so/r/3EDr7L
        </a>
        .
      </p>
    </div>
  );
}
