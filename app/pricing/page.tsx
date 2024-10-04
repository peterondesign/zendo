"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";


export default function PricingPage() {
  return (
    <>
      <h1 className={title()}>Pricing</h1>
      <div className="mt-10 flex flex-col md:flex-row justify-center items-stretch gap-6">

        {/* Free Pricing Card */}
        <Card className="p-2 w-full md:w-80 shadow-lg h-full">
          <CardHeader className="text-center text-lg font-semibold">Free (without creating an account)
          </CardHeader>
          <CardBody>
            <ul className="list-disc ml-6 mb-4">
              <li>Prioritize tasks</li>
              <li>Ads</li> 	
              <li>Limited tasks (20 max)</li> 	
              <li>Break tasks down into substasks</li>
              <li>Break tasks down with AI</li>
              <li>Access without creating an account</li>
            </ul>
            <div className="text-center">
              <a href="/">
                <Button color="primary" variant="bordered">
                  Start for Free
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>

        {/* Lifetime User Pricing Card */}
        <Card className="p-2 w-full md:w-80 shadow-lg border-primary h-full">
          <CardHeader className="text-center text-lg font-semibold">Lifetime User (with account)</CardHeader>
          <CardBody>
            <ul className="list-disc ml-6 mb-4">
              <li>All free features +</li>
              <li>No ads</li>
              <li>Unlimited tasks</li> 	
              <li>Sync on all your devices (mobile app, desktop app, tablet, chrome extension)</li>
              <li>Archive tasks</li>
              <li>Export as PDF</li>
              <li>Access to all upcoming features forever</li>
            </ul>
            <div className="text-center">
              <a className="text-cyan-600 underline" href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl" target="_blank" rel="noopener noreferrer">
                <Button color="primary" variant="solid">
                  Buy for $20
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
      <br></br>
        <br></br>
        All the amazing features will work on all your devices (browser, desktop app, phone, tablet, etc.), and it will cost $8 every month (if you don't get the lifetime deal now). If you want any new features, vote here:{" "}
        <a className="text-cyan-600 underline" href="/feedback" target="_blank" rel="noopener noreferrer">
          https://tally.so/r/3EDr7L
        </a>
    </>
  );
}
