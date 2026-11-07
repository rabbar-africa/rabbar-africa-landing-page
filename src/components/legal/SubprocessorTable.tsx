import { SUBPROCESSORS } from "@/data/legal";
import { LegalTable } from "./LegalDocument";

/** The provider list, shared by the Privacy Policy and Data Processing Terms. */
export function SubprocessorTable() {
  return (
    <LegalTable
      head={["Provider", "What it does for us", "Where"]}
      rows={SUBPROCESSORS.map((p) => [
        <strong key="name">{p.name}</strong>,
        p.purpose,
        p.location,
      ])}
    />
  );
}
