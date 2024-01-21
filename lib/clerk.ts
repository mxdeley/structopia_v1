import { currentUser } from "@clerk/nextjs";

export default function ClerkUser() {
  const user = currentUser();
}
