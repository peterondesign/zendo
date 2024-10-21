"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, Button, Chip, Divider } from "@nextui-org/react";
import { CircleCheck } from "lucide-react"; // Import a checkmark icon

export default function PricingPage() {
  return (
    <div className="w-full">
      <h1 className={title()}>Pricing</h1>
      <div className="mt-10 flex flex-col md:flex-row items-stretch gap-8" style={{ justifyContent: "space-between" }}>
        {/* Free Pricing Card */}
        <Card className="p-8 w-full shadow-lg h-full flex flex-col h-auto">
          <CardHeader className="p-0 text-left text-lg font-semibold">Free (without creating an account)</CardHeader>
          {/* Price fixed at the top */}
          <div className="text-left text-4xl font-bold mb-4">$0</div>
          <CardBody className="flex-grow">
          <hr/>
          <ul className="list-none ml-0 mb-4 space-y-2 mt-4">
              <li><CircleCheck size={18} className="inline mr-2"/> Tasks stored only on a single device</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Delete tasks (no archive)</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Break tasks into subtasks manually or automatically with AI</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Access without creating an account</li>
            </ul>
          </CardBody>
          {/* Action button fixed at the bottom */}
          <div className="flex justify-center mt-auto mb-4">
            <a href="/" className="w-full block">
              <Button className="w-full" color="primary" variant="bordered">Get Started</Button>
            </a>
          </div>
        </Card>

        {/* Lifetime User Pricing Card */}
        <Card className="p-8 w-full shadow-lg border-primary h-full flex flex-col">
          <CardHeader className="p-0 text-left text-lg font-semibold">
            Lifetime User (with account)
            <Chip color="success" variant="flat" className="ml-2">Most Popular</Chip>
          </CardHeader>
          {/* Price fixed at the top */}
          <div className="text-left text-4xl font-bold mb-4">$20 (Lifetime Deal)</div>
          <CardBody className="flex-grow">
            <hr/>
            <ul className="list-none ml-0 mb-4 space-y-2 mt-4">
              <li><CircleCheck size={18} className="inline mr-2"/> Sync on all your devices (mobile, desktop)</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Archive tasks</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Break tasks into subtasks manually or automatically with AI</li>
              <li><CircleCheck size={18} className="inline mr-2"/> AI suggestions of what task to prioritize</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Export as PDF</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Daily streak for completing one task</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Log task beginning and completion, with detailed analytics</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Mac, iPhone, Android, Windows apps, Chrome Extension (Coming Soon)</li>
              <li><CircleCheck size={18} className="inline mr-2"/> Access to all upcoming features forever</li>
            </ul>
          </CardBody>
          {/* Action button fixed at the bottom */}
          <div className="flex justify-center mt-auto mb-4">
            <a className="w-full block" href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl" target="_blank" rel="noopener noreferrer">
              <Button className="w-full block" color="primary" variant="solid">Buy for $20 <span className="line-through ml-2">$40</span></Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

