import { AppRoutes } from "@/src/models/enums/AppRoutes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(AppRoutes.LOGIN);
}
