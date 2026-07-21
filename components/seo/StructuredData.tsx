import {
  type JsonLdValue,
  serializeStructuredData,
} from "@/lib/structured-data";

type StructuredDataProps = Readonly<{
  id: string;
  data: JsonLdValue;
}>;

export default function StructuredData({
  id,
  data,
}: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeStructuredData(data),
      }}
    />
  );
}
