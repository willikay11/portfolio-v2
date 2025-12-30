import React, { Suspense } from "react";
import { Assistant } from "@/components/assistant/Assistant";

export default function Chat() {
  return (
    <Suspense fallback={<div />}> 
      <Assistant />
    </Suspense>
  );
}