"use client";

import { useSearchParams } from "next/navigation";
import RequestForm, {
  RequestFormInitialValues,
} from "@/components/forms/RequestForm";
import { Lang } from "@/lib/i18n";

const KEYS: (keyof RequestFormInitialValues)[] = [
  "name",
  "email",
  "phone",
  "city",
  "direction",
  "vacation_type",
  "dates",
  "date_flexibility",
  "duration",
  "departure",
  "adults",
  "children_ages",
  "hotel_stars",
  "meal_plan",
  "budget",
  "comment",
];

export default function RequestFormClient({ lang }: { lang: Lang }) {
  const params = useSearchParams();
  const initialValues: RequestFormInitialValues = {};
  for (const key of KEYS) {
    const v = params.get(key);
    if (v) initialValues[key] = v;
  }
  return <RequestForm lang={lang} initialValues={initialValues} />;
}
