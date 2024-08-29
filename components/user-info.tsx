import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: String;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  <Card className="w-">
    <CardHeader>
      <p className="text-2xl font-semibold text-center">{label}</p>
    </CardHeader>
    <CardContent></CardContent>
  </Card>;
};
